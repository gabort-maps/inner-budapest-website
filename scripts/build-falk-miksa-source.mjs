import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const [sourceHtmlPath, thumbnailPath] = process.argv.slice(2);

if (!sourceHtmlPath || !thumbnailPath) {
  throw new Error(
    "Usage: node scripts/build-falk-miksa-source.mjs <self-contained-html> <thumbnail-png>",
  );
}

const outputDirectory = path.resolve("public/media/change/falk-miksa");
const sourceHtml = await fs.readFile(sourceHtmlPath, "utf8");
const assetsMatch = sourceHtml.match(/const assets = (\{[\s\S]*?\});/);

if (!assetsMatch) {
  throw new Error("The Falk Miksa source does not contain its canonical asset map.");
}

const embeddedAssets = JSON.parse(assetsMatch[1]);
const assetEntries = Object.entries(embeddedAssets).sort(
  ([left], [right]) => Number(left.replace("asset", "")) - Number(right.replace("asset", "")),
);

if (assetEntries.length !== 18) {
  throw new Error(`Expected 18 Falk Miksa source assets, found ${assetEntries.length}.`);
}

await fs.mkdir(outputDirectory, { recursive: true });

const externalAssets = {};
for (const [assetName, dataUrl] of assetEntries) {
  const dataMatch = dataUrl.match(/^data:image\/(png|jpeg);base64,(.+)$/s);
  if (!dataMatch) throw new Error(`Unsupported embedded image for ${assetName}.`);

  const outputName = `${assetName}.webp`;
  const outputPath = path.join(outputDirectory, outputName);
  await sharp(Buffer.from(dataMatch[2], "base64"))
    .rotate()
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(outputPath);
  externalAssets[assetName] = `/media/change/falk-miksa/${outputName}`;
}

let productionHtml = sourceHtml
  .replace(assetsMatch[1], JSON.stringify(externalAssets))
  .replace(/\s*<header class="site-head">[\s\S]*?<\/header>\s*/, "\n")
  .replace(
    "<head>",
    '<head>\n  <meta name="inner-budapest-source" content="FALK_MIKSA_CINEMATIC_SUBPAGE_MOCKUP_v0_4">',
  );

if (productionHtml.includes("data:image/png;base64,iVBORw0KGgoAAAANSUhEUg")) {
  // The source intentionally retains only its tiny one-pixel loading placeholders.
  const largeDataUrl = /data:image\/(?:png|jpeg);base64,[A-Za-z0-9+/=]{1000,}/;
  if (largeDataUrl.test(productionHtml)) {
    throw new Error("A large embedded image remained in the production HTML.");
  }
}

await fs.writeFile(path.join(outputDirectory, "page.html"), productionHtml, "utf8");
await sharp(thumbnailPath)
  .rotate()
  .webp({ quality: 92, effort: 6, smartSubsample: true })
  .toFile(path.join(outputDirectory, "thumbnail.webp"));

console.log(
  JSON.stringify({
    source: path.basename(sourceHtmlPath),
    assets: assetEntries.length,
    page: path.join(outputDirectory, "page.html"),
    thumbnail: path.join(outputDirectory, "thumbnail.webp"),
  }),
);
