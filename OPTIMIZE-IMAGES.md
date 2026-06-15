# Image Optimization Guide

## Requisitos

```bash
npm install -D sharp
```

## Script rápido (sin instalar nada)

Si aún no quieres añadir `sharp` como dependencia, usa este one-liner con `imagemin` global o herramientas externas como `squoosh`:

```bash
# Opción 1: Squoosh CLI
npx @squoosh/cli --resize 2400 public/assets/images/home/hero-app-full.jpg

# Opción 2: ImageMagick (si lo instalas)
magick public/assets/images/home/hero-app-full.jpg -quality 80 -resize 2400x1350 public/assets/images/home/hero-app-full.jpg

# Opción 3: Sharp local (recomendado para producción)
node scripts/optimize-images.mjs
```

## Script Node con Sharp

Crear `scripts/optimize-images.mjs`:

```js
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const HERO_DIR = 'public/assets/images/home'
const TARGET_WIDTH = 2400
const WEBP_QUALITY = 80
const JPG_QUALITY = 85

const files = await readdir(HERO_DIR)
const heroes = files.filter(f => /^hero-.*-full\.(jpg|jpeg|png)$/i.test(f))

console.log(`Optimizing ${heroes.length} hero images...`)

for (const file of heroes) {
  const input = join(HERO_DIR, file)
  const baseName = file.replace(/\.(jpg|jpeg|png)$/i, '')
  const webpOutput = join(HERO_DIR, `${baseName}.webp`)

  const meta = await sharp(input).metadata()
  console.log(`\n📸 ${file}`)
  console.log(`   Original: ${meta.width}x${meta.height}, ${(meta.size / 1024).toFixed(0)}KB`)

  // WebP (moderno, mejor compresión)
  await sharp(input)
    .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpOutput)

  const webpMeta = await sharp(webpOutput).metadata()
  console.log(`   WebP:     ${webpMeta.width}x${webpMeta.height}, ${(webpMeta.size / 1024).toFixed(0)}KB`)

  // Re-comprimir JPG (calidad ligeramente menor, tamaño menor)
  const jpgOutput = join(HERO_DIR, `${baseName}.jpg`)
  await sharp(input)
    .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toFile(jpgOutput + '.tmp')

  await sharp(jpgOutput + '.tmp')
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toFile(jpgOutput)

  const jpgMeta = await sharp(jpgOutput).metadata()
  console.log(`   JPG:      ${jpgMeta.width}x${jpgMeta.height}, ${(jpgMeta.size / 1024).toFixed(0)}KB`)

  // Cleanup tmp
  await import('node:fs/promises').then(fs => fs.unlink(jpgOutput + '.tmp'))
}

console.log('\n✅ Done. Replace image sources in Vue files if using .webp')
```

## Uso después de generar las imágenes

1. Coloca las imágenes en `public/assets/images/home/` con nombres:
   - `hero-app-full.jpg`
   - `hero-ecommerce-full.jpg`
   - `hero-xentral-full.jpg`

2. Ejecuta:
   ```bash
   node scripts/optimize-images.mjs
   ```

3. Opcional: actualizar Vue files para usar WebP con fallback JPG:

```vue
<picture>
  <source srcset="/assets/images/home/hero-app-full.webp" type="image/webp" />
  <img src="/assets/images/home/hero-app-full.jpg" alt="..." />
</picture>
```

## Targets de tamaño

| Tipo | Dimensiones | JPG | WebP |
|------|-------------|-----|------|
| Hero full | 2400×1350 | <300KB | <200KB |
| Card | 1200×900 | <150KB | <100KB |
