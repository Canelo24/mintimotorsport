/**
 * Generates dimensioned placeholder JPGs into public/images/ and a typed
 * manifest (content/images.generated.ts) with width/height, a real base64
 * blur placeholder, and alt text that doubles as the photography brief.
 *
 * Swapping in real photography: replace the JPG at the same path and
 * dimensions, then re-run `npm run placeholders` to refresh the blur data.
 * See ASSETS-NEEDED.md for the full shot list.
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("public/images");
const MANIFEST = path.resolve("content/images.generated.ts");

// Palette tokens (mirror app/globals.css)
const C = {
  murram: "#7d3a22",
  murramDeep: "#54250f",
  feshfesh: "#e5dfd3",
  night: "#171310",
  night2: "#231d17",
  sodium: "#e1962e",
  chalk: "#f1ece2",
  grease: "#84796a",
};

const SCHEMES = {
  dust: { bg: C.feshfesh, hatch: C.grease, label: C.murramDeep },
  night: { bg: C.night, hatch: C.night2, label: C.grease },
  murram: { bg: C.murram, hatch: C.murramDeep, label: C.feshfesh },
};

/** @type {Array<{name:string,w:number,h:number,scheme:keyof typeof SCHEMES,alt:string}>} */
const IMAGES = [
  // --- Home
  { name: "hero-escort-fesh-fesh-2400x1350", w: 2400, h: 1350, scheme: "dust", alt: "MST-built Ford Escort Mk2 at speed through pale fesh-fesh dust, three-quarter front, dust plume trailing, open East African bush behind" },
  { name: "drive-01-arrival-nairobi-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Driver arriving at the Minti workshop gate in Nairobi, shaking hands with the crew, Escort visible in the bay behind" },
  { name: "drive-02-shakedown-test-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Escort mid-corner on a private murram test stage, driver on an early shakedown run, shallow evening light" },
  { name: "drive-03-scrutineering-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Scrutineering bay: officials checking the cage and extinguisher plumbing, crew standing by with the time card" },
  { name: "drive-04-the-event-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Competition: the Escort flat over a crest, roof vents open, competition numbers on the doors, crowd of spectators at safe distance" },
  { name: "drive-05-finish-ramp-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Driver and co-driver on the finish ramp, dust-caked car, champagne held not sprayed, crew gathered below" },
  { name: "car-escort-mk2-profile-2400x1500", w: 2400, h: 1500, scheme: "dust", alt: "Full side profile of a Safari-spec Escort Mk2 in the workshop, sump guard and raised suspension visible, studio-clean light" },
  { name: "people-jeet-ghose-900x1125", w: 900, h: 1125, scheme: "night", alt: "Jeet Ghose, portrait in the Nairobi workshop, arms crossed, service tools behind — direct, unposed" },
  { name: "people-crew-chief-900x1125", w: 900, h: 1125, scheme: "night", alt: "Crew chief portrait at the service bench, torque wrench in hand, floodlit from above" },
  { name: "people-workshop-nairobi-900x1125", w: 900, h: 1125, scheme: "night", alt: "The Nairobi workshop at night: two Escorts on stands, parts trolleys, sodium floodlights" },
  { name: "ask-service-park-night-2400x1200", w: 2400, h: 1200, scheme: "night", alt: "Service park at 2am: crew under floodlights around a raised Escort, steam from tea mugs, spares laid out on tarpaulin" },
  // --- The Drive
  { name: "drive-hero-cockpit-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Cockpit view over the co-driver's shoulder: roadbook open, trip meter glowing, murram road ahead through the screen" },
  // --- The Cars
  { name: "cars-mk1-three-quarter-2000x1250", w: 2000, h: 1250, scheme: "dust", alt: "MST Escort Mk1 front three-quarter on murram, period-correct silhouette, modern safety visible through the glass" },
  { name: "cars-mk2-stage-2000x1250", w: 2000, h: 1250, scheme: "murram", alt: "Escort Mk2 sideways on a fast murram sweeper, full commitment, dust wall behind" },
  { name: "cars-build-mst-workshop-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "MST build in progress: bare shell on a jig, cage welded in, fabricator at work" },
  { name: "cars-cockpit-detail-1200x1500", w: 1200, h: 1500, scheme: "night", alt: "Cockpit detail: hydraulic handbrake, gear lever, trip computer, roadbook holder — everything within reach" },
  // --- The Team
  { name: "team-joey-jeet-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Joey and Jeet Ghose together at the workshop door, relaxed, an Escort behind them" },
  { name: "team-service-park-2am-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Wide shot of the full Minti service crew mid-service at night — wheels off, four people on the car, one on the clock" },
  { name: "team-workshop-bay-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Daylight workshop bay: engine on a stand, parts shelving, clean floor, Kenyan daylight through the roller door" },
  // --- Heritage
  { name: "heritage-eascr-stage-2400x1350", w: 2400, h: 1350, scheme: "murram", alt: "Classic rally field on an East African stage during Minti's stewardship years — period cars, murram, distance" },
  { name: "heritage-duncan-240rs-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Ian Duncan's Nissan 240RS at speed on murram, a crew Minti ran" },
  { name: "heritage-tundo-r5-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Carl Tundo's VW R5 flat through a village lined section, a crew Minti ran" },
  { name: "heritage-wahome-khan-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Maxine Wahome and Safina Khan with their rally car before a start — the all-Kenyan ladies crew Minti introduced to classic rallying" },
  // --- Journal covers
  { name: "journal-service-park-craft-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "Hands re-torquing a suspension bolt under floodlight, service clock visible" },
  { name: "journal-why-the-escort-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Escort Mk1 and Mk2 parked nose to tail outside the workshop" },
  { name: "journal-reading-the-road-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Open roadbook page with tulip diagrams, pencil notes, and a dusty thumb" },
  // --- Contact
  { name: "contact-workshop-gate-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "The Minti workshop gate in Nairobi, sign visible, gravel apron" },
  // --- OG
  { name: "og-default-1200x630", w: 1200, h: 630, scheme: "night", alt: "Minti Motorsport — a seat in the Safari" },
];

function svgFor({ name, w, h, scheme }) {
  const s = SCHEMES[scheme];
  const stroke = Math.max(2, Math.round(w / 800));
  const pad = Math.round(w * 0.02);
  const fontSize = Math.max(14, Math.round(w / 70));
  const label = name.replace(/-\d+x\d+$/, "").replace(/-/g, " ").toUpperCase();
  const dims = name.match(/(\d+x\d+)$/)?.[1] ?? `${w}x${h}`;
  // Tulip glyph (junction arrow) bottom-right
  const g = Math.round(w * 0.045);
  const gx = w - pad - g;
  const gy = h - pad - g;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <pattern id="hatch" width="${g}" height="${g}" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="${g}" stroke="${s.hatch}" stroke-width="${stroke}" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="${s.bg}"/>
  <rect width="${w}" height="${h}" fill="url(#hatch)"/>
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${s.label}" stroke-width="${stroke}" opacity="0.6"/>
  <text x="${pad * 2}" y="${pad * 2 + fontSize}" font-family="DejaVu Sans Mono, monospace" font-size="${fontSize}" fill="${s.label}" opacity="0.9">${label}</text>
  <text x="${pad * 2}" y="${pad * 2 + fontSize * 2.4}" font-family="DejaVu Sans Mono, monospace" font-size="${fontSize}" fill="${s.label}" opacity="0.6">PLACEHOLDER · ${dims}</text>
  <g stroke="${s.label}" stroke-width="${stroke * 2}" fill="none" opacity="0.7">
    <path d="M ${gx} ${gy + g} L ${gx} ${gy + g * 0.4} Q ${gx} ${gy} ${gx + g * 0.4} ${gy}" />
    <path d="M ${gx + g * 0.15} ${gy - g * 0.18} L ${gx + g * 0.45} ${gy} L ${gx + g * 0.15} ${gy + g * 0.18}" />
  </g>
</svg>`;
}

await mkdir(OUT, { recursive: true });

const entries = [];
for (const img of IMAGES) {
  const file = path.join(OUT, `${img.name}.jpg`);
  await sharp(Buffer.from(svgFor(img)), { density: 72 })
    .jpeg({ quality: 68, mozjpeg: true })
    .toFile(file);
  const blur = await sharp(file).resize(12).blur(2).jpeg({ quality: 40 }).toBuffer();
  const key = img.name.replace(/-\d+x\d+$/, "").replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
  entries.push(
    `  ${JSON.stringify(key)}: {\n` +
      `    src: "/images/${img.name}.jpg",\n` +
      `    width: ${img.w},\n    height: ${img.h},\n` +
      `    blurDataURL: "data:image/jpeg;base64,${blur.toString("base64")}",\n` +
      `    alt: ${JSON.stringify(img.alt)},\n  }`,
  );
  process.stdout.write(`✓ ${img.name}.jpg\n`);
}

const manifest = `// AUTO-GENERATED by scripts/generate-placeholders.mjs — do not edit by hand.
// Re-run \`npm run placeholders\` after replacing any image in public/images/.

export type ImageSlot = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt: string;
};

export const images = {
${entries.join(",\n")},
} as const satisfies Record<string, ImageSlot>;
`;

await writeFile(MANIFEST, manifest);
process.stdout.write(`✓ manifest → ${MANIFEST}\n`);
