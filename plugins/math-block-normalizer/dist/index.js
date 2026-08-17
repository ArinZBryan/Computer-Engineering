// This plugin has no build step — it's hand-written plain ESM, so there's
// nothing to compile. This file exists only so Quartz's plugin installer
// (which checks for a `dist/` directory to decide whether to run `npm run
// build`) treats it as pre-built and skips straight to using it. The real
// source lives in ../src/index.js.
export * from "../src/index.js"
export { default } from "../src/index.js"
