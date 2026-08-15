import { visit } from "unist-util-visit"

// Identical to the regex @quartz-community/obsidian-flavored-markdown uses for
// `![[img.png|alt|width]]` wikilink embeds (see wikilinkImageEmbedRegex in its
// dist/index.js) — reused here so plain markdown images resize with exactly the
// same syntax/semantics: `alt`, `alt|width`, `alt|widthxheight`, `width`, or
// `widthxheight`, all optional and independently detected.
const sizeRegex = /^(?<alt>(?!^\d*x?\d*$).*?)?(\|?\s*?(?<width>\d+)(x(?<height>\d+))?)?$/

/**
 * Quartz 5 transformer plugin that fixes a gap in obsidian-flavored-markdown:
 * Obsidian's `alt|width` / `alt|widthxheight` image-resize syntax
 * (https://help.obsidian.md/embeds#Embed+an+image+in+a+note) is only applied
 * for wikilink embeds (`![[img.png|alt|width]]`) — see the
 * `wikilinkImageEmbedRegex` handling in that plugin's `markdownPlugins`. Plain
 * markdown images written as `![alt|width](img.png)` (which Obsidian itself
 * *does* resize) pass straight through unmodified: the `|width` suffix stays
 * as literal, un-parsed alt text and never becomes a `width`/`height`
 * attribute. That's invisible for CSS snippets keying off a substring of
 * `alt` (e.g. `img[alt*="float-right"]`, which still matches the raw
 * "float-right|300" string) but explains why the size itself never applies.
 *
 * This plugin re-parses `alt` on every remaining plain-markdown image node
 * with the same regex obsidian-flavored-markdown uses, and — if it finds a
 * size suffix — strips it from `alt` and sets `width`/`height` via
 * `data.hProperties`, the standard mdast-util-to-hast mechanism for adding
 * extra HTML attributes to a node (merged onto the `<img>` element's
 * properties during the markdown→HTML conversion, same mechanism
 * obsidian-flavored-markdown itself uses for wikilink embeds).
 *
 * Must run after obsidian-flavored-markdown (order 30 in quartz.config.yaml)
 * so wikilink-embedded images — which it has already converted to `image`
 * nodes with `data.hProperties.width` set (defaulting to `"auto"`) — are
 * correctly skipped rather than re-parsed.
 */
const ImageSizing = () => {
  return {
    name: "ImageSizing",
    markdownPlugins() {
      return [
        () => (tree) => {
          visit(tree, "image", (node) => {
            // Already handled (wikilink embed via obsidian-flavored-markdown, or a
            // previous pass) — hProperties.width is always set once claimed, even
            // to "auto", so this is a reliable "don't touch" marker.
            if (node.data?.hProperties?.width) return

            const match = sizeRegex.exec(node.alt ?? "")
            const width = match?.groups?.width
            if (!width) return

            const height = match?.groups?.height
            node.alt = match.groups.alt ?? ""
            node.data ??= {}
            node.data.hProperties = {
              ...node.data.hProperties,
              width,
              ...(height ? { height } : {}),
            }
          })
        },
      ]
    },
  }
}

export { ImageSizing }
export default ImageSizing
