# MBNP at Law — React website

A responsive, multi-page React and Vite website using MBNP's supplied brand, team photography, contact information, and colour palette.

## Pages

- `index.html` — Home
- `about.html` — About
- `expertise.html` — Expertise
- `people.html` — People
- `contact.html` — Contact

Each page is a separate HTML entry point and shares the React components and styling in `src/`. Relative asset paths and Vite's relative build base keep images working when the site is hosted inside the GitHub Pages repository path.

## Run locally

```powershell
node .\node_modules\vite\bin\vite.js --host 127.0.0.1
```

Open `http://127.0.0.1:5173/`.

## Production build

```powershell
node .\node_modules\vite\bin\vite.js build --configLoader runner
```

The production files are generated in `dist/`.

## Images and client logos

The website currently uses the supplied hero image and all seven team portraits. The supplied `cl-*` and `Logo-*` files were not published as clients because they are generic template marks such as Logoipsum, Umbrella, and Nextmove. Approved client logos can be added later without changing the page structure.

## Insights

The Insights and external news API sections are intentionally on hold. They can be introduced later as their own `insights.html` page after the initial pages and content are approved.
