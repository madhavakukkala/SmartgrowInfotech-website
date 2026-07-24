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

## Pages — complete list

Everything reachable on the site: pages, home-page anchor sections, and system pages.

| # | Page | URL | What's on it |
|---|---|---|---|
| 1 | Home | `/` | Hero (rotating word, slots badge, reviews, stats), services grid, our work, achievements, FAQs, CTA |
| 2 | Home · Services section | `/#services` | Nine service cards (navbar anchor) |
| 3 | Home · Our Work section | `/#our-works` | Case-study scroll + client testimonial marquee (navbar anchor) |
| 4 | Home · Achievements section | `/#achievements` | Stats, scroll headlines, hiring-company logo marquee (navbar anchor) |
| 5 | Home · FAQs section | `/#faq` | Scroll-driven FAQ accordion (navbar anchor) |
| 6 | Services index | `/services` | All nine services grouped by the four categories |
| 7 | Category · Branding | `/services/branding` | Web Development |
| 8 | Category · Technology | `/services/technology` | Product Dev, Mobile Apps, Consultancy, AI/ML, US IT Staffing |
| 9 | Category · Marketing | `/services/marketing` | Digital Marketing |
| 10 | Category · Training | `/services/training` | CRT Training, Internship Program, AI/ML |
| 11 | Service · Product Development | `/services/product-development` | SaaS, enterprise, marketplaces, MVPs |
| 12 | Service · Web Development | `/services/web-development` | Corporate sites, e-commerce, web apps |
| 13 | Service · Mobile App Development | `/services/mobile-app-development` | iOS, Android, cross-platform apps |
| 14 | Service · CRT Training Program | `/services/crt-training` | 60-day placement training |
| 15 | Service · Internship Program | `/services/internship-program` | Five tracks, stipends, PPO path |
| 16 | Service · Technology Consultancy | `/services/technology-consultancy` | CTO-level guidance, audits, strategy |
| 17 | Service · Digital Marketing | `/services/digital-marketing` | SEO, ads, social, content, CRO |
| 18 | Service · AI / ML Projects & Training | `/services/ai-ml` | Training program + custom AI builds |
| 19 | Service · US IT Staffing | `/services/us-it-staffing` | Pre-vetted remote developers for US teams |
| 20 | About Us | `/about` | Company story, stats, vision, mission, values, FAQs |
| 21 | Team | `/about/team` | Role cards (names are placeholders for now) |
| 22 | Career | `/about/career` | Internships, US talent pool, how to apply |
| 23 | Contact | `/contact` | Channels, stats, services directory |
| 24 | Book a Call | `/book-a-call` | Inline cal.com scheduler + WhatsApp and phone buttons |
| 25 | Technology index | `/technology` | The full tech stack, 10 groups |
| 26 | Brand guidelines | `/brand` | Logos with downloads, colors, typography, voice |
| 27 | Company (legacy) | `/company` | Redirects to `/about` |
| 28 | Not found | any unknown URL | Custom 404 (the star logo plays the zero in "4 0 4") |

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

## Deployment (Hostinger via GitHub)

The site is a static export (`output: "export"` in `next.config.mjs`), so it runs on Hostinger shared hosting with no Node server.

**How it works:** every push to `main` triggers the GitHub Action in `.github/workflows/deploy.yml`, which builds the site and publishes the `out/` folder to the **`hostinger-deploy`** branch. Hostinger clones that branch straight into `public_html`.

**One-time Hostinger setup:**

1. hPanel → your website → **Advanced → GIT**.
2. Repository: `https://github.com/madhavakukkala/SmartgrowInfotech-website`, branch: `hostinger-deploy`, directory: leave blank (deploys to `public_html`). Create.
3. Click **Deploy** once to pull the current build.
4. Copy the **webhook URL** Hostinger shows, then in GitHub: repo → Settings → Webhooks → Add webhook → paste it (content type JSON, just the push event). Now Hostinger re-pulls automatically each time the Action updates the branch.
5. Enable SSL + Force HTTPS in hPanel (cal.com requires HTTPS to embed).

After that, deploying = pushing to `main`. Nothing else.

The repo also works on Vercel (import, auto-detected) or any Node host (`npm run build && npm start`) if hosting ever changes.

## Known items still open

- Team page names and photos are placeholders (drop photos in `public/team/` and edit `app/about/team/page.tsx`).
- `public/cta-office.jpg` is a stock stand-in; replace with the owner-approved office photo.
- FAQ wording was drafted from the brand file and awaits final owner sign-off.
- Blueprint note: verify the published statistics (500+ projects, 87% placement, etc.) before wide release.
