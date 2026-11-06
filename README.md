# Sweet Crusts Bakery

A React + Vite single-page site for Sweet Crusts Bakery, with pages for
Home, About, Menu, Gallery, and Contact.

**Stack:** React 19 · React Router 7 · Vite (rolldown-vite) · plain CSS
(custom properties, no framework). No backend — it's a static site.

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint       # ESLint
```

## Project structure

```text
src/
  components/   One component per section/route (Navbar, Hero, About,
                Menu, Gallery, Contact, Footer) plus NotFound and
                ErrorBoundary
  hooks/        usePageMeta — sets document title/description per route
  lib/          contact.js — the (currently mocked) form submit call
  assets/       gallery images
  index.css     all styles — design tokens (--brand, --ink, etc.) at
                the top, then one section per component
public/
  _redirects    Netlify SPA rewrite
  robots.txt, favicon.svg
vercel.json     Vercel SPA rewrite
```

## Features already in place

- Client-side routing (`/`, `/about`, `/menu`, `/gallery`, `/contact`)
  with a wildcard 404 page and an `ErrorBoundary` fallback so a render
  error shows a friendly message instead of a blank screen.
- Per-page `<title>` and meta description via `usePageMeta`, plus Open
  Graph tags and a favicon in `index.html`.
- Mobile hamburger nav, skip-to-content link, labeled form fields with
  inline validation errors — basic accessibility covered.
- Lazy-loaded gallery images.
- No unused dependencies or frameworks loaded (Bootstrap and a couple of
  unused npm packages were removed; `npm audit` is clean).

## Replacing placeholder content

Everything below is placeholder and should be swapped for the real
business details before launch:

| What | Where |
| --- | --- |
| Business name, address, phone, email | [`src/components/Footer.jsx`](src/components/Footer.jsx), [`src/components/Contact.jsx`](src/components/Contact.jsx) |
| Social media links | [`src/components/Footer.jsx`](src/components/Footer.jsx) |
| Menu items & prices | [`src/components/Menu.jsx`](src/components/Menu.jsx) |
| About page copy, milestones, team | [`src/components/About.jsx`](src/components/About.jsx) |
| Gallery photos | [`src/assets/`](src/assets) — referenced from [`src/components/Gallery.jsx`](src/components/Gallery.jsx) |
| Site title/description/OG tags | [`index.html`](index.html) |
| Brand color / palette | CSS custom properties at the top of [`src/index.css`](src/index.css) (`--brand`, `--ink`, etc.) |

`src/assets/artisan.jpeg` is ~490KB — compress it (e.g. via Squoosh or an
image CDN) before going live; it wasn't re-encoded here since no image
tooling is available in this environment.

## Contact form

The form in [`src/components/Contact.jsx`](src/components/Contact.jsx) does
full client-side validation, but the actual submission
([`src/lib/contact.js`](src/lib/contact.js)) is currently mocked — it just
logs to the console and resolves after a short delay. Before launch, wire it
up to a real backend (your own API route, Formspree, EmailJS, etc.) — see the
`TODO` comment in that file.

## Deploying

This is a static SPA (client-side routing via `react-router-dom`), so
whichever host you use needs to serve `index.html` for unknown paths:

- **Netlify**: `public/_redirects` is already set up (`/* /index.html 200`).
- **Vercel**: `vercel.json` at the project root already rewrites all paths to
  `index.html`.
- **Other static hosts** (GitHub Pages, S3/CloudFront, nginx, etc.): configure
  an equivalent catch-all rewrite to `index.html`, or the app will 404 on
  direct loads/refreshes of any route other than `/`.

Build output goes to `dist/` via `npm run build`.

## Before real launch — checklist

- [ ] Swap all placeholder content listed above for real business details.
- [ ] Wire up the contact form to a real backend.
- [ ] Compress `src/assets/artisan.jpeg`.
- [ ] Pick a host and deploy (see above); point the domain at it.
- [ ] Re-run `npm audit` after any dependency updates.
- [ ] No automated tests exist yet — consider adding Vitest + React
      Testing Library if the site grows beyond static content.
