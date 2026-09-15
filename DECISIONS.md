# DECISIONS

Judgement calls made during the build, logged per the brief's working rules. Reversible
unless marked otherwise.

## Process
1. **Built through without pausing at Phase 0.** Two versions of the brief were supplied;
   the pasted version says "stop and wait for approval" after the design plan, the uploaded
   file says "Do not stop after producing a plan. Continue through implementation." This
   session runs autonomously (no one to approve mid-task), so the plan was committed as
   `DESIGN-PLAN.md` with the self-critique applied, and the build proceeded. Everything is
   reviewable and reversible from that document.
2. **CTA vocabulary follows the pasted brief** ("Take a seat" / "See the car") over the
   file's working copy ("Build Your Safari Entry") — the pasted brief is the more specific
   and more recent instruction, and its CTA-discipline rule (heading matches CTA verb) is
   implemented: /enquire's H1 is "Take a seat."

## Stack
3. **No Framer Motion.** The file brief itself warns "do not duplicate animation systems
   unnecessarily". Route transitions are a CSS murram-sweep via `app/template.tsx`
   (<400 ms), component reveals are CSS + IntersectionObserver, GSAP handles the one pinned
   sequence. Saves ~35 KB gz on every route; nothing in the motion spec required it.
4. **Fonts self-hosted via `next/font/local`** (downloaded once from Google Fonts) rather
   than `next/font/google` — deterministic builds with no build-time network dependency.
5. **Placeholder images are generated JPGs** (sharp) with a typed manifest carrying real
   base64 blur placeholders — so `next/image` behaves identically when real photography
   replaces them. The generator is idempotent: existing files are never overwritten.
6. **Tailwind v4** (CSS-first `@theme` tokens) — the token layer lives in one place,
   `app/globals.css`, and components use utilities only.

## Design
7. **The roadbook rail uses evenly-spaced tulips**, not distance-proportional spacing —
   real roadbook pages are uniform instruction boxes, so uniform spacing is the more
   authentic reading, and it stays legible on short pages.
8. **The rail is a constant fesh-fesh paper strip** over both light and dark sections —
   read as a physical roadbook column riding along the page; also guarantees contrast.
9. **Per-page stage distances (SS1 60.2 km, etc.) are design fictions**, clearly part of
   the UI metaphor, not factual claims about any event. They are defined in
   `content/site.ts`.
10. **Countdown/coordinate-strip hero rejected** (EASCR's organiser identity). Coordinates
    appear once, small, in the credibility strip and footer — team-voice, not event-voice.

## Facts & legal
11. **Event JSON-LD deliberately omitted.** Minti is not the event organiser; marking up
    someone else's rally as our Event risks exactly the overclaim §3 forbids. Shipped:
    Organization (site-wide), Service (/the-drive), Article (journal posts).
12. **Budget bands in the enquiry** use £100k/£250k boundaries as a starting point +
    "Prefer to discuss". They are a qualification aid, not pricing, are flagged for client
    sign-off in `CONTENT-TODO.md`, and live in `lib/schemas.ts` for one-line changes.
13. **Confirmation promises "two working days"** as the response SLA — flagged for
    confirmation; a specific promise converts better than "soon" and two days is
    deliverable by a two-person front office.
14. **Journal launch content is three evergreen craft essays** with zero factual claims
    about Minti's record — publishable without sign-off, replaceable as real diaries arrive.
15. **WhatsApp header button, contact details and the booking step render only when
    configured** via env vars — no invented numbers anywhere; the site fails safe to
    visible TBC chips.
16. **Response to a missing lead destination**: submissions are logged loudly server-side
    and never silently dropped; README documents setup. A dev-only banner was considered
    and rejected — the confirmation page must never look unfinished to a real buyer.

## Client feedback round 1
18. **Mobile menu rebuilt** after the owner's "cluttered" feedback. Root cause found via
    screenshot: the menu sheet was rendered inside the header, whose `backdrop-filter`
    made it a CSS containing block — the "full-screen" menu collapsed and page content
    bled through behind the links. The menu is now a sibling of the header (true opaque
    sheet), numbering and borders removed, links centred with air, one CTA at the bottom.
19. **Programme range added** (per client): Arrive & Drive (flagship), Your Car Our Team,
    Commission a Safari Car — summarised on the home page ("Three ways in"), detailed with
    anchors on /the-drive, and reflected in the enquiry's first question. Commission copy
    stays inside verified facts (MST partnership).
20. **"Preserving Heritage"** (the strap from the supplied logo) adopted as brand language:
    footer lockup and marquee line. The logo artwork itself is NOT redrawn — the real
    files need to be supplied (see ASSETS-NEEDED "Brand files").
21. ~~Jeet Ghose confirmed as the named person~~ — **superseded, see 22.**

## Client feedback round 2
22. **Jeet Ghose removed entirely** (client instruction, 2026-08-28): this is Joey Ghose's
    project with no involvement from Jeet. Note this contradicts the original build brief
    ("founded by Joey Ghose, managed by Jeet Ghose") — the client's direct instruction
    overrides the brief. Joey is now the sole named principal: founder & team principal,
    the person enquiries go to, the name on the first call. Image slots renamed
    (people-joey-ghose, team-joey-ghose-workshop), Organization JSON-LD employee entry
    removed, docs updated. Worth one final confirmation with Joey that "family-run"
    remains accurate wording.

## Media drop 1 (2026-09-01)
23. **Hero film built** from three clips (aerial → dust approach → dust-wall pass), 13s,
    1600px, 2.5MB H.264 + WebM, muted/looping. Amended per client (round 4): mobile now
    plays a dedicated sub-1MB 960px rendition rather than falling back to the still; the
    remaining gates are reduced motion, Save-Data and 2g/3g. Same gating for the 0.5MB
    crew-at-service loop behind "the ask".
24. **Maasai herder and livestock clips not used** (FLS_4800, FLS_4847). Beautiful footage,
    but §3 explicitly rejects safari-tourism styling; without a rally-context frame (car
    passing stock on a stage) they read as tourism B-roll. Kept in the release archive for
    a future journal piece about sharing the road, where context makes them honest.
25. **The competition car in this drop is a Safari-prepared 911, not an Escort** — so its
    imagery is used on home/drive/team/journal (event and service context) and kept OUT of
    The Cars page and Escort-labelled slots, which stay on placeholders until MST Escort
    photography exists. Alt text names what is visible, no more.
26. **Originals live in the GitHub release** (`media-drop-1`), not in git history — the repo
    carries only web-sized outputs. Re-processing starts from the release download.

## Client feedback round 3 (2026-09-01)
27. **EASCR 2027 campaign added** (client instruction): "Arrive & Drive — East African
    Safari Classic 2027, applications open" as a murram strip under the home hero, a badge
    on the Arrive & Drive programme, a named event option in the enquiry, and a deep link
    (/enquire?e=eascr2027) that arrives pre-qualified at the experience step. Every
    placement carries "entries are granted by the event's organisers" to preserve the
    organiser-independence line.
28. **Contact hierarchy** (client instruction): the official Minti line leads with no
    personal name attached (+254 799 839012, phone + WhatsApp); Joey Ghose is the named
    secondary. Site-wide copy moved from "call with Joey" to "call with the team", with
    Joey kept as the person who sees every serious enquiry. The individual staffing the
    line is deliberately not named anywhere, per instruction.
29. **Display face changed to Big Shoulders** (client: "fonts are very boring") — tall
    condensed industrial variable face for all marquee headings at a larger scale; the
    Archivo expanded voice survives as the wordmark and condensed labels; body and mono
    unchanged. Mobile: the roadbook distance chip now sits below the header and only
    appears once scrolling.

30. **Body face changed to Familjen Grotesk** (client round 3b: body text still read
    boring after the display swap — both flagged crops were Source Sans 3). Warm
    editorial grotesk, variable 400–700 + italic, self-hosted; Source Sans removed.

## Client feedback round 5 (2026-09-01) — focus pass
31. **Home page edited down around EASCR 2027** (client: "too crowded; the main job is to
    sell the 2027 arrive-and-drive"). The hero now IS the campaign (kicker names the event,
    primary CTA = "Apply for the seat" → pre-qualified enquiry), which allowed deleting the
    separate campaign strip. Cut from home: the two TBC credibility cells, the three TBC
    spec rows, two heritage cards, and the three-card programmes band (now one line of
    links). Header nav drops Journal (kept in footer + mobile menu). Every remaining CTA on
    home targets the 2027 application. The removed detail all still lives on its own pages.

## Client feedback round 6 (2026-09-01), package sheet applied
32. **US$250,000 hire cost published.** The client's package sheet ("Minti Rally Sport,
    Arrive & Drive Package, EASCR 2027") states the hire cost and full contents, and the
    client asked for the sheet to drive the 2027 sell. This supersedes the original brief's
    no-public-pricing rule for this one product. The price, inclusions and technical spec
    now anchor a product block on home and a full package section on The Drive; enquiry
    budget bands are re-anchored to the price. Note: the sheet is headed "Minti Rally
    Sport" while the site says Minti Motorsport; flag for the client to confirm naming.
33. **Zero placeholder images remain on the site.** The Mk2 photo embedded in the package
    sheet fills the Mk2 slot; further 4K frame grabs cover finish/build/cockpit/crew slots;
    Joey's card and the heritage crew cards are set in type until portraits exist; unused
    placeholder slots were deleted. Batch 2 photography will upgrade reused frames.
34. **Voice pass.** Em dashes removed from all user-facing copy (roadbook labels now use
    the middle dot, prose rewritten into plain sentences); journal essays rewritten; the
    showier constructions toned down per the client's "too AI" note.

35. **Hire cost withdrawn from the site** (client instruction, same day as 32): the
    figure "might scare people", so the product blocks now read "One all-in hire cost,
    priced on application" and the intro promises the figure plainly on the first call.
    The inclusions list and technical spec stay public; the number lives only in the
    client's package sheet and internal docs. Enquiry budget bands are qualitative again.

## Client go-live round (2026-09-10)
36. **All remaining TBCs filled from the client's message**: founded 2017; EASCR stake
    "from 2020" (rendered "FROM 2020" with the past-tense stewardship copy kept intact —
    worth one confirmation that the stake is indeed no longer held, since "since 2020"
    could read either way); crews run from 2017; address Galleria Business Park, Loita;
    site-wide contact email mintimotorsports@gmail.com. Values the client did not supply
    (seat count, event dates, per-crew years, crew names, Mk1 spec) were removed from
    display rather than guessed — the site now renders zero TBC chips.
37. **Dunlop and the technical car specification removed site-wide** (client instruction):
    the 2027 package spec table, the home car spec rows, and both model spec tables on
    The Cars are gone; "Forty new Dunlop gravel tyres" is now "Forty new gravel tyres".
    The inclusions list survives; the build detail lives in the package sheet and is
    given on the call. Package tiers read "priced on application".
38. **Joey's portrait wired in** (supplied via the repo): cropped to the 4/5 card,
    home people section leads with it, and it sits beside his bio on The Team. The
    original is archived in assets-src/.
39. **Enquiry auto-send defaults to mintimotorsports@gmail.com**: lib/leads.ts now emails
    every enquiry there whenever RESEND_API_KEY is set, from onboarding@resend.dev until
    the site's domain is verified in Resend. Without the key, submissions still log
    loudly in Vercel function logs. Setup steps are in the README.
40. **The hire cost stays off the site** (decision 35 stands). The promo graphics supplied
    with the go-live message do show US$250,000, but the standing instruction is to hide
    it; if the client now wants the figure public again, it is a one-line change in
    content/eascr2027.ts.

## Client design round (2026-09-14) — visual identity pass
41. **Applied without waiting for the new photo batch** (client notes via Parth): the
    items below need no new photography; the photo-led passes (cars page hero drama,
    image swaps) land when the promised batch arrives.
    - **Crest integrated**: the black logo square was keyed to a transparent crest
      (white MINTI, gold laurel) that now sits directly on the footer ground, larger,
      replacing the boxed JPG and the duplicate wordmark/strap; also added to the
      mobile menu. Fixes "logo looks placed on".
    - **Drive sequence simplified to the client's own copy** ("01 · ARRIVE / You land
      in Nairobi. We collect you."): portrait image-led cards, big number + title over
      the photograph, one short line. Less text, photography carries it.
    - **Hero scaled up** to the marquee type size with a roadbook data strip (stage ·
      km · coordinates · ARRIVE & DRIVE) under the CTAs; sub copy cut to four short
      sentences.
    - **"Take a seat" is the signature CTA everywhere** (hero, 2027 blocks, sequence
      end card, programme apply, the ask). "Apply for the seat" retired. Arrive &
      Drive stays the programme wording in kickers and strips.
    - **Roadbook data strips on every page hero** (drive/cars/team/heritage/contact):
      SS identity now visible on mobile too, where the rail is hidden.
    - **SS kicker consistency**: The Cars sections now carry SS3/01..04 instruction
      lines like every other page.
    - **Contact lines are tappable rows** (full-width, bordered, arrow, bold value)
      instead of plain text pairs.
    - **Mobile roadbook chip is solid sodium** — it was night-on-night (invisible on
      dark pages) and translucent over text.
    - Joey's portrait enlarged on The Team.

## Editorial rebuild (2026-09-15) — "make it a masterpiece with the photos that exist"
42. **The site is rebuilt as one editorial system** after the client and the project lead
    judged it still text-heavy and not premium. An art-direction panel (three competing
    directions, three judges) chose a luxury-editorial spine and grafted in the roadbook
    devices: every section is now image-led (Plate), number-led (Numeral / NumeralRow) or a
    single statement (Statement), opened by a Chapter (tulip glyph + SS code + hairline +
    ghost chapter numeral) and closed by the one signature ask (TakeASeat). Type scale up
    (h1 to 8rem, hero marquee to 11rem), section rhythm tokens (96 to 192px), 56ch prose
    measure, per-photo captions that state only what is visible ("the competition car" for
    every 911 frame, no invented locations), resolution caps (Joey's portrait at native
    335px, the Mk2 at its native 800px, the 1299px Mk1 never a full-screen hero), no photo
    repeated on a page, strict light/dark band alternation, film grain on heroes.
    Copy cut to roughly half per page. The Finish/Result/Programme tier cards (our own
    invention, never client content) are deleted; the FAQ is five questions. The official
    line becomes a tappable PhoneRow ("names you can phone", literally) on home, team and
    contact. Every hard rule stands: no price, no Jeet, no third-party names, EASCR in the
    past tense with the organiser-independence line on every ask.

## Client corrections (2026-09-15, round 3)
43. **The Safari Classic ownership is not discussed on the site.** The client corrected the
    heritage copy: the earlier "held a controlling stake ... that chapter has closed ...
    independently run today" was wrong (the stake is still held) and, in the client's words,
    there is no need to mention it. Every mention of the stake, stewardship, "chapter
    closed" or "independently run" is removed from home, heritage, team, the drive FAQ
    and the terms page. The site now says only that Minti has been *inside* the East
    African Safari Classic Rally since 2020 and knows what the event does to cars, crews
    and schedules. The organiser note on each ask ("entry is granted by its organisers")
    stays: it is true and it is the legal safeguard.
44. **The crest PNG carried a stray top row** (a one-pixel, full-width, half-transparent
    line left by the extraction) that rendered as a hairline over the logo on dark
    grounds. The row is cleared, the image re-cropped to its content (826x549) and the
    hard-coded dimensions updated everywhere it is placed.

## Verification notes
17. Full-page screenshots are taken with `prefers-reduced-motion` emulated — this doubles
    as the reduced-motion acceptance pass. A real bug was found and fixed this way
    (pinned-sequence cards were unreachable under reduced motion on desktop; the track now
    stays swipeable unless GSAP pinning actually initialises).
