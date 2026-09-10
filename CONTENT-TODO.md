# CONTENT-TODO

**Go-live pass, 2026-09-10: the site now renders zero TBC chips.** Every remaining
gap below is either invisible on the site (dropped rather than guessed) or a nice-to-have.
Nothing on this list should be guessed — every value needs the named source.

## Resolved this round (client, 2026-09-10)
| Item | Value |
|---|---|
| Founding year | **2017** (footer, home heritage strip, heritage timeline) |
| EASCR stake years | **from 2020** (shown as "FROM 2020"; wording stays past-tense) |
| Crews run | **from 2017** |
| Workshop address | **Galleria Business Park, Loita** (footer, contact, team facts) |
| Enquiries email | **mintimotorsports@gmail.com** (site-wide default; env var overrides) |
| Joey portrait | Supplied (helmet portrait) — home people card + team page |
| Car spec tables | **Removed from the site** on client instruction (with Dunlop mentions) |
| Package tier pricing | All tiers now "priced on application" (hire cost withheld, decision 35) |

## Still open (site says nothing rather than guessing)
| Item | Where it would go | From |
|---|---|---|
| Seats available for 2027 | "The ask" now says "applications open" — a real number would sharpen it | Joey |
| EASCR 2027 event dates | Campaign copy names the event without dates | organisers/Joey |
| Crew names, roles, photos | "The 2am department" on The Team | Joey |
| Crew chief name + portrait | Third people card on home | Joey |
| Social links | Instagram / YouTube / LinkedIn URLs, if wanted | Joey |
| Booking URL | Calendly etc. for the post-enquiry call step (`NEXT_PUBLIC_BOOKING_URL`) | Joey |
| Exact workshop coordinates | Rail/footer show Nairobi city coords | Joey |
| Response SLA | Confirmation promises "two working days" — confirm or change | Joey |
| Entrant brief PDF | "Request the brief" captures emails; pack is sent manually until a PDF exists | Joey |
| Per-crew years (Duncan, Tundo, Wahome/Khan) | Heritage crew cards (currently car names only) | Joey |
| MST trademark disclaimer | Exact partner-mandated wording, if MST requires one | MST |

## Launch env vars (Vercel)
| Var | Why |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The bought domain — canonicals, OG and sitemap derive from it |
| `RESEND_API_KEY` | Turns on enquiry email delivery to mintimotorsports@gmail.com (see README "Lead delivery") |

## Journal
Three evergreen craft essays ship as launch content (no factual claims). Real build diaries
and event reports should replace/join them — needs whoever holds the team's photo archive
and stories.

## Legal
Privacy / Terms / Cookies are drafts flagged on-page — **legal counsel must approve before
launch** (see CLIENT_CONFIRMATION_CHECKLIST.md).
