# Minti Motorsport — Phase 0 Design Plan

> Produced before any application code, per the brief. This session runs autonomously and
> cannot pause for approval, and the accompanying brief file states "Do not stop after
> producing a plan" — so this document is the plan of record, the self-critique is applied
> below, and every judgement call made while building is logged in `DECISIONS.md`.

---

## 1. The brief, restated

Minti Motorsport sells one thing: **a fully-supported seat in a Safari-spec rally car on an
East African rally** — car (MST-built Escort Mk1/Mk2), crew, spares, logistics, entry
administration, family arrangements, the finish. It is a six-figure, trust-led purchase made
over months by a tiny global pool of buyers. The site's single commercial job is to convert
a serious enthusiast into a **qualified enquiry that ends in a booked call with Joey**.

Three buyers, one page must serve all without diluting:

- **The gentleman driver** — bucket-list, terrified of amateur-hour. Closed by evidence of
  *finishing*: crew depth, named people, a phone number that reaches a Ghose.
- **The competitive privateer** — wants a result. Closed by car spec, build provenance
  (MST), and the pedigree of crews Minti has run.
- **The corporate / sponsor** — wants the Africa story with measurable return. Closed by
  reach, media, hospitality, named partners.

Non-negotiable truths: no cart, no public price list ("Packages from …" + qualification);
scarcity stated plainly and never faked; EASCR stake is **past tense heritage, not current
ownership**; Duncan / Tundo / Wahome / Khan are **crews we have run**, year-labelled, past
tense; Kenya is home and expertise, never safari-tourism backdrop. Joey's filter: would a
person who has stood in a service park at 2am nod at this?

## 2. Palette — from the material world of the Safari

Defined as CSS custom properties in the token layer (`app/globals.css`), no arbitrary hex in
components.

| Token | Hex | Justification |
|---|---|---|
| `--color-murram` | `#7D3A22` | The red-brown laterite of Kenyan gravel roads — sampled from the brown end of murram, deliberately desaturated away from terracotta/orange. Primary brand colour: rules, active section marks, links on light. |
| `--color-murram-deep` | `#54250F` | Murram after rain / in shadow. Hover and pressed states, dark accents on light surfaces. |
| `--color-feshfesh` | `#E5DFD3` | Fesh-fesh, the talc-fine dust — a warm **ash** neutral, greyer than the cream (#F4F1EA) default this brief bans. Large calm light surfaces. |
| `--color-night` | `#171310` | Night service: near-black with a warm shift (never `#000`). Dark sections, footer, "the ask". |
| `--color-night-2` | `#231D17` | Raised surfaces on night — card faces, accordion bodies, the service-park bench under the floodlight. |
| `--color-sodium` | `#E1962E` | Sodium floodlight amber. The single accent: primary CTA, timing data, active states. Used once per viewport. |
| `--color-chalk` | `#F1ECE2` | Chalk — off-white for type on dark, the colour of stage notes paper. |
| `--color-grease` | `#84796A` | Oil-stained concrete grey-brown. Secondary text, hairlines, disabled states — the workshop floor, on both light and dark. |

Contrast: `night` on `feshfesh` ≈ 13:1; `chalk` on `night` ≈ 12:1; `night` on `sodium`
≈ 7.5:1 (CTA text); `sodium` on `night` ≈ 7:1 (timing data). All pass WCAG AA, most AAA.

## 3. Typography — three roles

| Role | Face | Why |
|---|---|---|
| Display | **Big Shoulders** (rev. 2026-09-01; was Archivo expanded) | Tall condensed industrial variable face — rally-poster character at scale. Archivo survives as the wordmark + condensed labels. Rejected Bebas/Oswald/Anton — the default rally condensed trio. |
| Body | **Familjen Grotesk** (rev. 2026-09-01) | Warm editorial grotesk with genuine personality at 17–19px. Replaced Source Sans 3 after client feedback ("fonts are boring") — it read institutional. |
| Data / utility | **IBM Plex Mono** | Engineering-drawing heritage, tabular numerals. Used for *everything numeric and factual* — distances, dates, specs, coordinates, split-style timing — and never decoratively. Rejected JetBrains Mono (code-editor default, wrong register). |

Type scale (named steps, `clamp()`-fluid): `--text-data-s` 12px · `--text-data` 14px ·
`--text-body` 17–19px · `--text-lead` 21–24px · `--text-h3` 24–30px · `--text-h2` 32–44px ·
`--text-h1` 44–72px · `--text-marquee` 64–140px.

## 4. Signature — the roadbook rail

The one thing the site is remembered by. A fixed **roadbook column on the left edge**
(≥1024px; a slim top progress bar + km chip below that):

- A vertical stage line runs the height of the viewport rail.
- **Tulip-style junction glyphs** (inline SVG, drawn for this site) mark each section
  boundary; the active section's tulip fills sodium.
- A **running distance readout** in mono (`KM 12.4`) increments with scroll — each page is a
  "stage" with a declared length (home = SS1, 60.2 km; the-drive = SS2, 48.7 km …).
- Section names render as roadbook instructions: `SS1/04 — THE CAR`.
- The rail reaches a **finish control glyph** (chequer roundel) at the enquiry form.

Implementation: pages mark sections with `data-roadbook="THE CAR"`; a single client
component measures them, maps `scrollY` → distance via rAF, and highlights the active tulip
with IntersectionObserver. Under `prefers-reduced-motion` the readout still shows correct
values (it is driven only by the user's own scrolling — no autonomous motion) but all
smoothing/lerp is removed.

## 5. Layout concepts

### `/` Home

```
┌────┬──────────────────────────────────────────────┐
│ RB │  HERO — full-bleed still, escort in fesh-fesh│
│ 0.0│  A SEAT IN THE SAFARI. BUILT, CREWED, RUN.   │
│ ▫  │  [ TAKE A SEAT ]   ( See the car )           │
│ |  ├──────────────────────────────────────────────┤
│ ▫  │  PROPOSITION — 3 lines, feshfesh, lots of air│
│ |  ├──────────────────────────────────────────────┤
│ ▫  │  CREDIBILITY STRIP — mono numerals in a row  │
│ |  │  EST ····  NAIROBI −1.2921 36.8219  MST ···· │
│ ▫  ├──────────────────────────────────────────────┤
│ |  │  THE DRIVE — pinned horizontal sequence      │
│ ▫  │  arrival → shakedown → scrutineering → event │
│ |  ├──────────────────────────────────────────────┤
│ ▫  │  THE CAR — full-width escort, spec in mono   │
│ |  ├──────────────────────────────────────────────┤
│ ▫  │  THE PEOPLE — Joey / crew chief / workshop   │
│ |  ├──────────────────────────────────────────────┤
│ ▫  │  HERITAGE — horizontal timeline, past tense  │
│ ⛿  ├──────────────────────────────────────────────┤
│60.2│  THE ASK — night, one sodium CTA, real       │
│ FIN│  scarcity: N cars, event date                │
└────┴──────────────────────────────────────────────┘
```

### `/the-drive`

```
┌────┬──────────────────────────────────────────────┐
│ RB │  HERO — cockpit still. TAKE A SEAT.          │
│    ├──────────────┬───────────────────────────────┤
│    │ WHAT'S       │ WHAT'S NOT                    │
│    │ INCLUDED     │ (plain two-column truth)      │
│    ├──────────────┴───────────────────────────────┤
│    │ TIMELINE — first call → finish ramp (mono)   │
│    ├──────────────────────────────────────────────┤
│    │ AM I GOOD ENOUGH? — honest, welcoming        │
│    │ licensing / medical / fitness in data blocks │
│    ├──────────────────────────────────────────────┤
│    │ FAMILY & GUESTS                              │
│    ├──────────────────────────────────────────────┤
│    │ THREE PACKAGES — named, "from" pricing, one  │
│    │ CTA each  (RECCE / STAGE / OVERALL)          │
│    ├──────────────────────────────────────────────┤
│    │ FAQ — the real objections, accordion         │
│    ├──────────────────────────────────────────────┤
│    │ [sticky enquiry bar appears on scroll]       │
└────┴──────────────────────────────────────────────┘
```

## 6. Self-critique (applied)

- **Palette** — first draft had fesh-fesh at `#EFE9DE` (the banned cream family) and an
  accent nearer `#F0A030`. Changed: fesh-fesh pushed toward grey ash (`#E5DFD3`), sodium
  deepened to `#E1962E` so it reads as floodlight, not "orange CTA button". Added `grease`
  because every generic palette forgets the secondary/hairline value and falls back to grey.
- **Type** — first draft was Bebas Neue + Inter + JetBrains Mono; that is the exact AI
  default this brief exists to prevent. Changed to one variable grotesque (Archivo) used at
  both width extremes — a decision, not a pairing — plus Source Sans 3 and IBM Plex Mono.
- **Layout** — dropped an early idea of a coordinate-strip + countdown hero: that is
  EASCR's identity (the organiser), and Minti is the team. The hero now names the offer in
  words and the countdown appears nowhere; scarcity is stated in prose in "the ask".
- **Signature** — a scroll progress bar with dots is what any site would do. The roadbook
  rail earns its place only through the tulips, the km readout, and the finish control —
  all three are implemented, or none (per the brief). They are all implemented.
- **Copy** — banned words audit applied: no "passion", "unleash", "adrenaline-fuelled",
  "embark". Roadbook/service-park vocabulary used where a rally person would.
