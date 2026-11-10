# RAMSYDEX GLOBAL LOGISTICS

Lead Generation website for RAMSYDEX GLOBAL LOGISTICS, a logistics and supply chain company based in Central Malaysia. The site's goal is to generate quote requests and build credibility with importers, exporters, and manufacturers.

Built as an internship project. The client owns the finished project.

---

## Status

**Frontend complete.** The site is fully responsive, heavily optimized for performance, and integrated with a headless CMS. It is currently populated with placeholder content (images, team names, trust stats) pending client handover.

---

## Tech Stack

| Layer            | Technology                                        |
| ---------------- | ------------------------------------------------- |
| Framework        | Next.js 16 (App Router) + TypeScript              |
| Styling          | Tailwind CSS v4                                   |
| CMS              | Sanity (separate repository: `ramsydex-cms`)      |
| Forms            | Web3Forms (via client-side fetch)                 |
| Animations       | Motion (Framer Motion)                            |
| World Map        | Custom SVG implementation (`dotted-map`)          |
| Contact Map      | Google Maps embed iframe                          |
| Hosting          | Vercel                                            |

---

## Architecture Overview

- **Data Fetching:** All Sanity queries and fetchers live in `src/sanity/`. Every fetcher is wrapped in React's `cache()` to deduplicate requests during a single render pass.
- **Components:** 
  - `src/components/layout/` contains structural elements (Header, Footer, PageHero).
  - `src/components/sections/` contains the large page blocks (Hero, QCBlock, CustomsBlock, QuoteForm, etc.).
  - `src/components/ui/` contains reusable interactive elements (CountUp, TiltedCard, CopyButton, WorldMap).
- **Styling:** We use Tailwind CSS v4 with a custom `@theme` palette (`taupe-grey`, `tuscan-sun`, `brick-red`, `parchment`) defined in `src/app/globals.css`. We utilize the new v4 syntax (e.g., `bg-linear-to-r`, dynamic spacing like `max-w-300`).
- **Pages:** All pages are Server Components that fetch their own data and pass it down to Client Components where interactivity is required.

