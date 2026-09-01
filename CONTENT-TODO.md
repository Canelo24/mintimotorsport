# CONTENT-TODO

Every factual placeholder on the site, grouped by page. Each renders as a visible dashed
**TBC** chip until replaced. Nothing on this list should be guessed — every value needs the
named source.

## Global (`content/site.ts`)
| Item | Needed | From |
|---|---|---|
| Enquiries email | Public email address (set `NEXT_PUBLIC_CONTACT_EMAIL`) | Joey |
| ~~Office phone~~ | **DONE** — official line +254 799 839012 (client-supplied 2026-09-01; env var overrides) | — |
| ~~WhatsApp number~~ | **DONE** — same official number; if that line has no WhatsApp, say so and it comes off | — |
| Booking URL | Calendly/SavvyCal link for the post-enquiry call step (set `NEXT_PUBLIC_BOOKING_URL`) | Joey |
| Workshop address + exact coordinates | Street address; rail/footer currently show Nairobi city coords | Joey |
| Social links | Instagram / YouTube / LinkedIn URLs, if wanted | Joey |
| Production domain | Set `NEXT_PUBLIC_SITE_URL` | whoever owns DNS |
| Founding year | Footer "family-run since" | Joey |

## Home (`content/home.ts`)
| Item | Needed | From |
|---|---|---|
| Years operating in East Africa | Credibility strip numeral | Joey |
| Crews run to date | Credibility strip numeral | Joey |
| ~~Engine / gearbox / suspension spec~~ | **DONE**, from the client package sheet (BDG 2.0, Hollinger ZF, Reiger) | — |
| Crew chief name | People card (photo too — see ASSETS-NEEDED) | Joey |
| Heritage years ×5 | Founding, EASCR stake, Duncan/Tundo, Wahome/Khan, MST announcement | Joey |
| Seats available | "The ask" scarcity line — real number only (event now named: EASCR 2027) | Joey |
| EASCR 2027 event dates | Campaign copy currently names the event without dates | Joey |

## The Drive (`content/drive.ts`, `lib/schemas.ts`)
| Item | Needed | From |
|---|---|---|
| Licensing window (months before event) | Timeline row | Joey |
| Build window (months before event) | Timeline row | Joey |
| "From" price, The Finish / The Result / The Programme | Three package tiers (2027 seat now priced publicly: US$250,000 per client sheet) | Joey |
| Budget band boundaries | Enquiry step 4 bands (currently £100k/£250k splits as a starting point) | Joey |
| Response SLA | Confirmation promises "two working days" — confirm or change | Joey |
| Entrant brief PDF | The "request the brief" flow captures emails now; pack is sent manually until a PDF exists | Joey |

## The Cars (`content/cars.ts`)
| Item | Needed | From |
|---|---|---|
| Mk1 engine / gearbox / weight | Spec table | MST |
| ~~Mk2 spec~~ | **DONE**, from the client package sheet | — |
| MST trademark disclaimer | Exact partner-mandated wording | MST |

## The Team (`content/team.ts`)
| Item | Needed | From |
|---|---|---|
| Service crew headcount | Facts table | Joey |
| Crew names, roles, photos | "The 2am department" section placeholder | Joey |

## Heritage (`content/heritage.ts`)
| Item | Needed | From |
|---|---|---|
| EASCR stake tenure (from–to years) | Stewardship block + timeline | Joey |
| Ian Duncan years with Minti | Crew card | Joey |
| Carl Tundo years with Minti | Crew card | Joey |
| Wahome/Khan year + car | Crew card | Joey |
| All eight timeline years | Timeline | Joey |

## Journal (`content/journal/`)
Three evergreen craft essays ship as launch content (no factual claims). Real build diaries
and event reports should replace/join them — needs whoever holds the team's photo archive
and stories.

## Legal
Privacy / Terms / Cookies are drafts flagged on-page — **legal counsel must approve before
launch** (see CLIENT_CONFIRMATION_CHECKLIST.md).
