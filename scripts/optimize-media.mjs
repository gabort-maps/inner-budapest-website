import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const mediaDir = path.join(publicDir, "media");
const appDir = path.join(root, "app");
const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const mapFile = "BUDAPEST_EVIDENCE_MAPS_v1_6.html";

async function walk(directory, predicate = () => true) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (predicate(fullPath, entry)) files.push(...(await walk(fullPath, predicate)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function urlFromPublic(relativePath) {
  return `/${relativePath.split(path.sep).join("/")}`;
}

async function main() {
  await mkdir(mediaDir, { recursive: true });
  const mediaMap = new Map();
  const hashToUrl = new Map();
  const publicFiles = (await walk(publicDir, (fullPath) => fullPath !== mediaDir)).sort();
  let converted = 0;
  let reused = 0;

  for (const sourcePath of publicFiles) {
    const relativePath = path.relative(publicDir, sourcePath);
    const extension = path.extname(sourcePath).toLowerCase();
    if (!rasterExtensions.has(extension)) continue;

    const sourceUrl = urlFromPublic(relativePath);
    const digest = createHash("sha256").update(await readFile(sourcePath)).digest("hex");
    const existingUrl = hashToUrl.get(digest);
    if (existingUrl) {
      mediaMap.set(sourceUrl, existingUrl);
      reused += 1;
      continue;
    }

    const outputRelativePath = relativePath.replace(/\.(jpe?g|png|webp)$/i, ".webp");
    const outputPath = path.join(mediaDir, outputRelativePath);
    const outputUrl = urlFromPublic(path.join("media", outputRelativePath));
    await mkdir(path.dirname(outputPath), { recursive: true });
    await sharp(sourcePath)
      .rotate()
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6, smartSubsample: true })
      .toFile(outputPath);
    mediaMap.set(sourceUrl, outputUrl);
    hashToUrl.set(digest, outputUrl);
    converted += 1;
  }

  const sourceMapPath = path.join(publicDir, mapFile);
  const targetMapPath = path.join(mediaDir, "evidence", mapFile);
  await mkdir(path.dirname(targetMapPath), { recursive: true });
  await cp(sourceMapPath, targetMapPath, { force: true });
  mediaMap.set(`/${mapFile}`, "/media/evidence/BUDAPEST_EVIDENCE_MAPS_v1_6.html");

  const toddPath = path.join(root, "app/why/manifesto/todd-litman-portrait.ts");
  const toddSource = await readFile(toddPath, "utf8");
  const toddMatch = toddSource.match(/data:image\/(png|jpeg);base64,([^\"]+)/);
  const toddOutputPath = path.join(mediaDir, "manifesto", "todd-litman-portrait.webp");
  if (toddMatch) {
    await mkdir(path.dirname(toddOutputPath), { recursive: true });
    await sharp(Buffer.from(toddMatch[2], "base64"))
      .rotate()
      .resize({ width: 1440, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6, smartSubsample: true })
      .toFile(toddOutputPath);
    await writeFile(toddPath, 'export const toddLitmanPortrait = "/media/manifesto/todd-litman-portrait.webp";\n');
  }

  const appFiles = await walk(appDir);
  const replacements = [...mediaMap.entries()].sort(([a], [b]) => b.length - a.length);
  for (const appFile of appFiles) {
    if (!/\.(ts|tsx)$/.test(appFile) || appFile === toddPath) continue;
    let source = await readFile(appFile, "utf8");
    const original = source;
    for (const [from, to] of replacements) {
      source = source.replaceAll(`"${from}"`, `"${to}"`);
      source = source.replaceAll(`'${from}'`, `'${to}'`);
    }
    source = source.replace(/\/media(?:\/media)+\//g, "/media/");
    if (source !== original) await writeFile(appFile, source);
  }

  const originalSize = (await Promise.all(publicFiles.map((file) => stat(file).then((item) => item.size)))).reduce((sum, size) => sum + size, 0);
  const mediaFiles = await walk(mediaDir);
  const mediaSize = (await Promise.all(mediaFiles.map((file) => stat(file).then((item) => item.size)))).reduce((sum, size) => sum + size, 0);
  console.log(JSON.stringify({ converted, duplicateSourcesReused: reused, originalBytes: originalSize, mediaBytes: mediaSize }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
