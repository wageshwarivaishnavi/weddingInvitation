const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, ext);
  const outPath = path.join(path.dirname(filePath), `${base}.webp`);

  try {
    await sharp(filePath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outPath);

    const originalSize = fs.statSync(filePath).size / 1024 / 1024;
    const newSize = fs.statSync(outPath).size / 1024 / 1024;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✓ ${base} | ${originalSize.toFixed(1)}MB → ${newSize.toFixed(1)}MB (${reduction}% reduction)`);
  } catch (err) {
    console.error(`✗ ${base}: ${err.message}`);
  }
}

async function run() {
  const files = fs.readdirSync(imagesDir);
  const candidates = files.filter((f) => /\.(jpe?g|png)$/i.test(f) && fs.statSync(path.join(imagesDir, f)).size > 500000);

  console.log(`Found ${candidates.length} images > 500KB to compress\n`);
  for (const f of candidates) {
    await compressImage(path.join(imagesDir, f));
  }
  console.log('\nDone!');
}

run().catch(console.error);
