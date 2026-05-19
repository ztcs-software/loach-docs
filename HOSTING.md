# Hosting & deployment notes

This site ships as plain static files — upload the directory tree to your
static host root. See [README.md](README.md) for the basics.

## Canonical production hostname

The site is configured to live at:

> **https://docs.loach.dev**

This hostname is embedded directly in:

- `robots.txt` (the `Sitemap:` line)
- `sitemap.xml` (every `<loc>` entry)
- Every HTML file's `<head>`:
  - `<link rel="canonical">`
  - `<meta property="og:url">`, `<meta property="og:image">`
  - `<meta name="twitter:image">`
  - JSON-LD `url`, `image`, `@id`, `mainEntityOfPage`, `BreadcrumbList` items

If you ever rename the docs host, use the bulk-rename procedure below.

## Renaming the docs host

From the repo root, with Python (matches the heredoc pattern in
`CLAUDE.md`):

```bash
PYTHONIOENCODING=utf-8 python - <<'PY'
import pathlib
OLD = 'https://docs.loach.dev'         # <-- current hostname
NEW = 'https://your-new-domain.example' # <-- target hostname
targets = ['robots.txt', 'sitemap.xml']
targets += [str(p) for p in pathlib.Path('.').rglob('*.html')]
for f in targets:
    p = pathlib.Path(f)
    text = p.read_text(encoding='utf-8')
    if OLD in text:
        p.write_text(text.replace(OLD, NEW), encoding='utf-8')
        print('updated', f)
PY
```

Don't forget to update the `https://docs.loach.dev` references in this
file too if you change the canonical URL.

Verify with `grep -c 'docs.loach.dev'` (or whatever the old hostname was)
afterwards — every count should be `0`.

## After deploy

- Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Confirm crawlable: `curl -I https://docs.loach.dev/robots.txt` returns 200.
- Verify rich-result eligibility with the
  [Schema Markup Validator](https://validator.schema.org/) on the home page
  (SoftwareApplication), the FAQ page (FAQPage), and any feature page
  (TechArticle + BreadcrumbList).
- Consider creating a proper 1200&times;630 OpenGraph social card and
  replacing the `assets/img/loach-logo.png` reference in each page's
  `og:image` meta tag.

## Adding a new page

When a new HTML page is added, also:

1. Add a `<url>` block to `sitemap.xml`.
2. Confirm the new page has the standard SEO `<head>` block (canonical,
   OG, Twitter, JSON-LD). Pages added before this block existed can be
   patched with the same Python heredoc pattern used elsewhere.
