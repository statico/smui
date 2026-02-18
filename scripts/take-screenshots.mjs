#!/usr/bin/env node

/**
 * Takes screenshots of the demo /screenshot page with each accent color,
 * then combines them into an animated GIF using ffmpeg.
 *
 * Prerequisites:
 *   brew install ffmpeg
 *   npx playwright install chromium
 *
 * Usage:
 *   Start the demo dev server first (cd demo && npm run dev),
 *   then run: node scripts/take-screenshots.mjs [port]
 */

import { chromium } from "playwright";
import { execFileSync } from "child_process";
import { mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const PORT = process.argv[2] || "3000";
const BASE = `http://localhost:${PORT}`;

const ACCENTS = [
  { name: "frost2", hex: undefined }, // default #88c0d0
  { name: "green", hex: "a3be8c" },
  { name: "orange", hex: "d08770" },
  { name: "red", hex: "bf616a" },
  { name: "purple", hex: "b48ead" },
];

const WIDTH = 1200;
const HEIGHT = 630;

async function main() {
  const tmp = mkdtempSync(join(tmpdir(), "smui-screenshots-"));
  console.log(`Temp dir: ${tmp}`);

  // Take screenshots
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });

  for (const accent of ACCENTS) {
    const page = await context.newPage();
    const url = accent.hex
      ? `${BASE}/screenshot?accent=${accent.hex}`
      : `${BASE}/screenshot`;

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    await page.screenshot({ path: join(tmp, `${accent.name}.png`), type: "png" });
    console.log(`Saved ${accent.name}.png`);
    await page.close();
  }

  await browser.close();

  // Build ffmpeg concat file
  const frames = ACCENTS.map(
    (a) => `file '${a.name}.png'\nduration 1.5`
  ).join("\n") + `\nfile '${ACCENTS.at(-1).name}.png'\n`;
  writeFileSync(join(tmp, "frames.txt"), frames);

  // Generate GIF
  execFileSync("ffmpeg", [
    "-y", "-f", "concat", "-safe", "0", "-i", "frames.txt",
    "-vf", "fps=10,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3",
    "-loop", "0", "screenshot.gif",
  ], { cwd: tmp, stdio: "inherit" });

  // Copy to public
  const gifDest = join(ROOT, "demo/public/screenshot.gif");
  execFileSync("cp", [join(tmp, "screenshot.gif"), gifDest]);
  console.log(`\nSaved to ${gifDest}`);

  // Also update the static PNG with the default accent
  const pngDest = join(ROOT, "demo/public/screenshot.png");
  execFileSync("cp", [join(tmp, `${ACCENTS[0].name}.png`), pngDest]);
  console.log(`Saved to ${pngDest}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
