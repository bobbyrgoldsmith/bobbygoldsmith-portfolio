# Resume Prompt — bobbygoldsmith-portfolio

Use this prompt to resume work on the portfolio site in a future session.

---

## Prompt

I need to continue working on my personal portfolio site. Here's the context:

**Project**: bobbygoldsmith-portfolio
**Location**: `/Users/bobbyg/Documents/bobbygoldsmith-portfolio/`
**Live URL**: https://bobbygoldsmith.dev (Vercel preview: https://bobbygoldsmith-portfolio.vercel.app)
**GitHub**: https://github.com/bobbyrgoldsmith/bobbygoldsmith-portfolio
**Deploy**: Vercel auto-deploys on push to `main`

### Tech Stack
- Next.js 15.5.12 (App Router) + TypeScript
- Tailwind CSS 3 (permanent dark theme, #0a0a0a base, cyan/blue accent gradient)
- Framer Motion 11 (fade-in-on-scroll animations)
- Inter font, Vercel Analytics + Speed Insights
- Package manager: yarn

### Architecture
- Single-page portfolio with 7 sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- All content data lives in `src/lib/data.ts` (projects, experience, skills, personal info, nav links)
- Motion presets in `src/lib/motion.ts`
- Each section is a separate component in `src/components/`
- SEO: JSON-LD Person schema, dynamic favicon + OG image, robots.ts, sitemap.ts
- Public assets: `public/headshot.jpg`, `public/bobby-goldsmith-resume.pdf`

### Key Files
- `src/lib/data.ts` — All content (edit here to update projects, experience, skills, etc.)
- `src/components/Hero.tsx` — Hero with 3 CTAs (View Projects, Download Resume, Bashmatica!) and social icons (GitHub, LinkedIn, YouTube)
- `src/components/Projects.tsx` — 8 project cards with colored accent bars and status badges
- `src/components/Experience.tsx` — Vertical alternating timeline, 5 roles
- `src/app/layout.tsx` — Root layout with metadata, JSON-LD, analytics

### DNS Status
Cloudflare DNS records needed (may or may not be configured yet):
- A record: `@` → `76.76.21.21` (DNS only)
- CNAME: `www` → `cname.vercel-dns.com` (DNS only)

### Important Notes
- `next.config.js` has `outputFileTracingRoot` set to work around root-level `~/package-lock.json`
- `typescript.ignoreBuildErrors: true` for framer-motion 11 compat
- The `SUMMARY.md` file in the project root has the full detailed summary
- Pattern reference: this project follows the same patterns as `test-scout/testscout-landing/`

### Workflow
```bash
cd /Users/bobbyg/Documents/bobbygoldsmith-portfolio
yarn dev        # Dev server
yarn build      # Production build
git push        # Auto-deploys to Vercel
```

Please read `SUMMARY.md` in the project root for full details, then let me know what you'd like to work on.

---

## Potential Future Work

- Configure Cloudflare DNS records (if not done yet)
- Add Google Analytics (GA4) alongside Vercel Analytics
- Add Google Search Console verification meta tag
- Mobile responsive testing and refinements
- Lighthouse audit optimization (target 90+ across all categories)
- Add a blog section or link to external blog
- Update project cards as projects evolve (status badges, URLs)
- Add testimonials or client logos section
- Contact form integration (e.g., Formspree, Resend)
- Custom 404 page
- Add more social links as needed
- Update resume PDF when it changes
- Update headshot photo
