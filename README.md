# Yeison Alfonso · Portfolio

Portfolio de Product Designer construido con Vue 3 + Vite + Tailwind CSS. Diseño editorial con identidad de color por sección, sistema de aurora backgrounds, y primitivos reutilizables.

---

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build | Vite 5 |
| Estilos | Tailwind CSS 3 (paleta extendida) + `main.css` (utilidades) |
| Iconos | lucide-vue-next |
| Routing | vue-router 4 |
| Email | @emailjs/browser |
| Scroll | IntersectionObserver (`useScrollAnimations`) |

---

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # producción
npm run preview  # preview del build
```

---

## Estructura

```
src/
├── assets/main.css              # 12 secciones de utilidades
├── components/
│   ├── primitives/              # Átomos reutilizables
│   │   ├── AuroraBg.vue         # 4 variantes de fondo
│   │   ├── StatCard.vue         # Card de métrica
│   │   ├── SectionLabel.vue     # Etiqueta numerada
│   │   ├── Marquee.vue          # Track infinito
│   │   └── AccentBorder.vue     # Border animado
│   ├── NavBar.vue · Footer.vue · MobileMenu.vue
│   ├── HeroFloating.vue · IPhoneMockup.vue · BrowserMockup.vue
│   └── ImageComparison.vue
├── composables/useScrollAnimations.js
├── router/index.js              # 6 rutas + 404
└── views/                       # 6 páginas + NotFound
```

---

## Sistema de diseño

### Paleta

Tres colores con jerarquía clara:

| Color | Uso | Tailwind |
|-------|-----|----------|
| **Azul** `#2563EB` | Primario (80%) — CTAs, links, identidad base | `blue-{50..950}` |
| **Violeta** `#6D28D9` | Acento (20%) — highlights, identidad personal | `violet-{50..950}` |
| **Esmeralda** `#059669` | Impacto / salud — métricas positivas, badges | `emerald-{50..950}` |
| **Slate** | Neutros, tipografía, bordes | `slate-{50..950}` |

### Identidad por página

| Página | Color | Aplicación |
|--------|-------|-----------|
| Home | Mixto | Hero con ambos, stats variados, marquee |
| App | Violeta | Tipografía dual, badge, CTA |
| Ecommerce | Azul | "3.8%" gradient, "conversión" italic, CTA |
| App Web (Xentral) | Esmeralda | "6 pasos" italic, badge Telemedicina, CTA |
| Sobre mí | Violeta (acento) | Cards de experiencia por color |
| Contacto | Azul | "Hablamos" gradient, form |
| 404 | Mixto (dark) | Aurora dark, gradient animado |

---

## Tipografía

Familia: **Inter** (UI) + **Instrument Serif** (display, via `font-display`)

Patrón editorial usado en cada hero:

```html
<h1>
  Título en negrita
  <span class="text-gradient-blue">palabra clave</span>
  continuación
  <span class="font-light italic text-blue-600">enfatizado</span>
</h1>
<p class="drop-cap">Párrafo introductorio con letra capital...</p>
```

**Drop cap:** utilidad `.drop-cap` aplica `::first-letter { font-size: 3.5rem; float: left; }` con tinte violeta.

---

## Componentes primitivos

### `<AuroraBg variant="hero|dark|subtle|mixed">`

Wrapper con blobs absolutos. Variantes:
- `hero` — 2 blobs (top-left violeta, top-right azul) — usar en hero
- `dark` — 3 blobs más densos sobre `bg-slate-950` — usar en CTAs finales
- `subtle` — 1 blob mínimo
- `mixed` — 2 blobs en gradientes cruzados

```vue
<AuroraBg variant="hero" class="section">
  <div class="relative z-10">…</div>
</AuroraBg>
```

### `<StatCard accent="blue|violet|emerald|slate|amber" size="md|lg|xl">`

Card de métrica con icono y descripción.

```vue
<StatCard accent="violet" size="xl" value="+4x" label="Ingresos" icon="TrendingUp">
  CRO verificable, no suposiciones.
</StatCard>
```

### `<SectionLabel number="01">Trayectoria</SectionLabel>`

Etiqueta numerada con prefijo monoespaciado.

### `<Marquee speed="40">`

Track infinito. Duplica los hijos automáticamente.

```vue
<Marquee>
  <img src="logo-1.svg" />
  <img src="logo-2.svg" />
</Marquee>
```

### `<AccentBorder color="violet" hover>`

Border lateral animado en hover (translate 0→100%).

---

## Utilidades (`main.css`)

| Clase | Propósito |
|-------|-----------|
| `text-gradient-{blue,violet,mixed}` | Texto con gradiente animado |
| `aurora-wrapper` | Contenedor relativo con `isolation: isolate` |
| `card-flat` | Card blanco con borde sutil |
| `card-elevated--{violet,blue,emerald}` | Card con glow coloreado |
| `glass-card` | Backdrop-blur para overlays |
| `stat-card` | Card de métrica con accent |
| `section-label` | Etiqueta numerada |
| `marquee` | Animación infinita |
| `drop-cap` | Letra capital |
| `editorial-number` | Número gigante con tabular-nums |
| `mask-fade-edges` | Fade horizontal con mask |
| `hover-lift` | Sutil elevación en hover |

### Sombras glow

```css
shadow-glow-blue     shadow-glow-blue-lg
shadow-glow-violet   shadow-glow-violet-lg
shadow-glow-emerald  shadow-glow-emerald-lg
```

---

## Animaciones

CSS keyframes definidas en `tailwind.config.js`:
- `marquee` — translateX(0 → -50%)
- `float` — translateY 0/-10px
- `gradient` — background-position shift
- `blob` — transform caótico lento (20s)
- `pulse-glow` — opacity + scale

**Transiciones:** 150-300ms siempre (nunca más lento para evitar lag percibido).

**`prefers-reduced-motion`:** todas las animaciones se deshabilitan vía `main.css` `@media` query.

---

## Responsive

Mobile-first. Breakpoints:
- `375` — small mobile
- `768` — tablet
- `1024` — laptop
- `1440` — desktop

Touch targets ≥ 44×44px (verificado en `useScrollAnimations`).

---

## Accesibilidad

- WCAG AA: contraste verificado en todas las paletas
- Focus visible: anillos `outline` en todos los interactivos
- ARIA: `aria-label`, `aria-expanded`, `aria-busy` en componentes clave
- Reduced motion respetado
- Form: validación con `aria-invalid`, `aria-describedby`

---

## Testing

```bash
# Regression suite (Playwright)
py tests/regression.py

# Lighthouse-style audit
py tests/audit.py
```

Suite valida 6 páginas × 2 viewports sin errores, captura screenshots de referencia.

---

## Performance

- `transform`/`opacity` para animaciones (GPU)
- `will-change` selectivo solo en hero/CTAs
- Imágenes: `loading="lazy"` excepto hero (eager + `fetchpriority="high"`)
- Code splitting automático por route (lazy `() => import(...)`)

---

## Licencia

© 2025 Yeison Alfonso. Todos los derechos reservados.
