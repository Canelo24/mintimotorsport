import { chromium } from "playwright-core";
import { execSync } from "node:child_process";

const OUT = process.env.OUT_DIR;
const exe = execSync("find /opt/pw-browsers -name 'headless_shell' -type f | head -1")
  .toString()
  .trim();
const browser = await chromium.launch({ executablePath: exe });

// Hero WITH video playing (normal motion, desktop)
let ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
let page = await ctx.newPage();
await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
await page.waitForTimeout(4500); // let the loop reach the driving footage
await page.screenshot({ path: `${OUT}/v4-hero-video.png` });
await ctx.close();

// Full home, reduced motion (stills everywhere)
ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
page = await ctx.newPage();
await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/v4-home-full.png`, fullPage: true });
await ctx.close();

// The Drive hero (gauges)
ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
page = await ctx.newPage();
await page.goto("http://localhost:3100/the-drive", { waitUntil: "networkidle" });
await page.waitForTimeout(600);
await page.screenshot({ path: `${OUT}/v4-drive-hero.png` });
await ctx.close();

await browser.close();
console.log("done");
