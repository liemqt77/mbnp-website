# MBNP at Law — React landing page

A responsive React + Vite landing page using the official MBNP logo, colour palette, team photography, contact information, and WordPress content API.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Latest Thinking API

The page reads published articles from:

```text
https://mbnp.co.id/wp-json/wp/v2/posts?_embed=1&per_page=6
```

Override the endpoint by creating `.env`:

```text
VITE_WORDPRESS_API_URL=https://mbnp.co.id/wp-json/wp/v2/posts?_embed=1&per_page=6
```

WordPress editors should set a title, excerpt, category, and featured image. The landing page then updates automatically on reload without a React deployment.
