# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression.spec.js >> Responsive snapshots >> snapshot Xentral
- Location: tests\regression.spec.js:132:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

Timeout: 5000ms
  Timeout 5000ms exceeded.

  Snapshot: _#_app-web.png

Call log:
  - Expect "toHaveScreenshot(_#_app-web.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2040 pixels (ratio 0.01 of all image pixels) are different.
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
                - generic [ref=e31]: Caso de estudio
              - 'heading "Xentral Health: telemedicina de alta velocidad" [level=1] [ref=e32]'
              - generic [ref=e33]: Health Tech
              - paragraph [ref=e34]: 5 min → 2 min entre crisis y atención. Plataforma web para crisis reales.
            - generic [ref=e35]:
              - img "Telemedicina urgente" [ref=e36]
              - generic [ref=e37]:
                - generic [ref=e38]: "-60%"
                - generic [ref=e39]: tiempo
          - generic [ref=e41]:
            - generic [ref=e42]:
              - generic [ref=e43]: Product Designer
              - generic [ref=e44]: Mi Rol
            - generic [ref=e45]:
              - generic [ref=e46]: 6 Semanas
              - generic [ref=e47]: Duración
            - generic [ref=e48]:
              - generic [ref=e49]: 3 Devs + 1 PM
              - generic [ref=e50]: Equipo
            - generic [ref=e51]:
              - generic [ref=e52]: "-60% Tiempo"
              - generic [ref=e53]: Impacto
        - generic [ref=e55]:
          - generic [ref=e57]:
            - img [ref=e59]
            - generic [ref=e61]:
              - generic [ref=e62]: La situación era crítica
              - heading "Un viajero enfermo. En el extranjero. Sin atención." [level=3] [ref=e63]
              - paragraph [ref=e64]:
                - text: Viajero en París con fiebre, sin hablar el idioma, sin saber a dónde ir.
                - strong [ref=e65]: Cada minuto empeoraba la situación.
                - text: 6 semanas para crear la solución.
          - generic [ref=e66]:
            - generic [ref=e67]: "01"
            - heading "4 barreras. 5 min entre vida y muerte." [level=2] [ref=e68]
            - paragraph [ref=e69]: Lo que enfrenta un viajero enfermo en el extranjero y la pregunta de diseño que guio todo.
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - heading "No sabe a dónde acudir" [level=3] [ref=e75]
              - paragraph [ref=e76]: Desconoce opciones médicas locales y no tiene referencias confiables.
            - generic [ref=e77]:
              - img [ref=e78]
              - heading "Desconoce su cobertura" [level=3] [ref=e82]
              - paragraph [ref=e83]: No sabe qué servicios tiene disponibles ni cómo acceder a ellos.
            - generic [ref=e84]:
              - img [ref=e85]
              - heading "Barreras de idioma" [level=3] [ref=e89]
              - paragraph [ref=e90]: Dificultad para comunicarse con personal médico en otro país.
            - generic [ref=e91]:
              - img [ref=e92]
              - heading "Pierde tiempo valioso" [level=3] [ref=e95]
              - paragraph [ref=e96]: Buscando soluciones sin guía clara mientras los síntomas progresan.
          - generic [ref=e98]:
            - img [ref=e99]
            - paragraph [ref=e101]:
              - strong [ref=e102]: "Pregunta de diseño:"
              - text: ¿Cómo podríamos facilitar el acceso rápido y confiable a atención médica remota en momentos de incertidumbre?
        - generic [ref=e104]:
          - generic [ref=e105]:
            - generic [ref=e106]: "02"
            - 'heading "Optimización de Arquitectura: 3 Roles unificados bajo una sola infraestructura cognitiva" [level=2] [ref=e107]'
            - paragraph [ref=e108]: Rediseño de la interfaz del Coordinador médico para centralizar decisiones críticas y eliminar cuellos de botella operativos.
          - generic [ref=e109]:
            - generic [ref=e110]:
              - img [ref=e112]
              - generic [ref=e114]:
                - heading "Paciente — Viajero" [level=4] [ref=e115]
                - paragraph [ref=e116]: Usuario Cliente
                - paragraph [ref=e117]: Vulnerable, sin acceso, necesita atención médica inmediata sin fricción de login.
            - generic [ref=e118]:
              - img [ref=e120]
              - generic [ref=e124]:
                - heading "Médico — Doctor" [level=4] [ref=e125]
                - paragraph [ref=e126]: Atención clínica
                - paragraph [ref=e127]: Enfocado en atender. Gestiona su agenda y consultas con información clara del paciente.
            - generic [ref=e128]:
              - generic [ref=e129]: Clave
              - img [ref=e131]
              - generic [ref=e143]:
                - heading "Coordinador Médico" [level=4] [ref=e144]
                - paragraph [ref=e145]: Superusuario
                - paragraph [ref=e146]: Supervisa operaciones, asigna turnos, edita agendas y extrae reportes de rendimiento.
          - generic [ref=e148]:
            - img [ref=e150]
            - generic [ref=e152]:
              - generic [ref=e153]: El momento "aha"
              - heading "El verdadero motor era el Coordinador Médico" [level=4] [ref=e154]
              - paragraph [ref=e155]: "\"Pensábamos que el diseño se centraría casi exclusivamente en el paciente, pero la investigación reveló que el verdadero motor y cuello de botella del servicio era el Coordinador Médico. Si su interfaz no era hiper-eficiente para gestionar datos masivos, agendas y reportes, el servicio colapsaba.\""
          - generic [ref=e156]:
            - generic [ref=e157]:
              - generic [ref=e158]: User Pain
              - paragraph [ref=e159]: En crisis, cada segundo cuenta. -60% tiempo de respuesta.
            - generic [ref=e160]:
              - generic [ref=e161]: Business
              - paragraph [ref=e162]: El Coordinador Médico es el cuello de botella operativo del servicio.
            - generic [ref=e163]:
              - generic [ref=e164]: UX
              - paragraph [ref=e165]: Claridad reduce ansiedad más que velocidad en momentos críticos.
          - 'heading "Arquitectura: Sitemap + User Flows por Rol" [level=3] [ref=e166]'
          - generic [ref=e167]:
            - generic [ref=e168]:
              - img [ref=e170]
              - generic [ref=e173]: Inicio
            - generic [ref=e174]:
              - img [ref=e176]
              - generic [ref=e179]: Videollamada
            - generic [ref=e180]:
              - img [ref=e182]
              - generic [ref=e184]: Mis Citas
            - generic [ref=e185]:
              - img [ref=e187]
              - generic [ref=e190]: Historial
            - generic [ref=e191]:
              - img [ref=e193]
              - generic [ref=e205]: Agendas
            - generic [ref=e206]:
              - img [ref=e208]
              - generic [ref=e209]: Reportes
          - generic [ref=e210]:
            - generic [ref=e211]:
              - heading "Paciente" [level=4] [ref=e212]:
                - img [ref=e213]
                - text: Paciente
              - paragraph [ref=e215]: Link email → Verificar cobertura → Síntomas → Videollamada → NPS.
            - generic [ref=e216]:
              - heading "Médico" [level=4] [ref=e217]:
                - img [ref=e218]
                - text: Médico
              - paragraph [ref=e222]: Login → Cola de pacientes → Atender → Notas → Cerrar consulta.
            - generic [ref=e223]:
              - heading "Coordinador" [level=4] [ref=e224]:
                - img [ref=e225]
                - text: Coordinador
              - paragraph [ref=e237]: Dashboard → Apertura agendas → Asignar turnos → Editar → Reportes.
        - generic [ref=e239]:
          - generic [ref=e240]:
            - generic [ref=e241]: "03"
            - 'heading "Simplificación de Flujo Crítico: 6 Decisiones clave reducidas a minutos" [level=2] [ref=e242]'
            - paragraph [ref=e243]: Estructuración de pantallas de alta fidelidad optimizadas para reducir la carga cognitiva en momentos de alta presión médica.
          - 'heading "Flujo principal: del síntoma a la atención" [level=3] [ref=e244]'
          - generic [ref=e245]:
            - generic [ref=e246]:
              - heading "1 Acceso a la plataforma" [level=4] [ref=e247]:
                - generic [ref=e248]: "1"
                - text: Acceso a la plataforma
              - paragraph [ref=e249]: Entrada simple y directa al servicio con credenciales del plan.
            - generic [ref=e250]:
              - heading "2 Validación de beneficio" [level=4] [ref=e251]:
                - generic [ref=e252]: "2"
                - text: Validación de beneficio
              - paragraph [ref=e253]: Verificación rápida de cobertura médica con indicador claro.
            - generic [ref=e254]:
              - heading "3 Registro de síntomas" [level=4] [ref=e255]:
                - generic [ref=e256]: "3"
                - text: Registro de síntomas
              - paragraph [ref=e257]: Selección intuitiva de síntomas actuales con jerarquía clara.
            - generic [ref=e258]:
              - heading "4 Tipo de atención" [level=4] [ref=e259]:
                - generic [ref=e260]: "4"
                - text: Tipo de atención
              - paragraph [ref=e261]: Orientación basada en los síntomas registrados por el usuario.
            - generic [ref=e262]:
              - heading "5 Conexión con médico" [level=4] [ref=e263]:
                - generic [ref=e264]: "5"
                - text: Conexión con médico
              - paragraph [ref=e265]: Llamada o videollamada según preferencia y disponibilidad.
            - generic [ref=e266]:
              - heading "6 Recomendaciones + NPS" [level=4] [ref=e267]:
                - generic [ref=e268]: "6"
                - text: Recomendaciones + NPS
              - paragraph [ref=e269]: Indicaciones médicas claras y encuesta NPS al cierre.
          - heading "5 decisiones validadas en crisis" [level=3] [ref=e270]
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img [ref=e273]
              - heading "Acceso rápido a atención" [level=4] [ref=e275]
              - paragraph [ref=e276]: Flujo reducido a pasos esenciales para que un viajero enfermo no se pierda en momentos de estrés.
            - generic [ref=e277]:
              - img [ref=e278]
              - heading "Claridad del beneficio" [level=4] [ref=e281]
              - paragraph [ref=e282]: Indicador visible del estado de cobertura para decisiones inmediatas.
            - generic [ref=e283]:
              - img [ref=e284]
              - heading "Priorización por síntomas" [level=4] [ref=e285]
              - paragraph [ref=e286]: Sistema que orienta al tipo de atención más adecuada según gravedad.
            - generic [ref=e287]:
              - img [ref=e288]
              - heading "Contexto emocional" [level=4] [ref=e290]
              - paragraph [ref=e291]: Botones grandes, lenguaje claro, decisiones guiadas para estados de ansiedad.
            - generic [ref=e292]:
              - img [ref=e293]
              - heading "NPS post-consulta" [level=4] [ref=e294]
              - paragraph [ref=e295]: Encuesta de satisfacción al cerrar la videollamada para que el negocio mida la NPS de cada médico en cada consulta.
          - generic [ref=e296]:
            - generic [ref=e297]:
              - heading "8 Pantallas, 1 Sistema" [level=3] [ref=e299]
              - generic [ref=e300]: Paciente → Médico
            - generic [ref=e301]:
              - generic [ref=e302]:
                - img "Email de confirmación con datos de cita y botón de acceso" [ref=e304]
                - generic [ref=e305]:
                  - generic [ref=e306]:
                    - generic [ref=e307]: 01 / Paciente
                    - generic [ref=e308]: Ingreso
                  - heading "Cero fricción desde el primer email" [level=4] [ref=e309]
                  - paragraph [ref=e310]: El paciente recibe los datos de la cita, paciente, fecha y hora, más un botón azul de "Ingresar a la consulta" que abre la videollamada sin descargar apps, sin crear cuentas, sin contraseñas. Adiós al 70% de abandono en login.
                  - generic [ref=e311]:
                    - generic [ref=e312]: Sin fricción
                    - generic [ref=e313]: 0 contraseñas
                    - generic [ref=e314]: 1 clic
              - generic [ref=e315]:
                - img "Selector de fecha y hora con resumen antes de confirmar" [ref=e317]
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - generic [ref=e320]: 02 / Paciente
                    - generic [ref=e321]: Decisión
                  - heading "Disponibilidad real, decisiones sin sorpresas" [level=4] [ref=e322]
                  - paragraph [ref=e323]: "Calendario con slots disponibles en azul sólido, ocupados desvanecidos. Resumen visible de día, hora y duración antes de confirmar. Los huecos grises no generan ansiedad: el sistema ya filtró lo no disponible."
                  - generic [ref=e324]:
                    - generic [ref=e325]: Disponibilidad real
                    - generic [ref=e326]: Resumen visible
              - generic [ref=e327]:
                - img "Pantalla de espera mientras se conecta con el médico" [ref=e329]
                - generic [ref=e330]:
                  - generic [ref=e331]:
                    - generic [ref=e332]: 03 / Paciente
                    - generic [ref=e333]: Transición
                  - heading "La espera como información, no como ansiedad" [level=4] [ref=e334]
                  - paragraph [ref=e335]: "Antes de que el médico entre, el paciente ve contexto clínico: nombre del doctor, especialidad, tiempo estimado. \"Conectando\" con datos es mejor que un spinner ciego. Diseñado para evitar la sensación de estar hablando con la nada."
                  - generic [ref=e336]:
                    - generic [ref=e337]: Contexto visible
                    - generic [ref=e338]: Tiempo estimado
              - generic [ref=e339]:
                - 'img "Dashboard del coordinador médico: agenda, cola de espera y métricas" [ref=e341]'
                - generic [ref=e342]:
                  - generic [ref=e343]:
                    - generic [ref=e344]: 04 / Médico
                    - generic [ref=e345]: Visión general
                  - heading "El médico entra y ya sabe qué pasa hoy" [level=4] [ref=e346]
                  - paragraph [ref=e347]: Dashboard con agenda del día, cola de espera ordenada por prioridad, alertas rojas en pacientes con síntomas urgentes. -60% tiempo entre login y primer paciente porque el sistema ya hizo el triage visual.
                  - generic [ref=e348]:
                    - generic [ref=e349]: Triage visual
                    - generic [ref=e350]: Cola priorizada
              - generic [ref=e351]:
                - img "Validación del contexto clínico del paciente antes de la consulta" [ref=e353]
                - generic [ref=e354]:
                  - generic [ref=e355]:
                    - generic [ref=e356]: 05 / Médico
                    - generic [ref=e357]: Contexto clínico
                  - heading "Información accionable, no histórica" [level=4] [ref=e358]
                  - paragraph [ref=e359]: Alergias en rojo, antecedentes en gris claro, motivo de consulta destacado. El médico lee lo crítico en 5 segundos, no en 5 minutos. La diferencia entre atender y atender bien.
                  - generic [ref=e360]:
                    - generic [ref=e361]: Alertas críticas
                    - generic [ref=e362]: 5s lectura
              - generic [ref=e363]:
                - img "Videollamada activa con contexto clínico integrado" [ref=e365]
                - generic [ref=e366]:
                  - generic [ref=e367]:
                    - generic [ref=e368]: 06 / Médico
                    - generic [ref=e369]: En vivo
                  - heading "Videollamada con contexto, no con pestañas" [level=4] [ref=e370]
                  - paragraph [ref=e371]: Paciente a un lado, contexto clínico al otro. Sin alternar ventanas, sin perder el hilo. El médico ve Y habla. El paciente se siente visto, no evaluado.
                  - generic [ref=e372]:
                    - generic [ref=e373]: Vista dual
                    - generic [ref=e374]: Sin cambiar tabs
              - generic [ref=e375]:
                - img "Pantalla de consulta finalizada con confirmación y NPS" [ref=e377]
                - generic [ref=e378]:
                  - generic [ref=e379]:
                    - generic [ref=e380]: 07 / Médico
                    - generic [ref=e381]: Cierre
                  - heading "Cierre que alimenta la próxima consulta" [level=4] [ref=e382]
                  - paragraph [ref=e383]: "Notas estructuradas obligatorias antes de cerrar: diagnóstico, prescripción, seguimiento. El médico no se va a casa con la nota en la cabeza. El siguiente profesional que atienda al paciente lee el resumen en 30 segundos."
                  - generic [ref=e384]:
                    - generic [ref=e385]: Notas estructuradas
                    - generic [ref=e386]: Continuidad
              - generic [ref=e388]:
                - img "Historial de pacientes con filtros multi-país" [ref=e390]
                - generic [ref=e391]:
                  - generic [ref=e392]:
                    - generic [ref=e393]: 08 / Médico
                    - generic [ref=e394]: ★ Escalable
                  - heading "10 pacientes, 6 países, una sola tabla" [level=4] [ref=e395]
                  - paragraph [ref=e396]: "Listado con país de origen, doctor asignado, fecha de última atención, acceso directo al diagnóstico completo. Filtros por país, doctor o período. La consulta de seguimiento se vuelve trivial: histórico, comparación, decisión en un click."
                  - generic [ref=e397]:
                    - generic [ref=e398]: Multi-país
                    - generic [ref=e399]: Búsqueda rápida
                    - generic [ref=e400]: Comparación histórica
                    - generic [ref=e401]: CL · MX · CO · AR · PE
            - paragraph [ref=e403]: 3 pantallas paciente · 5 pantallas médico · 0 pasos redundantes
        - generic [ref=e405]:
          - generic [ref=e406]:
            - generic [ref=e407]: "04"
            - 'heading "Impacto: -60% tiempo, +90% claridad, NPS +52" [level=2] [ref=e408]'
            - paragraph [ref=e409]: 12 usuarios validaron la experiencia en crisis simuladas.
          - generic [ref=e410]:
            - generic [ref=e411]:
              - generic [ref=e412]: "-60%"
              - generic [ref=e413]:
                - heading "Tiempo de acceso" [level=3] [ref=e414]
                - paragraph [ref=e415]: Entre necesidad y atención médica
            - generic [ref=e416]:
              - generic [ref=e417]: +90%
              - generic [ref=e418]:
                - heading "Claridad del proceso" [level=3] [ref=e419]
                - paragraph [ref=e420]: "Pasos recordados sin ayuda: 1.2 → 4.5 de 6"
            - generic [ref=e421]:
              - generic [ref=e422]: 100%
              - generic [ref=e423]:
                - heading "Cobertura visible" [level=3] [ref=e424]
                - paragraph [ref=e425]: Usuario sabe qué servicios tiene
          - generic [ref=e426]:
            - blockquote [ref=e428]:
              - paragraph [ref=e429]: "\"Por fin sé exactamente qué va a pasar después. Ya no siento que estoy entrando a algo desconocido cuando me siento mal de viaje.\""
              - text: — Carlos, 42, viajero frecuente
            - blockquote [ref=e431]:
              - paragraph [ref=e432]: "\"Saber que tengo telemedicina disponible si algo pasa me da tranquilidad. Antes no tenía idea de qué hacer.\""
              - text: — Ana, 35, viajera crónica
            - generic [ref=e433]:
              - img [ref=e434]
              - heading "Validación continua con NPS" [level=4] [ref=e435]
              - paragraph [ref=e436]: Encuesta de satisfacción al cierre de cada videollamada. El negocio mide la calidad de atención médica en tiempo real.
        - generic [ref=e438]:
          - generic [ref=e439]:
            - generic [ref=e440]: "05"
            - heading "4 lecciones, 4 iteraciones, escalabilidad multi-país" [level=2] [ref=e441]
            - paragraph [ref=e442]: Lo que aprendí sobre tiempo, claridad y decisiones bajo presión. Roadmap ordenado por impacto.
          - generic [ref=e443]:
            - generic [ref=e444]:
              - generic [ref=e445]: "01"
              - paragraph [ref=e446]:
                - strong [ref=e447]: En crisis cada segundo cuenta.
                - text: "Descubrimos que flujo corto no es mejor: en emergencias, los usuarios prefieren ver todas las opciones para sentirse en control."
            - generic [ref=e448]:
              - generic [ref=e449]: "02"
              - paragraph [ref=e450]:
                - strong [ref=e451]: Claridad mata ansiedad.
                - text: Los usuarios necesitaban ver todos los pasos desde el inicio para sentirse en control. Eso cambió la arquitectura del flujo.
            - generic [ref=e452]:
              - generic [ref=e453]: "03"
              - paragraph [ref=e454]:
                - strong [ref=e455]: Stakeholders internos importan.
                - text: Los médicos tenían objeciones distintas a los pacientes. Identificar ambos grupos desde el inicio previno retrabajo.
            - generic [ref=e456]:
              - generic [ref=e457]: "04"
              - paragraph [ref=e458]:
                - strong [ref=e459]: HTML acelera validación.
                - text: Crear prototipos clickeables en código redujo el ciclo de feedback de días a horas. Stakeholders podían ver y tocar el flujo antes de construirlo.
          - generic [ref=e461]:
            - img [ref=e463]
            - generic [ref=e467]:
              - heading "Lo que intentamos y no funcionó" [level=4] [ref=e468]
              - list [ref=e469]:
                - listitem [ref=e470]:
                  - generic [ref=e471]: ✗
                  - generic [ref=e472]:
                    - strong [ref=e473]: "Flujo ultracorto:"
                    - text: En crisis, usuarios necesitan ver el mapa completo.
                - listitem [ref=e474]:
                  - generic [ref=e475]: ✗
                  - generic [ref=e476]:
                    - strong [ref=e477]: "Chatbot primero:"
                    - text: En salud, quieren un humano ya.
                - listitem [ref=e478]:
                  - generic [ref=e479]: ✗
                  - generic [ref=e480]:
                    - strong [ref=e481]: "Minimalismo extremo:"
                    - text: Botones pequeños no funcionan en estrés. Agrandamos todo +200%.
          - generic [ref=e482]:
            - generic [ref=e483]:
              - img [ref=e485]
              - heading "Microsoft Clarity" [level=4] [ref=e486]
              - paragraph [ref=e487]: Mapas de calor y grabaciones de sesión para entender el comportamiento real.
            - generic [ref=e488]:
              - img [ref=e490]
              - heading "Iteración NPS" [level=4] [ref=e492]
              - paragraph [ref=e493]: Optimizar la experiencia del médico según datos de satisfacción recolectados.
            - generic [ref=e494]:
              - img [ref=e496]
              - heading "Testing en contexto real" [level=4] [ref=e500]
              - paragraph [ref=e501]: Validar flujos críticos con viajeros reales en el extranjero.
            - generic [ref=e502]:
              - img [ref=e504]
              - heading "Escalabilidad Multi-país" [level=4] [ref=e508]
              - paragraph [ref=e509]: Adaptar la plataforma a nuevos mercados y jurisdicciones regulatorias.
        - generic [ref=e511]:
          - heading "Diseño para momentos críticos" [level=2] [ref=e512]
          - paragraph [ref=e513]: ¿Tu producto opera en crisis? Conversemos.
          - generic [ref=e514]:
            - link "Iniciar conversación" [ref=e515] [cursor=pointer]:
              - /url: "#/contacto"
            - link "Siguiente Contacto" [ref=e516] [cursor=pointer]:
              - /url: "#/contacto"
              - generic [ref=e517]:
                - generic [ref=e518]: Siguiente
                - generic [ref=e519]: Contacto
              - img [ref=e520]
        - navigation [ref=e522]:
          - generic [ref=e524]:
            - link "Caso anterior App de Asistencia" [ref=e525] [cursor=pointer]:
              - /url: "#/app"
              - generic [ref=e526]:
                - generic [ref=e527]: Caso anterior
                - heading "App de Asistencia" [level=4] [ref=e528]
              - img [ref=e530]
            - link "Siguiente caso Contacto" [ref=e532] [cursor=pointer]:
              - /url: "#/contacto"
              - generic [ref=e533]:
                - generic [ref=e534]: Siguiente caso
                - heading "Contacto" [level=4] [ref=e535]
              - img [ref=e537]
    - contentinfo [ref=e539]:
      - generic [ref=e540]:
        - generic [ref=e541]:
          - generic [ref=e542]:
            - link "Yeison Alfonso" [ref=e543] [cursor=pointer]:
              - /url: "#/"
              - img "Yeison Alfonso" [ref=e544]
            - paragraph [ref=e545]: +4x ingresos. 0.1% → 12% retención. Bogotá, Colombia.
            - generic [ref=e546]:
              - link "LinkedIn" [ref=e547] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/yeison-alfonso-product-designer
                - img [ref=e548]
              - link "Dribbble" [ref=e552] [cursor=pointer]:
                - /url: "#"
                - img [ref=e553]
          - generic [ref=e558]:
            - heading "Navegación" [level=4] [ref=e559]
            - generic [ref=e560]:
              - link "Home" [ref=e561] [cursor=pointer]:
                - /url: "#/"
              - link "App" [ref=e562] [cursor=pointer]:
                - /url: "#/app"
              - link "E-commerce" [ref=e563] [cursor=pointer]:
                - /url: "#/ecommerce"
              - link "App Web" [ref=e564] [cursor=pointer]:
                - /url: "#/app-web"
              - link "Sobre mí" [ref=e565] [cursor=pointer]:
                - /url: "#/sobre-mi"
              - link "Contacto" [ref=e566] [cursor=pointer]:
                - /url: "#/contacto"
          - generic [ref=e567]:
            - heading "Contacto" [level=4] [ref=e568]
            - generic [ref=e569]:
              - link "andresdgalfonso@gmail.com" [ref=e570] [cursor=pointer]:
                - /url: mailto:andresdgalfonso@gmail.com
                - img [ref=e571]
                - generic [ref=e574]: andresdgalfonso@gmail.com
              - link "+57 312 567 3243" [ref=e575] [cursor=pointer]:
                - /url: tel:+573125673243
                - img [ref=e576]
                - generic [ref=e578]: +57 312 567 3243
              - generic [ref=e579]:
                - img [ref=e580]
                - generic [ref=e583]: Bogotá, Colombia
        - generic [ref=e584]:
          - paragraph [ref=e585]: © 2025 Yeison Alfonso. Disponible desde abril 2026.
          - generic [ref=e586]:
            - generic [ref=e587]: Hecho con Vue 3 + Vite. 100% código propio.
            - button "Volver arriba" [ref=e588] [cursor=pointer]:
              - img [ref=e589]
    - button "Volver arriba" [ref=e591] [cursor=pointer]:
      - img [ref=e592]
  - navigation [ref=e594]:
    - button [ref=e595] [cursor=pointer]:
      - img [ref=e596]
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