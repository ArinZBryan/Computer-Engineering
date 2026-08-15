import { h } from "preact"
import { resolveRelative, slugifyFilePath } from "@quartz-community/utils"

/**
 * Preact body component for a PDF wrapper page. Embeds the raw PDF asset
 * (already copied to the output dir by the built-in `Assets` emitter) in an
 * <iframe class="pdf">, which reuses Quartz's existing embed styling
 * (see quartz/styles/base.scss, the same class the `![[file.pdf]]`
 * obsidian-flavored-markdown embed produces) plus a plain-link fallback for
 * browsers/devices that don't render PDFs inline.
 */
const PdfBody = (_opts) => {
  const Component = (props) => {
    const { fileData } = props
    const title = fileData.frontmatter?.title ?? fileData.pdfAssetSlug
    const href = resolveRelative(fileData.slug, fileData.pdfAssetSlug)

    return h("div", { class: "pdf-page" }, [
      h("iframe", { class: "pdf", src: href, title }),
      h("p", { class: "pdf-page-fallback" }, [
        "Can't see the preview? ",
        h("a", { href, target: "_blank", rel: "noopener noreferrer" }, "Open the PDF in a new tab ↗"),
      ]),
    ])
  }

  Component.displayName = "PdfBody"
  return Component
}

/**
 * Quartz 5 PageType plugin that gives every PDF under content/ its own page
 * — visible in the explorer, search, and content index — without writing
 * any markdown wrapper file to disk.
 *
 * How it fits into the build (see quartz/plugins/pageTypes/dispatcher.ts and
 * quartz/build.ts):
 *  - `generate()` returns a VirtualPage per PDF, built purely in memory.
 *  - PageTypeDispatcher merges these into the same content array every other
 *    emitter sees (ContentIndex, sitemap, RSS, the explorer's fetched JSON),
 *    so the wrapper shows up everywhere a normal page would.
 *  - The raw PDF itself is untouched: the built-in Assets emitter already
 *    copies it to `<slug>.pdf`, keeping it directly downloadable/embeddable.
 *    This plugin does not set `fileExtensions`, so that copy keeps happening
 *    exactly as before — we only add a clean-URL page (`<slug>`, no `.pdf`)
 *    that embeds/links to it.
 */
const PdfPage = () => ({
  name: "PdfPage",
  // Real PDF files never appear in the markdown `content` array the
  // dispatcher matches against (only .md files go through the transformer
  // pipeline), so this is never actually called — everything happens in
  // generate() below.
  match: () => false,
  generate({ content, ctx }) {
    const pdfFiles = ctx.allFiles.filter((fp) => fp.toLowerCase().endsWith(".pdf"))
    if (pdfFiles.length === 0) return []

    // Don't clobber a real page that happens to already own this slug
    // (e.g. both `paper.md` and `paper.pdf` exist side by side).
    const takenSlugs = new Set(content.map(([, file]) => file.data.slug))

    const virtualPages = []
    for (const filePath of pdfFiles) {
      const baseName = filePath.split("/").pop().replace(/\.pdf$/i, "")
      const slug = slugifyFilePath(filePath, true) // clean slug, extension stripped
      const assetSlug = slugifyFilePath(filePath) // keeps ".pdf" — matches the Assets emitter's output

      if (takenSlugs.has(slug)) {
        console.warn(
          `[PdfPage] Skipping "${filePath}": a page already exists at "${slug}"`,
        )
        continue
      }

      const frontmatter = { title: baseName, tags: [] }
      virtualPages.push({
        slug,
        title: baseName,
        data: {
          frontmatter,
          text: `PDF document: ${baseName}`,
          description: `PDF document: ${baseName}`,
          pdfAssetSlug: assetSlug,
        },
      })

      // quartz/plugins/pageTypes/dispatcher.ts builds `ctx.trie` from the
      // real markdown content BEFORE any page type's generate() runs (it's
      // needed to resolve folder hierarchy up front), so it never contains
      // pages generate() hands back here. That trie is what
      // @quartz-community/folder-page's FolderContent reads server-side to
      // render a folder's "pages in this folder" listing — without this,
      // PDF wrapper pages render fine on their own but never show up in
      // their parent folder's listing (Explorer/Search are unaffected: both
      // read the content index built in a later phase, after virtual pages
      // are merged in).
      //
      // FileTrieNode.add() is a plain incremental insert (see
      // quartz/util/fileTrie.ts) — safe to call after the trie's initial
      // construction, and it will find/reuse the folder node
      // trieFromAllFiles() already created rather than duplicating it. This
      // keeps folder listings correct without touching quartz core or
      // forking folder-page.
      ctx.trie?.add({ slug, filePath: assetSlug, frontmatter })
    }
    return virtualPages
  },
  layout: "pdf",
  body: PdfBody,
})

export { PdfPage, PdfBody }
export default PdfPage
