// A math-flow (i.e. "$$...$$" display equation) is only recognised as such by
// remark-math when its opening and closing "$$" sit on different lines. Any
// "$$formula$$" written on a single line — the most common way this vault
// carries over equations from the Quartz 4 migration — is instead tokenized
// as *inline* math (mathText, not mathFlow), so the rendered mjx-container
// never gets MathJax's `display="true"` attribute and therefore never
// receives base.scss's centering rule
// (`mjx-container[jax="SVG"][display="true"] { text-align: center; ... }`).
//
// The fix has to happen on the raw markdown text, before remark-math's
// tokenizer ever sees it, since the block/inline distinction is baked into
// how micromark scans lines — no mdast/hast transform after the fact can
// undo an inline classification. This plugin rewrites every single-line
// "$$formula$$" onto its own three lines (opening "$$", formula, closing
// "$$"), matching the multi-line form that already renders correctly
// throughout this vault (e.g. Double Integrals.md), while leaving the
// content of every file on disk untouched — same technique
// obsidian-flavored-markdown itself uses (see its textTransform, which
// appends "\n> " after callout headers) to coerce correct block-level
// parsing via a raw-text rewrite.
//
// Deliberately left alone:
// - Fenced code blocks (```/~~~) — never touched, so example "$$" text in a
//   code sample is never rewritten.
// - Table rows (a line whose content, after any blockquote prefix, starts
//   with "|") — a table cell can't span multiple lines, so a lone
//   "$$formula$$" is the correct, only way to fit an equation in a cell.
//
// Handled:
// - Leading/trailing prose sharing the line with the equation is moved onto
//   its own line before/after the new block (e.g. "$$eq$$ more text" ->
//   "$$\neq\n$$\nmore text").
// - Multiple "$$...$$" pairs glued together on one line each become their
//   own consecutive block.
// - Blockquote/callout nesting ("> ", ">> ", etc.) is preserved by
//   re-prefixing every line the equation is split into.
const fenceRegex = /^\s*(```+|~~~+)/
const quotePrefixRegex = /^(\s*(?:>\s*)+)/
const mathPairRegex = /\$\$([^$\n]+?)\$\$/g

function splitSingleLineMath(line) {
  if (!line.includes("$$")) return line

  const prefixMatch = line.match(quotePrefixRegex)
  const prefix = prefixMatch ? prefixMatch[1] : ""
  const rest = line.slice(prefix.length)

  // Table row (possibly inside a blockquote) - a cell can't span lines, so a
  // single-line "$$...$$" is the only way to fit an equation in one; leave it.
  if (rest.trimStart().startsWith("|")) return line

  mathPairRegex.lastIndex = 0
  let match
  let lastIndex = 0
  let foundPair = false
  const segments = []
  while ((match = mathPairRegex.exec(rest)) !== null) {
    foundPair = true
    segments.push({ text: rest.slice(lastIndex, match.index) })
    segments.push({ math: match[1] })
    lastIndex = mathPairRegex.lastIndex
  }
  if (!foundPair) return line
  segments.push({ text: rest.slice(lastIndex) })

  const outLines = []
  for (const seg of segments) {
    if ("math" in seg) {
      outLines.push(prefix + "$$", prefix + seg.math.trim(), prefix + "$$")
    } else {
      const trimmed = seg.text.trim()
      if (trimmed) outLines.push(prefix + trimmed)
    }
  }
  return outLines.join("\n")
}

function normalizeSingleLineMathBlocks(src) {
  const lines = src.split(/\r\n|\n/)
  let inFence = false
  const out = new Array(lines.length)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (fenceRegex.test(line)) {
      inFence = !inFence
      out[i] = line
      continue
    }
    out[i] = inFence ? line : splitSingleLineMath(line)
  }
  return out.join("\n")
}

// A multi-line "$$" block's fences must each stand alone on their line (plus
// any blockquote ">" prefix) - exactly like a fenced code block's opening
// backticks can carry a language tag, but its closing backticks may carry
// nothing else. remark-math's opening fence tolerates trailing content as a
// "meta" string, but silently discards it - it's never merged back into the
// equation. Its closing fence is stricter still: content glued in front of
// it means the "$$" isn't recognised as a fence at all, so the block simply
// keeps consuming lines looking for a *later* bare "$$" to close on.
//
// Content in this vault very often glues an equation's first or last line
// directly onto its "$$" (e.g. "$$V_{m,n}=...=\begin{pmatrix}" /
// "\end{pmatrix}$$"), carried over from Quartz 4's more lenient math
// handling. For a glued opening this silently produces a truncated equation
// with no visible sign of a problem - unless the discarded content held a
// `\begin{...}` environment the rest of the block's `&`/`\\` separators
// depend on, which MathJax then rejects as "Misplaced &" outside any
// environment. For a glued closing, the block never closes where intended
// and instead swallows every line after it - headings, callouts, prose, any
// number of pages worth of content - as literal (and here always invalid)
// TeX, until some later bare "$$" happens to end it. Both failure modes are
// compounded by an unrelated MathJax/rehype-mathjax rendering bug: one
// broken equation corrupts the rendering of every equation *after* it on
// the same page, not just its own.
//
// Trailing content *after* an opening fence's "$$" that's followed by
// non-blank lines below it, and trailing content after a closing fence's
// "$$", are both handled correctly already and left alone here.
function splitGluedFences(src) {
  const lines = src.split(/\r\n|\n/)
  let inFence = false
  let inMath = false
  // The prefix captured from the block's *opening* fence - reused for any
  // line this function needs to inject (rather than that line's own
  // detected prefix), because a content line inside a blockquote-nested
  // block is allowed to lazily continue without repeating its own "> "
  // (CommonMark treats it as part of the blockquote regardless). Detecting
  // no prefix there isn't evidence the block left the blockquote - using
  // the opening's prefix keeps an injected fence line correctly nested.
  let mathPrefix = ""
  const out = []
  for (const line of lines) {
    if (fenceRegex.test(line)) {
      inFence = !inFence
      out.push(line)
      continue
    }
    if (inFence) {
      out.push(line)
      continue
    }

    const prefixMatch = line.match(quotePrefixRegex)
    const prefix = prefixMatch ? prefixMatch[1] : ""
    const rest = line.slice(prefix.length)

    if (!inMath) {
      if (rest.startsWith("$$")) {
        const afterFence = rest.slice(2)
        if (!afterFence.includes("$$") && afterFence.trim().length > 0) {
          // Opening fence with meta-string content glued on - move it onto
          // its own line so it becomes part of the equation instead of a
          // discarded meta string.
          out.push(prefix + "$$", prefix + afterFence)
        } else {
          out.push(line)
        }
        inMath = true
        mathPrefix = prefix
      } else {
        out.push(line)
      }
    } else {
      const fenceIndex = rest.indexOf("$$")
      if (fenceIndex === -1) {
        out.push(line)
      } else {
        const before = rest.slice(0, fenceIndex)
        if (before.trim().length > 0) {
          // Closing fence with content glued in front of it - move that
          // content onto its own preceding line so "$$" can stand alone
          // and actually be recognised as closing the block.
          out.push(mathPrefix + before.trimEnd(), mathPrefix + "$$" + rest.slice(fenceIndex + 2))
        } else {
          out.push(line)
        }
        inMath = false
      }
    }
  }
  return out.join("\n")
}

function normalizeMathBlocks(src) {
  return splitGluedFences(normalizeSingleLineMathBlocks(src))
}

const MathBlockNormalizer = () => {
  return {
    name: "MathBlockNormalizer",
    textTransform(_ctx, src) {
      return normalizeMathBlocks(src)
    },
  }
}

export { MathBlockNormalizer, normalizeSingleLineMathBlocks, splitGluedFences, normalizeMathBlocks }
export default MathBlockNormalizer
