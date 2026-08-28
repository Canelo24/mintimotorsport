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
| `people-jeet-ghose-900x1125.jpg` | 900×1125 | Jeet, workshop portrait, direct and unposed. This face closes deals. |
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
| `team-joey-jeet-1600x1000.jpg` | 1600×1000 | Joey and Jeet together at the workshop door. |
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

## Brand files (client has these — awaiting the actual files)
Four images were shown to us but the files themselves were not received. Upload them to the
repo (GitHub → branch `claude/minti-motorsport-site-arbq1s` → Add file → Upload files) or
send them through any channel, and they will be wired in:

| File wanted | What it is | Where it goes |
|---|---|---|
| `minti-logo-dark.(png/svg)` | Square logo, white MINTI + gold laurel on black, "Preserving Heritage" | Footer lockup, favicon, OG share card |
| `minti-logo-light.(png/svg)` | Horizontal version on white | Light-background uses, print/email |
| Rally action shot (red car, airborne, murram, #26) | Owner-supplied photography | Home hero or heritage lead (subject to rights + car identification) |
| Red Escort Mk1 on mountain road (CX71 BDG) | Owner-supplied photography | The Cars — Mk1 slot / "Why the Escort" journal cover |

Confirm photographer credit and usage rights for both photos before publishing.

## Also wanted (no slot yet — future)
- 10–20s hero film (muted, no audio dependence): car through fesh-fesh, one pass, locked-off
  or slow tracking. Poster frame = the P1 hero still. Will slot behind the home hero with a
  static fallback for slow connections / reduced data.
- Brand assets: final logo files (the supplied logo set), any brand guidelines.
- Entrant brief PDF for the "request the brief" flow.
