import { visit } from "unist-util-visit"
import GithubSlugger from "github-slugger"
import { escapeHTML } from "@quartz-community/utils"

/**
 * Quartz 5 transformer plugin that fixes a gap in obsidian-flavored-markdown:
 * section/page transclusion (embedding another note, or one of its headings,
 * inline) is only recognised for Obsidian's wikilink embed syntax
 * (`![[Note#Heading]]`) - see the `wikilinkEmbedMarker`/`embedded` handling
 * in that plugin's markdown tokenizer. This vault instead writes embeds
 * using standard Markdown image syntax pointing at a `.md` file, with an
 * optional `#heading` fragment - `![alt](Note.md#Heading)` - which Obsidian
 * itself also treats as an embed whenever wikilinks are turned off in its
 * settings. Left alone, that syntax just parses as a normal `image` node:
 * remark-rehype turns it into `<img src="....md#heading">`, which the
 * browser then renders as a broken image icon, since a note isn't
 * something an `<img>` tag can load.
 *
 * This plugin re-visits every remaining `image` node - after
 * obsidian-flavored-markdown has already claimed wikilink embeds, so there's
 * no double-handling - and, if its URL points at a `.md` file, replaces it
 * with the same `<blockquote class="transclude" data-block="#slug">` shape
 * that plugin emits for wikilink embeds. That shape is what
 * `renderTranscludes` (quartz/components/renderPage.tsx) looks for at
 * render time to splice the target heading's (or whole page's) rendered
 * HTML in, once crawl-links has resolved the embedded `<a href>` into a
 * slug exactly as it would for any other relative link - the same
 * resolution already visible working correctly on the broken `<img src>`
 * this replaces. No file path resolution needs reimplementing here; only
 * the heading fragment does, since it must match the target heading's
 * *rendered* id, which is produced by slugifying the heading text the same
 * way GitHub-flavored-markdown heading ids are (`github-slugger`, the same
 * library, used fresh per embed to avoid its cross-call dedupe numbering
 * leaking between unrelated embeds in one file).
 *
 * Left alone: an `image` node whose URL doesn't end in `.md` - i.e. every
 * ordinary image - is untouched.
 */
const MarkdownEmbedTransclusion = () => {
  return {
    name: "MarkdownEmbedTransclusion",
    markdownPlugins() {
      return [
        () => (tree) => {
          visit(tree, "image", (node, index, parent) => {
            if (index == null || !parent) return

            const url = node.url ?? ""
            const hashIdx = url.indexOf("#")
            const rawPath = hashIdx === -1 ? url : url.slice(0, hashIdx)
            const rawAnchor = hashIdx === -1 ? "" : url.slice(hashIdx + 1)

            let decodedPath
            try {
              decodedPath = decodeURIComponent(rawPath)
            } catch {
              decodedPath = rawPath
            }
            if (!decodedPath.toLowerCase().endsWith(".md")) return

            let decodedAnchor = ""
            if (rawAnchor) {
              try {
                decodedAnchor = decodeURIComponent(rawAnchor)
              } catch {
                decodedAnchor = rawAnchor
              }
            }

            const isBlockRef = decodedAnchor.startsWith("^")
            const blockSlug = decodedAnchor
              ? `#${isBlockRef ? decodedAnchor : new GithubSlugger().slug(decodedAnchor)}`
              : ""

            const href = escapeHTML(url)
            const label = escapeHTML(`${decodedPath}${blockSlug}`)
            parent.children[index] = {
              type: "html",
              value: `<blockquote class="transclude" data-block="${blockSlug}"><a href="${href}" class="transclude-inner">Transclude of ${label}</a></blockquote>`,
            }
          })
        },
      ]
    },
  }
}

export { MarkdownEmbedTransclusion }
export default MarkdownEmbedTransclusion
