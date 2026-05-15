# loach-docs

Documentation website for [Loach](https://github.com/ztcs-software/loach) — a native, local-first AI workspace for desktops.

## What's in here

A static, self-contained documentation website built with plain HTML, CSS and JavaScript. No build step. Drop the folder on any static host and it works.

```
loach-docs/
├── index.html                   # Introduction (home)
├── pages/
│   ├── installation.html
│   ├── getting-started.html
│   ├── concepts.html
│   ├── providers.html
│   ├── features.html
│   ├── privacy.html
│   └── faq.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js               # theme toggle, sidebar, search shortcut
│   ├── js/search.js             # client-side fuzzy search
│   ├── js/search-index.json     # pre-built search index
│   └── img/favicon.svg
├── LICENSE
└── README.md
```

## Features of the site

- **Static** — no server, no build, no dependencies. Upload as-is to any shared hosting.
- **Light / dark mode** — toggle in the top bar; respects `prefers-color-scheme` on first visit; persists in `localStorage`.
- **Glassy top bar** — sticky, blurred (`backdrop-filter`) and theme-aware.
- **Left sidebar navigation** — grouped sections with active-link highlighting; collapses to a drawer on mobile.
- **Search** — fully client-side; pre-built JSON index loaded on demand; keyboard navigation; `Ctrl/Cmd + K` to focus.
- **GitHub link** — top-bar icon points at the [Loach repository](https://github.com/ztcs-software/loach).

## Run locally

Any static-file server works. From the project root:

```bash
# Python 3
python -m http.server 8080

# Node (one-off)
npx serve .
```

Then open `http://localhost:8080`.

## Deploy

Upload the entire folder to your shared hosting root. No `.htaccess` or special server config is needed — every page is a real HTML file at a stable URL.

## Editing the docs

- Page content is plain HTML inside `pages/*.html` (and `index.html` for the home page).
- The top bar and sidebar are duplicated on every page — keep them in sync when you add a new section.
- After adding or editing content, update `assets/js/search-index.json` so the new content is searchable. Each entry needs `title`, `url`, `heading`, `anchor` and `body`.
- Theme colors and layout tokens live in CSS custom properties at the top of `assets/css/styles.css`.

## License

[MIT](LICENSE) © ZTCS
