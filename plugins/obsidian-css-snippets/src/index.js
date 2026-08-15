import fs from "fs"
import path from "path"

const defaultOptions = {
  // Relative to the content directory (ctx.argv.directory) — same layout Obsidian itself uses.
  snippetsDir: ".obsidian/snippets",
  appearanceConfigPath: ".obsidian/appearance.json",
  // Only include snippets Obsidian's appearance.json lists as enabled, same as what
  // you'd actually see rendered in the Obsidian app. Set to false to include every
  // .css file in snippetsDir regardless of enabled state.
  respectEnabledList: true,
}

/** Returns the Set of enabled snippet names (without ".css"), or null if it can't be
 *  determined (missing/unreadable/malformed appearance.json) — null means "include everything". */
function readEnabledSnippets(contentDir, appearanceConfigPath) {
  try {
    const raw = fs.readFileSync(path.join(contentDir, appearanceConfigPath), "utf-8")
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed.enabledCssSnippets)) {
      return new Set(parsed.enabledCssSnippets)
    }
  } catch {
    // No appearance.json (or it's unreadable/malformed) — fall back to "include everything".
  }
  return null
}

/**
 * Quartz 5 transformer plugin with no markdown/HTML processing of its own — it only
 * implements `externalResources`, the hook Quartz uses to collect extra CSS/JS/head
 * content site-wide (see quartz/plugins/index.ts:getStaticResourcesFromPlugins).
 * Whatever it returns here is merged into the `StaticResources` object that every
 * page (real and virtual) is rendered with, so this runs once per build and applies
 * everywhere — no manual copy-pasting into quartz.layout.ts, and nothing written to
 * content/.
 *
 * The returned CSS is `inline: true`, which componentResources.ts automatically
 * extracts into a single hashed, cached stylesheet shared by every page (not
 * duplicated inline into each HTML file) — see quartz/plugins/emitters/componentResources.ts.
 *
 * Note: some Obsidian snippets style Obsidian's *editor* UI (CodeMirror classes,
 * `.workspace-*`, etc.) rather than rendered note content, and simply won't match
 * anything in Quartz's HTML — that's expected, not a bug here.
 *
 * Also note: the dev server's file watcher ignores `.obsidian` (it's in
 * `ignorePatterns`, like any other Quartz build), so editing a snippet while
 * `quartz build --serve` is running needs a manual restart to pick up.
 */
const ObsidianCssSnippets = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "ObsidianCssSnippets",
    // Quartz's config loader only accepts a "transformer"-category plugin whose
    // instance has textTransform/markdownPlugins/htmlPlugins (see validateCategory
    // in quartz/plugins/loader/config-loader.ts) — an externalResources-only
    // instance is silently rejected even though the type itself allows it. This
    // no-op satisfies that check without altering any file content; the built-in
    // @quartz-community/quartz-fonts plugin does the same thing for the same reason.
    textTransform(_ctx, src) {
      return src
    },
    externalResources(ctx) {
      const snippetsPath = path.join(ctx.argv.directory, opts.snippetsDir)
      if (!fs.existsSync(snippetsPath)) return {}

      const enabled = opts.respectEnabledList
        ? readEnabledSnippets(ctx.argv.directory, opts.appearanceConfigPath)
        : null

      const files = fs
        .readdirSync(snippetsPath)
        .filter((f) => f.toLowerCase().endsWith(".css"))
        .filter((f) => !enabled || enabled.has(f.replace(/\.css$/i, "")))
        .sort()

      if (files.length === 0) return {}

      const css = files.map((f) => {
        const content = fs.readFileSync(path.join(snippetsPath, f), "utf-8")
        return {
          content: `/* Obsidian snippet: ${f} */\n${content}`,
          inline: true,
        }
      })

      return { css }
    },
  }
}

export { ObsidianCssSnippets }
export default ObsidianCssSnippets
