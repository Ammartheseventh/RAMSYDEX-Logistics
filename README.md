# RAMSYDEX GLOBAL LOGISTICS — Website

Marketing website for RAMSYDEX GLOBAL LOGISTICS, a logistics and supply chain
company based in Central Malaysia. The site's goal is to generate quote requests
and build credibility with importers, exporters and manufacturers.

Built as an internship project. The client owns the finished project.

---

## Status

**In development.** The site is being built with placeholder content until the
client supplies brand assets, real photos, contact details and a confirmed
country list. Every placeholder is tracked in [`PLACEHOLDERS.md`](./PLACEHOLDERS.md).

---

## Tech Stack

| Layer            | Technology                                        |
| ---------------- | ------------------------------------------------- |
| Framework        | Next.js 16 (App Router) + TypeScript              |
| Styling          | Tailwind CSS                                      |
| CMS              | Sanity (planned — not yet integrated)             |
| Forms            | Formspree OR Web3Forms (planned)                  |
| World map        | `react-country-map` (planned, Page 3)             |
| Contact map      | Google Maps embed iframe (Page 6)                 |
| Analytics        | Google Analytics + cookie consent (planned)       |
| Hosting          | Vercel                                            |

> Sanity and the form service are deferred until the page shell is built.
> Until then, content lives in `src/data/` and forms are not wired up.

---

## Getting Started

### Prerequisites

- Node.js 20+ (check with `node -v`)
- npm (bundled with Node.js)
- Git

### Install and run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev