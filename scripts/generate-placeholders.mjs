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
  // Every slot below now carries REAL client media (photos, RAW conversions,
  // or 4K video frame grabs). The generator only recreates a file if it has
  // been deleted; otherwise it refreshes dimensions and blur data.
  { name: "hero-safari-jump-murram-1320x1132", w: 1320, h: 1132, scheme: "murram", alt: "Safari rally car, competition number 26, airborne over a murram crest, red dust trailing, East African bush behind" },
  { name: "drive-01-arrival-nairobi-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "The Safari-prepared 911 among the support vehicles at the base on arrival day" },
  { name: "drive-02-shakedown-test-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "The Safari car at speed in side profile on a test road, driver visible at the wheel" },
  { name: "drive-03-ready-to-start-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Driver helmeted and strapped in behind the roll cage, waiting for the off" },
  { name: "drive-04-the-event-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "The competition car on murram between the thorn trees, dust rising behind" },
  { name: "drive-05-finish-ramp-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "The crew going over the car at the end of the day, spare wheel out, everyone around the back of the car" },
  { name: "people-crew-at-work-900x1125", w: 900, h: 1125, scheme: "night", alt: "Minti crew in team shirts working over the car at service" },
  { name: "people-workshop-nairobi-900x1125", w: 900, h: 1125, scheme: "night", alt: "Freshly built air-cooled engine in the bay, twin carburettors, spotless" },
  { name: "ask-murram-road-aerial-2400x1200", w: 2400, h: 1200, scheme: "night", alt: "Aerial view of a murram road running dead straight through the bush to the horizon" },
  { name: "drive-hero-cockpit-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Period cockpit gauges up close, speedometer sweep and tachometer needle of the Safari car" },
  { name: "cars-mk1-mountain-road-1299x1047", w: 1299, h: 1047, scheme: "dust", alt: "Red Ford Escort Mk1 rally build on a wet mountain pass, gold wheels, roll cage visible through the glass" },
  { name: "cars-mk2-gold-minilites-800x538", w: 800, h: 538, scheme: "dust", alt: "Escort Mk2 rally build in blue with gold Minilite-style wheels and Cibie spotlamps outside the workshop" },
  { name: "cars-build-mst-workshop-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "A mechanic's hand on the welded-in roll cage of the red Safari build" },
  { name: "cars-cockpit-detail-1200x1500", w: 1200, h: 1500, scheme: "night", alt: "Cockpit gauges up close, tachometer needle and speedometer of the Safari car" },
  { name: "team-crew-working-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Minti crew in team shirts over the car under the carport at service" },
  { name: "team-crew-service-2400x1350", w: 2400, h: 1350, scheme: "night", alt: "Minti crew in team shirts around the car at service" },
  { name: "team-workshop-bay-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Freshly built air-cooled engine in the bay, twin carburettors, spotless" },
  { name: "heritage-minti-stage-bw-1320x868", w: 1320, h: 868, scheme: "night", alt: "Archive black-and-white photograph: Minti-liveried classic rally saloon at speed on an East African stage, panned through thorn scrub" },
  { name: "journal-service-park-craft-1600x1000", w: 1600, h: 1000, scheme: "night", alt: "Gloved hands on the wheel nuts mid wheel-change, close up" },
  { name: "journal-why-the-escort-1600x1000", w: 1600, h: 1000, scheme: "dust", alt: "Red Ford Escort Mk1 rally build on a mountain road" },
  { name: "journal-reading-the-road-1600x1000", w: 1600, h: 1000, scheme: "murram", alt: "Aerial of a murram road cutting through acacia scrub" },
  { name: "og-default-1200x630", w: 1200, h: 630, scheme: "night", alt: "Minti Motorsport, Preserving Heritage" },
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
