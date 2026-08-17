import { visit } from "unist-util-visit"

/**
 * Quartz 5 transformer plugin that fixes a false-positive in base.scss's
 * image-caption styling:
 *
 *   p > img + em {
 *     display: block;
 *     transform: translateY(-1rem);
 *   }
 *
 * That rule is meant for the "caption directly under an image" convention -
 * `![](img.png)*Caption*` with nothing between them - rendering as
 * `<p><img/><em>Caption</em></p>`, where it correctly turns the caption
 * into its own line snugged up under the image. But CSS's `+` adjacent-
 * sibling combinator only counts *element* siblings; it can't see the
 * prose text sitting between the image and emphasis in a paragraph like
 * `![float-right|300](img.png)Some words called *a term*, more words.`
 * (`<p><img/>Some words called <em>a term</em>, more words.</p>`) - so
 * that rule fires there too, wrongly kicking a random italic phrase out
 * onto its own translated-up line in the middle of a sentence.
 *
 * Distinguishing the two needs to know whether there was any text between
 * the image and the emphasis, which only mdast's paragraph.children array
 * can actually answer (a real gap shows up as its own text node at index
 * 1; a true immediate caption has the emphasis node itself at index 1).
 *
 * That alone isn't quite enough, though: `![](img.png)*Line Search* is a
 * generalised algorithm...` also has the emphasis immediately after the
 * image with nothing between them, but it's the *first phrase of a normal
 * sentence*, not a caption either - the rest of that same sentence follows
 * as more paragraph content afterward. A genuine caption is the paragraph's
 * only remaining content once the image is accounted for, so this also
 * requires the emphasis node to be the last child.
 *
 * This plugin marks only paragraphs matching both with a dedicated class so
 * base.scss can select on that instead of the ambiguous combinator.
 */
const ImageCaption = () => {
  return {
    name: "ImageCaption",
    markdownPlugins() {
      return [
        () => (tree) => {
          visit(tree, "paragraph", (node) => {
            const [first, second] = node.children
            if (first?.type !== "image" || second?.type !== "emphasis") return
            if (node.children.length !== 2) return

            second.data ??= {}
            second.data.hProperties = {
              ...second.data.hProperties,
              className: [...(second.data.hProperties?.className ?? []), "image-caption"],
            }
          })
        },
      ]
    },
  }
}

export { ImageCaption }
export default ImageCaption
