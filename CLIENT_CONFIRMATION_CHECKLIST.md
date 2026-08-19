# CLIENT CONFIRMATION CHECKLIST

Everything Minti must approve or supply before launch. Companion to `CONTENT-TODO.md`
(field-by-field detail) and `ASSETS-NEEDED.md` (photography).

## Factual sign-off (Joey / Jeet)
- [ ] EASCR wording: site states the controlling stake **in the past tense** and that the
      event is now independently run — approve the exact copy on `/heritage` and `/`
- [ ] Driver framing: Duncan, Tundo, Wahome & Khan presented as "crews we have run",
      past tense — approve copy and supply the years
- [ ] MST partnership description on `/the-cars` and `/` — approve wording; supply any
      partner-mandated trademark disclaimer
- [ ] All heritage/timeline years (currently visible TBC chips)
- [ ] Founding year, years operating, crews-run count
- [ ] Car specification lines (engine, gearbox, suspension, weights) — from MST
- [ ] Crew chief name + service crew details
- [ ] Scarcity line: seats available and next event name/date — real numbers only

## Commercial (Jeet)
- [ ] Package names and inclusions (The Finish / The Result / The Programme)
- [ ] "From" prices for each tier
- [ ] Budget bands in the enquiry form (currently £100k / £250k boundaries)
- [ ] Response SLA (site currently promises a reply within two working days)
- [ ] Entrant brief PDF (the request-the-brief flow already captures emails)

## Contact & infrastructure
- [ ] Enquiries email, phone, WhatsApp number (env vars — see `.env.example`)
- [ ] Call booking URL (Calendly or similar) for the post-enquiry step
- [ ] Lead destination configured and test submission received (`lib/leads.ts` /README)
- [ ] Production domain set (`NEXT_PUBLIC_SITE_URL`) + DNS on Vercel
- [ ] Analytics choice: Plausible domain or GA4 ID (or neither)
- [ ] Social links, if wanted in the footer

## Assets
- [ ] P1 photography supplied and swapped in (see `ASSETS-NEEDED.md`)
- [ ] Heritage/archive images: usage rights and photographer credits confirmed —
      especially Duncan, Tundo, and Wahome/Khan images (personal consent)
- [ ] OG share image (1200×630)
- [ ] Final logo files if the header wordmark should be replaced with the supplied logo

## Legal (counsel)
- [ ] Privacy page reviewed and approved (currently a flagged draft)
- [ ] Terms page reviewed and approved (currently a flagged draft)
- [ ] Cookies page reviewed and approved (currently a flagged draft)
- [ ] Programme agreement referenced on `/the-drive` exists and matches the site's claims
      (damage/excess, what's included, continuation provisions)

## Pre-launch technical pass
- [ ] Lighthouse on production URL: Performance ≥ 90 mobile, Accessibility ≥ 95, SEO 100
- [ ] End-to-end enquiry test: submit → lead arrives → reply within promised SLA
- [ ] `npm run placeholders` re-run after final photography (refreshes blur data)
