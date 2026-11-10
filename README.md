# THE FINISH

A fictional automotive detailing studio portfolio concept, designed and developed by **Shreyash Shukla** — [contact@derivo.in](mailto:contact@derivo.in).

## Setup

Use Node.js 24 LTS. Run `npm ci`, then `npm run dev`. Run `npm run check` for TypeScript validation, `npm run build` for the static production site, and `npm run preview` to inspect that build. The entire deployable website is in `dist/`. No server, database, authentication, form handler, or runtime API is needed. Astro generates robots.txt and sitemap.xml at build time; their source route files are not runtime endpoints.

## Stack and structure

Astro static generation, TypeScript, Tailwind CSS 4, semantic HTML, native range input and dialog, and small vanilla JavaScript modules. System sans-serif fonts avoid font requests. `src/components/` contains the reusable sections, `src/data/site.ts` holds configuration and service/process copy, and `src/styles/global.css` defines the design and responsive layouts. Astro generates local responsive WebP assets.

## Deploy

For Cloudflare Pages: connect this source repository, select build command `npm run build`, output directory `dist`, and Node version 24. No Functions or Worker adapter is required. For Netlify, use the same build command and publish directory. For any static host, upload the contents of `dist/`. Set the actual production origin in `astro.config.mjs` before building to update canonical, Open Graph and sitemap URLs. `.openai/hosting.json` is the Sites deployment configuration.

## Adapt for a client

Update the name, developer information, email, metadata and service copy in `src/data/site.ts`; update the visible wordmarks and location in Navbar and Footer. Adjust the CSS palette and typography in `src/styles/global.css`. Replace stock photos in `src/assets/` with approved client imagery and update alt text. See [ASSETS.md](ASSETS.md) for sources and licenses. Stock imagery is a moodboard, never evidence of completed client work. The comparison uses the same photograph with a CSS filter and is explicitly illustrative.

For a real business, replace fictional labels only after all business details are verified. Add the real business contact link separately from the developer credit; the existing website-enquiry email belongs to Shreyash. Add no booking claims unless a functioning booking process exists. Use authentic matched before/after photographs with permission. Remove demo disclaimers only when all demo content is replaced. Change `noindex` to `false` in site configuration when indexing is appropriate. No fabricated LocalBusiness structured data is included.

## Verification

TypeScript and static production build pass. Browser checks verified mobile menu open/close, gallery opening, next-image navigation and Escape dismissal, and keyboard adjustment of the comparison slider. All seven requested widths (360, 390, 430, 768, 1024, 1440 and 1920) were checked for horizontal overflow, with none observed. Mobile and desktop hero screenshots were inspected. Native range input supplies pointer and touch interaction; physical touch-device testing has not been performed. Lighthouse scores have not been measured, and no score is claimed. Dependency audit after upgrading Astro reports zero vulnerabilities.

The site deliberately uses `noindex, nofollow`. A Lighthouse SEO audit may therefore flag indexing even though exclusion is intentional.

Service guidance was cross-checked against [3M's official PPF FAQ](https://multimedia.3m.com/mws/media/2398297O/3m-paint-protection-film-faq.pdf); no affiliation or product-specific warranty is claimed. Tailwind integration follows [the official Astro installation guide](https://tailwindcss.com/docs/installation/framework-guides/astro).
"# thefinish" 
