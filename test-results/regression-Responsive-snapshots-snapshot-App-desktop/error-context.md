# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression.spec.js >> Responsive snapshots >> snapshot App
- Location: tests\regression.spec.js:132:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

Timeout: 5000ms
  Timeout 5000ms exceeded.

  Snapshot: _#_app.png

Call log:
  - Expect "toHaveScreenshot(_#_app.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 480780 pixels (ratio 0.04 of all image pixels) are different.
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
              - 'heading "Continental Assist: asistencia médica en ruta" [level=1] [ref=e33]'
              - generic [ref=e34]: Continental Assist
              - paragraph [ref=e35]: "97% de abandono → 2 apps en producción. Retención día 7: 0.1% → 12%."
            - generic [ref=e36]:
              - img "App de asistencia al viajero" [ref=e37]
              - generic [ref=e38]:
                - generic [ref=e39]: +11,900%
                - generic [ref=e40]: retención
          - generic [ref=e42]:
            - generic [ref=e43]:
              - generic [ref=e44]: Product Designer
              - generic [ref=e45]: Mi Rol
            - generic [ref=e46]:
              - generic [ref=e47]: 5 Meses
              - generic [ref=e48]: Duración
            - generic [ref=e49]:
              - generic [ref=e50]: PM + 2 Devs
              - generic [ref=e51]: Equipo
            - generic [ref=e52]:
              - generic [ref=e53]: +35% Activación
              - generic [ref=e54]: Impacto
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]: "01"
            - heading "97% abandonaba, 997 crashes, 0 conexión entre productos" [level=2] [ref=e59]
            - paragraph [ref=e60]: "5 barreras medidas con datos. 18 entrevistas con viajeras. 1 patrón común: la app no resolvía urgencias reales."
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]: 1.5%
              - text: Retención Día 1
            - generic [ref=e64]:
              - generic [ref=e65]: 0.1%
              - text: Retención Día 7
            - generic [ref=e66]:
              - generic [ref=e67]: "997"
              - text: Errores iOS
            - generic [ref=e68]:
              - generic [ref=e69]: 0%
              - text: Uso en viaje
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - heading "97% no volvía" [level=3] [ref=e75]
              - paragraph [ref=e76]: Abandono masivo en la primera semana.
            - generic [ref=e77]:
              - img [ref=e78]
              - heading "997 crashes iOS" [level=3] [ref=e87]
              - paragraph [ref=e88]: App crasheaba en emergencia.
            - generic [ref=e89]:
              - img [ref=e90]
              - heading "3 apps en silos" [level=3] [ref=e95]
              - paragraph [ref=e96]: Asistencia, wallet y telemedicina separadas.
            - generic [ref=e97]:
              - img [ref=e98]
              - heading "Llamaban, no abrían" [level=3] [ref=e103]
              - paragraph [ref=e104]: Los viajeros preferían llamar.
            - generic [ref=e105]:
              - img [ref=e106]
              - heading "Web comprimida" [level=3] [ref=e108]
              - paragraph [ref=e109]: Versión web en mobile. No usable en ruta.
          - generic [ref=e110]:
            - generic [ref=e112]: APP ANTERIOR
            - img "UI app antes del rediseño" [ref=e114]
            - generic [ref=e115]:
              - generic [ref=e116]:
                - generic [ref=e117]: "1"
                - generic [ref=e118]:
                  - heading "Navegación confusa" [level=4] [ref=e119]
                  - paragraph [ref=e120]: Usuarios perdidos. Sin jerarquía.
              - generic [ref=e121]:
                - generic [ref=e122]: "2"
                - generic [ref=e123]:
                  - heading "Sin feedback" [level=4] [ref=e124]
                  - paragraph [ref=e125]: Sin transparencia en vouchers ni coberturas.
              - generic [ref=e126]:
                - generic [ref=e127]: "3"
                - generic [ref=e128]:
                  - heading "Interfaz genérica" [level=4] [ref=e129]
                  - paragraph [ref=e130]: Sin confianza ni diferenciación.
          - generic [ref=e131]:
            - generic [ref=e132]:
              - generic [ref=e133]: LM
              - generic [ref=e134]:
                - heading "Laura Méndez — Viajera Frecuente" [level=4] [ref=e135]
                - paragraph [ref=e136]: Acceso rápido a beneficios VIP y procesos sin fricción.
            - generic [ref=e137]:
              - generic [ref=e138]: RT
              - generic [ref=e139]:
                - heading "Ricardo Torres — Ejecutivo" [level=4] [ref=e140]
                - paragraph [ref=e141]: Soporte confiable y respuestas rápidas en viaje.
          - generic [ref=e142]:
            - generic [ref=e143]:
              - generic [ref=e144]: User Pain
              - paragraph [ref=e145]: La app no resolvía necesidades reales de viaje.
            - generic [ref=e146]:
              - generic [ref=e147]: Business
              - paragraph [ref=e148]: 997 errores iOS. Estabilidad era prerequisito.
            - generic [ref=e149]:
              - generic [ref=e150]: UX
              - paragraph [ref=e151]: Personalización por contexto aumenta engagement.
        - generic [ref=e153]:
          - generic [ref=e154]:
            - generic [ref=e155]: "02"
            - 'heading "Optimización de Arquitectura: 3 Roles unificados bajo una sola infraestructura cognitiva" [level=2] [ref=e156]'
            - paragraph [ref=e157]: Rediseño de la interfaz del Coordinador médico para centralizar decisiones críticas y eliminar cuellos de botella operativos.
          - generic [ref=e158]:
            - generic [ref=e159]:
              - img [ref=e160]
              - heading "Avianca" [level=3] [ref=e162]
              - paragraph [ref=e163]: Navegación intuitiva.
              - paragraph [ref=e164]:
                - strong [ref=e165]: "Aprendizaje:"
                - text: La navegación inferior persistente es estándar en travel.
            - generic [ref=e166]:
              - img [ref=e167]
              - heading "Lifemiles" [level=3] [ref=e169]
              - paragraph [ref=e170]: Transparencia de estados.
              - paragraph [ref=e171]:
                - strong [ref=e172]: "Aprendizaje:"
                - text: Los usuarios necesitan saber el estado de sus beneficios.
            - generic [ref=e173]:
              - img [ref=e174]
              - heading "Booking" [level=3] [ref=e176]
              - paragraph [ref=e177]: Diseño limpio y minimalista.
              - paragraph [ref=e178]:
                - strong [ref=e179]: "Aprendizaje:"
                - text: "Menos es más: interfaces claras reducen carga cognitiva."
            - generic [ref=e180]:
              - img [ref=e181]
              - heading "Despegar" [level=3] [ref=e184]
              - paragraph [ref=e185]: Flujos de cotización claros.
              - paragraph [ref=e186]:
                - strong [ref=e187]: "Aprendizaje:"
                - text: Procesos lineales con progreso visible.
          - generic [ref=e189]:
            - img [ref=e190]
            - paragraph [ref=e192]:
              - strong [ref=e193]: "Conclusión:"
              - text: Navegación persistente + transparencia total + diseño minimalista = confianza y adopción.
          - generic [ref=e194]:
            - generic [ref=e195]:
              - generic [ref=e196]: Objetivo
              - heading "De app ignorada a herramienta esencial de viaje" [level=3] [ref=e197]
              - paragraph [ref=e198]: 2 apps en producción con 25% retención día 1.
            - generic [ref=e199]:
              - heading "Principios aplicados" [level=4] [ref=e200]
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - img [ref=e203]
                  - generic [ref=e205]: Mobile-first
                  - generic [ref=e206]: El contexto donde ocurre la urgencia es el punto de partida.
                - generic [ref=e207]:
                  - img [ref=e208]
                  - generic [ref=e211]: Claridad > Estética
                  - generic [ref=e212]: Interfaces limpias que reducen carga cognitiva.
                - generic [ref=e213]:
                  - img [ref=e214]
                  - generic [ref=e216]: Velocidad = Confianza
                  - generic [ref=e217]: Respuesta inmediata elimina incertidumbre en crisis.
                - generic [ref=e218]:
                  - img [ref=e219]
                  - generic [ref=e222]: Confianza visual
                  - generic [ref=e223]: Estética profesional que transmite seguridad.
          - 'heading "Simplificación de Flujo Crítico: 6 Decisiones clave reducidas a minutos" [level=3] [ref=e224]'
          - paragraph [ref=e225]: Estructuración de pantallas de alta fidelidad optimizadas para reducir la carga cognitiva en momentos de alta presión médica.
          - generic [ref=e226]:
            - generic [ref=e227]:
              - img [ref=e229]
              - generic [ref=e232]: Inicio
            - generic [ref=e233]:
              - img [ref=e235]
              - generic [ref=e238]: Asistencia
            - generic [ref=e239]:
              - img [ref=e241]
              - generic [ref=e245]: Beneficios
            - generic [ref=e246]:
              - img [ref=e248]
              - generic [ref=e252]: Wallet
            - generic [ref=e253]:
              - img [ref=e255]
              - generic [ref=e258]: Perfil
          - generic [ref=e259]:
            - generic [ref=e260]:
              - heading "Onboarding → Activación" [level=4] [ref=e261]:
                - img [ref=e262]
                - text: Onboarding → Activación
              - paragraph [ref=e267]: Login → Ver beneficios activos → Activar automáticamente. Sin fricción desde el primer uso.
            - generic [ref=e268]:
              - heading "Consulta de Vouchers" [level=4] [ref=e269]:
                - img [ref=e270]
                - text: Consulta de Vouchers
              - paragraph [ref=e273]: Wallet → Plan → Vouchers y coberturas vigentes. Todo en 3 taps.
            - generic [ref=e274]:
              - heading "Reembolso" [level=4] [ref=e275]:
                - img [ref=e276]
                - text: Reembolso
              - paragraph [ref=e279]: Perfil → Reembolsos → Solicitud → Documentación → Estado. Proceso transparente.
            - generic [ref=e280]:
              - heading "Emergencias" [level=4] [ref=e281]:
                - img [ref=e282]
                - text: Emergencias
              - paragraph [ref=e287]: Tap en Emergency → Confirmar ubicación → Asistencia inmediata. Sin fricción en crisis.
          - 'heading "Design system: 40 componentes, 30% más rápido" [level=3] [ref=e288]'
          - generic [ref=e289]:
            - generic [ref=e290]:
              - heading "Tipografía" [level=3] [ref=e291]
              - paragraph [ref=e292]: Galano Grotesque + Inter. Claridad y jerarquía visual.
            - generic [ref=e293]:
              - heading "Espaciado" [level=3] [ref=e294]
              - paragraph [ref=e295]: Sistema de 8px. Consistencia visual en toda la interfaz.
            - generic [ref=e296]:
              - heading "Bordes" [level=3] [ref=e297]
              - paragraph [ref=e298]: Radius 16px. Suavidad visual que transmite calma en urgencia.
            - generic [ref=e299]:
              - heading "Sombras" [level=3] [ref=e300]
              - paragraph [ref=e301]: 3 niveles de profundidad. Jerarquía clara para orientar atención.
        - generic [ref=e303]:
          - generic [ref=e304]:
            - generic [ref=e305]: "03"
            - heading "4 features nativas, 90% del uso real" [level=2] [ref=e306]
            - paragraph [ref=e307]: "Lo que los viajeros realmente abren en ruta: emergencia, beneficios, wallet y soporte."
          - generic [ref=e308]:
            - generic [ref=e309]:
              - img "Chat de soporte" [ref=e311]
              - generic [ref=e312]:
                - heading "Soporte con IA Generativa" [level=4] [ref=e313]
                - paragraph [ref=e314]: Asistente virtual 24/7 que resuelve dudas complejas en segundos.
            - generic [ref=e315]:
              - img "Pantalla de inicio" [ref=e317]
              - generic [ref=e318]:
                - heading "Gestión de Viajes Premium" [level=4] [ref=e319]
                - paragraph [ref=e320]: Vouchers, coberturas y beneficios en tiempo real.
            - generic [ref=e321]:
              - img "Wallet de beneficios" [ref=e323]
              - generic [ref=e324]:
                - heading "Emergencias 24/7" [level=4] [ref=e325]
                - paragraph [ref=e326]: Soporte geolocalizado para situaciones críticas.
            - generic [ref=e327]:
              - img "Cotizador" [ref=e329]
              - generic [ref=e330]:
                - heading "Cotización Optimizada" [level=4] [ref=e331]
                - paragraph [ref=e332]: Proceso intuitivo de 4 pasos que aumentó la conversión.
            - generic [ref=e333]:
              - img "Ecosistema de beneficios" [ref=e335]
              - generic [ref=e336]:
                - heading "Ecosistema de Beneficios" [level=4] [ref=e337]
                - paragraph [ref=e338]: Integración de partners (Avis, Holafly, rxless) para valor real.
          - generic [ref=e339]:
            - heading "Evolución de la UI" [level=3] [ref=e341]
            - generic [ref=e342]:
              - generic [ref=e343]: Antes
              - img "Comparativa UI" [ref=e345]
              - generic [ref=e346]: Después
        - generic [ref=e348]:
          - generic [ref=e349]:
            - generic [ref=e350]: "04"
            - 'heading "Impacto: 16x más retención, 0 crashes" [level=2] [ref=e351]'
            - paragraph [ref=e352]: Los resultados validaron la estrategia de diseño.
          - generic [ref=e353]:
            - generic [ref=e354]:
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - generic [ref=e357]: Antes
                  - generic [ref=e358]: 1.5%
                - img [ref=e359]
                - generic [ref=e361]:
                  - generic [ref=e362]: Después
                  - generic [ref=e363]: 25%
              - generic [ref=e364]:
                - generic [ref=e365]:
                  - img [ref=e366]
                  - text: +23.5pp
                - generic [ref=e368]: 16x más
              - heading "Retención Día 1" [level=3] [ref=e369]
              - paragraph [ref=e370]: Crecimiento exponencial en adopción inicial.
            - generic [ref=e371]:
              - generic [ref=e372]:
                - generic [ref=e373]:
                  - generic [ref=e374]: Antes
                  - generic [ref=e375]: 0.1%
                - img [ref=e376]
                - generic [ref=e378]:
                  - generic [ref=e379]: Después
                  - generic [ref=e380]: 12%
              - generic [ref=e381]:
                - generic [ref=e382]:
                  - img [ref=e383]
                  - text: +11.9pp
                - generic [ref=e385]: 120x más
              - heading "Retención Día 7" [level=3] [ref=e386]
              - paragraph [ref=e387]: Mejora drástica en engagement sostenido.
            - generic [ref=e388]:
              - generic [ref=e389]:
                - generic [ref=e390]:
                  - generic [ref=e391]: Antes
                  - generic [ref=e392]: "997"
                - img [ref=e393]
                - generic [ref=e395]:
                  - generic [ref=e396]: Después
                  - generic [ref=e397]: "0"
              - generic [ref=e398]:
                - generic [ref=e399]:
                  - img [ref=e400]
                  - text: "-100%"
                - generic [ref=e402]: estable
              - heading "Errores iOS" [level=3] [ref=e403]
              - paragraph [ref=e404]: Crashes críticos eliminados por completo.
          - generic [ref=e405]:
            - blockquote [ref=e407]:
              - paragraph [ref=e408]: "\"Por fin puedo ver todos mis beneficios en un solo lugar. Antes tenía que entrar a 3 páginas diferentes.\""
              - text: — Laura M., Viajera Frecuente
            - blockquote [ref=e410]:
              - paragraph [ref=e411]: "\"El botón de emergencia es lo que más valoro. Sé que si algo pasa, tengo ayuda inmediata.\""
              - text: — Ricardo T., Ejecutivo Corporativo
        - generic [ref=e413]:
          - generic [ref=e414]:
            - generic [ref=e415]: "05"
            - heading "4 lecciones, 3 sprints, +35% activación" [level=2] [ref=e416]
            - paragraph [ref=e417]: Lo que aprendí y los próximos 3 sprints para llevar la activación a +35%.
          - generic [ref=e418]:
            - generic [ref=e419]:
              - generic [ref=e420]: "01"
              - paragraph [ref=e421]:
                - strong [ref=e422]: El contexto define el diseño.
                - text: Necesitaban resolver urgencias desde el móvil. Priorizar emergencia fue lo más impactante.
            - generic [ref=e423]:
              - generic [ref=e424]: "02"
              - paragraph [ref=e425]:
                - strong [ref=e426]: Transparencia anticipa preguntas.
                - text: Dashboard que respondía dudas antes de que surgieran. -40% llamadas de soporte.
            - generic [ref=e427]:
              - generic [ref=e428]: "03"
              - paragraph [ref=e429]:
                - strong [ref=e430]: Menos features, más impacto.
                - text: De 8 features a 3 flows core. 90% del uso real.
            - generic [ref=e431]:
              - generic [ref=e432]: "04"
              - paragraph [ref=e433]:
                - strong [ref=e434]: Documentación elimina ambigüedad.
                - text: Prototipos HD y specs claras antes de cada sprint.
          - generic [ref=e436]:
            - img [ref=e438]
            - generic [ref=e442]:
              - heading "Lo que intentamos y no funcionó" [level=4] [ref=e443]
              - list [ref=e444]:
                - listitem [ref=e445]:
                  - generic [ref=e446]: ✗
                  - generic [ref=e447]:
                    - strong [ref=e448]: "Más onboarding:"
                    - text: Más educación = más fricción. Lo eliminamos.
                - listitem [ref=e449]:
                  - generic [ref=e450]: ✗
                  - generic [ref=e451]:
                    - strong [ref=e452]: "Modal de confirmación:"
                    - text: Agregaba fricción sin valor. Lo eliminamos.
                - listitem [ref=e453]:
                  - generic [ref=e454]: ✗
                  - generic [ref=e455]:
                    - strong [ref=e456]: "Productos relacionados:"
                    - text: Cancelaban compras al ver el carousel. Lo quitamos.
          - generic [ref=e457]:
            - generic [ref=e458]:
              - img [ref=e459]
              - heading "Métricas Post-lanzamiento" [level=4] [ref=e460]
              - paragraph [ref=e461]: Medir retención, engagement y satisfacción después del launch.
            - generic [ref=e462]:
              - img [ref=e463]
              - heading "Testing con Usuarios" [level=4] [ref=e467]
              - paragraph [ref=e468]: Validar flujos críticos con usuarios reales en contexto de viaje.
            - generic [ref=e469]:
              - img [ref=e470]
              - heading "Iteración de Features" [level=4] [ref=e474]
              - paragraph [ref=e475]: Priorizar mejoras según datos de uso y feedback.
        - generic [ref=e477]:
          - heading "¿Tu próximo caso?" [level=2] [ref=e478]
          - paragraph [ref=e479]: Explora otro caso de estudio o contáctame para discutir proyectos donde el diseño genera impacto medible.
          - generic [ref=e480]:
            - link "Iniciar conversación" [ref=e481] [cursor=pointer]:
              - /url: "#/contacto"
            - link "Siguiente Caso Rediseño E-commerce" [ref=e482] [cursor=pointer]:
              - /url: "#/ecommerce"
              - generic [ref=e483]:
                - generic [ref=e484]: Siguiente Caso
                - generic [ref=e485]: Rediseño E-commerce
              - img [ref=e486]
    - contentinfo [ref=e488]:
      - generic [ref=e489]:
        - generic [ref=e490]:
          - generic [ref=e491]:
            - link "Yeison Alfonso" [ref=e492] [cursor=pointer]:
              - /url: "#/"
              - img "Yeison Alfonso" [ref=e493]
            - paragraph [ref=e494]: +4x ingresos. 0.1% → 12% retención. Bogotá, Colombia.
            - generic [ref=e495]:
              - link "LinkedIn" [ref=e496] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/yeison-alfonso-product-designer
                - img [ref=e497]
              - link "Dribbble" [ref=e501] [cursor=pointer]:
                - /url: "#"
                - img [ref=e502]
          - generic [ref=e507]:
            - heading "Navegación" [level=4] [ref=e508]
            - generic [ref=e509]:
              - link "Home" [ref=e510] [cursor=pointer]:
                - /url: "#/"
              - link "App" [ref=e511] [cursor=pointer]:
                - /url: "#/app"
              - link "E-commerce" [ref=e512] [cursor=pointer]:
                - /url: "#/ecommerce"
              - link "App Web" [ref=e513] [cursor=pointer]:
                - /url: "#/app-web"
              - link "Sobre mí" [ref=e514] [cursor=pointer]:
                - /url: "#/sobre-mi"
              - link "Contacto" [ref=e515] [cursor=pointer]:
                - /url: "#/contacto"
          - generic [ref=e516]:
            - heading "Contacto" [level=4] [ref=e517]
            - generic [ref=e518]:
              - link "andresdgalfonso@gmail.com" [ref=e519] [cursor=pointer]:
                - /url: mailto:andresdgalfonso@gmail.com
                - img [ref=e520]
                - generic [ref=e523]: andresdgalfonso@gmail.com
              - link "+57 312 567 3243" [ref=e524] [cursor=pointer]:
                - /url: tel:+573125673243
                - img [ref=e525]
                - generic [ref=e527]: +57 312 567 3243
              - generic [ref=e528]:
                - img [ref=e529]
                - generic [ref=e532]: Bogotá, Colombia
        - generic [ref=e533]:
          - paragraph [ref=e534]: © 2025 Yeison Alfonso. Disponible desde abril 2026.
          - generic [ref=e535]:
            - generic [ref=e536]: Hecho con Vue 3 + Vite. 100% código propio.
            - button "Volver arriba" [ref=e537] [cursor=pointer]:
              - img [ref=e538]
    - button "Volver arriba" [ref=e540] [cursor=pointer]:
      - img [ref=e541]
    - link "Contactar por WhatsApp" [ref=e543] [cursor=pointer]:
      - /url: https://wa.me/573125673243?text=Hola%20Yeison,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.
      - img [ref=e544]
  - navigation [ref=e546]:
    - button [ref=e547] [cursor=pointer]:
      - img [ref=e548]
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