# loach-docs

Documentation website for [Loach](https://github.com/ztcs-software/loach) - a native, local-first AI workspace. 

This is a plain HTML/CSS/JS site. **No build step, no framework, no package manager** - the files in this repo are exactly what's served.

**👉 LIVE: [docs.loach.dev](https://docs.loach.dev)**

## Project structure

```
loach-docs/
├── index.html                          # Home / Introduction
├── pages/
│   ├── installation.html
│   ├── getting-started.html
│   ├── concepts.html
│   ├── providers.html
│   ├── features.html                   # Overview that links to features/*.html
│   ├── privacy.html
│   ├── tech-stack.html
│   ├── faq.html
│   ├── troubleshooting.html            # Overview that links to troubleshooting/*.html
│   ├── features/                       # 38 per-feature subpages
│   │   ├── app-lock.html
│   │   ├── attachments.html
│   │   ├── … (36 more)
│   │   └── web-fetch.html
│   └── troubleshooting/                # 13 per-topic troubleshooting subpages
│       ├── app-lock.html
│       ├── appearance.html
│       ├── … (10 more)
│       └── web-fetch-mcp.html
├── assets/
│   ├── css/styles.css                  # All styling; theme tokens at the top
│   ├── js/
│   │   ├── main.js                     # Theme toggle, sidebar, TOC, search shortcut
│   │   ├── search.js                   # Search UI
│   │   └── search-index.js             # The search index (window.LOACH_SEARCH_INDEX)
│   └── img/
│       ├── loach-favicon.png
│       ├── loach-icon.png              # Used in the brand mark
│       └── loach-logo.png              # Used for og:image
├── LICENSE
└── README.md
```

## Run locally

```sh
python -m http.server 8080
```

Then open <http://localhost:8080>. The site is also designed to work over `file://` - double-click `index.html` and it'll load with the same functionality.

## Deploy

Upload the whole directory to any static host. No server config should be required. Every URL is a real HTML file at a stable path.

## Contributing

- Open an issue first
- PR branch name: `<issue-number>-<short-name>`

When adding a new docs page you must (1) create the file, (2) add it to the sidebar block in **all** HTML files, and (3) add entries for its headings to `assets/js/search-index.js`.

## License

This project is licensed under the [MIT License](LICENSE).
