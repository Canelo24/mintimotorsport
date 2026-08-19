# CONTENT-TODO

Every factual placeholder on the site, grouped by page. Each renders as a visible dashed
**TBC** chip until replaced. Nothing on this list should be guessed — every value needs the
named source.

## Global (`content/site.ts`)
| Item | Needed | From |
|---|---|---|
| Enquiries email | Public email address (set `NEXT_PUBLIC_CONTACT_EMAIL`) | Jeet |
| Office phone | Number with country code (set `NEXT_PUBLIC_CONTACT_PHONE`) | Jeet |
| WhatsApp number | Digits, intl format (set `NEXT_PUBLIC_WHATSAPP_NUMBER`) — header button and contact page stay hidden until set | Jeet |
| Booking URL | Calendly/SavvyCal link for the post-enquiry call step (set `NEXT_PUBLIC_BOOKING_URL`) | Jeet |
| Workshop address + exact coordinates | Street address; rail/footer currently show Nairobi city coords | Jeet |
| Social links | Instagram / YouTube / LinkedIn URLs, if wanted | Jeet |
| Production domain | Set `NEXT_PUBLIC_SITE_URL` | whoever owns DNS |
| Founding year | Footer "family-run since" | Joey |

## Home (`content/home.ts`)
| Item | Needed | From |
|---|---|---|
| Years operating in East Africa | Credibility strip numeral | Joey/Jeet |
| Crews run to date | Credibility strip numeral | Jeet |
| Engine / gearbox / suspension spec lines | Car section spec block | MST / Jeet |
| Crew chief name | People card (photo too — see ASSETS-NEEDED) | Jeet |
| Heritage years ×5 | Founding, EASCR stake, Duncan/Tundo, Wahome/Khan, MST announcement | Joey |
| Seats available + next event name/date | "The ask" scarcity line — real numbers only | Jeet |

## The Drive (`content/drive.ts`, `lib/schemas.ts`)
| Item | Needed | From |
|---|---|---|
| Licensing window (months before event) | Timeline row | Jeet |
| Build window (months before event) | Timeline row | Jeet |
| "From" price — The Finish / The Result / The Programme | Three package tiers | Jeet (sign-off from Joey) |
| Budget band boundaries | Enquiry step 4 bands (currently £100k/£250k splits as a starting point) | Jeet |
| Response SLA | Confirmation promises "two working days" — confirm or change | Jeet |
| Entrant brief PDF | The "request the brief" flow captures emails now; pack is sent manually until a PDF exists | Jeet |

## The Cars (`content/cars.ts`)
| Item | Needed | From |
|---|---|---|
| Mk1 engine / gearbox / weight | Spec table | MST |
| Mk2 engine / gearbox / weight | Spec table | MST |
| MST trademark disclaimer | Exact partner-mandated wording | MST |

## The Team (`content/team.ts`)
| Item | Needed | From |
|---|---|---|
| Service crew headcount | Facts table | Jeet |
| Crew names, roles, photos | "The 2am department" section placeholder | Jeet |

## Heritage (`content/heritage.ts`)
| Item | Needed | From |
|---|---|---|
| EASCR stake tenure (from–to years) | Stewardship block + timeline | Joey |
| Ian Duncan years with Minti | Crew card | Joey/Jeet |
| Carl Tundo years with Minti | Crew card | Joey/Jeet |
| Wahome/Khan year + car | Crew card | Joey/Jeet |
| All eight timeline years | Timeline | Joey |

## Journal (`content/journal/`)
Three evergreen craft essays ship as launch content (no factual claims). Real build diaries
and event reports should replace/join them — needs whoever holds the team's photo archive
and stories.

## Legal
Privacy / Terms / Cookies are drafts flagged on-page — **legal counsel must approve before
launch** (see CLIENT_CONFIRMATION_CHECKLIST.md).
