# one-prompt-site

Joseph Manghan personal site — single entry point, professional surface. He's a software engineer specialising in context engineering. `/blog` is an archival post about the original one-prompt-site build that started this repo (still live at `/#/blog`, not linked from home).

## Stack

- React 19 + Vite 6, JSX
- `react-router-dom` 6 — **HashRouter**, URLs look like `/#/blog`
- Plain CSS, BEM naming. No modules, no Tailwind, no preprocessor
- npm. ESLint flat config + Prettier
- No tests

## Layout

- `src/App.jsx` — routes
- `src/index.css` — globals + shared utilities (`.link`, `.container`, `.wrapper`)
- `src/components/<Name>/<Name>.jsx` + `<name>.css` — one folder per component
- Components: `Header`, `Bio`, `Contact`, `Wrapper`, `Blog`
- `src/assets/` — `jm_logo.webp`, `blog/` images
- Home route = `Wrapper > Header > Bio > Contact`. `/blog` = standalone, no shared layout

## Commands

- `npm run dev` — local dev
- `npm run pr` — pre-PR gate, runs `lint && format && build`
- `npm run deploy` — `scripts/deploy.sh` → force-push `dist/` to `josephmanghan.github.io` main. Custom domain `www.josephmanghan.com` via `CNAME`

## Quirks

- HashRouter, not BrowserRouter. Don't "fix" routes to path-based without thinking about GH Pages
- ESLint `no-unused-vars` exempts `/^[A-Z_]/` so inline SVG components (`LinkedInSVG` etc) don't flag
- `autoprefixer` in devDeps but no postcss config. Inactive
- `dev/` and `prompt-materials/` at repo root = scratch, not source. Ignore for builds
- The `/blog` post is intentionally not linked from home — it's archival. Don't "wire it back up"

## Style

- All links use `.link` class for the teal gradient underline (`src/index.css:47`)
- Images need explicit `width`/`height` + descriptive `alt` (a11y refactor convention)
- External links: `rel="noopener noreferrer"`, social icons get `aria-label`

## Out of scope here

Code style, formatting rules — Prettier + ESLint own those. Don't lint by hand.
