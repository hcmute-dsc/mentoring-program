# HCMUTE DSC Mentoring Guide

An interactive map of the HCMUTE DSC mentoring program, built with React, TypeScript, and Vite.

## Run

```bash
npm install
npm run dev      # start the dev server
npm run build    # build for production into dist/
npm run preview  # serve the production build
```

## How to use

- Click a block to see its details in the side panel (a bottom sheet on phones).
- Drag to move the map. Scroll or pinch to zoom. On a trackpad, swipe up or down with two fingers to zoom.
- Click `+` / `−` on a timeline block to show or hide its phases. "Show timelines" opens all of them.
- Keys: `+` / `-` zoom, `0` fits the map, `Esc` closes the panel.

## Where things are

- `src/nodes.ts` – all blocks: position, size, label, and panel content.
- `src/graph.ts` – connectors between blocks and the timeline rows.
- `src/useViewport.ts` – pan, zoom, and "fit" logic.
- `src/components/` – the map canvas, detail panel, and zoom controls.
- `src/styles.css` – all styles, with light and dark themes.

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
The site is at https://hcmute-dsc.github.io/mentoring-program/.

One-time setup: in the repo, open **Settings → Pages**, and set **Source** to **GitHub Actions**.
You can also run the deploy by hand from the **Actions** tab ("Deploy to GitHub Pages" → "Run workflow").
