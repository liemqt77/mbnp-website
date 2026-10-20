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

WordPress editors should set a title, excerpt, category, and featured image. The landing page fetches new articles on page load, every 15 minutes while open, and when the browser tab becomes active again. No React deployment is required for new articles.

## External legal and business news

Keep MBNP-authored analysis in WordPress. If a separate curated industry-news section is added, use a news provider through a server-side or serverless endpoint:

- **GNews API**: a practical starting point for keyword, language, country, and date filtering. Paid plans provide real-time commercial use.
- **NewsAPI**: broad source coverage and strong keyword/domain filtering. Its free plan is development-only; production requires a paid plan.

Do not put a paid API key in `VITE_*`, React source, or the public GitHub repository. Vite variables are shipped to every browser. Store the key in a serverless secret (for example Cloudflare Workers, Vercel Functions, or Netlify Functions), return only normalized headline metadata, cache results for 15–30 minutes, and link readers to the original publisher.

Recommended split:

1. **Latest Thinking** — MBNP WordPress REST API, for firm-authored articles.
2. **Legal & Business Briefing** — GNews or NewsAPI through a secure proxy, with keyword filters and editorial approval.

## Client logos

The supplied `cl-*` and `Logo-*` image files are generic template marks (`Logoipsum`, `Umbrella`, `Nextmove`, and similar), not verifiable client identities. They are intentionally not published as MBNP clients. The landing page instead includes a privacy-conscious Clients & Collaborations section and is ready for approved, official client logos later.
