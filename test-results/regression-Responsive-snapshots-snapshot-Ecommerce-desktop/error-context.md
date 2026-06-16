# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression.spec.js >> Responsive snapshots >> snapshot Ecommerce
- Location: tests\regression.spec.js:132:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

Timeout: 5000ms
  Timeout 5000ms exceeded.

  Snapshot: _#_ecommerce.png

Call log:
  - Expect "toHaveScreenshot(_#_ecommerce.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 331417 pixels (ratio 0.02 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - Timeout 5000ms exceeded.

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
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]:
                - img [ref=e28]
                - generic [ref=e32]: Caso de estudio
              - 'heading "Continental Assist: optimización basada en conversión" [level=1] [ref=e33]'
              - generic [ref=e34]: E-commerce
              - paragraph [ref=e35]: 0.82% → 3.8% en 3 meses. CRO medible, dashboard público.
            - generic [ref=e36]:
              - img "Checkout de asistencia en viaje" [ref=e37]
              - generic [ref=e38]:
                - generic [ref=e39]: +4x
                - generic [ref=e40]: conversión
          - generic [ref=e42]:
            - generic [ref=e43]:
              - generic [ref=e44]: Product Designer
              - generic [ref=e45]: Mi Rol
            - generic [ref=e46]:
              - generic [ref=e47]: 3 Meses
              - generic [ref=e48]: Duración
            - generic [ref=e49]:
              - generic [ref=e50]: PM + 3 Devs
              - generic [ref=e51]: Equipo
            - generic [ref=e52]:
              - generic [ref=e53]: +4x Ingresos
              - generic [ref=e54]: Impacto
        - generic [ref=e56]:
          - generic [ref=e58]:
            - img [ref=e60]
            - generic [ref=e62]:
              - generic [ref=e63]: La situación era crítica
              - heading "0.82% de conversión. 3 meses para salvar el canal digital." [level=3] [ref=e64]
              - paragraph [ref=e65]:
                - text: Perdíamos más adquiriendo clientes de lo que generaban. El equipo tenía
                - strong [ref=e66]: 3 meses
                - text: para revertirlo.
          - generic [ref=e67]:
            - generic [ref=e68]: "01"
            - heading "64.5% abandonaba. 12 campos. 0 confianza." [level=2] [ref=e69]
            - paragraph [ref=e70]: 5 fricciones medidas con analytics + UI anterior con 4 problemas de jerarquía.
          - generic [ref=e71]:
            - generic [ref=e72]:
              - generic [ref=e73]: 64.5%
              - text: Tráfico Mobile
            - generic [ref=e74]:
              - generic [ref=e75]: 0.82%
              - text: Conversión Inicial
            - generic [ref=e76]:
              - generic [ref=e77]: 53s
              - text: Interacción Media
            - generic [ref=e78]:
              - generic [ref=e79]: <20%
              - text: Retención
          - generic [ref=e80]:
            - generic [ref=e81]:
              - img [ref=e82]
              - heading "Flujo de compra confuso" [level=3] [ref=e86]
              - paragraph [ref=e87]: "El proceso rompía el modelo mental: pedíamos el pago antes del resumen."
            - generic [ref=e88]:
              - img [ref=e89]
              - heading "12+ campos en el checkout" [level=3] [ref=e92]
              - paragraph [ref=e93]: Sobrecarga cognitiva. Reduje a 4 campos esenciales.
            - generic [ref=e94]:
              - img [ref=e95]
              - heading "Sin indicadores de confianza" [level=3] [ref=e99]
              - paragraph [ref=e100]: Sin badges SSL visibles. Abandonaban por incertidumbre.
            - generic [ref=e101]:
              - img [ref=e102]
              - heading "Desktop-first obsoleto" [level=3] [ref=e104]
              - paragraph [ref=e105]: 64.5% del tráfico era mobile, pero la UX era desktop.
            - generic [ref=e106]:
              - img [ref=e107]
              - heading "Alta tasa de abandono" [level=3] [ref=e111]
              - paragraph [ref=e112]: Menos del 20% completaban la compra. Patrón identificado.
          - generic [ref=e113]:
            - generic [ref=e115]: UI ANTERIOR
            - generic [ref=e116]:
              - img "UI del e-commerce antes del rediseño" [ref=e118]
              - generic [ref=e119]:
                - generic [ref=e120]:
                  - generic [ref=e121]: "1"
                  - generic [ref=e122]:
                    - heading "CTA sin jerarquía" [level=4] [ref=e123]
                    - paragraph [ref=e124]: El botón principal se pierde entre otros elementos.
                - generic [ref=e125]:
                  - generic [ref=e126]: "2"
                  - generic [ref=e127]:
                    - heading "Sin identidad de marca" [level=4] [ref=e128]
                    - paragraph [ref=e129]: Diseño genérico que no transmite viajes.
                - generic [ref=e130]:
                  - generic [ref=e131]: "3"
                  - generic [ref=e132]:
                    - heading "Propósito invisible" [level=4] [ref=e133]
                    - paragraph [ref=e134]: El usuario no identifica que es un sitio de viajes.
                - generic [ref=e135]:
                  - generic [ref=e136]: "4"
                  - generic [ref=e137]:
                    - heading "Sobrecarga cognitiva" [level=4] [ref=e138]
                    - paragraph [ref=e139]: Sin foco claro, el usuario no sabe a dónde mirar.
        - generic [ref=e141]:
          - generic [ref=e142]:
            - generic [ref=e143]: "02"
            - heading "El problema no era el diseño, era el flujo" [level=2] [ref=e144]
            - paragraph [ref=e145]: 73% abandonaba en el primer paso. Mostrábamos el formulario antes del resumen. Usuario quería ver, luego pagar.
          - generic [ref=e146]:
            - generic [ref=e148]:
              - img [ref=e150]
              - generic [ref=e152]:
                - generic [ref=e153]: El momento "aha"
                - heading "El problema no era el diseño, era el flujo" [level=4] [ref=e154]
                - paragraph [ref=e155]:
                  - text: 73% abandonaba en el primer paso. El usuario esperaba ver el resumen antes del pago.
                  - strong [ref=e156]: Mostrábamos el formulario primero.
            - generic [ref=e157]:
              - generic [ref=e158]:
                - generic [ref=e159]: User Pain
                - paragraph [ref=e160]: El usuario pierde motivación si hay más pasos después de iniciar checkout.
              - generic [ref=e161]:
                - generic [ref=e162]: Business
                - paragraph [ref=e163]: Cada paso adicional aumentaba el abandono en 15% promedio.
              - generic [ref=e164]:
                - generic [ref=e165]: UX
                - paragraph [ref=e166]: "El flujo rompía el modelo mental: pago antes que resumen."
          - 'heading "Benchmark: 4 checkouts, 6 patrones ganadores" [level=3] [ref=e167]'
          - generic [ref=e168]:
            - generic [ref=e169]:
              - img [ref=e170]
              - heading "Avianca" [level=3] [ref=e172]
              - paragraph [ref=e173]: Flujo lineal con progreso visible.
              - paragraph [ref=e174]:
                - strong [ref=e175]: "Aprendizaje:"
                - text: El usuario necesita saber dónde está y cuánto falta.
            - generic [ref=e176]:
              - img [ref=e177]
              - heading "Despegar" [level=3] [ref=e180]
              - paragraph [ref=e181]: Personalización según comportamiento.
              - paragraph [ref=e182]:
                - strong [ref=e183]: "Aprendizaje:"
                - text: Reducir decisiones, mostrar solo lo relevante.
            - generic [ref=e184]:
              - img [ref=e185]
              - heading "Assist Card" [level=3] [ref=e187]
              - paragraph [ref=e188]: Funcional pero faltaba emoción.
              - paragraph [ref=e189]:
                - strong [ref=e190]: "Aprendizaje:"
                - text: La confianza no solo es técnica, también es visual.
          - paragraph [ref=e192]:
            - strong [ref=e193]: "Conclusión:"
            - text: Necesitábamos flujo simple + contexto claro + señales de confianza.
          - 'heading "Estrategia: 5 principios, 1 objetivo (-64% abandono)" [level=3] [ref=e194]'
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]: Objetivo
              - heading "Incrementar conversión eliminando fricciones" [level=3] [ref=e198]
              - paragraph [ref=e199]: Reducir el tiempo entre intención de compra y confirmación del pago.
            - generic [ref=e201]:
              - generic [ref=e202]:
                - img [ref=e203]
                - generic [ref=e205]: Mobile-first
                - generic [ref=e206]: 64.5% del tráfico venía de móviles, pero la UX era desktop.
              - generic [ref=e207]:
                - img [ref=e208]
                - generic [ref=e211]: Máximo 5 pasos
                - generic [ref=e212]: Cada paso adicional aumentaba el abandono en 15%.
            - generic [ref=e214]:
              - generic [ref=e215]:
                - img [ref=e216]
                - generic [ref=e219]: Claridad > Estética
                - generic [ref=e220]: El usuario abandonaba por incertidumbre, no por diseño.
              - generic [ref=e221]:
                - img [ref=e222]
                - generic [ref=e224]: Feedback constante
                - generic [ref=e225]: El usuario necesita saber en qué paso está y cuánto falta.
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]: "03"
            - heading "12 campos → 4. 8 pantallas → 5. +4x ingresos." [level=2] [ref=e230]
            - paragraph [ref=e231]: "Rediseño paso a paso: cada fricción eliminada con un test."
          - generic [ref=e232]:
            - generic [ref=e233]:
              - img "Paso 1" [ref=e236]
              - generic [ref=e237]:
                - generic [ref=e238]: "01"
                - heading "Selección de plan clara" [level=3] [ref=e239]
                - paragraph [ref=e240]: Jerarquía visual inmediata para comparar beneficios y precios de un vistazo.
            - generic [ref=e241]:
              - img "Paso 2" [ref=e244]
              - generic [ref=e245]:
                - generic [ref=e246]: "02"
                - heading "Entrada de datos inteligente" [level=3] [ref=e247]
                - paragraph [ref=e248]: Validación en tiempo real para prevenir errores y mantener al usuario en el flujo.
            - generic [ref=e249]:
              - img "Paso 3" [ref=e252]
              - generic [ref=e253]:
                - generic [ref=e254]: "03"
                - heading "Revisión transparente" [level=3] [ref=e255]
                - paragraph [ref=e256]: Resumen detallado antes del pago para eliminar ansiedad y aumentar confianza.
            - generic [ref=e257]:
              - img "Paso 4" [ref=e260]
              - generic [ref=e261]:
                - generic [ref=e262]: "04"
                - heading "Pago fluido" [level=3] [ref=e263]
                - paragraph [ref=e264]: Métodos populares con interfaz limpia para minimizar distracciones.
            - generic [ref=e265]:
              - img "Paso 5" [ref=e268]
              - generic [ref=e269]:
                - generic [ref=e270]: "05"
                - heading "Confirmación instantánea" [level=3] [ref=e271]
                - paragraph [ref=e272]: Cerré el ciclo de confianza con confirmación inmediata y clara.
        - generic [ref=e274]:
          - generic [ref=e275]:
            - generic [ref=e276]: "04"
            - 'heading "Impacto: 0.82% → 3.8%, +4x ingresos" [level=2] [ref=e277]'
            - paragraph [ref=e278]: 8 usuarios validaron el nuevo flujo en testing. Métricas auditables 3 meses después.
          - img "Comparación Antes y Después del rediseño" [ref=e280]
          - generic [ref=e281]:
            - generic [ref=e282]:
              - generic [ref=e283]: +4x
              - generic [ref=e284]:
                - heading "Ingresos" [level=3] [ref=e285]
                - paragraph [ref=e286]: De ~2K USD a ~9K USD mensuales
            - generic [ref=e287]:
              - generic [ref=e288]: "-40%"
              - generic [ref=e289]:
                - heading "Abandono" [level=3] [ref=e290]
                - paragraph [ref=e291]: Reducción en el checkout
            - generic [ref=e292]:
              - generic [ref=e293]: "+23"
              - generic [ref=e294]:
                - heading "Puntos NPS" [level=3] [ref=e295]
                - paragraph [ref=e296]: Net Promoter Score mejorado
          - 'heading "Validación: 8 usuarios, 0 abandonos" [level=3] [ref=e297]'
          - generic [ref=e298]:
            - generic [ref=e299]:
              - img [ref=e300]
              - heading "Completan el flujo sin ayuda" [level=4] [ref=e303]
              - paragraph [ref=e304]: No se requerían instrucciones adicionales para completar la compra.
            - generic [ref=e305]:
              - img [ref=e306]
              - heading "Entendían los pasos" [level=4] [ref=e309]
              - paragraph [ref=e310]: El indicador de progreso fue claro para el 100% de los usuarios testeados.
            - generic [ref=e311]:
              - img [ref=e312]
              - heading "Finalizan compra correctamente" [level=4] [ref=e314]
              - paragraph [ref=e315]: Los errores de formulario se redujeron significativamente.
          - blockquote [ref=e317]:
            - paragraph [ref=e318]: "\"Por fin sé exactamente cuánto voy a pagar y en cuántos pasos. Es mucho más claro que antes.\""
            - generic [ref=e319]: — Usuario durante testing
        - generic [ref=e321]:
          - generic [ref=e322]:
            - generic [ref=e323]: "05"
            - heading "4 lecciones, 3 iteraciones, 5% conversión target" [level=2] [ref=e324]
            - paragraph [ref=e325]: Lo que aprendí sobre CRO y los próximos pasos para llegar a 5% de conversión.
          - generic [ref=e326]:
            - generic [ref=e327]:
              - generic [ref=e328]: "01"
              - paragraph [ref=e329]:
                - strong [ref=e330]: Decidir qué NO diseñar.
                - text: "Redujimos 12 campos a 4. Menos fue más: cada campo eliminado redujo la fricción percibida."
            - generic [ref=e331]:
              - generic [ref=e332]: "02"
              - paragraph [ref=e333]:
                - strong [ref=e334]: Modelo mental del usuario, no proceso interno.
                - text: Los usuarios querían ver el resumen antes de pagar. Resumen antes del pago = menos abandono.
            - generic [ref=e335]:
              - generic [ref=e336]: "03"
              - paragraph [ref=e337]:
                - strong [ref=e338]: La confianza se diseña, no se asume.
                - text: "Se iban por incertidumbre: no sabían cuánto iban a pagar ni qué iban a obtener."
            - generic [ref=e339]:
              - generic [ref=e340]: "04"
              - paragraph [ref=e341]:
                - strong [ref=e342]: Mobile-first = rediseñar desde cero.
                - text: 64.5% tráfico mobile exigía jerarquía táctil, gestos nativos e IA diferente a desktop.
          - generic [ref=e344]:
            - img [ref=e346]
            - generic [ref=e350]:
              - heading "Lo que intentamos primero y no funcionó" [level=4] [ref=e351]
              - list [ref=e352]:
                - listitem [ref=e353]:
                  - generic [ref=e354]: ✗
                  - generic [ref=e355]:
                    - strong [ref=e356]: "Más onboarding:"
                    - text: Más educación = más fricción. Lo eliminamos.
                - listitem [ref=e357]:
                  - generic [ref=e358]: ✗
                  - generic [ref=e359]:
                    - strong [ref=e360]: "Modal de confirmación:"
                    - text: Fricción sin valor. Lo eliminamos.
                - listitem [ref=e361]:
                  - generic [ref=e362]: ✗
                  - generic [ref=e363]:
                    - strong [ref=e364]: "Carousel en checkout:"
                    - text: 12% cancelaban al verlo. Lo quitamos.
          - generic [ref=e365]:
            - generic [ref=e366]:
              - img [ref=e368]
              - heading "Testeo A/B" [level=4] [ref=e373]
              - paragraph [ref=e374]: Variaciones del flujo para optimizar conversión.
            - generic [ref=e375]:
              - img [ref=e377]
              - heading "Personalización" [level=4] [ref=e381]
              - paragraph [ref=e382]: Experiencia adaptada al historial del usuario.
            - generic [ref=e383]:
              - img [ref=e385]
              - heading "Checkout express" [level=4] [ref=e387]
              - paragraph [ref=e388]: Implementar one-click checkout para usuarios returning.
          - blockquote [ref=e389]:
            - paragraph [ref=e390]: "\"Yeison transformó nuestro checkout. De 12 pasos a 4. Revenue aumentó directo.\""
            - generic [ref=e391]:
              - generic [ref=e392]: Carlos Mendoza
              - generic [ref=e393]: CEO, Continental Assist
        - generic [ref=e395]:
          - heading "Tu próximo +4x?" [level=2] [ref=e396]
          - paragraph [ref=e397]: CRO verificable con datos, no conjeturas. Conversemos sobre tu caso.
          - generic [ref=e398]:
            - link "Iniciar conversación" [ref=e399] [cursor=pointer]:
              - /url: "#/contacto"
            - link "Siguiente Caso Xentral Health" [ref=e400] [cursor=pointer]:
              - /url: "#/app-web"
              - generic [ref=e401]:
                - generic [ref=e402]: Siguiente Caso
                - generic [ref=e403]: Xentral Health
              - img [ref=e404]
        - navigation [ref=e406]:
          - generic [ref=e408]:
            - link "Caso anterior App de Asistencia en Viajes" [ref=e409] [cursor=pointer]:
              - /url: "#/app"
              - generic [ref=e410]:
                - generic [ref=e411]: Caso anterior
                - heading "App de Asistencia en Viajes" [level=4] [ref=e412]
              - img [ref=e414]
            - link "Siguiente caso Xentral Health" [ref=e416] [cursor=pointer]:
              - /url: "#/app-web"
              - generic [ref=e417]:
                - generic [ref=e418]: Siguiente caso
                - heading "Xentral Health" [level=4] [ref=e419]
              - img [ref=e421]
    - contentinfo [ref=e423]:
      - generic [ref=e424]:
        - generic [ref=e425]:
          - generic [ref=e426]:
            - link "Yeison Alfonso" [ref=e427] [cursor=pointer]:
              - /url: "#/"
              - img "Yeison Alfonso" [ref=e428]
            - paragraph [ref=e429]: +4x ingresos. 0.1% → 12% retención. Bogotá, Colombia.
            - generic [ref=e430]:
              - link "LinkedIn" [ref=e431] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/yeison-alfonso-product-designer
                - img [ref=e432]
              - link "Dribbble" [ref=e436] [cursor=pointer]:
                - /url: "#"
                - img [ref=e437]
          - generic [ref=e442]:
            - heading "Navegación" [level=4] [ref=e443]
            - generic [ref=e444]:
              - link "Home" [ref=e445] [cursor=pointer]:
                - /url: "#/"
              - link "App" [ref=e446] [cursor=pointer]:
                - /url: "#/app"
              - link "E-commerce" [ref=e447] [cursor=pointer]:
                - /url: "#/ecommerce"
              - link "App Web" [ref=e448] [cursor=pointer]:
                - /url: "#/app-web"
              - link "Sobre mí" [ref=e449] [cursor=pointer]:
                - /url: "#/sobre-mi"
              - link "Contacto" [ref=e450] [cursor=pointer]:
                - /url: "#/contacto"
          - generic [ref=e451]:
            - heading "Contacto" [level=4] [ref=e452]
            - generic [ref=e453]:
              - link "andresdgalfonso@gmail.com" [ref=e454] [cursor=pointer]:
                - /url: mailto:andresdgalfonso@gmail.com
                - img [ref=e455]
                - generic [ref=e458]: andresdgalfonso@gmail.com
              - link "+57 312 567 3243" [ref=e459] [cursor=pointer]:
                - /url: tel:+573125673243
                - img [ref=e460]
                - generic [ref=e462]: +57 312 567 3243
              - generic [ref=e463]:
                - img [ref=e464]
                - generic [ref=e467]: Bogotá, Colombia
        - generic [ref=e468]:
          - paragraph [ref=e469]: © 2025 Yeison Alfonso. Disponible desde abril 2026.
          - generic [ref=e470]:
            - generic [ref=e471]: Hecho con Vue 3 + Vite. 100% código propio.
            - button "Volver arriba" [ref=e472] [cursor=pointer]:
              - img [ref=e473]
    - button "Volver arriba" [ref=e475] [cursor=pointer]:
      - img [ref=e476]
  - navigation [ref=e478]:
    - button [ref=e479] [cursor=pointer]:
      - img [ref=e480]
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