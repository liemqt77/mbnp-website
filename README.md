# MBNP at Law — React website

A responsive, multi-page React and Vite website using MBNP's supplied brand, team photography, contact information, and colour palette.

## Pages

- `index.html` — Home
- `about.html` — About
- `expertise.html` — Expertise
- `collaborations.html` — Collaborations
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

The website uses the supplied hero image, all seven team portraits, and the newly supplied partner artwork for Cowell, Blue Pay/Blue Mart, Askara Technology, Lexington Residence, PT Hasurat Abadi, Lippo Malls, and PT Bumi Suyarna Resources. The older demo logo files remain unused.

The Home hero uses `MBNP VIDEO.mp4` as a muted background. Playback is constrained to the first 10 seconds and loops automatically, with the original hero photograph as its loading poster and fallback image.

## Insights

The Insights and external news API sections are intentionally on hold. They can be introduced later as their own `insights.html` page after the initial pages and content are approved.
