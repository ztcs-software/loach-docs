# loach-docs

Documentation website for [Loach](https://github.com/ztcs-software/loach).

## Project structure

```
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── loach-icon.png
│   └── js/
│       ├── main.js
│       ├── search.js
│       └── search-index.js
├── pages/
│   ├── concepts.html
│   ├── faq.html
│   ├── features.html
│   ├── getting-started.html
│   ├── installation.html
│   ├── privacy.html
│   └── providers.html
├── index.html
├── LICENSE
└── README.md
```

## Run locally

The site is plain HTML/CSS/JS — no build step. Serve the folder with any static-file server:

```sh
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

Upload the whole directory to any static host. No server config needed.

## Contributing

- Open an issue first
- PR branch name: `<issue-number>-<short-name>`

## License

This project is licensed under the [MIT License](LICENSE).
