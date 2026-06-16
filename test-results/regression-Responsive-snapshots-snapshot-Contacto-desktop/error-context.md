# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression.spec.js >> Responsive snapshots >> snapshot Contacto
- Location: tests\regression.spec.js:132:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  2039 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: _#_contacto.png

Call log:
  - Expect "toHaveScreenshot(_#_contacto.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2039 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 2039 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - link "Saltar al contenido" [ref=e4] [cursor=pointer]:
      - /url: "#main-content"
    - banner:
      - navigation "Navegación principal" [ref=e5]:
        - generic [ref=e6]:
          - link "Logo Yeison Alfonso" [ref=e7] [cursor=pointer]:
            - /url: "#/"
            - img "Logo Yeison Alfonso" [ref=e8]
          - list [ref=e9]:
            - listitem [ref=e10]:
              - link "Home" [ref=e11] [cursor=pointer]:
                - /url: "#/"
            - listitem [ref=e12]:
              - link "App" [ref=e13] [cursor=pointer]:
                - /url: "#/app"
            - listitem [ref=e14]:
              - link "E-commerce" [ref=e15] [cursor=pointer]:
                - /url: "#/ecommerce"
            - listitem [ref=e16]:
              - link "App Web" [ref=e17] [cursor=pointer]:
                - /url: "#/app-web"
            - listitem [ref=e18]:
              - link "Sobre mí" [ref=e19] [cursor=pointer]:
                - /url: "#/sobre-mi"
            - listitem [ref=e20]:
              - link "Contacto" [ref=e21] [cursor=pointer]:
                - /url: "#/contacto"
    - main [ref=e22]:
      - generic [ref=e25]:
        - generic [ref=e26]:
          - text: Contacto
          - heading "Diseñemos el próximo caso de éxito de tu negocio" [level=1] [ref=e27]
          - paragraph [ref=e28]: +4x conversión, -50% abandono, soluciones en producción listas para escalar. ¿Cuál es el KPI que transformaremos?
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]:
              - link "Email andresdgalfonso@gmail.com" [ref=e32] [cursor=pointer]:
                - /url: mailto:andresdgalfonso@gmail.com
                - img [ref=e34]
                - generic [ref=e37]:
                  - generic [ref=e38]: Email
                  - generic [ref=e39]: andresdgalfonso@gmail.com
              - link "Teléfono +57 312 567 3243" [ref=e40] [cursor=pointer]:
                - /url: tel:+573125673243
                - img [ref=e42]
                - generic [ref=e44]:
                  - generic [ref=e45]: Teléfono
                  - generic [ref=e46]: +57 312 567 3243
              - link "LinkedIn yeison-alfonso-product-designer" [ref=e47] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/yeison-alfonso-product-designer
                - img [ref=e49]
                - generic [ref=e53]:
                  - generic [ref=e54]: LinkedIn
                  - generic [ref=e55]: yeison-alfonso-product-designer
              - generic [ref=e56]:
                - img [ref=e58]
                - generic [ref=e61]:
                  - generic [ref=e62]: Ubicación
                  - generic [ref=e63]: Bogotá, Colombia
            - generic [ref=e64]:
              - generic [ref=e67]: Disponible para nuevos proyectos
              - link "Descargar CV" [ref=e69] [cursor=pointer]:
                - /url: /assets/cv-yeison-alfonso.pdf
                - img [ref=e70]
                - generic [ref=e73]: Descargar CV
          - generic [ref=e75]:
            - generic [ref=e76]:
              - generic [ref=e77]: Nombre *
              - textbox "Nombre *" [ref=e78]:
                - /placeholder: Tu nombre completo
            - generic [ref=e79]:
              - generic [ref=e80]: Email *
              - textbox "Email *" [ref=e81]:
                - /placeholder: tu@email.com
            - generic [ref=e82]:
              - generic [ref=e83]: Tipo de proyecto *
              - combobox "Tipo de proyecto *" [ref=e84] [cursor=pointer]:
                - option "Selecciona el tipo de proyecto" [disabled] [selected]
                - option "Diseño de producto desde cero (0 a 1)"
                - option "Optimización de producto existente (Conversión/UX)"
                - option "Creación/Evolución de Sistema de Diseño"
            - generic [ref=e85]:
              - generic [ref=e86]: Mensaje *
              - textbox "Mensaje *" [ref=e87]:
                - /placeholder: Cuéntame de tu proyecto...
            - button "Enviar mensaje" [ref=e88] [cursor=pointer]:
              - generic [ref=e89]:
                - img [ref=e90]
                - text: Enviar mensaje
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - generic [ref=e96]:
            - link "Yeison Alfonso" [ref=e97] [cursor=pointer]:
              - /url: "#/"
              - img "Yeison Alfonso" [ref=e98]
            - paragraph [ref=e99]: +4x ingresos. 0.1% → 12% retención. Bogotá, Colombia.
            - generic [ref=e100]:
              - link "LinkedIn" [ref=e101] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/yeison-alfonso-product-designer
                - img [ref=e102]
              - link "Dribbble" [ref=e106] [cursor=pointer]:
                - /url: "#"
                - img [ref=e107]
          - generic [ref=e112]:
            - heading "Navegación" [level=4] [ref=e113]
            - generic [ref=e114]:
              - link "Home" [ref=e115] [cursor=pointer]:
                - /url: "#/"
              - link "App" [ref=e116] [cursor=pointer]:
                - /url: "#/app"
              - link "E-commerce" [ref=e117] [cursor=pointer]:
                - /url: "#/ecommerce"
              - link "App Web" [ref=e118] [cursor=pointer]:
                - /url: "#/app-web"
              - link "Sobre mí" [ref=e119] [cursor=pointer]:
                - /url: "#/sobre-mi"
              - link "Contacto" [ref=e120] [cursor=pointer]:
                - /url: "#/contacto"
          - generic [ref=e121]:
            - heading "Contacto" [level=4] [ref=e122]
            - generic [ref=e123]:
              - link "andresdgalfonso@gmail.com" [ref=e124] [cursor=pointer]:
                - /url: mailto:andresdgalfonso@gmail.com
                - img [ref=e125]
                - generic [ref=e128]: andresdgalfonso@gmail.com
              - link "+57 312 567 3243" [ref=e129] [cursor=pointer]:
                - /url: tel:+573125673243
                - img [ref=e130]
                - generic [ref=e132]: +57 312 567 3243
              - generic [ref=e133]:
                - img [ref=e134]
                - generic [ref=e137]: Bogotá, Colombia
        - generic [ref=e138]:
          - paragraph [ref=e139]: © 2025 Yeison Alfonso. Disponible desde abril 2026.
          - generic [ref=e140]:
            - generic [ref=e141]: Hecho con Vue 3 + Vite. 100% código propio.
            - button "Volver arriba" [ref=e142] [cursor=pointer]:
              - img [ref=e143]
    - button "Volver arriba" [ref=e145] [cursor=pointer]:
      - img [ref=e146]
  - navigation [ref=e148]:
    - button [ref=e149] [cursor=pointer]:
      - img [ref=e150]
```

# Test source

```ts
  35  | async function heroShouldBeVisible(page, pageInfo) {
  36  |   const h1 = page.locator('h1').first();
  37  |   await expect(h1).toBeVisible({ timeout: 8000 });
  38  |   if (pageInfo.h1Content) {
  39  |     await expect(h1).toContainText(pageInfo.h1Content);
  40  |   }
  41  | }
  42  | 
  43  | async function navWorks(page) {
  44  |   const navLink = page.locator('nav a, .nav a, ul.nav-links a').first();
  45  |   await expect(navLink).toBeVisible();
  46  |   await expect(navLink).toHaveAttribute('href');
  47  | }
  48  | 
  49  | async function ctaExists(page) {
  50  |   // Detect CTA: footer or main content CTA buttons (not nav links)
  51  |   // Use :visible to filter out nav links hidden via display:none on mobile
  52  |   const ctas = page.locator('a[href*="contacto"]:visible, a:has-text("Iniciar"):visible, a:has-text("Conversemos"):visible, a:has-text("Volver al inicio"):visible').first();
  53  |   if (await ctas.count() > 0) {
  54  |     await expect(ctas).toBeVisible();
  55  |   }
  56  | }
  57  | 
  58  | async function footerHasBrand(page) {
  59  |   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  60  |   await page.waitForTimeout(800);
  61  |   // Use .last() because testimonial blockquote also uses <footer> in some pages
  62  |   const footer = page.locator('footer').last();
  63  |   await expect(footer).toBeVisible({ timeout: 5000 });
  64  | }
  65  | 
  66  | /* ─── Tests ─── */
  67  | PAGES.forEach((pageInfo) => {
  68  |   test.describe(`${pageInfo.name} (${pageInfo.color})`, () => {
  69  |     test('carga sin errores de consola', async ({ page }) => {
  70  |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  71  |       await page.waitForTimeout(800);
  72  |       await assertNoPageErrors(page);
  73  |     });
  74  | 
  75  |     test('hero visible con h1 correcto', async ({ page }) => {
  76  |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  77  |       await page.waitForTimeout(1000);
  78  |       await heroShouldBeVisible(page, pageInfo);
  79  |     });
  80  | 
  81  |     test('navegación funciona', async ({ page }) => {
  82  |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  83  |       await navWorks(page);
  84  |     });
  85  | 
  86  |     test('CTA final o call-to-action presente', async ({ page }) => {
  87  |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  88  |       await page.waitForTimeout(500);
  89  |       await ctaExists(page);
  90  |     });
  91  | 
  92  |     test('footer visible con marca', async ({ page }) => {
  93  |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  94  |       await page.waitForTimeout(500);
  95  |       // Scroll to bottom
  96  |       await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  97  |       await page.waitForTimeout(500);
  98  |       await footerHasBrand(page);
  99  |     });
  100 |   });
  101 | });
  102 | 
  103 | /* ─── Cross-page tests ─── */
  104 | test.describe('Cross-page', () => {
  105 |   test('navegar entre páginas no produce errores', async ({ page }) => {
  106 |     for (const p of PAGES) {
  107 |       await page.goto(p.path, { waitUntil: 'networkidle' });
  108 |       await page.waitForTimeout(500);
  109 |       // Click first nav link that isn't current page
  110 |       const links = page.locator('nav a:visible, ul.nav-links a:visible, [role="navigation"] a:visible');
  111 |       const count = await links.count();
  112 |       let clicked = false;
  113 |       for (let i = 0; i < count && !clicked; i++) {
  114 |         const href = await links.nth(i).getAttribute('href');
  115 |         if (href && href !== p.path && href !== '#') {
  116 |           await links.nth(i).click();
  117 |           await page.waitForTimeout(1000);
  118 |           // Verify new page loaded
  119 |           await expect(page.locator('h1').first()).toBeVisible({ timeout: 5000 });
  120 |           clicked = true;
  121 |         }
  122 |       }
  123 |       // Re-navigate to next page
  124 |       await page.goto(p.path, { waitUntil: 'networkidle' });
  125 |     }
  126 |   });
  127 | });
  128 | 
  129 | test.describe('Responsive snapshots', () => {
  130 |   // Generate reference screenshots (run with --update-snapshots to create)
  131 |   PAGES.forEach((pageInfo) => {
  132 |     test(`snapshot ${pageInfo.name}`, async ({ page }) => {
  133 |       await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
  134 |       await page.waitForTimeout(1000);
> 135 |       await expect(page).toHaveScreenshot(`${pageInfo.path.replace(/\//g, '_')}.png`, {
      |                          ^ Error: expect(page).toHaveScreenshot(expected) failed
  136 |         fullPage: true,
  137 |         maxDiffPixels: 500, // Allow minor anti-aliasing diffs
  138 |       });
  139 |     });
  140 |   });
  141 | });
  142 | 
```