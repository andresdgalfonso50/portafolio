<template>
  <div class="view-wrapper">
    <!-- 1. HERO -->
    <CaseStudyHero
      case-slug="app"
      :icon="Layers"
      title="Diseño de la aplicación móvil (iOS & Android) en producción que multiplicó por 4x el checkout de asistencia en viaje."
      highlight=""
      badge="Continental Assist"
      subtitle="De 97% de abandono a 2 apps nativas en producción. Retención día 7: 0.1% → 12%. Checkout: 0.82% → 3.8%."
      :hero-image="heroAppImg"
      hero-image-alt="App de asistencia al viajero"
      :hero-badge="{ value: '+11,900%', label: 'retención' }"
      :meta="[
        { value: 'Product Designer', label: 'Mi Rol' },
        { value: '5 Meses', label: 'Duración' },
        { value: 'PM + 2 Devs', label: 'Equipo' },
        { value: '+35% Activación', label: 'Impacto', emphasis: true }
      ]"
    />

    <!-- 1.1 PRODUCTION BADGES: contexto inmediato de producto vivo -->
    <section class="bg-surface py-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-200">
            <span class="relative flex h-2 w-2">
              <span class="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            En Producción
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-white text-midnight text-xs font-bold uppercase tracking-widest rounded-full border border-borderline">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-white text-midnight text-xs font-bold uppercase tracking-widest rounded-full border border-borderline">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.802 8.99l-2.303 2.303L5.864 2.658z"/>
            </svg>
            Google Play
          </span>
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-white text-midnight text-xs font-bold uppercase tracking-widest rounded-full border border-borderline">
            <Smartphone :size="14" />
            App Nativa
          </span>
        </div>
      </div>
    </section>

    <!-- 2. CONTEXTO & DISCOVERY: el problema, la investigación, qué aprendimos -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">97% abandonaba, 997 crashes, 0 conexión entre productos</h2>
          <p class="section-intro">5 barreras medidas con datos. 18 entrevistas con viajeras. 1 patrón común: la app no resolvía urgencias reales.</p>
        </div>

        <!-- Métricas clave -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">1.5%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Retención Día 1</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">0.1%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Retención Día 7</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">997</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Errores iOS</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">0%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Uso en viaje</span>
          </div>
        </div>

        <!-- 5 barreras -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 fade-in stagger-2 mb-12">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <TrendingDown :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">97% no volvía</h3>
            <p class="text-sm text-body leading-relaxed">Abandono masivo en la primera semana.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Bug :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">997 crashes iOS</h3>
            <p class="text-sm text-body leading-relaxed">App crasheaba en emergencia.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Split :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">3 apps en silos</h3>
            <p class="text-sm text-body leading-relaxed">Asistencia, wallet y telemedicina separadas.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserX :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Llamaban, no abrían</h3>
            <p class="text-sm text-body leading-relaxed">Los viajeros preferían llamar.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Smartphone :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Web comprimida</h3>
            <p class="text-sm text-body leading-relaxed">Versión web en mobile. No usable en ruta.</p>
          </div>
        </div>

        <!-- UI Antes + Observaciones -->
        <div class="ui-comparison fade-in stagger-2">
          <div class="ui-label"><span class="ui-label-badge">APP ANTERIOR</span></div>
          <div class="ui-image-wrapper relative mt-8 max-w-5xl mx-auto">
            <img src="/assets/images/app/app-before.png" alt="UI app antes del rediseño" class="w-full h-auto rounded-2xl" loading="lazy" decoding="async" width="1108" height="533">
          </div>
          <div class="ui-observations grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
            <div class="observation-item flex gap-4 bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-chip text-body font-semibold flex items-center justify-center font-bold text-base shrink-0">1</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-midnight mb-1">Navegación confusa</h4>
                <p class="text-sm text-body">Usuarios perdidos. Sin jerarquía.</p>
              </div>
            </div>
            <div class="observation-item flex gap-4 bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-chip text-body font-semibold flex items-center justify-center font-bold text-base shrink-0">2</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-midnight mb-1">Sin feedback</h4>
                <p class="text-sm text-body">Sin transparencia en vouchers ni coberturas.</p>
              </div>
            </div>
            <div class="observation-item flex gap-4 bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-chip text-body font-semibold flex items-center justify-center font-bold text-base shrink-0">3</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-midnight mb-1">Interfaz genérica</h4>
                <p class="text-sm text-body">Sin confianza ni diferenciación.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Perfiles + Insights -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 fade-in stagger-2">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0 text-sm">LM</div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Laura Méndez — Viajera Frecuente</h4>
              <p class="text-xs text-body mt-1">Acceso rápido a beneficios VIP y procesos sin fricción.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0 text-sm">RT</div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Ricardo Torres — Ejecutivo</h4>
              <p class="text-xs text-body mt-1">Soporte confiable y respuestas rápidas en viaje.</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 fade-in stagger-2">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
            <p class="text-sm text-slate-700 leading-relaxed">La app no resolvía necesidades reales de viaje.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
            <p class="text-sm text-slate-700 leading-relaxed">997 errores iOS. Estabilidad era prerequisito.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
            <p class="text-sm text-slate-700 leading-relaxed">Personalización por contexto aumenta engagement.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. APPROACH: estrategia, arquitectura, design system -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Optimización de Arquitectura: 3 Roles unificados bajo una sola infraestructura cognitiva</h2>
          <p class="section-intro">Rediseño de la interfaz del Coordinador médico para centralizar decisiones críticas y eliminar cuellos de botella operativos.</p>
        </div>

        <!-- Benchmark -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1 mb-10">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Plane :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Avianca</h3>
            <p class="text-sm text-body mb-3">Navegación intuitiva.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> La navegación inferior persistente es estándar en travel.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <CreditCard :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Lifemiles</h3>
            <p class="text-sm text-body mb-3">Transparencia de estados.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Los usuarios necesitan saber el estado de sus beneficios.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Calendar :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Booking</h3>
            <p class="text-sm text-body mb-3">Diseño limpio y minimalista.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Menos es más: interfaces claras reducen carga cognitiva.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Globe :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Despegar</h3>
            <p class="text-sm text-body mb-3">Flujos de cotización claros.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Procesos lineales con progreso visible.</p>
          </div>
        </div>

        <div class="conclusion-box fade-in mb-12 bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-3">
            <Lightbulb :size="18" class="text-secondary mt-0.5 shrink-0" />
            <p class="text-sm text-slate-700"><strong>Conclusión:</strong> Navegación persistente + transparencia total + diseño minimalista = confianza y adopción.</p>
          </div>
        </div>

        <!-- Estrategia: 4 principios -->
        <div class="strategy-grid fade-in stagger-2 mb-10">
          <div class="strategy-objective p-8 bg-midnight rounded-xl mb-10">
            <span class="strategy-badge text-xs font-bold uppercase tracking-widest px-2 py-1 bg-secondary text-white rounded-full mb-4 inline-block">Objetivo</span>
            <h3 class="text-xl font-bold text-white mb-2">De app ignorada a herramienta esencial de viaje</h3>
            <p class="text-sm text-slate-400">2 apps en producción con 25% retención día 1.</p>
          </div>
          <div class="principles-list">
            <h4 class="text-sm font-bold uppercase tracking-widest text-body mb-4">Principios aplicados</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="principle-mini p-5 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Smartphone :size="18" class="text-secondary mb-2" />
                <span class="text-sm font-semibold text-midnight block">Mobile-first</span>
                <span class="text-xs text-body">El contexto donde ocurre la urgencia es el punto de partida.</span>
              </div>
              <div class="principle-mini p-5 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Eye :size="18" class="text-secondary mb-2" />
                <span class="text-sm font-semibold text-midnight block">Claridad > Estética</span>
                <span class="text-xs text-body">Interfaces limpias que reducen carga cognitiva.</span>
              </div>
              <div class="principle-mini p-5 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Zap :size="18" class="text-secondary mb-2" />
                <span class="text-sm font-semibold text-midnight block">Velocidad = Confianza</span>
                <span class="text-xs text-body">Respuesta inmediata elimina incertidumbre en crisis.</span>
              </div>
              <div class="principle-mini p-5 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <ShieldCheck :size="18" class="text-secondary mb-2" />
                <span class="text-sm font-semibold text-midnight block">Confianza visual</span>
                <span class="text-xs text-body">Estética profesional que transmite seguridad.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Arquitectura: 5 tabs + user flows -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-3">Simplificación de Flujo Crítico: 6 Decisiones clave reducidas a minutos</h3>
        <p class="text-sm text-body mb-6 max-w-2xl">Estructuración de pantallas de alta fidelidad optimizadas para reducir la carga cognitiva en momentos de alta presión médica.</p>
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-8">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Home :size="18" /></div>
            <span class="text-xs font-medium text-body">Inicio</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><HeartPulse :size="18" /></div>
            <span class="text-xs font-medium text-body">Asistencia</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Gift :size="18" /></div>
            <span class="text-xs font-medium text-body">Beneficios</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Wallet :size="18" /></div>
            <span class="text-xs font-medium text-body">Wallet</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><User :size="18" /></div>
            <span class="text-xs font-medium text-body">Perfil</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Rocket :size="16" class="inline mr-2 text-secondary" />Onboarding → Activación</h4>
            <p class="text-xs text-body">Login → Ver beneficios activos → Activar automáticamente. Sin fricción desde el primer uso.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><FileText :size="16" class="inline mr-2 text-secondary" />Consulta de Vouchers</h4>
            <p class="text-xs text-body">Wallet → Plan → Vouchers y coberturas vigentes. Todo en 3 taps.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Receipt :size="16" class="inline mr-2 text-secondary" />Reembolso</h4>
            <p class="text-xs text-body">Perfil → Reembolsos → Solicitud → Documentación → Estado. Proceso transparente.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Siren :size="16" class="inline mr-2 text-secondary" />Emergencias</h4>
            <p class="text-xs text-body">Tap en Emergency → Confirmar ubicación → Asistencia inmediata. Sin fricción en crisis.</p>
          </div>
        </div>

        <!-- Design system: 40 componentes -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">Design system: 40 componentes, 30% más rápido</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-midnight mb-1">Tipografía</h3>
            <p class="text-xs text-body">Galano Grotesque + Inter. Claridad y jerarquía visual.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-midnight mb-1">Espaciado</h3>
            <p class="text-xs text-body">Sistema de 8px. Consistencia visual en toda la interfaz.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-midnight mb-1">Bordes</h3>
            <p class="text-xs text-body">Radius 16px. Suavidad visual que transmite calma en urgencia.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-midnight mb-1">Sombras</h3>
            <p class="text-xs text-body">3 niveles de profundidad. Jerarquía clara para orientar atención.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. LA SOLUCIÓN: 4 features + antes vs después -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 features nativas, 90% del uso real</h2>
          <p class="section-intro">Lo que los viajeros realmente abren en ruta: emergencia, beneficios, wallet y soporte.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Soporte-con-IA-Generativa.png" alt="Chat de soporte" class="w-full h-auto object-cover" width="1025" height="954">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Soporte con IA Generativa</h4>
              <p class="text-xs text-body">Asistente virtual 24/7 que resuelve dudas complejas en segundos.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Gestión-de-Viajes-Premium.png" alt="Pantalla de inicio" class="w-full h-auto object-cover" width="1025" height="954">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Gestión de Viajes Premium</h4>
              <p class="text-xs text-body">Vouchers, coberturas y beneficios en tiempo real.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Emergencias-24-7.png" alt="Wallet de beneficios" class="w-full h-auto object-cover" width="1025" height="954">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Emergencias 24/7</h4>
              <p class="text-xs text-body">Soporte geolocalizado para situaciones críticas.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Flujo-de-Cotización-Optimizado.png" alt="Cotizador" class="w-full h-auto object-cover" width="1025" height="954">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Cotización Optimizada</h4>
              <p class="text-xs text-body">Proceso intuitivo de 4 pasos que aumentó la conversión.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Ecosistema-de-Beneficios-Premium.png" alt="Ecosistema de beneficios" class="w-full h-auto object-cover" width="1025" height="954">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Ecosistema de Beneficios</h4>
              <p class="text-xs text-body">Integración de partners (Avis, Holafly, rxless) para valor real.</p>
            </div>
          </div>
        </div>

        <!-- Antes vs Después -->
        <div class="relative max-w-5xl mx-auto bg-midnight p-8 md:p-12 rounded-3xl">
          <div class="section-header fade-in mb-8">
            <h3 class="font-display text-2xl font-bold text-white">Evolución de la UI</h3>
          </div>
          <div class="relative">
            <div class="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">Antes</div>
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/assets/images/app/mockup-app-comparacion.png" alt="Comparativa UI" class="w-full h-auto object-cover" width="1192" height="768" />
            </div>
            <div class="absolute bottom-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">Después</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. FLUJO DE LA APP: 4 pantallas con micro-etiquetas paso a paso -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Un reto, una oportunidad: el flujo optimizado de compra</h2>
          <p class="section-intro">4 pasos que redujeron el tiempo de cotización a 3 minutos. Cada pantalla pensada para eliminar fricción.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in stagger-2">
          <!-- Paso 01 -->
          <figure class="flex flex-col">
            <figcaption class="mb-4">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">Paso 01</span>
              <h3 class="text-base font-bold text-midnight leading-tight">Cotización fluida</h3>
            </figcaption>
            <div class="rounded-2xl overflow-hidden bg-white border border-borderline shadow-sm aspect-[9/19]">
              <img src="/assets/images/app/Gestión-de-Viajes-Premium.png" alt="Pantalla de cotización inicial" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1025" height="954" />
            </div>
          </figure>

          <!-- Paso 02 -->
          <figure class="flex flex-col">
            <figcaption class="mb-4">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">Paso 02</span>
              <h3 class="text-base font-bold text-midnight leading-tight">Selección de Cobertura</h3>
            </figcaption>
            <div class="rounded-2xl overflow-hidden bg-white border border-borderline shadow-sm aspect-[9/19]">
              <img src="/assets/images/app/Flujo-de-Cotización-Optimizado.png" alt="Selección de plan y cobertura" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1025" height="954" />
            </div>
          </figure>

          <!-- Paso 03 -->
          <figure class="flex flex-col">
            <figcaption class="mb-4">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">Paso 03</span>
              <h3 class="text-base font-bold text-midnight leading-tight">Datos en un tap</h3>
            </figcaption>
            <div class="rounded-2xl overflow-hidden bg-white border border-borderline shadow-sm aspect-[9/19]">
              <img src="/assets/images/app/Ecosistema-de-Beneficios-Premium.png" alt="Autocompletado de datos del viajero" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1025" height="954" />
            </div>
          </figure>

          <!-- Paso 04 -->
          <figure class="flex flex-col">
            <figcaption class="mb-4">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">Paso 04</span>
              <h3 class="text-base font-bold text-midnight leading-tight">Checkout optimizado en 3 min</h3>
            </figcaption>
            <div class="rounded-2xl overflow-hidden bg-white border border-borderline shadow-sm aspect-[9/19]">
              <img src="/assets/images/app/Soporte-con-IA-Generativa.png" alt="Checkout optimizado" class="w-full h-full object-cover" loading="lazy" decoding="async" width="1025" height="954" />
            </div>
          </figure>
        </div>
      </div>
    </section>

    <!-- 6. IMPACTO COMERCIAL: 3 métricas enfocadas -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Impacto Comercial: Métricas Reales</h2>
          <p class="section-intro">3 contadores que validan la estrategia: checkout, tiempo de emisión y alcance multiplataforma.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <!-- Card 1: +4x Checkout -->
          <div class="metric-card group bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide border border-emerald-200">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
                En producción
              </span>
            </div>
            <span class="font-display text-6xl md:text-7xl font-black text-highlight tracking-tighter leading-none tabular-nums block mb-4">+4x</span>
            <h3 class="text-base font-bold text-midnight mb-2">Incremento en Checkout</h3>
            <p class="text-sm text-body leading-relaxed">Conversión 0.82% → 3.8%. Mismo canal, nueva arquitectura de información.</p>
          </div>

          <!-- Card 2: 3 Minutos -->
          <div class="metric-card group bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Tiempo real
              </span>
            </div>
            <span class="font-display text-6xl md:text-7xl font-black text-highlight tracking-tighter leading-none tabular-nums block mb-4">3<span class="text-2xl md:text-3xl font-bold text-body ml-1">min</span></span>
            <h3 class="text-base font-bold text-midnight mb-2">Tiempo de Emisión</h3>
            <p class="text-sm text-body leading-relaxed">Promedio desde la app: cotización → voucher activo. Antes: 12+ minutos con fricción.</p>
          </div>

          <!-- Card 3: iOS & Android -->
          <div class="metric-card group bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-midnight text-white text-xs font-bold tracking-wide">
                <Smartphone :size="12" />
                Multiplataforma
              </span>
            </div>
            <span class="font-display text-5xl md:text-6xl font-black text-highlight tracking-tighter leading-none block mb-4">iOS<br/>& Android</span>
            <h3 class="text-base font-bold text-midnight mb-2">Disponibilidad en Tiendas</h3>
            <p class="text-sm text-body leading-relaxed">2 apps nativas con consistencia visual y de patrones. Misma experiencia, ambos sistemas.</p>
          </div>
        </div>

        <!-- Validación: testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Por fin puedo ver todos mis beneficios en un solo lugar. Antes tenía que entrar a 3 páginas diferentes."</p>
              <cite class="text-xs font-semibold text-body">— Laura M., Viajera Frecuente</cite>
            </blockquote>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"El botón de emergencia es lo que más valoro. Sé que si algo pasa, tengo ayuda inmediata."</p>
              <cite class="text-xs font-semibold text-body">— Ricardo T., Ejecutivo Corporativo</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. APRENDIZAJES & NEXT STEPS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 lecciones, 3 sprints, +35% activación</h2>
          <p class="section-intro">Lo que aprendí y los próximos 3 sprints para llevar la activación a +35%.</p>
        </div>

        <!-- 4 lecciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>El contexto define el diseño.</strong> Necesitaban resolver urgencias desde el móvil. Priorizar emergencia fue lo más impactante.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Transparencia anticipa preguntas.</strong> Dashboard que respondía dudas antes de que surgieran. -40% llamadas de soporte.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Menos features, más impacto.</strong> De 8 features a 3 flows core. 90% del uso real.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Documentación elimina ambigüedad.</strong> Prototipos HD y specs claras antes de cada sprint.</p>
          </div>
        </div>

        <!-- Lo que no funcionó — diseño premium con border-l-4 -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-white border-l-4 border-primary border border-borderline rounded-2xl p-8 md:p-10 mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Lightbulb :size="18" class="text-primary" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-midnight mb-3">Lo que intentamos y no funcionó</h4>
              <ul class="space-y-2 text-base text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Más onboarding:</strong> Más educación = más fricción. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Modal de confirmación:</strong> Agregaba fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Productos relacionados:</strong> Cancelaban compras al ver el carousel. Lo quitamos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Next steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BarChart2 :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Métricas Post-lanzamiento</h4>
            <p class="text-xs text-body">Medir retención, engagement y satisfacción después del launch.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserCheck :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Testing con Usuarios</h4>
            <p class="text-xs text-body">Validar flujos críticos con usuarios reales en contexto de viaje.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Layers :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Iteración de Features</h4>
            <p class="text-xs text-body">Priorizar mejoras según datos de uso y feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          ¿Tu próximo
          <span class="text-gradient-mixed">caso</span>?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Explora otro caso de estudio o contáctame para discutir proyectos donde el diseño genera impacto medible.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link to="/contacto" class="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300">
            Iniciar conversación
          </router-link>
          <router-link to="/ecommerce" class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Siguiente Caso</span>
              <span class="text-sm font-bold text-white">Rediseño E-commerce</span>
            </div>
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import CaseStudyHero from '@/components/case-study/CaseStudyHero.vue'
import heroAppImg from '/public/assets/images/home/hero-app-full.jpg'
import {
  Layers, GitBranch, ClipboardList, ShieldOff, Smartphone, Package,
  CreditCard, ChevronRight, ArrowRight, ArrowLeft, CheckCircle, MapPin,
  MessageSquare, Mail, Lightbulb, Eye, ListOrdered, Plane, Globe,
  Split, UserCheck, Bug, TrendingDown, UserX, Calendar,
  Wallet, Crown, Stethoscope, MessageCircle, Bell, Home, HeartPulse,
  Gift, User, Rocket, FileText, Receipt, Siren, Zap, ShieldCheck, BarChart2
} from 'lucide-vue-next'

useScrollAnimations()
</script>
