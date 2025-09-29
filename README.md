# SN15 LLC — Website

A small static website for SN15 LLC built with Vite and plain JavaScript.

This repository contains the source for a lightweight marketing or landing site. It uses Vite for development and bundling and keeps assets in the `public/` folder.

## Quick summary

- Tech: Vite, plain JavaScript, static HTML/CSS
- Source: `src/` (JavaScript and styles)
- Static assets: `public/` (images and other files served as-is)

## Requirements

- Node.js (recommended: 16+)
- npm (or a compatible package manager)

## Setup — run locally

Open a terminal in the project root and run:

```powershell
npm install
npm run dev
```

The `dev` script starts Vite and serves the site at `http://localhost:5173` by default.

Available npm scripts (from `package.json`):

- `npm run dev` — start the dev server (Vite)
- `npm run build` — build a production bundle into `dist/`
- `npm run preview` — locally preview the production build

## Project layout

```
.
├─ index.html             # entry HTML
├─ package.json           # project metadata + scripts
├─ public/                # static assets (images, favicons, etc.)
│  └─ images/
├─ src/                   # application source
│  ├─ main.js
│  ├─ counter.js
│  └─ style.css
```

Files of interest:

- `index.html` — main HTML entry
- `src/main.js` — client entry script
- `src/style.css` — project CSS

## Build & Deploy

Run `npm run build` to create an optimized `dist/` directory ready for static hosting. Deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, AWS S3, etc.).

## Contributing

This repo is intentionally small. If you want to contribute:

1. Fork the repo and create a feature branch
2. Make changes and test locally with `npm run dev`
3. Open a pull request with a clear description

## Notes

- No license file is included in this repository. Add a `LICENSE` file if you plan to publish under a specific license.
- If you use environment variables or secret keys, keep them out of source control (see `.gitignore`).

---

If you want, I can also:

- Add a `LICENSE` file (MIT/Apache/etc.)
- Add a short CI workflow to build the site on push
- Add a small deployment README for Netlify/Vercel/GitHub Pages

Tell me which of those you'd like and I'll add it.
# sn15llc-website
