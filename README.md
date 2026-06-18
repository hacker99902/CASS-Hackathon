# IEEE CASS Hackathon 2026 — Website

Production-ready Next.js 15 website for the IEEE Circuits and Systems Society Hackathon.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules (no Tailwind) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home page (all sections)
│   └── results/
│       └── page.tsx        # Results page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky blurred navbar
│   │   └── Footer.tsx      # Footer with links + social
│   └── sections/
│       ├── Hero.tsx         # Hero + live countdown
│       ├── About.tsx        # Stats with animated counters
│       ├── Domains.tsx      # Domain cards
│       ├── ProblemStatements.tsx  # Accordion
│       ├── Prizes.tsx       # Podium prize cards
│       ├── Timeline.tsx     # Horizontal (desktop) / Vertical (mobile)
│       ├── Sponsors.tsx     # Tiered sponsor grid
│       ├── FAQ.tsx          # Accordion FAQ
│       └── RegistrationCTA.tsx   # Bottom CTA
│
├── config/
│   ├── site.json           # ← Edit ALL event data here
│   └── domains.json        # ← Edit domains + problem statements here
│
├── styles/
│   └── globals.css         # CSS variables + base styles
│
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## Customisation Guide

### Update Event Info

Edit **`src/config/site.json`**:

```json
{
  "name": "IEEE CASS Hackathon 2026",
  "registrationUrl": "https://unstop.com/your-actual-link",
  "contactEmail": "your@email.com",
  "resultsAnnounced": false
}
```

### Update Problem Statements

Edit **`src/config/domains.json`** — replace placeholder titles, descriptions, objectives, deliverables, and evaluation criteria.

### Announce Results

1. Set `"resultsAnnounced": true` in `site.json`
2. Fill in the `results` object with actual team data

### Update Countdown Target

In `src/components/sections/Hero.tsx`, change:
```ts
const HACKATHON_DATE = new Date("2026-02-22T09:00:00+05:30");
```

### Replace Sponsor Logos

In `src/components/sections/Sponsors.tsx`, replace the placeholder `<span>` elements with actual `<img>` tags pointing to your logo files placed in `/public/sponsors/`.

### Update Colors

All colors are CSS variables in `src/styles/globals.css`:
```css
--ieee-blue: #006fef;
--cyan: #17c5a2;
```

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Self-hosted

```bash
npm run build
npm start
```

---

## Key Features

- **Live countdown timer** — updates every second to hackathon start
- **Animated stat counters** — trigger on scroll into view
- **Accordion problem statements** — smooth expand/collapse with all details
- **Responsive timeline** — horizontal on desktop, vertical on mobile
- **Results page** — shows "coming soon" state until `resultsAnnounced: true`
- **Sticky blurred navbar** — glass effect activates on scroll
- **SEO ready** — OpenGraph + Twitter meta tags via Next.js Metadata API
- **Accessibility** — ARIA labels, roles, keyboard navigation, focus styles