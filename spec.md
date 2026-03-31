# Nutrisystem Affiliate Landing Page

## Current State
The app currently contains a CreditBuilderIQ credit score affiliate landing page in App.tsx. It includes a sticky header, hero section, trust bar, features, pricing, testimonials, CTA banner, and footer — all linked to the CreditBuilderIQ affiliate URL.

The new uploaded Nutrisystem logo is available at: `/assets/images-019d42c8-6d97-708e-a058-297c6fd6e5db.png`

## Requested Changes (Diff)

### Add
- New Nutrisystem-specific affiliate landing page replacing App.tsx content entirely
- Sticky header with the Nutrisystem logo image (`/assets/images-019d42c8-6d97-708e-a058-297c6fd6e5db.png`)
- Hero section with strong weight loss CTA and the Nutrisystem logo prominently displayed
- Stats/trust bar (e.g. meals delivered, average weight lost, customer count)
- How It Works section (3-step process: choose plan, get food delivered, lose weight)
- Plan tiers section with 3 plans (Basic, Uniquely Yours, Uniquely Yours Ultimate)
- Real food/meal highlights section
- Testimonials section (3 real-feeling testimonials with weight loss results)
- Final CTA banner
- Footer with affiliate disclaimer

### Modify
- AFFILIATE_URL constant → change to: https://www.nutrisystem.com/diet-plans/nutrisystem-program
- All CTAs throughout the page link to the Nutrisystem affiliate URL
- Remove all credit score / CreditBuilderIQ-specific content
- Brand colors should reflect Nutrisystem (green accent from logo leaf, dark gray text on white)

### Remove
- All CreditBuilderIQ branding, copy, features, and plans
- Credit score dashboard imagery
- All credit-related icons and content

## Implementation Plan
1. Replace App.tsx entirely with the Nutrisystem landing page
2. Sticky header: use Nutrisystem logo image in header, white background, nav links, CTA button
3. Hero: large headline about weight loss/meal delivery, Nutrisystem logo, affiliate CTA buttons
4. Trust bar: stats like "50+ years of proven results", "millions of customers", "avg 11.6 lbs lost in first month"
5. How It Works: 3-step cards
6. Plans: 3 pricing tiers all linking to affiliate URL (Basic, Uniquely Yours, Uniquely Yours Ultimate)
7. Food highlights: showcase meal variety (use text/icons, no generated images needed)
8. Testimonials: 3 cards with weight loss results and star ratings
9. CTA banner + footer with affiliate disclaimer
10. Validate and deploy
