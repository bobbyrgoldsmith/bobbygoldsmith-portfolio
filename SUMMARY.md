# bobbygoldsmith-portfolio — Project Summary

## Overview

Personal portfolio site for Bobby R. Goldsmith at **bobbygoldsmith.dev**. Serves as a hybrid portfolio for both consulting prospects and potential employers, showcasing projects, career history, and technical depth.

## Tech Stack

- **Framework**: Next.js 15.5.12 (App Router) + TypeScript
- **Styling**: Tailwind CSS 3 (permanent dark theme, `#0a0a0a` base)
- **Animation**: Framer Motion 11 (fade-in-on-scroll, stagger, hover lift)
- **Fonts**: Inter via `next/font/google`
- **Analytics**: Vercel Analytics + Speed Insights
- **Deploy**: Vercel (auto-deploy from GitHub on push to `main`)
- **Package manager**: yarn

## URLs & Infrastructure

| Resource | URL |
|----------|-----|
| Production | https://bobbygoldsmith.dev (pending DNS) |
| Vercel Preview | https://bobbygoldsmith-portfolio.vercel.app |
| GitHub Repo | https://github.com/bobbyrgoldsmith/bobbygoldsmith-portfolio |
| Vercel Project | bobbyrgoldsmiths-projects/bobbygoldsmith-portfolio |

### DNS (Cloudflare — not yet configured)

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | @ | 76.76.21.21 | DNS only |
| CNAME | www | cname.vercel-dns.com | DNS only |

## File Structure

```
bobbygoldsmith-portfolio/
├── package.json
├── next.config.js              # outputFileTracingRoot set, TS errors ignored
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
├── yarn.lock
├── public/
│   ├── headshot.jpg            # Copied from ~/Desktop/IMG_3421.jpg
│   └── bobby-goldsmith-resume.pdf  # Copied from ~/Documents/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind imports, dark scrollbar, smooth scroll
│   │   ├── layout.tsx          # Metadata, SEO, JSON-LD (Person schema), Analytics
│   │   ├── page.tsx            # Composes all section components
│   │   ├── icon.tsx            # "BG" monogram gradient favicon (32x32)
│   │   ├── opengraph-image.tsx # OG image (1200x630)
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky, scroll-aware, mobile hamburger, gradient Resume CTA
│   │   ├── Hero.tsx            # Full-height, availability badge, headshot, 3 CTAs, social icons
│   │   ├── About.tsx           # Two-column: narrative + "At a Glance" sidebar card
│   │   ├── Skills.tsx          # 6-category card grid with cyan pill tags
│   │   ├── Projects.tsx        # 8 project cards, colored accent bars, status badges
│   │   ├── Experience.tsx      # Alternating vertical timeline, 5 roles
│   │   ├── Contact.tsx         # Email/GitHub/LinkedIn cards + resume download
│   │   └── Footer.tsx          # Copyright + built-with line
│   └── lib/
│       ├── motion.ts           # Framer Motion presets (fadeInUp, stagger, scaleOnHover, etc.)
│       └── data.ts             # All content data (personal info, skills, projects, experience, nav)
```

## Design System

- **Background**: `#0a0a0a` base, `#0f172a` card surfaces
- **Accent gradient**: cyan `#06b6d4` to blue `#3b82f6` (CTAs, highlights, gradient text, section dividers)
- **Typography**: Inter, white (`text-white`) for headings, slate (`text-slate-300/400/500`) for body
- **Animations**: `whileInView` fade-in-up on all sections, staggered children, `whileHover` lift on cards
- **No light mode** — permanently dark

## Sections & Content

### Hero
- Availability badge (green pulse + "Available for consulting & full-time opportunities")
- Name: "Bobby R. Goldsmith" (large)
- Title gradient text: "Technical Architect & Automation Engineer"
- Tagline: "Building intelligent automation at the intersection of QA, DevOps, and AI."
- 3 CTAs: "View Projects" (gradient filled) | "Download Resume" (cyan outlined) | "Bashmatica!" (emerald outlined, links to bashmatica.beehiiv.com)
- Circular headshot with cyan glow
- Social icons: GitHub, LinkedIn, YouTube

### About
- 3 paragraphs: career arc from 4WP operations to QA Lead to NodeBridge consulting
- "At a Glance" card: 13+ Years, Principal Consultant, NodeBridge, QA Lead @ 4WP, Scrum Master CSM, LA

### Skills (6 categories)
1. Languages: Python, JavaScript, TypeScript, Bash, SQL
2. Test Automation: Playwright, Selenium, pytest, JMeter, MCPs
3. DevOps & Infra: Docker, K8s, CI/CD, Jenkins, CircleCI, RHEL, Ansible
4. AI & Automation: MCP Tools, n8n, LLM Integration, Agentic Testing
5. Web & Data: Next.js, React, FastAPI, Snowflake, Azure Data Bricks
6. Process: Scrum Master, Agile, JIRA, Confluence, Release Management

### Projects (8 cards)
1. TestScout MCP Suite (cyan, In Development) — testscout.dev
2. LightScout (emerald, Chrome Web Store) — testscout.dev/lightscout
3. BugSnap (blue, In Development)
4. LLM Web Scraper (purple, Complete) — github.com/bobbyrgoldsmith
5. Autonomous Agent System (orange, Production)
6. NodeBridge Automation (teal, Active) — nodebridge.dev
7. PDF Reactor (red, Complete)
8. Bashmatica Scripts (green, Open Source) — github.com/bobbyrgoldsmith

### Experience (vertical timeline, newest first)
1. Principal Consultant — NodeBridge Automation Solutions (2024–Present)
2. QA Lead — 4 Wheel Parts (2020–2024)
3. Senior QA Analyst — 4 Wheel Parts (2017–2020)
4. QA Analyst — 4 Wheel Parts (2014–2017)
5. Internet Operations Specialist — 4 Wheel Parts (2012–2013)

### Contact
- 3 link cards: Email (bobby@bobbygoldsmith.dev), GitHub, LinkedIn
- Large "Download Resume" gradient button

### Footer
- "2026 Bobby R. Goldsmith. Built with Next.js, Tailwind CSS, and Framer Motion."

## SEO

- JSON-LD Person schema in layout (name, url, jobTitle, worksFor, sameAs)
- Dynamic favicon: "BG" monogram with cyan-blue gradient
- Dynamic OG image: 1200x630, dark background, name + title + tagline
- robots.ts: allow all, sitemap reference
- sitemap.ts: single URL (bobbygoldsmith.dev), monthly frequency
- Full OpenGraph + Twitter card metadata

## Git History

1. `1934033` — Initial portfolio site for bobbygoldsmith.dev
2. `e4db6d8` — Update name to Bobby R. Goldsmith and add newsletter CTA
3. `d68adc2` — Rename newsletter button to Bashmatica!
4. `93a0b9f` — Add YouTube social icon to hero section

## Known Notes

- `next.config.js` has `outputFileTracingRoot` set to `__dirname` to work around a root-level `package-lock.json` at `~/` that confuses Next.js workspace detection
- `typescript.ignoreBuildErrors: true` for framer-motion 11 type compat (same as testscout-landing)
- Build takes ~15s on Vercel (30-core turbo), but was very slow locally due to machine resource issues during initial development session
- Vercel Analytics/Speed Insights console errors are expected when running locally (they only work on Vercel)
- DNS records for bobbygoldsmith.dev still need to be added in Cloudflare
