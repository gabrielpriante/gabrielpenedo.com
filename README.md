# gabrielpenedo.com

Personal academic research website. Environmental computing, machine learning, geospatial systems.

## Stack

Vite 5, React 18, react-router-dom 6, Tailwind CSS 3, react-helmet-async. No UI
component library, no animation library, no state library, no backend, no analytics.

## Local development

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build at http://localhost:4173
```

`npm install` is slow inside a OneDrive-synced folder, because `node_modules`
contains thousands of small files that OneDrive tries to sync. Moving the repo
to a path outside OneDrive fixes it if it becomes a problem.

## Where the content lives

All page content is in `src/data/`, so pages can change without touching layout
or design:

- `site.js` — name, links, hero statement, About text, portrait, social card image
- `research.js` — current research projects, their figures, research interests
- `work.js` — organizations and roles
- `cv.js` — the CV summary rendered on `/cv`

Images are in `public/images/`. The downloadable CV is `public/cv/gabriel-penedo-cv.pdf`.

## Deployment

Hosted on Cloudflare Workers as static assets. Pushing to `main` triggers a
build, which runs `npm run build` and then `npx wrangler deploy`.

`wrangler.jsonc` declares `dist` as the asset directory with
`not_found_handling: "single-page-application"`. That is what makes `/research`,
`/work`, `/about` and `/cv` resolve on a direct visit or a refresh. Do not add a
`public/_redirects` file: Workers static assets rejects the `200` proxy rule that
Cloudflare Pages used, and the deploy fails.

If pushes stop triggering builds, check Settings then Builds in the Cloudflare
dashboard for a notice that the project is disconnected from GitHub. Reconnecting
there restores automatic deployments.

## DNS and email

DNS is managed by Cloudflare. The domain sends no email, and three TXT records
say so explicitly:

- `@` — `v=spf1 -all`
- `*._domainkey` — `v=DKIM1; p=`
- `_dmarc` — `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s`

**If you ever set up a real address at this domain, these records will reject your
own mail.** Replace the SPF record with your mail provider's, remove the wildcard
DKIM record, and soften DMARC to `p=none` while you test.

## Image credit

The forest canopy tile on the Research page was collected by the Open Forest
Observatory. The three aerial images are the author's own.
