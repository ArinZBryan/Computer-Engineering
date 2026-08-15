Notes for Southampton University Computer Engineering course

### Updating the online notes
To update the online notes, run the following commands
```pwsh
cd c:\users\arinb\OneDrive\Documents\Computer_Engineering\Notes
npm run quartz:sync
```

### Updating Quartz Version
This quartz-generated site applies several patches:
- Resizable markdown-style images
	- Resizable images are only supported on _wikilink_ style images by default. This type of image is incompatible with the CSS snippet used for embedding the `float: left`, `float: right` and `float: centre` CSS properties to select images, as it relies on using alt-text to add custom CSS classes to images without using HTML embeds
	- The patch used is from [here](https://github.com/iceprosurface/quartz-blog/commit/5900d5617e2bcf79745cc79104379f803f2a5735) and if one day, the [related issue](https://github.com/jackyzha0/quartz/issues/625) gets fixed/the patch gets merged, then this patch will be removed
	- The patch affects the following files:
		- `quartz.config.ts`
		- `ofm.ts`
	- This means that there is no guarantee that updating the quartz version will not break entirely. Thus, care should be taken to resolve any merge conflicts when pulling from upstream.
- Support of CSS Snippets. 
	- The _Obsidian-Style Markdown_ plugin does not have a method for supporting custom CSS snippets to inject into every page.
	- To support this, `quartz.layout.ts` is modified. In theory, as a configuration file change, this shouldn't change much, so it shouldn't result in many (if any) merge conflicts.
- Custom Markdown PDF Wrapper Generator
	- PDFs are by default made public, but only by URL. By running a custom pre-build script, we can generate markdown pages embedding the PDF before the main build to ensure that the PDFs are easily accessable
	- The patch affects the following files:
		- `scripts/pdf-wrappers.mjs`
		- `quartz.config.ts`
		- `.github/workflows/deploy.yaml`
		- `package.json`
	- This patch also replaces the following quartz commands:
		- `npx quartz build` -> `npm run quartz:build`
		- `npx quartz build --serve` -> `npm run quartz:dev`
		- `npx quartz sync` -> `npm run quartz:sync`


$$(\frac{t_d-t_n}{t_d}d_{13}+\frac{t_n}{t_d}d_{23})^2=(ad_{13}+bd_{23})^2<225$$
$$a^2d$$