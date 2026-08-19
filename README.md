# Paul Nabu — Portfolio

A React + Vite portfolio site: hero, about, three design case studies (Crafta, MKV, Lumira), and contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site into `dist/`. Deploy that folder to any static host:

- **Netlify / Vercel**: connect the repo (or drag-and-drop the `dist` folder), build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package.

## Editing content

Everything lives in `src/App.jsx`:
- `SWATCHES` / `SKILLS` — the palette and skills shown in the About section
- `PROJECTS` — the three case studies (name, role, tools, description, image)

Images are in `src/assets/`. Swap them out and update the corresponding `import` at the top of `App.jsx` to change or add project images.

Colors, fonts and spacing live in `src/index.css` (tokens) and `src/App.css` (layout).
