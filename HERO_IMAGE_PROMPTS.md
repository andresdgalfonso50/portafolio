# Hero Image Prompts — Case Studies

3 prompts optimizados para generar las imágenes hero de los case studies vía Midjourney, DALL-E 3, Flux, Ideogram, etc.

---

## Especificaciones técnicas comunes

- **Aspect ratio**: 16:9 (forzado por CSS en `case-hero-image`)
- **Resolución mínima**: 1920×1080 (ideal 2400×1350)
- **Estilo**: Fotografía editorial minimalista, tipo Apple. NO ilustración, NO mockup 3D, NO isométrico
- **Paleta**: Monochrome cálido (off-white #FAFAFA, charcoal #1F2937) + acentos azules puntuales (#0066CC/#0071E3)
- **Iluminación**: Natural difusa, softbox, golden hour sutil. Sin neón, sin colores saturados
- **Texturas**: Mesa de mármol blanco, madera clara, papel mate, piel humana
- **Output final**: Nombrar como `hero-{case}-full.jpg` y guardar en `public/assets/images/home/`
- **Optimización post**: Convertir a WebP (calidad 80), comprimir JPG a <300KB. Crear srcset 1x/2x

---

## Hero 1 — Continental Assist App de Asistencia

**Archivo destino**: `public/assets/images/home/hero-app-full.jpg`
**Reemplaza**: placeholder idéntico a `card-app.jpg`

### Prompt (EN, listo para Midjourney/DALL-E)

```
Editorial photography of a young Latin American businesswoman (early 30s, natural makeup, charcoal turtleneck) at an international airport gate at golden hour. She is looking down at her iPhone 15 Pro in her right hand, slightly smiling with confidence. Her left hand holds a boarding pass and a coffee cup. The phone screen is NOT visible (blank/black screen for design overlay). The airport has soft natural light streaming from floor-to-ceiling windows, a "GATE B12" sign slightly blurred in the background, and other travelers walking softly out of focus. Marble table surface in foreground. Shot on Sony A7IV, 35mm f/1.8, shallow depth of field, soft warm tones, minimalist composition, rule of thirds. 16:9 aspect ratio.
```

### Variante DALL-E 3 (más directa)

```
Photorealistic photo of a young woman at an airport gate looking at her phone, golden hour lighting from large windows, shallow depth of field, minimalist editorial style, neutral warm tones, marble table, charcoal turtleneck. The phone screen is dark/blank. 16:9 widescreen.
```

### Negative prompt (si el generador lo soporta)

```
illustration, 3D render, isometric, mockup, screen with UI, multiple phones, neon colors, saturated colors, busy composition, cluttered background, text, watermarks, blurry main subject
```

### Composición esperada (rule of thirds)

```
+------------------------------------------+
| [window light] [soft bokeh B12]          |
|                                          |
|     [woman's face + phone, right third]  |
|                                          |
| [marble table]  [boarding pass]          |
+------------------------------------------+
```

El badge glassmorphism `+11,900% retención` se superpondrá en top-right, no debe competir con elementos clave de la composición.

---

## Hero 2 — Continental Assist E-commerce Checkout

**Archivo destino**: `public/assets/images/home/hero-ecommerce-full.jpg`
**Reemplaza**: placeholder idéntico a `card-ecommerce.jpg`

### Prompt (EN, listo para Midjourney/DALL-E)

```
Editorial overhead-45-degrees shot of a MacBook Air M3 in space gray on a clean white marble desk. The MacBook screen displays a MINIMAL travel insurance checkout page with only 4 input fields and one prominent blue "Confirmar compra" CTA button (the rest of the page is intentionally cropped/blurred at the edges). Next to the MacBook: a Colombian passport (open, pages visible), a black leather cardholder with a Visa credit card peeking out, a small succulent in a white ceramic pot, and a half-drunk cortado in a minimalist white cup. Soft natural window light from the left, no harsh shadows, white wall background slightly out of focus. Shot on Sony A7IV, 50mm f/2.8, clean composition, minimalist Apple-style still life, warm neutral tones. 16:9 aspect ratio.
```

### Variante DALL-E 3

```
Overhead photo of a MacBook on a white marble desk showing a clean travel checkout page with a blue button, Colombian passport, credit card, cortado coffee, succulent plant. Soft natural light, minimalist editorial style, neutral warm tones. 16:9.
```

### Negative prompt

```
multiple laptops, messy desk, cables visible, dirty surface, bright neon colors, dark mood, multiple screens, phone visible, text on screen other than the button
```

### Composición esperada

```
+------------------------------------------+
| [passport] [cardholder]                  |
|                                          |
|       [MacBook with checkout, center]    |
|                                          |
| [cortado]                  [succulent]   |
+------------------------------------------+
```

El badge `+4x conversión` se superpondrá en top-right. La MacBook debe estar en el tercio central para que el badge no tape la pantalla.

---

## Hero 3 — Xentral Health Telemedicina

**Archivo destino**: `public/assets/images/home/hero-xentral-full.jpg`
**Reemplaza**: placeholder idéntico a `card-xentral.jpg`

### Prompt (EN, listo para Midjourney/DALL-E)

```
Editorial photograph of a middle-aged Latin American man (40s, short beard, gray henley shirt) sitting on a Parisian hotel bed during daytime. He is propped up against 3 white pillows, holding an iPad Pro 12.9 in landscape mode with both hands, looking at the screen with a calm relieved expression (slight smile, not worried). The iPad screen shows a video call interface with a female doctor's face visible (white coat, stethoscope, kind expression) — the doctor's side should be slightly softer focus. A small glass of water and a pack of tissues on the white nightstand. Soft natural light from a window with white sheer curtains on the right side. White duvet and headboard. Shot on Sony A7IV, 35mm f/2.0, shallow depth of field, warm natural tones, intimate and reassuring mood, minimalist hotel aesthetic. 16:9 aspect ratio.
```

### Variante DALL-E 3

```
Photorealistic photo of a 40-year-old man in a Parisian hotel room holding an iPad showing a video call with a female doctor, white bedding, soft window light, calm expression, minimalist editorial style, warm neutral tones. 16:9 widescreen.
```

### Negative prompt

```
hospital/clinical setting, multiple people, medical equipment visible, dark mood, sick/concerned expression, neon colors, stock photo feel, watermarks, text overlays on iPad
```

### Composición esperada

```
+------------------------------------------+
| [pillows]    [window light]              |
|                                          |
|    [man with iPad, left/center]          |
|                                          |
| [nightstand+water]                       |
+------------------------------------------+
```

El badge `-60% tiempo` se superpondrá en top-right. La cara del paciente debe ser visible y la del médico en el iPad como elemento secundario (enfoque narrativo: el paciente encontró ayuda).

---

## Workflow de reemplazo

Una vez generadas las 3 imágenes:

1. **Renombrar** los outputs a `hero-app-full.jpg`, `hero-ecommerce-full.jpg`, `hero-xentral-full.jpg`
2. **Ubicación**: `public/assets/images/home/`
3. **Optimizar** (ver `OPTIMIZE-IMAGES.md` o ejecutar el script `npm run optimize:images` si existe)
4. **Validar dimensiones**: `2400x1350 px`, aspect ratio 16:9
5. **Verificar visualmente** en dev server: `npm run dev` y revisar `/app`, `/ecommerce`, `/app-web`
6. **Tests**: `npx playwright test --update-snapshots` para regenerar snapshots

## Generadores recomendados

| Generador | Calidad | Costo | Tiempo | Notas |
|-----------|---------|-------|--------|-------|
| **Midjourney v6** | ⭐⭐⭐⭐⭐ | $10/mes | ~60s | Mejor para fotografía editorial realista |
| **DALL-E 3** | ⭐⭐⭐⭐ | $20/mes (Plus) | ~30s | Mejor comprensión de prompts largos |
| **Flux Pro 1.1** | ⭐⭐⭐⭐⭐ | API: $0.04/img | ~10s | Excelente para Apple-style minimalism |
| **Ideogram 2.0** | ⭐⭐⭐⭐ | Free tier | ~30s | Buen manejo de texto en imágenes |
| **Stable Diffusion XL** | ⭐⭐⭐ | Free (local) | Variable | Requiere hardware GPU |

**Recomendación**: Midjourney v6 o Flux Pro 1.1. Los prompts están optimizados para ambos.
