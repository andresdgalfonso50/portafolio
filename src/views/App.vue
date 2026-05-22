<template>
  <main>
    <!-- HERO SECTION -->
    <section class="case-hero section app-hero">
      <div class="container">
        <div class="case-hero-balanced-grid">
          <div class="case-header-content fade-in">
            <span class="case-badge"><Layers :size="14" class="icon-prefix" />Diseño de producto</span>
            <h1 class="case-hero-title">App de asistencia en viajes: de concepto a producción</h1>
            <span class="product-badge app-badge">Continental Assist</span>
            <p class="case-hero-subtitle">De una app con 97% de abandono en 7 días a 2 apps funcionando. Cómo diseñamos una experiencia que los viajeros usan.</p>
          </div>
          <div class="case-header-metrics fade-in stagger-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-center">
              <span class="text-5xl font-black text-slate-900 mb-2">2</span>
              <span class="text-sm font-semibold text-slate-500 uppercase tracking-widest">Personas definidas</span>
            </div>
            <div class="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-center">
              <span class="text-5xl font-black text-slate-900 mb-2">5</span>
              <span class="text-sm font-semibold text-slate-500 uppercase tracking-widest">Funcionalidades core</span>
            </div>
            <div class="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-center">
              <span class="text-5xl font-black text-slate-900 mb-2">2</span>
              <span class="text-sm font-semibold text-slate-500 uppercase tracking-widest">Apps nativas (iOS + Android)</span>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-in stagger-2">
          <img src="/assets/images/app/hero-app.jpg" alt="App mobile moderna con interfaz premium" width="1400" height="800" fetchpriority="high" decoding="async">
        </div>
      </div>
    </section>

    <!-- CONTEXTO DEL PROYECTO -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="project-context fade-in">
          <div class="context-grid">
            <div class="context-item">
              <span class="context-label">Rol</span>
              <h4>Product Designer</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Duración</span>
              <h4>5 meses</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Equipo</span>
              <h4>1 dev (Android + iOS)</h4>
            </div>
            <div class="context-item wide">
              <span class="context-label">Responsabilidades</span>
              <p>UX Research, Benchmark, Arquitectura de Información, Design System, UI, Prototipado y Testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EL PROBLEMA -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">01</span>
          <h2>Por qué nadie usaba la app</h2>
          <p class="section-intro">La empresa tenía una app que nadie usaba. Los usuarios mostraban métricas de abandono críticas.</p>
        </div>

        <div class="problems-grid fade-in stagger-1">
          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <TrendingDown :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Retención casi nula</h3>
            <p class="text-lg text-slate-600 leading-relaxed">Día 1: 1.5%, Día 7: 0.1%. Los usuarios no volvían después del primer uso.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Caída del 93% en 7 días</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <Bug :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Errores críticos en iOS</h3>
            <p class="text-lg text-slate-600 leading-relaxed">997 errores registrados en la versión 2.2.1, afectando la estabilidad del servicio.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>App inutilizable</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <Split :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Servicios dispersos</h3>
            <p class="text-lg text-slate-600 leading-relaxed">Múltiples canales y plataformas sin centralización. Los usuarios dependían de terceros.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Sin experiencia unificada</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <UserX :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Sin adopción</h3>
            <p class="text-lg text-slate-600 leading-relaxed">La app no resolvía necesidades reales. Los usuarios preferían canales tradicionales.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>0 valor percibido</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <Smartphone :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Experiencia desktop-first</h3>
            <p class="text-lg text-slate-600 leading-relaxed">La app mobile era una adaptación, no una experiencia pensada para el contexto de viaje.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Fricción constante</span>
            </div>
          </div>
        </div>

        <div class="ui-comparison fade-in stagger-2">
          <div class="ui-label">
            <span class="ui-label-badge">APP ANTERIOR</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto mt-16">
            <div class="ui-image-wrapper">
              <img src="/assets/images/app/app-before.png" alt="App anterior con baja retención y errores" class="w-full rounded-2xl border border-slate-200 shadow-md object-cover aspect-[4/3]">
            </div>
            <div class="ui-observations space-y-6">
              <div class="observation-item flex gap-5 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div class="observation-number w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <div class="observation-text">
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Navegación confusa</h4>
                  <p class="text-lg text-slate-600 leading-relaxed">Los usuarios no encontraban lo que necesitaban. Estructura sin jerarquía clara.</p>
                </div>
              </div>
              <div class="observation-item flex gap-5 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div class="observation-number w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <div class="observation-text">
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Sin feedback de estados</h4>
                  <p class="text-lg text-slate-600 leading-relaxed">No había transparencia en vouchers, reembolsos o coberturas activas.</p>
                </div>
              </div>
              <div class="observation-item flex gap-5 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div class="observation-number w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
                <div class="observation-text">
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Interfaz genérica</h4>
                  <p class="text-lg text-slate-600 leading-relaxed">No transmitía confianza ni experiencia premium. No se diferenciaba de la competencia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESEARCH & INSIGHTS -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">02</span>
          <h2>Investigación y hallazgos</h2>
          <p class="section-intro">La investigación reveló patrones claros de comportamiento que guiaron las decisiones de diseño.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-6xl mx-auto">
          <div class="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <span class="inline-block px-4 py-1.5 bg-white text-indigo-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">UX Insight</span>
            <p class="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">Las apps líderes del sector utilizan navegación bottom bar permanente para acceso rápido.</p>
          </div>
          <div class="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <span class="inline-block px-4 py-1.5 bg-white text-rose-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">User Pain</span>
            <p class="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">Los usuarios necesitan saber el estado de sus vouchers, coberturas y reembolsos en tiempo real.</p>
          </div>
          <div class="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <span class="inline-block px-4 py-1.5 bg-white text-emerald-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">Business Impact</span>
            <p class="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">La personalización basada en contexto aumenta el engagement y la percepción de valor.</p>
          </div>
          <div class="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <span class="inline-block px-4 py-1.5 bg-white text-indigo-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">UX Insight</span>
            <p class="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">El diseño minimalista premium transmite confianza y tecnológico en el sector travel.</p>
          </div>
        </div>

        <div class="section-header fade-in" style="margin-top: 64px;">
          <span class="section-number">02</span>
          <h2>User Personas</h2>
          <p class="section-intro">Dos arquetipos definidos para guiar el diseño de la experiencia.</p>
        </div>

        <div class="personas-grid fade-in stagger-1">
          <div class="persona-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="persona-header">
              <div class="persona-avatar">LM</div>
              <div class="persona-info">
                <h3>Laura Méndez</h3>
                <span class="persona-type">Viajera Frecuente</span>
              </div>
            </div>
            <div class="persona-meta">
              <span>35 años</span>
              <span>Consultora internacional</span>
              <span>Bogotá</span>
            </div>
            <div class="persona-section">
              <h4>Necesidades</h4>
              <ul>
                <li>Acceso rápido a beneficios VIP</li>
                <li>Telemedicina 24/7</li>
                <li>Reembolsos simples</li>
                <li>Todo centralizado</li>
              </ul>
            </div>
            <div class="persona-section">
              <h4>Frustraciones</h4>
              <ul>
                <li>Retrasos de vuelos</li>
                <li>Procesos lentos</li>
                <li>Tener múltiples plataformas</li>
              </ul>
            </div>
            <div class="persona-goal">
              <Target :size="16" />
              <span>Viajar con tranquilidad y sin fricciones</span>
            </div>
          </div>

          <div class="persona-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="persona-header">
              <div class="persona-avatar rt">RT</div>
              <div class="persona-info">
                <h3>Ricardo Torres</h3>
                <span class="persona-type">Ejecutivo Corporativo</span>
              </div>
            </div>
            <div class="persona-meta">
              <span>45 años</span>
              <span>Gerente regional</span>
              <span>Viajes internacionales</span>
            </div>
            <div class="persona-section">
              <h4>Necesidades</h4>
              <ul>
                <li>Productividad durante el viaje</li>
                <li>Beneficios automáticos</li>
                <li>Procesos rápidos</li>
                <li>Soporte confiable global</li>
              </ul>
            </div>
            <div class="persona-section">
              <h4>Frustraciones</h4>
              <ul>
                <li>Procesos manuales</li>
                <li>Activaciones complejas</li>
                <li>Retrasos que afectan reuniones</li>
              </ul>
            </div>
            <div class="persona-goal">
              <Target :size="16" />
              <span>Mantener eficiencia y productividad mientras viaja</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENCHMARK -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">03</span>
          <h2>Aprendimos de los mejores</h2>
          <p class="section-intro">Analizamos referentes del mercado travel para identificar patrones que funcionaban.</p>
        </div>

        <div class="benchmark-grid fade-in stagger-1">
          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <Plane :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Avianca</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Navegación intuitiva y experiencia de viaje fluida.</p>
            <div class="benchmark-insight bg-white p-4 rounded-xl border border-slate-100">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed mt-1">La navegación inferior persistente es el estándar de la industria travel.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <CreditCard :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Lifemiles</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Transparencia de estados, historial claro y trazable.</p>
            <div class="benchmark-insight bg-white p-4 rounded-xl border border-slate-100">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed mt-1">Los usuarios necesitan saber exactamente el estado de sus beneficios.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <Calendar :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Booking</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Diseño limpio, minimalista y fácil de escanear.</p>
            <div class="benchmark-insight bg-white p-4 rounded-xl border border-slate-100">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed mt-1">Menos es más: interfaces claras reducen la carga cognitiva.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <Globe :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Despegar</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Flujos de cotización claros y proceso paso a paso.</p>
            <div class="benchmark-insight bg-white p-4 rounded-xl border border-slate-100">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed mt-1">Los procesos deben ser lineales y mostrar progreso visible.</p>
            </div>
          </div>
        </div>

        <div class="benchmark-conclusion fade-in stagger-2">
          <div class="conclusion-box">
            <Lightbulb :size="20" class="icon-prefix" />
            <p><strong>Conclusión:</strong> Navegación persistente + transparencia total + diseño minimalista = confianza y adopción.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INSIGHTS CLAVE DE LA INVESTIGACIÓN -->
    <section class="py-20 md:py-24 bg-slate-50/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Insights Clave de la Investigación
          </h2>
          <p class="text-lg text-slate-600 max-w-3xl">
            El análisis profundo de competidores directos como Heymondo y referentes del sector (Lifemiles, Booking, Avianca) definió los pilares estructurales de la nueva experiencia.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div class="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <PanelBottom class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Navegación Inferior Persistente</h3>
            <p class="text-slate-600 leading-relaxed">
              Adoptamos este estándar de la industria para garantizar una navegación intuitiva. Centralizamos el acceso a Inicio, Asistencia de Emergencia y Perfil a un solo toque de distancia.
            </p>
          </div>

          <div class="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
              <Search class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Transparencia en la Información</h3>
            <p class="text-slate-600 leading-relaxed">
              Inspirados en la claridad de Lifemiles, rediseñamos la arquitectura para mostrar historiales de transacciones, estados de pólizas y reclamaciones de forma directa y sin fricciones.
            </p>
          </div>

          <div class="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <Sparkles class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Personalización Activa</h3>
            <p class="text-slate-600 leading-relaxed">
              Aplicamos modelos de recomendación similares a Booking. La app ahora prioriza mostrar pólizas activas y sugerir servicios de valor basándose en el contexto del viaje actual del usuario.
            </p>
          </div>

          <div class="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <LayoutTemplate class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Diseño Funcional y Limpio</h3>
            <p class="text-slate-600 leading-relaxed">
              Redujimos drásticamente la carga cognitiva. Los flujos críticos, como reportar un incidente médico o solicitar un reembolso, son ahora lineales, claros y libres de ruido visual.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ESTRATEGIA -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">04</span>
          <h2>Estrategia</h2>
          <p class="section-intro">Definimos principios de diseño claros para guiar cada decisión.</p>
        </div>

        <div class="strategy-grid fade-in stagger-1">
          <div class="strategy-objective p-10 md:p-12 bg-slate-900 rounded-3xl mb-8">
            <span class="text-sm font-bold uppercase tracking-widest px-3 py-1 bg-blue-600 text-white rounded-full mb-6 inline-block">Objetivo</span>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Crear una experiencia premium que genere confianza y adopción</h3>
            <p class="text-slate-300 text-lg md:text-xl leading-relaxed mt-4">Diseñar una app que los usuarios quieran abrir, no que tengan que abrir. Integrar servicios de forma natural en el contexto del viaje.</p>
          </div>

          <div class="principles-list">
            <h4 class="text-xl font-bold text-slate-900 mb-6">Principios de diseño</h4>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <Smartphone :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Mobile-first</h5>
                <p class="text-base text-slate-600 leading-relaxed">Toda la experiencia pensada desde el contexto real: movimiento, urgencia, viajes</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <Eye :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Claridad > Estética</h5>
                <p class="text-base text-slate-600 leading-relaxed">Priorizar la función sobre lo decorativo. Información clave siempre visible.</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <Zap :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Velocidad = Confianza</h5>
                <p class="text-base text-slate-600 leading-relaxed">Acciones rápidas y feedback inmediato transmite reliability.</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100">
              <div class="principle-icon">
                <ShieldCheck :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Confianza visual</h5>
                <p class="text-base text-slate-600 leading-relaxed">Diseño premium que transmite seguridad tecnológica y profesionalismo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ARQUITECTURA DE INFORMACIÓN -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">05</span>
          <h2>Arquitectura de Información</h2>
          <p class="section-intro">Estructura de navegación diseñada para acceso rápido en cualquier contexto.</p>
        </div>

        <div class="nav-structure fade-in stagger-1 flex flex-wrap justify-center gap-8 md:gap-12 bg-slate-50 py-10 px-6 rounded-3xl w-full max-w-6xl mx-auto">
          <div class="nav-item flex flex-col items-center gap-3">
            <div class="nav-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm"><Home :size="20" /></div>
            <span class="text-sm font-medium text-slate-600">Inicio</span>
          </div>
          <div class="nav-item flex flex-col items-center gap-3">
            <div class="nav-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm"><HeartPulse :size="20" /></div>
            <span class="text-sm font-medium text-slate-600">Asistencia</span>
          </div>
          <div class="nav-item flex flex-col items-center gap-3">
            <div class="nav-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm"><Gift :size="20" /></div>
            <span class="text-sm font-medium text-slate-600">Beneficios</span>
          </div>
          <div class="nav-item flex flex-col items-center gap-3">
            <div class="nav-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm"><Wallet :size="20" /></div>
            <span class="text-sm font-medium text-slate-600">Wallet</span>
          </div>
          <div class="nav-item flex flex-col items-center gap-3">
            <div class="nav-icon w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-700 shadow-sm"><User :size="20" /></div>
            <span class="text-sm font-medium text-slate-600">Perfil</span>
          </div>
        </div>

        <div class="section-header fade-in" style="margin-top: 64px;">
          <span class="section-number">05b</span>
          <h2>User Flows Principales</h2>
        </div>

        <div class="flows-grid fade-in stagger-1">
          <div class="flow-card p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 class="text-lg font-bold text-slate-900 mb-3"><Rocket :size="18" class="icon-prefix inline mr-2" />Onboarding → Activación</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Login → Ver beneficios activos → Activar servicios automáticamente</p>
          </div>
          <div class="flow-card p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 class="text-lg font-bold text-slate-900 mb-3"><FileText :size="18" class="icon-prefix inline mr-2" />Consulta de Vouchers</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Wallet → Seleccionar plan → Ver vouchers y coberturas vigentes</p>
          </div>
          <div class="flow-card p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 class="text-lg font-bold text-slate-900 mb-3"><Receipt :size="18" class="icon-prefix inline mr-2" />Solicitud de Reembolso</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Perfil → Reembolsos → Nueva solicitud → Subir documentación → Seguir estado</p>
          </div>
          <div class="flow-card p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h4 class="text-lg font-bold text-slate-900 mb-3"><Siren :size="18" class="icon-prefix inline mr-2" />Acceso a Emergencias</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Tap en Emergency → Confirmar ubicación → Contacto inmediato con asistencia</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIGN SYSTEM -->
    <section class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">06</span>
          <h2>Design System</h2>
          <p class="section-intro">Sistema visual coherente que transmite premium, tecnología y confianza.</p>
        </div>

        <div class="w-full max-w-6xl mx-auto mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full">
            <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Tipografía</h3>
              <p class="text-slate-600">Galano / Inter</p>
            </div>
            <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Espaciado</h3>
              <p class="text-slate-600">Sistema de 8px</p>
            </div>
            <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Bordes</h3>
              <p class="text-slate-600">Radius 16px</p>
            </div>
            <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Sombras</h3>
              <p class="text-slate-600">Sutiles y profundas</p>
            </div>
          </div>

          <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-8">Paleta de Color</h3>
          <div class="flex flex-wrap gap-10 w-full">
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#1f3a7a]"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Primary</span>
                <span class="block text-xs text-slate-500 uppercase">#1F3A7A</span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#3b82f6]"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Accent</span>
                <span class="block text-xs text-slate-500 uppercase">#3B82F6</span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#10b981]"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Success</span>
                <span class="block text-xs text-slate-500 uppercase">#10B981</span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#f59e0b]"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Warning</span>
                <span class="block text-xs text-slate-500 uppercase">#F59E0B</span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#0f172a]"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Dark</span>
                <span class="block text-xs text-slate-500 uppercase">#0F172A</span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="w-20 h-20 rounded-full shadow-md bg-[#f8fafc] border border-slate-200"></div>
              <div class="text-center">
                <span class="block text-sm font-bold text-slate-900">Light</span>
                <span class="block text-xs text-slate-500 uppercase">#F8FAFC</span>
              </div>
            </div>
          </div>
        </div>

        <div class="ui-style fade-in stagger-2">
          <h4>UI Style</h4>
          <div class="style-tags">
            <span class="style-tag">Glassmorphism sutil</span>
            <span class="style-tag">Gradientes oscuros</span>
            <span class="style-tag">Espacio en blanco generoso</span>
            <span class="style-tag">Cards limpias</span>
            <span class="style-tag">Jerarquía tipográfica fuerte</span>
            <span class="style-tag">Diseño minimalista</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LA SOLUCIÓN -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">07</span>
          <h2>La Solución</h2>
          <p class="section-intro">App nativa para Android e iOS con experiencia unificada y diferenciada por plataforma.</p>
        </div>

        <div class="solution-screens fade-in stagger-1">
          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-[2rem] border-[6px] border-slate-100 shadow-xl">
              <img src="/assets/images/app/app-screen-2.jpg" alt="Chat de Soporte con IA" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Funcionalidad</span>
                <p>Chatea con Agente IA para resolver dudas sobre tus beneficios y servicios.</p>
              </div>
            </div>
            <div class="screen-info">
              <h4>Soporte Inteligente con IA Generativa</h4>
              <p>Asistente virtual 24/7 que resuelve dudas complejas en segundos, integrando datos reales del plan del usuario.</p>
            </div>
          </div>

          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-[2rem] border-[6px] border-slate-100 shadow-xl">
              <img src="/assets/images/app/app-screen-3.jpg" alt="Wallet de beneficios" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Funcionalidad</span>
                <p>Tus vouchers, coberturas y beneficios siempre contigo.</p>
              </div>
            </div>
            <div class="screen-info">
              <h4>Gestión de Viajes y Vouchers Premium</h4>
              <p>Transformamos el voucher tradicional en una experiencia visual, integrando destinos y estados de cobertura en tiempo real.</p>
            </div>
          </div>

          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-[2rem] border-[6px] border-slate-100 shadow-xl">
              <img src="/assets/images/app/app-screen-4.jpg" alt="Emergencias 24/7" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Funcionalidad</span>
                <p>Acceso directo a asistencia médica y soporte de emergencia.</p>
              </div>
            </div>
            <div class="screen-info">
              <h4>Acceso Crítico a Emergencias 24/7</h4>
              <p>Soporte instantáneo y geolocalizado para situaciones críticas, garantizando respuesta inmediata en cualquier parte del mundo.</p>
            </div>
          </div>

          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-[2rem] border-[6px] border-slate-100 shadow-xl">
              <img src="/assets/images/app/app-screen-5.jpg" alt="Cotizador en 4 pasos" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Funcionalidad</span>
                <p>Cotiza y activa planes en minutos, no en horas.</p>
              </div>
            </div>
            <div class="screen-info">
              <h4>Flujo de Cotización Optimizado</h4>
              <p>Redujimos la fricción de compra a un proceso intuitivo de 4 pasos, aumentando la tasa de conversión y facilidad de uso.</p>
            </div>
          </div>

          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-[2rem] border-[6px] border-slate-100 shadow-xl">
              <img src="/assets/images/app/app-screen-1.jpg" alt="Beneficios adicionales" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Funcionalidad</span>
                <p>Xentral Pass, salas VIP, medicamentos, roaming y más.</p>
              </div>
            </div>
            <div class="screen-info">
              <h4>Ecosistema de Beneficios Premium</h4>
              <p>Integración de partners estratégicos (Avis, Holafly, rxless) para añadir valor real al viaje más allá de la asistencia médica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FUNCIONALIDADES CORE -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">08</span>
          <h2>Funcionalidades Core</h2>
          <p class="section-intro">Cada feature diseñada para resolver una necesidad específica del viajero.</p>
        </div>

        <div class="features-grid fade-in stagger-1">
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8 bg-white rounded-2xl border border-slate-100">
            <div class="feature-icon">
              <Wallet :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Wallet Digital</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Vouchers, coberturas y beneficios en un solo lugar. Historial completo y trazable.</p>
          </div>
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8 bg-white rounded-2xl border border-slate-100">
            <div class="feature-icon">
              <Crown :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Xentral Pass</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Acceso automático a salas VIP por retrasos de vuelos. Beneficio sin fricción.</p>
          </div>
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8 bg-white rounded-2xl border border-slate-100">
            <div class="feature-icon">
              <Stethoscope :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Telemedicina 24/7</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Asistencia médica online inmediata. Consultas sin esperar, prescriptions incluidas.</p>
          </div>
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8 bg-white rounded-2xl border border-slate-100">
            <div class="feature-icon">
              <MessageCircle :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Chat de Soporte</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Genesys integration para atención humana o automatizada según necesidad.</p>
          </div>
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8 bg-white rounded-2xl border border-slate-100">
            <div class="feature-icon">
              <Bell :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Notificaciones Inteligentes</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Alertas de vuelos, beneficios disponibles y recordatorios de activación.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACTO -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">09</span>
          <h2>Impacto</h2>
          <p class="section-intro">La nueva app fue diseñada para resolver los problemas críticos de la versión anterior.</p>
        </div>
        <div class="w-full max-w-6xl mx-auto mt-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
              <span class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 block">1.5%→25%</span>
              <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2 whitespace-nowrap">Retención Día 1</h3>
              <p class="text-sm text-slate-400 max-w-[200px]">Crecimiento exponencial en adopción inicial</p>
            </div>
            <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
              <span class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 block">0.1%→12%</span>
              <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2 whitespace-nowrap">Retención Día 7</h3>
              <p class="text-sm text-slate-400 max-w-[200px]">Mejora drástica en el engagement a largo plazo</p>
            </div>
            <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
              <span class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 block">0</span>
              <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2 whitespace-nowrap">Errores iOS</h3>
              <p class="text-sm text-slate-400 max-w-[200px]">Eliminación de crashes críticos en versión final</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALIDACIÓN CON USUARIOS -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">09b</span>
          <h2>Lo que dijeron los usuarios</h2>
          <p class="section-intro">Las pruebas de usabilidad confirmaron que la nueva experiencia funcionaba.</p>
        </div>

        <div class="validation-quotes fade-in stagger-1 mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <blockquote>
                <p class="text-xl text-slate-700 leading-relaxed italic mb-4">"Por fin puedo ver todos mis beneficios en un solo lugar. Antes tenía que entrar a 3 páginas diferentes para saber qué cubría mi plan."</p>
                <cite class="text-base font-semibold text-slate-500 block">— Laura M., Viajera Frecuente, 35 años</cite>
              </blockquote>
            </div>
            <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <blockquote>
                <p class="text-xl text-slate-700 leading-relaxed italic mb-4">"El botón de emergencia es lo que más valoro. Sé que si algo pasa en el viaje, tengo ayuda inmediata. Antes no tenía idea de cómo-contactar asistencia."</p>
                <cite class="text-base font-semibold text-slate-500 block">— Ricardo T., Ejecutivo Corporativo, 45 años</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LEARNINGS -->
    <section class="py-16 md:py-24">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">11</span>
          <h2>Lo que aprendí</h2>
          <p class="section-intro">Lo que aprendí diseñando esta solución.</p>
        </div>

        <div class="learnings-grid fade-in stagger-1">
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number">01</span>
            <p class="text-slate-700 leading-relaxed"><strong>El contexto de uso define el diseño, no la plataforma.</strong> Descubrimos que los viajeros abandonaban la app no por mal diseño, sino porque necesitaban resolver problemas urgentes desde pantallas pequeñas. Priorizar el flujo de emergencia sobre el de exploración fue la decisión más impactante.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number">02</span>
            <p class="text-slate-700 leading-relaxed"><strong>La transparencia no es solo mostrar datos, es anticipar preguntas.</strong> Los usuarios no llamaban a emergencias por no saber qué cubría su plan. Diseñamos un dashboard que respondía preguntas antes de que surgieran, reduciendo llamadas de soporte en 40%.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number">03</span>
            <p class="text-slate-700 leading-relaxed"><strong>Diseño premium requiere constraints claros, no más features.</strong> El equipo quería incluir 8 features en el v1. Tras priorizar con datos de uso, redujimos a 3 core flows que representaban el 90% del uso real.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number">04</span>
            <p class="text-slate-700 leading-relaxed"><strong>Un desarrollador full-stack tiene límites de contexto, no de capacidad.</strong> La solución fue crear documentation exhaustiva de interacción y prototipos de alta fidelidad que eliminaran ambigüedad antes de cada sprint.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT STEPS -->
    <section class="py-16 md:py-24 section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">12</span>
          <h2>Siguientes pasos</h2>
          <p class="section-intro">Roadmap para iteración continua basada en datos reales.</p>
        </div>

        <div class="next-steps-grid fade-in stagger-1">
          <div class="next-step-card">
            <div class="next-step-icon">
              <BarChart2 :size="24" />
            </div>
            <h4>Métricas Post-lanzamiento</h4>
            <p>Medir retención, engagement y satisfacción después del launch.</p>
          </div>
          <div class="next-step-card">
            <div class="next-step-icon">
              <UserCheck :size="24" />
            </div>
            <h4>Testing con Usuarios</h4>
            <p>Validar flujos críticos con usuarios reales en contexto de viaje.</p>
          </div>
          <div class="next-step-card">
            <div class="next-step-icon">
              <Layers :size="24" />
            </div>
            <h4>Iteración de Features</h4>
            <p>Priorizar mejoras según datos de uso y feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="case-cta section">
      <div class="container">
        <div class="cta-box fade-in">
          <h2>¿Hablamos?</h2>
          <p>Explora otro caso de estudio o contáctame para discutir proyectos.</p>
          <div class="cta-buttons">
            <router-link to="/ecommerce" class="btn btn-secondary">
              <ArrowLeft :size="16" />
              Caso anterior
            </router-link>
            <router-link to="/xentral-health" class="btn btn-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Siguiente caso
              <ArrowRight :size="16" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Navigation -->
    <nav class="py-24 border-t border-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <RouterLink to="/ecommerce" class="group flex items-center justify-between p-8 bg-white rounded-3xl border border-slate-200 transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
          <div class="flex flex-col">
            <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Caso siguiente</span>
            <h4 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Rediseño E-commerce</h4>
          </div>
          <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <ArrowRight :size="24" />
          </div>
        </RouterLink>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import {
  Layers, TrendingDown, Bug, Split, UserX, Smartphone, Target, Plane, CreditCard, Calendar, Globe,
  Lightbulb, Eye, Zap, ShieldCheck, Home, HeartPulse, Gift, Wallet, User, Rocket, FileText, Receipt,
  Siren, Crown, Stethoscope, MessageCircle, Bell, BarChart2, UserCheck, ArrowRight, ArrowLeft, Check, X,
  Mail, Tablet, PanelBottom, Search, Sparkles, LayoutTemplate
} from 'lucide-vue-next'

useScrollAnimations()
</script>