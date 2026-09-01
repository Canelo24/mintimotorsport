# ASSETS-NEEDED

Every image slot on the site. Placeholders live at these exact paths in `public/images/`;
swapping in real photography = replace the file, run `npm run placeholders` (regenerates
blur data from the real file), done. The `alt` text in `content/images.generated.ts` is the
shot brief for each slot, written to be handed to a photographer.

**Priority key:** P1 = blocks the "Joey test" (hero/people/car), P2 = strongly wanted for
launch, P3 = can follow.

## P1 — the site stands on these
| File | Size | Subject |
|---|---|---|
| `hero-escort-fesh-fesh-2400x1350.jpg` | 2400×1350 | THE shot: Escort at speed in pale fesh-fesh dust, three-quarter front, bush behind. Carries the whole first impression. |
| `car-escort-mk2-profile-2400x1500.jpg` | 2400×1500 | Full side profile, workshop, sump guard and ride height visible. Clean light, no props. |
| `people-joey-ghose-900x1125.jpg` | 900×1125 | Joey Ghose, workshop portrait, direct and unposed. This face closes deals. |
| `people-crew-chief-900x1125.jpg` | 900×1125 | Crew chief at the bench, tool in hand. |
| `people-workshop-nairobi-900x1125.jpg` | 900×1125 | Workshop at night, two cars on stands, floodlights. |
| `ask-service-park-night-2400x1200.jpg` | 2400×1200 | Service park at 2am — crew around a raised car. The closing image. |
| `drive-hero-cockpit-2400x1350.jpg` | 2400×1350 | Over the co-driver's shoulder: roadbook, trip meter, murram through the screen. |

## P2 — launch-complete
| File | Size | Subject |
|---|---|---|
| `drive-01-arrival-nairobi-1600x1000.jpg` | 1600×1000 | Driver arriving at the workshop gate, handshake, car behind. |
| `drive-02-shakedown-test-1600x1000.jpg` | 1600×1000 | Escort mid-corner on private murram, evening light. |
| `drive-03-scrutineering-1600x1000.jpg` | 1600×1000 | Scrutineering bay, officials at the cage, crew with time card. |
| `drive-04-the-event-1600x1000.jpg` | 1600×1000 | Flat over a crest, numbers on the doors, spectators at distance. |
| `drive-05-finish-ramp-1600x1000.jpg` | 1600×1000 | Finish ramp, dust-caked car, crew below. |
| `cars-mk1-three-quarter-2000x1250.jpg` | 2000×1250 | Mk1 front three-quarter on murram. |
| `cars-mk2-stage-2000x1250.jpg` | 2000×1250 | Mk2 sideways on a fast sweeper, dust wall. |
| `cars-build-mst-workshop-1600x1000.jpg` | 1600×1000 | MST build: bare shell on jig, cage in, fabricator working. |
| `cars-cockpit-detail-1200x1500.jpg` | 1200×1500 | Cockpit detail: handbrake, trip computer, roadbook holder. |
| `team-joey-ghose-workshop-1600x1000.jpg` | 1600×1000 | Joey Ghose at the workshop door, Escort behind. |
| `team-service-park-2am-2400x1350.jpg` | 2400×1350 | Full crew mid-service at night, one person on the clock. |
| `team-workshop-bay-1600x1000.jpg` | 1600×1000 | Daylight bay: engine on stand, shelving, Kenyan light. |
| `heritage-eascr-stage-2400x1350.jpg` | 2400×1350 | Archive: classic field on an East African stage, stewardship years. |
| `heritage-duncan-240rs-1600x1000.jpg` | 1600×1000 | Archive: Ian Duncan's 240RS at speed. **Needs usage rights + credit.** |
| `heritage-tundo-r5-1600x1000.jpg` | 1600×1000 | Archive: Carl Tundo's R5. **Needs usage rights + credit.** |
| `heritage-wahome-khan-1600x1000.jpg` | 1600×1000 | Maxine Wahome & Safina Khan with car before a start. **Needs consent + credit.** |
| `og-default-1200x630.jpg` | 1200×630 | Social share card — hero crop with logo lockup. |

## P3 — editorial
| File | Size | Subject |
|---|---|---|
| `journal-service-park-craft-1600x1000.jpg` | 1600×1000 | Hands re-torquing under floodlight. |
| `journal-why-the-escort-1600x1000.jpg` | 1600×1000 | Mk1 and Mk2 nose to tail outside the workshop. |
| `journal-reading-the-road-1600x1000.jpg` | 1600×1000 | Open roadbook page, pencil notes, dusty thumb. |
| `contact-workshop-gate-1600x1000.jpg` | 1600×1000 | The workshop gate, sign visible. |

## Brand files — RECEIVED 2026-08-28 and wired in
Originals are kept in `assets-src/`; processed by `scripts/ingest-brand-assets.mjs`.

| File | Now used at |
|---|---|
| `assets-src/minti-logo-black.jpg` | Footer lockup, favicon (`app/icon.png`), OG share card |
| `assets-src/minti-logo-white.png` | Stored in `public/brand/` for light-background uses |
| `assets-src/safari-jump-26.jpg` | **Home hero** (`hero-safari-jump-murram`) |
| `assets-src/escort-mk1-road.jpg` | Home car section + The Cars Mk1 (`cars-mk1-mountain-road`) |
| `assets-src/minti-crew-stage-bw.jpg` | **Heritage hero** (`heritage-minti-stage-bw`) |

Still to confirm for these: **photographer credit and usage rights** for all three photos.
Higher-resolution exports welcome (hero is 1320px wide — serviceable, but a 2400px+ export
of the jump shot would be sharper on large screens; re-run the ingest script after
replacing the file in `assets-src/`).

## Media drop 1 — RECEIVED 2026-09-01 and wired in
18 files via GitHub release `media-drop-1` (the release doubles as the originals archive —
4K MP4s and CR3 RAWs stay there, only web-sized outputs live in the repo).

**Video (10 × 4K):** hero film loop cut from DJI_0170 (aerial) + C0139 (dust approach) +
FLS_4774 (dust-wall pass) → `public/video/hero-loop.mp4` (13s, 2.5MB). Crew-at-service
ambient from FLS_4778 → `public/video/service-loop.mp4` (6s, 0.5MB), behind "the ask".
FLS_4788 (wheel change) and FLS_4781 (crew) used as 4K frame-grab stills. FLS_4800/4847
(Maasai herder, livestock) deliberately not used — see DECISIONS.md.

**Stills:** FLS_4770 → the-event · FLS_4685 → shakedown · FLS_4741 → arrival ·
FLS_4732 (gauges) → The Drive hero · FLS_4871 (driver strapped in) → TC3 ·
FLS_4701 (engine) → workshop bay · DJI_0154/0155 (aerials) → journal cover + "the ask".

**Still to confirm:** photographer credit and usage rights for the whole drop.

## Also wanted (no slot yet — future)
- 10–20s hero film (muted, no audio dependence): car through fesh-fesh, one pass, locked-off
  or slow tracking. Poster frame = the P1 hero still. Will slot behind the home hero with a
  static fallback for slow connections / reduced data.
- Brand assets: final logo files (the supplied logo set), any brand guidelines.
- Entrant brief PDF for the "request the brief" flow.
