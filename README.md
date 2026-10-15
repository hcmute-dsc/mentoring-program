# HCMUTE DSC Programs

Interactive maps of HCMUTE DSC programs, built with React, TypeScript, and Vite.
There are two maps: the Git & GitHub Study Jam (shown first) and the Mentoring Program.

## Run

```bash
npm install
npm run dev      # start the dev server
npm run build    # build for production into dist/
npm run preview  # serve the production build
```

## How to use

- Pick a map in the dropdown at the top-left (the map title).
- Click a block to see its details in the side panel (a bottom sheet on phones).
- Drag to move the map. Scroll or pinch to zoom. On a trackpad, swipe up or down with two fingers to zoom.
- Click `+` / `−` on a timeline block to show or hide its phases. "Show timelines" opens all of them.
- Keys: `+` / `-` zoom, `0` fits the map, `Esc` closes the panel.
- Click the version tag in the bottom-right corner to see what is new in this version.
- Click the sun / moon button in the top-right corner to switch between the light and dark theme. The site follows the system theme until you pick one. Your choice is saved in the browser.

## Where things are

- `src/diagrams/` – one file per map: its blocks (position, size, label, and panel content), connectors, and timeline rows.
  `src/diagrams/index.ts` lists the maps in dropdown order. To add a map, add a file and list it there.
- `src/graph.ts` – turns each map into what the canvas draws: connector paths and timeline frames.
- `src/useViewport.ts` – pan, zoom, and "fit" logic.
- `src/components/` – the map canvas, map dropdown, detail panel, and zoom controls.
- `src/styles.css` – all styles, with light and dark themes.
- `src/useTheme.ts` and `public/theme.js` – the light / dark theme switch.
- `src/changelog.ts` – release notes for the "What's new" popup.

## Release a new version

1. Raise the version: `npm version <x.y.z> --no-git-tag-version`.
2. Add an entry for it at the top of `src/changelog.ts`.

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
The site is at https://hcmute-dsc.github.io/mentoring-program/.

One-time setup: in the repo, open **Settings → Pages**, and set **Source** to **GitHub Actions**.
You can also run the deploy by hand from the **Actions** tab ("Deploy to GitHub Pages" → "Run workflow").
