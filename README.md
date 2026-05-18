# Tartan Property — Next.js Landing Pages

Two landing pages for Tartan Property, built with Next.js 16 and Tailwind CSS.

## Pages
- `/` — Property Selling page (homeowners)
- `/buy` — Property Buying page (buyers & investors)

## Local Development
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Framework: Next.js (auto-detected)
4. Click Deploy

No environment variables required for the base site.

## Content to update before go-live (per brief)
- [ ] Replace placeholder stats with real figures from Creag (homes sold, avg sale time, review count)
- [ ] Replace placeholder testimonials with real reviews
- [ ] Confirm 2 vs 3 sale routes for selling page
- [ ] Confirm geographic focus (Scotland-wide vs central belt vs specific cities)
- [ ] Add real property listings to FeaturedProperties component (or wire to CMS)
- [ ] Replace buyer fee FAQ wording once Creag confirms pricing model
- [ ] Add real contact details to Footer
- [ ] Add Tartan Property logo image (replace text "TP" logo)

## Shared Components (in /components/shared/)
Header, Footer, TrustStats, HowItWorks, Testimonials, WhyTartan, FAQ

## Brand System
- Navy: #0F1F2E | Gold: #C9A84C | Cream: #F7F4EE
- Display font: Fraunces (serif) | Body: DM Sans
