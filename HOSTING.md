# Hosting & deployment notes

This site ships as plain static files — upload the directory tree to your
static host root. See [README.md](README.md) for the basics; this file
covers the one piece of post-deploy plumbing that **must** be done before
search engines see the site.

## Replace the placeholder base URL

For SEO (canonical URLs, OpenGraph `og:url`, sitemap entries, JSON-LD `url`
fields) we need an absolute base URL. The codebase currently uses
`https://loach.example.com` as a placeholder marker. **Before the first
production deploy, replace it with the real hostname.**

Files that contain the placeholder:

- `robots.txt`
- `sitemap.xml`
- `index.html`
- `pages/*.html` (9 files)
- `pages/features/*.html` (28 files)
- `pages/troubleshooting/*.html` (13 files)

Total: **52 files**.

### One-shot replacement

From the repo root, using Python (matches the pattern documented in
`CLAUDE.md` for bulk page edits):

```bash
PYTHONIOENCODING=utf-8 python - <<'PY'
import pathlib
OLD = 'https://loach.example.com'
NEW = 'https://your-real-domain.example'   # <-- edit this
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

Verify with a quick `grep -c 'loach.example.com' **/*.html robots.txt sitemap.xml`
— every count should be `0` afterwards.

## After deploy

- Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Confirm crawlable: `curl -I https://<host>/robots.txt` returns 200.
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
