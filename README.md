# Flutter Development Portal

This repository is set up as a docs-first GitHub Pages project for your Flutter development and training brand. It starts with a modern Docusaurus site under `apps/site` and leaves room for future apps inside `apps/`.

## Structure

- `apps/site` - public-facing docs site for training, curriculum, delivery model, FAQs, and service pages
- `apps/README.md` - guidance for adding future Flutter demo apps, labs, or client showcases
- `.github/workflows/deploy-docs.yml` - GitHub Pages deployment workflow

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Notes

The site is configured to default to:

- `url`: `https://sitharaj88.github.io`
- `baseUrl`: `/flutter-development-hub/`

You can override these during build or deployment with environment variables:

- `DOCUSAURUS_URL`
- `DOCUSAURUS_BASE_URL`
- `GITHUB_PAGES=true`

If you later switch back to a custom domain such as `https://www.sitharaj.in`, update:

- `url` to your custom domain
- `baseUrl` to `/` if the site is hosted at the domain root

## Brochure Integration

If you want the brochure downloadable from the site, add the PDF here:

`apps/site/static/files/flutter-training-brochure.pdf`

Then update any CTA copy or button labels as needed.

## Content Alignment

I could not fetch the current live page or brochure content from this environment, so the new site ships with strong starter copy and structure. Once you add the brochure or paste the exact copy, we can tighten messaging, pricing, durations, and curriculum details to match your existing brand precisely.
