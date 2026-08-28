/**
 * One-shot ingest of the client-supplied brand assets (uploaded 2026-08-28).
 * Originals are kept in assets-src/ under descriptive names; processed
 * versions land in public/images/ (slots), public/brand/ (logos),
 * and app/icon.png (favicon). Run once; safe to re-run.
 */
import sharp from "sharp";
import { mkdir, copyFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const uploads = {
  jump: "61c3d141-a8b5-4a48-8413-9e85f6892e82.JPG",
  escort: "750d84c2-14f0-4cde-a565-92b948f2c6e0.JPG",
  bw: "f8144205-d934-4f71-8c01-2fdf5586bb66.JPG",
  logoBlack: "MINTI LOGO BLACK.jpg",
  logoWhite: "MINTI LOGO WHITE.png",
};

// Fall back to assets-src names on re-runs (originals already moved).
const src = (key, moved) => (existsSync(uploads[key]) ? uploads[key] : `assets-src/${moved}`);

await mkdir("assets-src", { recursive: true });
await mkdir("public/brand", { recursive: true });

// 1. Keep originals under descriptive names
const moves = [
  ["jump", "safari-jump-26.jpg"],
  ["escort", "escort-mk1-road.jpg"],
  ["bw", "minti-crew-stage-bw.jpg"],
  ["logoBlack", "minti-logo-black.jpg"],
  ["logoWhite", "minti-logo-white.png"],
];
for (const [key, name] of moves) {
  if (existsSync(uploads[key])) {
    await copyFile(uploads[key], `assets-src/${name}`);
    await rm(uploads[key]);
  }
}

// 2. Photo slots (replacing placeholders — delete the old slot files)
const oldSlots = [
  "public/images/hero-escort-fesh-fesh-2400x1350.jpg",
  "public/images/cars-mk1-three-quarter-2000x1250.jpg",
  "public/images/heritage-eascr-stage-2400x1350.jpg",
  "public/images/og-default-1200x630.jpg",
];
for (const f of oldSlots) if (existsSync(f)) await rm(f);

await sharp("assets-src/safari-jump-26.jpg")
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/hero-safari-jump-murram-1320x1132.jpg");

await sharp("assets-src/escort-mk1-road.jpg")
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/cars-mk1-mountain-road-1299x1047.jpg");

await sharp("assets-src/minti-crew-stage-bw.jpg")
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/heritage-minti-stage-bw-1320x868.jpg");

// 3. Logos
await copyFile("assets-src/minti-logo-black.jpg", "public/brand/minti-logo-black.jpg");
await copyFile("assets-src/minti-logo-white.png", "public/brand/minti-logo-white.png");

// 4. Favicon — square black logo at 512
await sharp("assets-src/minti-logo-black.jpg")
  .resize(512, 512)
  .png()
  .toFile("app/icon.png");

// 5. OG share card — logo centred on pure black (logo bg is pure black, so it
// reads as one seamless card)
const logo = await sharp("assets-src/minti-logo-black.jpg").resize(540, 540).toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#000000" },
})
  .composite([{ input: logo, left: 330, top: 45 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile("public/images/og-default-1200x630.jpg");

console.log("✓ brand assets ingested");
