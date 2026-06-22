<template>
  <div class="view-wrapper">
    <!-- 1. HERO -->
    <CaseStudyHero
      case-slug="app"
      :icon="Layers"
      title="Retención día 7: de 0.1% a 12% en 5 meses"
      highlight=""
      badge="Continental Assist"
      subtitle="Diseño y desarrollo de la aplicación móvil (iOS & Android) para asistencia al viajero. De 97% de abandono a 2 apps nativas en producción."
      :hero-image="heroAppImg"
      hero-image-alt="App de asistencia al viajero"
      :hero-badge="{ value: '0.1% → 12%', label: 'retención día 7' }"
      :meta="[
        { value: 'Product Designer', label: 'Mi Rol' },
        { value: '5 Meses', label: 'Duración' },
        { value: 'PM + 2 Devs', label: 'Equipo' },
        { value: '+35% Activación', label: 'Impacto', emphasis: true }
      ]"
    >
      <template #actions>
        <ButtonPrimary href="#descubrimiento" variant="primary">
          Ver el caso
          <template #suffix>
            <ArrowRight :size="18" />
          </template>
        </ButtonPrimary>
        <ButtonPrimary href="#impacto" variant="secondary">
          Ir al impacto
        </ButtonPrimary>
      </template>
    </CaseStudyHero>

    <!-- 2. CONTEXTO & DISCOVERY: el problema, la investigación, qué aprendimos -->
    <section id="descubrimiento" class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">El problema: 5 fases fragmentadas</h2>
          <p class="section-intro">5 barreras medidas con datos. 18 entrevistas con viajeras. 1 patrón común: la app no resolvía urgencias reales.</p>
        </div>

        <!-- Métricas clave -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 fade-in stagger-1">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">1.5%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Retención Día 1</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">0.1%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Retención Día 7</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">997</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Errores iOS</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-midnight block">0%</span>
            <span class="text-xs font-semibold text-body uppercase tracking-widest">Uso en viaje</span>
          </div>
        </div>

        <!-- 5 barreras -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 fade-in stagger-2 mb-8">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <TrendingDown :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">97% no volvía</h3>
            <p class="text-sm text-body leading-relaxed">Abandono masivo en la primera semana.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Bug :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">997 crashes iOS</h3>
            <p class="text-sm text-body leading-relaxed">App crasheaba en emergencia.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Split :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">3 apps en silos</h3>
            <p class="text-sm text-body leading-relaxed">Asistencia, wallet y telemedicina separadas.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserX :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Llamaban, no abrían</h3>
            <p class="text-sm text-body leading-relaxed">Los viajeros preferían llamar.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
      </div>
    </section>

    <!-- 2. DECISIONES DE DISEÑO CLAVE -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Decisiones de diseño clave</h2>
          <p class="section-intro">Benchmark de apps de viaje + 4 principios de diseño que guiaron la arquitectura de la nueva app.</p>
        </div>

        <!-- Benchmark -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1 mb-6">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Plane :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Avianca</h3>
            <p class="text-sm text-body mb-3">Navegación intuitiva.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> La navegación inferior persistente es estándar en travel.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <CreditCard :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Lifemiles</h3>
            <p class="text-sm text-body mb-3">Transparencia de estados.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Los usuarios necesitan saber el estado de sus beneficios.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Calendar :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Booking</h3>
            <p class="text-sm text-body mb-3">Diseño limpio y minimalista.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Menos es más: interfaces claras reducen carga cognitiva.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Globe :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Despegar</h3>
            <p class="text-sm text-body mb-3">Flujos de cotización claros.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Procesos lineales con progreso visible.</p>
          </div>
        </div>

        <div class="conclusion-box fade-in mb-12 bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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

        <!-- Arquitectura: navegación + flujos críticos -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-3">Navegación y flujos críticos</h3>
        <p class="text-sm text-body mb-8 max-w-2xl">5 tabs principales con acceso directo a las funciones más usadas. 4 flujos optimizados para resolver urgencias en el menor número de pasos posible.</p>

        <!-- Stepper horizontal: 5 tabs conectados -->
        <div class="relative bg-white p-6 md:p-8 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-10">
          <!-- Línea conectora horizontal -->
          <div class="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-borderline to-transparent" aria-hidden="true"></div>
          <div class="grid grid-cols-5 gap-2 md:gap-4 relative">
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ring-2 ring-primary/20"><Home :size="18" /></div>
              <span class="text-[11px] font-semibold text-midnight text-center">Inicio</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ring-2 ring-primary/20"><HeartPulse :size="18" /></div>
              <span class="text-[11px] font-semibold text-midnight text-center">Asistencia</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ring-2 ring-primary/20"><Gift :size="18" /></div>
              <span class="text-[11px] font-semibold text-midnight text-center">Beneficios</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ring-2 ring-primary/20"><Wallet :size="18" /></div>
              <span class="text-[11px] font-semibold text-midnight text-center">Wallet</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ring-2 ring-primary/20"><User :size="18" /></div>
              <span class="text-[11px] font-semibold text-midnight text-center">Perfil</span>
            </div>
          </div>
        </div>

        <!-- Flujos críticos: 4 cards con badges numerados -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="group relative bg-white p-5 md:p-6 pl-16 md:pl-20 rounded-2xl border border-borderline hover:border-primary/40 transition-colors">
            <span class="absolute left-5 top-5 w-8 h-8 rounded-full bg-primary text-white text-sm font-extrabold flex items-center justify-center">01</span>
            <div class="flex items-center gap-2 mb-1.5">
              <Rocket :size="15" class="text-primary" />
              <h4 class="text-sm font-bold text-midnight">Onboarding → Activación</h4>
            </div>
            <p class="text-xs text-body leading-relaxed">Login → Ver beneficios activos → Activar automáticamente. Sin fricción desde el primer uso.</p>
          </div>
          <div class="group relative bg-white p-5 md:p-6 pl-16 md:pl-20 rounded-2xl border border-borderline hover:border-primary/40 transition-colors">
            <span class="absolute left-5 top-5 w-8 h-8 rounded-full bg-primary text-white text-sm font-extrabold flex items-center justify-center">02</span>
            <div class="flex items-center gap-2 mb-1.5">
              <FileText :size="15" class="text-primary" />
              <h4 class="text-sm font-bold text-midnight">Consulta de Vouchers</h4>
            </div>
            <p class="text-xs text-body leading-relaxed">Wallet → Plan → Vouchers y coberturas vigentes. Todo en 3 taps.</p>
          </div>
          <div class="group relative bg-white p-5 md:p-6 pl-16 md:pl-20 rounded-2xl border border-borderline hover:border-primary/40 transition-colors">
            <span class="absolute left-5 top-5 w-8 h-8 rounded-full bg-primary text-white text-sm font-extrabold flex items-center justify-center">03</span>
            <div class="flex items-center gap-2 mb-1.5">
              <Receipt :size="15" class="text-primary" />
              <h4 class="text-sm font-bold text-midnight">Reembolso</h4>
            </div>
            <p class="text-xs text-body leading-relaxed">Perfil → Reembolsos → Solicitud → Documentación → Estado. Proceso transparente.</p>
          </div>
          <div class="group relative bg-white p-5 md:p-6 pl-16 md:pl-20 rounded-2xl border border-borderline hover:border-primary/40 transition-colors">
            <span class="absolute left-5 top-5 w-8 h-8 rounded-full bg-primary text-white text-sm font-extrabold flex items-center justify-center">04</span>
            <div class="flex items-center gap-2 mb-1.5">
              <Siren :size="15" class="text-primary" />
              <h4 class="text-sm font-bold text-midnight">Emergencias</h4>
            </div>
            <p class="text-xs text-body leading-relaxed">Tap en Emergency → Confirmar ubicación → Asistencia inmediata. Sin fricción en crisis.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. EVOLUCIÓN DE LA UI: Antes vs Después -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Evolución de la UI</h2>
          <p class="section-intro">De una app fragmentada con 997 crashes a una experiencia unificada y estable.</p>
        </div>

        <div class="relative max-w-5xl mx-auto p-0 rounded-3xl overflow-hidden">
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

    <!-- 4. PRODUCTO EN PRODUCCIÓN: Grid 3x2 con celulares grandes -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">El producto en producción</h2>
          <p class="section-intro">5 features que los viajeros realmente usan en ruta.</p>
        </div>

        <!-- Grid 3 cols × 2 rows -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 fade-in stagger-2">

          <!-- Emergencias: destacada con fondo midnight -->
          <article class="bg-midnight rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                <span class="relative flex h-2 w-2">
                  <span class="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                En producción
              </span>
              <h3 class="font-display text-xl font-bold text-white mt-3 mb-2 leading-tight">Emergencias 24/7</h3>
              <p class="text-xs text-slate-300 leading-relaxed">Botón de pánico con geolocalización. Asistencia en menos de 2 minutos.</p>
            </div>
            <div class="aspect-[9/16] max-h-[420px] mx-auto overflow-hidden">
              <img src="/assets/images/app/Emergencias-24-7.png" alt="Pantalla de emergencias" class="w-full h-full object-cover" loading="lazy" width="1025" height="954" />
            </div>
          </article>

          <!-- Soporte IA -->
          <article class="bg-white border border-borderline rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Soporte</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 mb-2 leading-tight">IA generativa 24/7</h3>
              <p class="text-xs text-body leading-relaxed">Dudas complejas resueltas en segundos.</p>
            </div>
            <div class="aspect-[9/16] max-h-[420px] mx-auto overflow-hidden">
              <img src="/assets/images/app/Soporte-con-IA-Generativa.png" alt="Chat de soporte con IA" class="w-full h-full object-cover" loading="lazy" width="1025" height="954" />
            </div>
          </article>

          <!-- Gestión de Viajes -->
          <article class="bg-white border border-borderline rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Beneficios</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 mb-2 leading-tight">Gestión de Viajes</h3>
              <p class="text-xs text-body leading-relaxed">Vouchers y coberturas en tiempo real.</p>
            </div>
            <div class="aspect-[9/16] max-h-[420px] mx-auto overflow-hidden">
              <img src="/assets/images/app/Gestión-de-Viajes-Premium.png" alt="Gestión de viajes premium" class="w-full h-full object-cover" loading="lazy" width="1025" height="954" />
            </div>
          </article>

          <!-- Cotización optimizada -->
          <article class="bg-white border border-borderline rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Conversión</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 mb-2 leading-tight">Cotización optimizada</h3>
              <p class="text-xs text-body leading-relaxed">De 4 pasos en 3 minutos.</p>
            </div>
            <div class="aspect-[9/16] max-h-[420px] mx-auto overflow-hidden">
              <img src="/assets/images/app/Flujo-de-Cotización-Optimizado.png" alt="Cotización optimizada" class="w-full h-full object-cover" loading="lazy" width="1025" height="954" />
            </div>
          </article>

          <!-- Ecosistema integrado -->
          <article class="bg-white border border-borderline rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Partners</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 mb-2 leading-tight">Ecosistema integrado</h3>
              <p class="text-xs text-body leading-relaxed">Avis, Holafly, rxless y más.</p>
            </div>
            <div class="aspect-[9/16] max-h-[420px] mx-auto overflow-hidden">
              <img src="/assets/images/app/Ecosistema-de-Beneficios-Premium.png" alt="Ecosistema de beneficios" class="w-full h-full object-cover" loading="lazy" width="1025" height="954" />
            </div>
          </article>

          <!-- Diseño modular: slot con número destacado -->
          <article class="bg-white border border-borderline rounded-3xl overflow-hidden flex flex-col">
            <div class="p-6">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Sistema</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 mb-2 leading-tight">Diseño modular</h3>
              <p class="text-xs text-body leading-relaxed">Sistema de diseño modular con tokens y componentes reutilizables.</p>
            </div>
            <div class="flex-1 flex items-center justify-center bg-midnight p-6">
              <div class="text-center">
                <span class="block font-display text-6xl font-black text-highlight tracking-tighter tabular-nums">40</span>
                <span class="block text-xs text-slate-400 mt-2 font-semibold uppercase tracking-widest">componentes</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- 5. FLUJO DE COMPRA OPTIMIZADO: 4 pasos numerados -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">El flujo de compra optimizado</h2>
          <p class="section-intro">4 pasos que redujeron el tiempo de cotización a 3 minutos. Cada pantalla pensada para eliminar fricción.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in stagger-2">
          <!-- Paso 01 -->
          <article class="bg-white border border-borderline rounded-2xl p-6 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Smartphone :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Paso 01 · 0:00</span>
            <h3 class="text-base font-bold text-midnight mb-2 leading-tight">Email mágico</h3>
            <p class="text-xs text-body leading-relaxed flex-1">El viajero recibe un link directo al servicio. Cero descargas, cero registros, cero contraseñas.</p>
            <span class="text-[10px] text-slate-500 mt-3">Fricción eliminada: instalación de app</span>
          </article>

          <!-- Paso 02 -->
          <article class="bg-white border border-borderline rounded-2xl p-6 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <ShieldCheck :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Paso 02 · 0:30</span>
            <h3 class="text-base font-bold text-midnight mb-2 leading-tight">Cobertura verificada</h3>
            <p class="text-xs text-body leading-relaxed flex-1">El sistema valida automáticamente el plan del viajero. Indicador visual claro de qué está cubierto.</p>
            <span class="text-[10px] text-slate-500 mt-3">Fricción eliminada: llamadas a soporte</span>
          </article>

          <!-- Paso 03 -->
          <article class="bg-white border border-borderline rounded-2xl p-6 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Zap :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Paso 03 · 1:30</span>
            <h3 class="text-base font-bold text-midnight mb-2 leading-tight">Activación 1-tap</h3>
            <p class="text-xs text-body leading-relaxed flex-1">Un solo botón para activar todos los beneficios. Sin formularios, sin confirmar email, sin pasos extras.</p>
            <span class="text-[10px] text-slate-500 mt-3">Fricción eliminada: onboarding</span>
          </article>

          <!-- Paso 04 -->
          <article class="bg-white border border-borderline rounded-2xl p-6 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Rocket :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Paso 04 · 3:00</span>
            <h3 class="text-base font-bold text-midnight mb-2 leading-tight">Beneficios activos</h3>
            <p class="text-xs text-body leading-relaxed flex-1">El viajero ve sus vouchers, coberturas y contacto de emergencia. Listo para usar desde el primer minuto.</p>
            <span class="text-[10px] text-slate-500 mt-3">Fricción eliminada: tiempo de espera</span>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. IMPACTO COMERCIAL: 3 métricas enfocadas -->
    <section id="impacto" class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Impacto medible</h2>
          <p class="section-intro">3 contadores que validan la estrategia: checkout, tiempo de emisión y alcance multiplataforma.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          <!-- Card 1: Retención día 7 -->
          <div class="metric-card group bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide border border-emerald-200">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
                En producción
              </span>
            </div>
            <span class="font-display text-5xl md:text-7xl font-black text-highlight tracking-tighter leading-none tabular-nums block mb-4">0.1% → 12%</span>
            <h3 class="text-base font-bold text-midnight mb-2">Retención día 7</h3>
            <p class="text-sm text-body leading-relaxed">De 0.1% (97% de abandono) a 12%. Métrica auditable en producción.</p>
          </div>

          <!-- Card 2: 3 Minutos -->
          <div class="metric-card group bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Tiempo real
              </span>
            </div>
            <span class="font-display text-6xl md:text-7xl font-black text-highlight tracking-tighter leading-none tabular-nums block mb-4">3<span class="text-2xl md:text-3xl font-bold text-body ml-1">min</span></span>
            <h3 class="text-base font-bold text-midnight mb-2">Tiempo de activación</h3>
            <p class="text-sm text-body leading-relaxed">Promedio desde el primer uso hasta la activación de beneficios. Antes: 12+ minutos con fricción.</p>
          </div>

          <!-- Card 3: iOS & Android -->
          <div class="metric-card group bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-midnight text-white text-xs font-bold tracking-wide">
                <Smartphone :size="12" />
                Multiplataforma
              </span>
            </div>
            <span class="font-display text-6xl md:text-7xl font-black text-highlight tracking-tighter leading-none tabular-nums block mb-4">iOS<br/>& Android</span>
            <h3 class="text-base font-bold text-midnight mb-2">Disponibilidad en Tiendas</h3>
            <p class="text-sm text-body leading-relaxed">2 apps nativas con consistencia visual y de patrones. Misma experiencia, ambos sistemas.</p>
          </div>
        </div>

        <!-- Validación: eliminado - testimonios genéricos reemplazados por métricas de testing -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-black text-highlight tracking-tighter tabular-nums mb-2">12</span>
            <p class="text-sm font-bold text-midnight mb-1">Usuarios en crisis simuladas</p>
            <p class="text-xs text-body leading-relaxed">Validación con viajeros reales en escenarios de emergencia.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-black text-highlight tracking-tighter tabular-nums mb-2">4.5<span class="text-lg font-bold text-body">/6</span></span>
            <p class="text-sm font-bold text-midnight mb-1">Pasos recordados sin ayuda</p>
            <p class="text-xs text-body leading-relaxed">De 1.2 a 4.5 de 6 pasos memorizados.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-black text-highlight tracking-tighter tabular-nums mb-2">+90%</span>
            <p class="text-sm font-bold text-midnight mb-1">Claridad del proceso</p>
            <p class="text-xs text-body leading-relaxed">Usuarios saben qué pasa después al abrir la app.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. APRENDIZAJES & NEXT STEPS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">07</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Lecciones aprendidas</h2>
          <p class="section-intro">Lo que aprendí iterando en producción durante 5 meses.</p>
        </div>

        <!-- Lecciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>El contexto define el diseño.</strong> Necesitaban resolver urgencias desde el móvil. Priorizar emergencia fue lo más impactante.</p>
          </div>
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Transparencia anticipa preguntas.</strong> Dashboard que respondía dudas antes de que surgieran. -40% llamadas de soporte.</p>
          </div>
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Menos features, más impacto.</strong> De 8 features a 3 flows core. 90% del uso real.</p>
          </div>
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Documentación elimina ambigüedad.</strong> Prototipos HD y specs claras antes de cada sprint.</p>
          </div>
        </div>

        <!-- Lo que no funcionó — diseño premium Apple-style con border-l-4 -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-zinc-50 border-l-4 border-primary p-6 md:p-8 mb-8">
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

        <!-- Next steps — específicos del proyecto -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Stethoscope :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Telemedicina integrada</h4>
            <p class="text-xs text-body">Conectar el flujo de asistencia con consulta médica sin salir de la app.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Gift :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Programa de referidos</h4>
            <p class="text-xs text-body">Incentivar recomendación entre viajeros frecuentes con beneficios premium.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BarChart2 :size="20" class="text-body mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Dashboard del Coordinador</h4>
            <p class="text-xs text-body">Métricas en tiempo real para el equipo de soporte operacional.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <AuroraBg variant="dark" class="py-20 md:py-24">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          ¿Tu próxima
          <span class="bg-gradient-to-r from-[#0071e3] to-white bg-clip-text text-transparent">app</span>?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Si tienes un producto mobile o web que necesita escalar conversión y retención, hablemos.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link to="/contacto" class="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300">
            Iniciar conversación
          </router-link>
          <router-link to="/ecommerce" class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Siguiente Caso</span>
              <span class="text-sm font-bold text-white">Checkout +4x</span>
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
import ButtonPrimary from '@/components/primitives/ButtonPrimary.vue'
import heroAppImg from '/public/assets/images/home/hero-app-full.jpg'
import {
  Layers, GitBranch, ClipboardList, ShieldOff, Smartphone, Package,
  CreditCard, ChevronRight, ArrowRight, ArrowLeft, CheckCircle, MapPin,
  MessageSquare, Mail, Lightbulb, Eye, ListOrdered, Plane, Globe,
  Split, Bug, TrendingDown, UserX, Calendar,
  Wallet, Crown, Stethoscope, MessageCircle, Bell, Home, HeartPulse,
  Gift, User, Rocket, FileText, Receipt, Siren, Zap, ShieldCheck, BarChart2
} from 'lucide-vue-next'

useScrollAnimations()
</script>
