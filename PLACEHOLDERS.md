# Placeholders Tracker

Every placeholder in the project is listed here. When real assets/data arrive, I will update the file path listed and remove the row.

## Brand
- [ ] Logo — `src/components/layout/Header.tsx` (text logo placeholder)
- [ ] Brand colors — `src/app/globals.css` (using Tailwind defaults)
- [ ] Fonts — `src/app/layout.tsx` (using Inter)

## Contact Details
- [ ] Business email — `src/data/contact.ts` (placeholder: info@ramsydex.example)
- [ ] Phone / WhatsApp — `src/data/contact.ts` (placeholder: +60 12-345 6789)
- [ ] Full address — `src/data/contact.ts` (placeholder: Central Malaysia)
- [ ] Business hours + timezone — `src/data/contact.ts` (placeholder: Mon–Fri 9am–6pm MYT)

## Trust Bar Stats
- [ ] "X Countries Covered" — `src/components/sections/TrustBar.tsx`
- [ ] "X Shipments Yearly" — `src/components/sections/TrustBar.tsx`
- [ ] 99.5% on-time proof — source + period TBD
- [ ] 32 years clarification (company vs. team)

## Services
- [ ] 18 card bullets — `src/data/services.ts` — DRAFTS written, pending client confirmation
- [ ] 6 service card images — `public/images/placeholder-service-*.jpg` (currently missing, showing gray placeholders)
- [ ] Cargo types / vehicle types / operating areas — `src/data/solutions.ts` — all six services currently show [PLACEHOLDER] in these three fields
- [ ] Direct vs. partner for air/ocean — pending
- [ ] Insurance / repacking / labeling offered? — pending

## Global Network
- [ ] Network teaser map image — `src/components/sections/NetworkTeaser.tsx` — currently a gray placeholder box; replace with a real static map/SVG once country list is confirmed
- [ ] Country list for map — `src/components/sections/WorldMap.tsx` (using 5 placeholders)
- [ ] Trade corridor details — pending

## About
- [ ] "32 years" clarification — `src/data/about.ts` — company vs. team experience (client to confirm)
- [ ] Credentials & memberships — `src/data/about.ts` — 4 placeholder entries (customs licence, FIATA/MAFFA, ISO, insurance) + logo files
- [ ] Case studies — hidden per brief; add only when real client examples are available
- [ ] Mission / vision copy — `src/data/about.ts` — draft written, client to approve

## Photos
- [ ] Hero image — `public/images/hero-placeholder.jpg`
- [ ] 6 service card images — `public/images/service-*.jpg`
- [ ] Gallery images (12+) — `public/images/gallery/*`
- [ ] Hub / trucks / team photos — pending

## Legal & Credentials
- [ ] SSM registration number — `src/components/layout/Footer.tsx`
- [ ] Privacy Policy text — `src/app/privacy/page.tsx`
- [ ] T&Cs text — `src/app/terms/page.tsx`
- [ ] Licences / memberships logos — pending

## Forms
- [ ] Formspree endpoint — `src/app/contact/page.tsx` (use test endpoint until client email confirmed)
- [ ] Database storage for submissions — Formspree only forwards email; flag for client