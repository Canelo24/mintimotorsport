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
import { existsSync } from "node:fs";
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
  // REAL (client-supplied): airborne Safari car over a murram crest.
  { name: "hero-safari-jump-murram-1320x1132", w: 1320, h: 1132, scheme: "murram", alt: "Safari rally car, competition number 26, airborne over a murram crest, red dust trailing, East African bush behind" },
  { name: "drive-01-arrival-nairobi-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "The Safari-prepared 911 among the support vehicles at the base on arrival day" }, // REAL
  { name: "drive-02-shakedown-test-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "The Safari car at speed in side profile on a test road, driver visible at the wheel" }, // REAL
  { name: "drive-03-ready-to-start-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Driver helmeted and strapped in behind the roll cage, waiting for the off" }, // REAL
  { name: "drive-04-the-event-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "The competition car on murram between the thorn trees, dust rising behind" }, // REAL
  { name: "drive-05-finish-ramp-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Driver and co-driver on the finish ramp, dust-caked car, champagne held not sprayed, crew gathered below" },
  { name: "car-escort-mk2-profile-2400x1500", w: 2400, h: 1500, scheme: "dust", alt: "Full side profile of a Safari-spec Escort Mk2 in the workshop, sump guard and raised suspension visible, studio-clean light" },
  { name: "people-joey-ghose-900x1125", w: 900, h: 1125, scheme: "night", alt: "Joey Ghose, portrait in the Nairobi workshop, arms crossed, service tools behind — direct, unposed" },
  { name: "people-crew-chief-900x1125", w: 900, h: 1125, scheme: "night", alt: "Crew chief portrait at the service bench, torque wrench in hand, floodlit from above" },
  { name: "people-workshop-nairobi-900x1125", w: 900, h: 1125, scheme: "night", alt: "The Nairobi workshop at night: two Escorts on stands, parts trolleys, sodium floodlights" },
  { name: "ask-murram-road-aerial-2400x1200", w: 2400, h: 1200, scheme: "night", alt: "Aerial view of a murram road running dead straight through the bush to the horizon" }, // REAL
  // --- The Drive
  { name: "drive-hero-cockpit-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Period cockpit gauges up close — speedometer sweep and tachometer needle of the Safari car" }, // REAL
  // --- The Cars
  // REAL (client-supplied): red Escort Mk1 on a mountain pass.
  { name: "cars-mk1-mountain-road-1299x1047", w: 1299, h: 1047, scheme: "dust", alt: "Red Ford Escort Mk1 rally build on a wet mountain pass, gold wheels, roll cage visible through the glass" },
  { name: "cars-mk2-stage-2000x1250", w: 2000, h: 1250, scheme: "murram", alt: "Escort Mk2 sideways on a fast murram sweeper, full commitment, dust wall behind" },
  { name: "cars-build-mst-workshop-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "MST build in progress: bare shell on a jig, cage welded in, fabricator at work" },
  { name: "cars-cockpit-detail-1200x1500", w: 1200, h: 1500, scheme: "night", alt: "Cockpit detail: hydraulic handbrake, gear lever, trip computer, roadbook holder — everything within reach" },
  // --- The Team
  { name: "team-joey-ghose-workshop-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Joey Ghose at the workshop door, relaxed, an Escort visible in the bay behind" },
  { name: "team-crew-service-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Minti crew in team shirts around the car at service" }, // REAL
  { name: "team-workshop-bay-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Freshly built air-cooled engine in the bay, twin carburettors, spotless" }, // REAL
  // --- Heritage
  // REAL (client-supplied): archive B&W of a Minti-liveried crew at speed.
  { name: "heritage-minti-stage-bw-1320x868", w: 1320, h: 868, scheme: "night", alt: "Archive black-and-white photograph: Minti-liveried classic rally saloon at speed on an East African stage, panned through thorn scrub" },
  { name: "heritage-duncan-240rs-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Ian Duncan's Nissan 240RS at speed on murram, a crew Minti ran" },
  { name: "heritage-tundo-r5-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Carl Tundo's VW R5 flat through a village lined section, a crew Minti ran" },
  { name: "heritage-wahome-khan-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Maxine Wahome and Safina Khan with their rally car before a start — the all-Kenyan ladies crew Minti introduced to classic rallying" },
  // --- Journal covers
  { name: "journal-service-park-craft-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "Gloved hands on the wheel nuts mid wheel-change, close up" }, // REAL
  { name: "journal-why-the-escort-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Escort Mk1 and Mk2 parked nose to tail outside the workshop" },
  { name: "journal-reading-the-road-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Aerial of a murram road cutting through acacia scrub" }, // REAL
  // --- Contact
  { name: "contact-workshop-gate-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "The Minti workshop gate in Nairobi, sign visible, gravel apron" },
  // --- OG
  // REAL: generated from the client logo by scripts/ingest-brand-assets.mjs.
  { name: "og-default-1200x630", w: 1200, h: 630, scheme: "night", alt: "Minti Motorsport — Preserving Heritage" },
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
  // Idempotent: an existing file (real photography or a previous placeholder)
  // is kept as-is — delete a file to force placeholder regeneration. Blur data
  // and dimensions are always derived from the actual file on disk.
  if (!existsSync(file)) {
    await sharp(Buffer.from(svgFor(img)), { density: 72 })
      .jpeg({ quality: 68, mozjpeg: true })
      .toFile(file);
  }
  const meta = await sharp(file).metadata();
  img.w = meta.width ?? img.w;
  img.h = meta.height ?? img.h;
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
