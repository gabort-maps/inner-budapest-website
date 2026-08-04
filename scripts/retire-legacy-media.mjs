import { readdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const mediaDir = path.join(publicDir, "media");
const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const mapFile = "BUDAPEST_EVIDENCE_MAPS_v1_6.html";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (fullPath !== mediaDir) files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

const legacyFiles = (await walk(publicDir)).filter((file) => {
  const extension = path.extname(file).toLowerCase();
  return rasterExtensions.has(extension) || path.basename(file) === mapFile;
});

const requiredMedia = [
  path.join(mediaDir, "evidence", mapFile),
  path.join(mediaDir, "manifesto", "todd-litman-portrait.webp"),
];
for (const file of requiredMedia) await stat(file);

for (const file of legacyFiles) await rm(file);
console.log(`Removed ${legacyFiles.length} legacy publishing assets.`);
