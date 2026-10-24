# Placeholders Tracker

Every placeholder in the project is listed here with the file path where it lives.
When real content arrives, update the file and check the box / remove the row.

Legend: `[ ]` = pending, `[x]` = resolved (kept briefly for reference, then removed).

---

## Brand

- [ ] Logo (vector or high-res PNG) — `src/components/layout/Header.tsx` (currently text logo)
- [ ] Brand colors — `src/app/globals.css` (using Tailwind defaults)
- [ ] Fonts — `src/app/layout.tsx` (using Inter)

**Unblocked by:** client brand kit.

---

## Contact Details

- [ ] Business email — `src/data/contact.ts` (placeholder: `info@ramsydex.example`)
- [ ] Phone / WhatsApp — `src/data/contact.ts` (placeholder: `+60 12-345 6789`)
- [ ] Full address + Google Map embed — `src/data/contact.ts`, `src/app/contact/page.tsx` (gray placeholder)
- [ ] Business hours + timezone — `src/data/contact.ts` (placeholder: Mon–Fri 9am–6pm MYT)

**Unblocked by:** client contact confirmation.

---

## Trust Bar Stats

- [ ] "X Countries Covered" — `src/components/sections/TrustBar.tsx` (shows `X`)
- [ ] "X Shipments Yearly" — `src/components/sections/TrustBar.tsx` (shows `X`)
- [ ] Proof for 99.5% on-time rate (source + measurement period) — `src/components/sections/TrustBar.tsx`
- [ ] "32 years" clarification (company vs. team experience) — `src/data/about.ts`, `src/components/layout/Header.tsx`

**Unblocked by:** client confirmation + evidence for the 99.5% figure.

---

## Services

- [ ] 18 service-card bullets (3 per service) — `src/data/services.ts` — drafts written, pending client approval
- [ ] 6 service-card images — `public/images/placeholder-service-*.jpg` — currently missing, gray boxes render
- [ ] Cargo types / vehicle types / operating areas — `src/data/solutions.ts` — all six services show `[PLACEHOLDER]`
- [ ] Air/ocean freight: direct or via partners — pending
- [ ] Insurance / repacking / labeling offered — pending

**Unblocked by:** client service operational details.

---

## Global Network

- [ ] Country list for map — `src/components/sections/WorldMap.tsx` (currently 5 placeholder countries)
- [ ] Map background image — `public/images/world-map.svg` (may be missing; gray box renders if absent)
- [ ] Trade corridor details — `src/app/network/page.tsx` (placeholder copy)
- [ ] Customs coverage regions list — `src/app/network/page.tsx` (placeholder list)
- [ ] Network teaser map image on homepage — `src/components/sections/NetworkTeaser.tsx` (gray placeholder box)

**Unblocked by:** client focus-country / region list.

---

## About

- [ ] "32 years" clarification — `src/data/about.ts` (company vs. team experience)
- [ ] Credentials & memberships (customs licence, FIATA/MAFFA, ISO, insurance) + logos — `src/data/about.ts`, `src/app/about/page.tsx`
- [ ] Mission / vision copy approval — `src/data/about.ts` (draft written)
- [ ] Case studies — currently hidden per brief; add only when real client examples exist

**Unblocked by:** client confirmation of credentials + experience framing.

---

## Photos

- [ ] Hero image — `public/images/placeholder-hero.jpg` (currently using a "try licence" image — must be replaced before launch)
- [ ] 6 service-card images — `public/images/placeholder-service-*.jpg` (currently missing)
- [ ] Gallery images (12+) — `public/images/placeholder-gallery-*.jpg` (currently missing)
- [ ] Hub / trucks / team photos — pending

**Unblocked by:** client-supplied non-AI photography.

> The hero image currently in use is under a **try licence for design purposes only**.
> It must be replaced with a client-supplied or properly licensed photo before launch.

---

## Gallery & Legal Pages

- [ ] Gallery content — `src/data/gallery.ts` + `public/images/placeholder-gallery-*.jpg`
- [ ] Gallery decision — if fewer than 12 real photos at launch, move Gallery into About Us and remove from main nav (per brief)
- [ ] Privacy Policy content — `src/app/privacy/page.tsx` — placeholder draft, needs legal review + Bahasa Malaysia version (PDPA)
- [ ] T&Cs content — `src/app/terms/page.tsx` — placeholder draft, needs legal review; confirm whether MFAA STC applies
- [ ] PDPA details — retention period, third-party disclosures, security measures — marked `[PLACEHOLDER]` in privacy page

**Unblocked by:** client legal review.

---

## Footer / Registration

- [ ] SSM registration number — `src/components/layout/Footer.tsx`
- [ ] Licence / membership logos — `src/components/layout/Footer.tsx`

**Unblocked by:** client registration details.

---

## Forms

- [ ] Web3Forms access key — `src/data/contact.ts` — currently `YOUR_ACCESS_KEY_HERE`
- [ ] Web3Forms notification email — to be set in Web3Forms dashboard when connected
- [ ] Form submission storage — Web3Forms free tier forwards email only; flag for client if a queryable store is required
- [ ] Consent checkbox link — already points to `/privacy` (page exists but is placeholder)

**Unblocked by:** form service setup + client email confirmation.

> While the Web3Forms key is a placeholder, form submissions return
> "not yet connected" errors by design — no fake success.

---

## Out of Scope (for now)

Confirmed deferred unless the client adds them to scope:

- Blog / News (SEO)
- Careers page
- Shipment tracking
- Multi-language (English only at launch)

---

## Notes

- Every string marked `[PLACEHOLDER]` in the codebase is intentional and should remain visible to the client until resolved.
- Do not invent numbers, licences, or case-study results. Leave `X` or `[PLACEHOLDER]` visible instead.
- Before launch, run a final pass: search the codebase for `PLACEHOLDER` and `placeholder` to catch anything unlisted.