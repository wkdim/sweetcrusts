# Sweet Crusts Bakery

Online ordering website for a bakery in Osu, Accra.

**Live site:** https://sweetcrusts.vercel.app

Sweet Crusts is a portfolio project: the bakery is fictional, but the ordering
flow works end to end in the browser.

## Features

- **Menu** with categories and search: tea bread, meat pies, celebration cakes
  and local drinks, priced in Ghana cedis
- **Basket** that survives page reloads (saved in `localStorage`)
- **Checkout** with pickup or rider delivery across Accra, a free-delivery
  threshold, and Mobile Money, card or cash payment
- **Custom cake builder**: pick a size, sponge, filling and toppings and the
  price updates as you choose
- **Gallery** with product details and add-to-basket
- **Contact form** with inline validation
- Per-page titles, descriptions and canonical URLs, Open Graph preview image,
  sitemap and structured data

## Stack

React 19, React Router 7 and Vite, with plain CSS and Lucide icons. No
backend: it is a static site deployed on Vercel.

## Project layout

```
src/
  components/   pages (Hero, Menu, About, Gallery, Contact) and the cart,
                checkout and cake builder
  context/      CartContext: basket state and localStorage persistence
  data/         menu items and cake builder options
  hooks/        usePageMeta: page title, description and canonical URL
  lib/          currency formatting (GH₵), delivery pricing, contact form
public/
  images/       product photos (see /credits)
```

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Notes

- The contact form and checkout are front-end only: orders are confirmed on
  screen and not sent anywhere.
- Photos come from Wikimedia Commons under Creative Commons or public domain
  licences. Credits are listed on the site at `/credits`.

Built by [William Kwame Dim](https://wkdim.vercel.app).
