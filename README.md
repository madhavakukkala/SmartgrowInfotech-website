# SmartGrow Infotech — Website

The official website of [SmartGrow Infotech](https://www.smartgrowinfotech.com), a technology solutions and training company based in Madhapur, Hyderabad, India. Built with Next.js 15, TypeScript, and Tailwind CSS.

**Live booking:** every "Book a Call" button leads to `/book-a-call`, which embeds the cal.com calendar (`smartgrowinfotech`) inline.

---

## Quick start

```bash
# 1. Install dependencies (Node 18.18+ or 20+, this repo was built on Node 22)
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build + serve
npm run build
npm start
```

> Do not run `npm run build` while `npm run dev` is running. Both write to the same `.next` folder and the dev server can end up serving broken chunks. If that happens, stop everything, delete `.next`, and start the dev server again.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, static generation) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3, CSS variables for theming |
| Fonts | Satoshi (display, via Fontshare), Inter (body), JetBrains Mono (labels/stats) |
| Animation | framer-motion (hero, navbar, scroll sections), GSAP ScrollTrigger (FAQ) |
| UI primitives | Radix (accordion, switch, tooltip, label, slot) |
| Booking | cal.com inline embed |
| Icons | lucide-react + local brand SVGs |

## Pages

| Route | What it is |
|---|---|
| `/` | One-pager: hero, `#services`, `#our-works`, `#achievements`, `#faq`, CTA |
| `/services` | All nine services grouped by category |
| `/services/branding` · `/services/technology` · `/services/marketing` · `/services/training` | Category pages |
| `/services/<slug>` | Nine service detail pages (overview, scope, process timeline, stack, results, CTA) |
| `/about` | Company story, stats, vision, mission, values, FAQs |
| `/about/team` | Team page (role cards, names are placeholders for now) |
| `/about/career` | Internships and the US talent pool, how to apply |
| `/contact` | Contact channels, stats, services directory |
| `/book-a-call` | Inline cal.com scheduler + WhatsApp and phone buttons |
| `/technology` | The full technology index (10 groups) |
| `/company` | Redirects to `/about` |
| anything else | Custom 404 (the star logo plays the zero in "4 0 4") |

## Project structure

```
app/                    # Routes (App Router)
  layout.tsx            # Fonts, theme provider, header, navbar, footer
  globals.css           # Theme variables, dot grid, marquee, eyebrow styles
  page.tsx              # Home
  services/[slug]/      # Service details AND category pages (categories win)
  book-a-call/          # cal.com embed page
components/
  ui/                   # Building-block components (hero, cards, navbar,
                        # scroll sections, FAQ accordion, timeline, footer bits)
  home/                 # Home page sections (hero, services, our work, ...)
  site-header.tsx       # Logo + Book a Call (top row, scrolls away)
  floating-navbar.tsx   # The pill navbar (dropdowns, mobile hamburger)
  cta-strip.tsx         # "Next step" section with office photo background
  cal-embed.tsx         # cal.com inline embed, synced to the theme toggle
lib/
  site.ts               # Contact info, nav structure, booking URL
  content.ts            # ALL site copy: services, categories, stats,
                        # case studies, testimonials, FAQs, tech index
public/
  logo/                 # Brand logos (light/dark/mark/star variants)
  ai-logos/             # Colorful AI brand logos floating in the hero
  companies/            # Hiring-company logos for the marquee
  cta-office.jpg        # "Next step" section background image
Logo/                   # Original brand assets (source)
website components/     # Original component snippets the UI was built from
Websiteinfo.txt         # The content blueprint (source of truth for copy)
```

## Where to change things

Almost everything an owner would want to edit lives in two files:

- **`lib/site.ts`** — phone, email, WhatsApp link, location, the booking URL, the cal.com link, and the navbar structure.
- **`lib/content.ts`** — every piece of page copy: the nine services (including their detail pages), service categories, statistics, case studies, client testimonials, FAQs, company story, and the technology index. Edit here and the pages update.

Other common edits:

| Change | Where |
|---|---|
| Book a Call destination | `BOOK_CALL_URL` in `lib/site.ts` |
| cal.com account/event | `CAL_LINK` in `lib/site.ts` |
| "Next step" background photo | Replace `public/cta-office.jpg` |
| Team names and photos | `app/about/team/page.tsx` (placeholders marked) |
| Theme colors | CSS variables in `app/globals.css` (`:root` = light, `.dark` = dark) |
| Rotating hero words | `ROTATING_WORDS` in `components/home/hero.tsx` |
| Hero floating logos | `public/ai-logos/` + the icons list in `components/home/hero.tsx` |

## Design system

Extracted from the reference site (codedale.tech) at roughly an 80/20 blend with SmartGrow's own brand:

- **Type**: Satoshi for headings, Inter for body. Headline 50px desktop / 34px mobile, body 15px. Letter spacing is packed: -0.5px globally, -2.5px on the hero headline.
- **Colors**: white background with a neutral gray scale, blue `#0067f3` for select headings and links. Dark mode is pure black. SmartGrow's orange appears in the circuit-dot eyebrows and logo.
- **Signature touches**: dotted-grid hero backdrop, the pulsing "Only 2 open slots available!" badge, the avatars + stars reviews widget, the circuit-trace section eyebrows.
- **Navbar**: floating pill, visible at the top, hides on scroll down, returns on scroll up. Services and About open hover dropdowns on desktop; mobile gets a hamburger menu.
- **Writing rules**: plain, human English. No em dashes, no fluff, no delivery-time promises (timelines are discussed on the call), and no pricing anywhere on the site.

## Content rules (from the blueprint)

`Websiteinfo.txt` is the source of truth for all copy. The standing rules:

1. **No pricing anywhere.** Every service funnels to a booked call.
2. **No invented facts.** Stats, quotes, and figures come from the brand file.
3. Stipends, salary outcomes, and program durations are allowed; project delivery timelines are not.
4. Social links, legal pages, and team names do not exist in the brand file, so the site does not show them (team page uses labeled placeholders).

## Deployment

The repo is Vercel-ready:

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Framework preset: Next.js (auto-detected). No environment variables needed.
3. Every push to `main` auto-deploys.

Any Node host works too: `npm run build` then `npm start` (port 3000 by default).

## Known items still open

- Team page names and photos are placeholders (drop photos in `public/team/` and edit `app/about/team/page.tsx`).
- `public/cta-office.jpg` is a stock stand-in; replace with the owner-approved office photo.
- FAQ wording was drafted from the brand file and awaits final owner sign-off.
- Blueprint note: verify the published statistics (500+ projects, 87% placement, etc.) before wide release.
