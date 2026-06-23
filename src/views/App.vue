<template>
  <div class="view-wrapper">
    <!-- 1. HERO -->
    <CaseStudyHero
      case-slug="app"
      :icon="Layers"
      title="Multiplicamos por 120 la retención día 7 de la app de Continental Assist."
      highlight=""
      badge="Continental Assist"
      subtitle="Producto: app móvil de asistencia al viajero (iOS & Android). Mi rol: liderar el rediseño y prototipado. Resultado: pasamos del 0.1% al 12% de usuarios que vuelven después de una semana, y eliminamos los 997 crashes que hacían la app inutilizable en emergencias."
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
    </CaseStudyHero>

    <!-- 2. CONTEXTO & DISCOVERY: el problema, la investigación, qué aprendimos -->
    <section id="descubrimiento" class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">El problema: una app que nadie abría en el momento que importaba.</h2>
          <p class="section-intro">El 97% de los usuarios la desinstalaba en la primera semana. En emergencias, preferían llamar antes que usar la app.</p>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Las decisiones que cambiaron el comportamiento</h2>
          <p class="section-intro">Comparamos 4 apps de viaje líderes. 4 principios guiaron cada pantalla de la nueva app.</p>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Antes vs después, en una mirada</h2>
          <p class="section-intro">De una app que crasheaba 997 veces al día, a una experiencia que el 12% de los usuarios abre cada semana.</p>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Las 5 funciones que la gente usa de verdad</h2>
          <p class="section-intro">Estas son las pantallas que los viajeros abren en ruta. El resto vive detrás de pestañas secundarias.</p>
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
                <span class="block font-display text-6xl font-extrabold text-highlight tracking-tight tabular-nums">40</span>
                <span class="block text-xs text-slate-400 mt-2 font-semibold uppercase tracking-widest">componentes</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- 5. PRODUCTO EN PRODUCCIÓN: Capturas reales de la App Store -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Así se ve hoy en la App Store</h2>
          <p class="section-intro">4 capturas reales de producción. Cada pantalla refleja una decisión de diseño que sobrevive el contacto con usuarios reales.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in stagger-2">
          <!-- Pantalla 01 — Onboarding -->
          <article class="bg-white border border-borderline rounded-2xl overflow-hidden flex flex-col">
            <div class="bg-midnight/5 p-4 aspect-[9/16] flex items-center justify-center">
              <img
                src="/assets/images/app/1.jpg"
                srcset="/assets/images/app/1.jpg 1x, /assets/images/app/1.jpg 2x"
                alt="Pantalla de inicio de Continental Assist con saludo personalizado y accesos rápidos"
                class="h-full w-auto rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-borderline"
                loading="lazy"
                width="360"
                height="640"
              />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Pantalla 01 · Onboarding</span>
              <h3 class="text-sm font-bold text-midnight mb-2 leading-tight">"Viaja seguro en todo el mundo"</h3>
              <p class="text-xs text-body leading-relaxed flex-1">Saludo personalizado con nombre del viajero. Accesos directos a las funciones más usadas (salas VIP, renta de vehículo).</p>
            </div>
          </article>

          <!-- Pantalla 02 — Soporte IA -->
          <article class="bg-white border border-borderline rounded-2xl overflow-hidden flex flex-col">
            <div class="bg-midnight/5 p-4 aspect-[9/16] flex items-center justify-center">
              <img
                src="/assets/images/app/2.jpg"
                srcset="/assets/images/app/2.jpg 1x, /assets/images/app/2.jpg 2x"
                alt="Chat con agente de IA respondiendo preguntas sobre equipaje perdido con pasos numerados"
                class="h-full w-auto rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-borderline"
                loading="lazy"
                width="360"
                height="640"
              />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Pantalla 02 · Soporte</span>
              <h3 class="text-sm font-bold text-midnight mb-2 leading-tight">"Chatea con nuestro agente de IA"</h3>
              <p class="text-xs text-body leading-relaxed flex-1">Conversación con respuestas estructuradas en pasos numerados. Reduce tickets al call center en un solo flujo.</p>
            </div>
          </article>

          <!-- Pantalla 03 — Gestión -->
          <article class="bg-white border border-borderline rounded-2xl overflow-hidden flex flex-col">
            <div class="bg-midnight/5 p-4 aspect-[9/16] flex items-center justify-center">
              <img
                src="/assets/images/app/3.jpg"
                srcset="/assets/images/app/3.jpg 1x, /assets/images/app/3.jpg 2x"
                alt="Pantalla de beneficios con tabs activos, próximos e historial mostrando tarjetas de viajes"
                class="h-full w-auto rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-borderline"
                loading="lazy"
                width="360"
                height="640"
              />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Pantalla 03 · Gestión</span>
              <h3 class="text-sm font-bold text-midnight mb-2 leading-tight">"Tus viajes, siempre contigo"</h3>
              <p class="text-xs text-body leading-relaxed flex-1">Tabs Activos / Próximos / Historial. Cada viaje muestra país, fechas y acción rápida. Cero scroll innecesario.</p>
            </div>
          </article>

          <!-- Pantalla 04 — Conversión -->
          <article class="bg-white border border-borderline rounded-2xl overflow-hidden flex flex-col">
            <div class="bg-midnight/5 p-4 aspect-[9/16] flex items-center justify-center">
              <img
                src="/assets/images/app/4.jpg"
                srcset="/assets/images/app/4.jpg 1x, /assets/images/app/4.jpg 2x"
                alt="Landing final con mujer viajera sonriendo y botón amarillo de descarga"
                class="h-full w-auto rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-borderline"
                loading="lazy"
                width="360"
                height="640"
              />
            </div>
            <div class="p-5 flex-1 flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Pantalla 04 · Conversión</span>
              <h3 class="text-sm font-bold text-midnight mb-2 leading-tight">"Contigo a donde vayas"</h3>
              <p class="text-xs text-body leading-relaxed flex-1">Fotografía real + CTA amarillo único. Sin distracciones, sin scroll. El botón es el protagonista visual.</p>
            </div>
          </article>
        </div>

        <div class="text-center mt-10 fade-in">
          <p class="text-xs text-slate-500 italic">
            Disponible en App Store y Google Play. Más de 12,000 viajeros activos en LATAM.
          </p>
        </div>
      </div>
    </section>

    <!-- 6. IMPACTO COMERCIAL: 3 métricas enfocadas -->
    <section id="impacto" class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-8">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Lo que cambió para el negocio</h2>
          <p class="section-intro">3 métricas que resumen el resultado: retención, tiempo de activación y alcance en tiendas.</p>
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
            <span class="font-display text-4xl md:text-5xl font-extrabold text-highlight tracking-tight leading-tight tabular-nums block mb-4">120×</span>
            <h3 class="text-base font-bold text-midnight mb-2">Más usuarios vuelven</h3>
            <p class="text-sm text-body leading-relaxed">Del 0.1% al 12% de retención en el día 7. Métrica auditable en producción.</p>
          </div>

          <!-- Card 2: 3 Minutos -->
          <div class="metric-card group bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Tiempo real
              </span>
            </div>
            <span class="font-display text-5xl md:text-6xl font-extrabold text-highlight tracking-tight leading-none tabular-nums block mb-4">3 min</span>
            <h3 class="text-base font-bold text-midnight mb-2">Activación más rápida</h3>
            <p class="text-sm text-body leading-relaxed">Del primer uso a tener los beneficios activos. Antes: más de 12 minutos con fricción.</p>
          </div>

          <!-- Card 3: iOS & Android -->
          <div class="metric-card group bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-midnight text-white text-xs font-bold tracking-wide">
                <Smartphone :size="12" />
                Multiplataforma
              </span>
            </div>
            <span class="font-display text-5xl md:text-6xl font-extrabold text-highlight tracking-tight leading-none tabular-nums block mb-4">iOS &amp; Android</span>
            <h3 class="text-base font-bold text-midnight mb-2">Disponible en ambas tiendas</h3>
            <p class="text-sm text-body leading-relaxed">2 apps nativas con la misma experiencia y patrones de uso.</p>
          </div>
        </div>

        <!-- Métricas auditadas por App Store Connect -->
        <div class="max-w-6xl mx-auto mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg md:text-xl font-display font-extrabold text-midnight tracking-tight">Auditado por App Store Connect</h3>
              <p class="text-xs text-body">Datos reales de producción en los últimos 30 días. Sin estimaciones.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Errores: 997 → 162 -->
            <div class="bg-emerald-50/60 border border-emerald-200/60 p-5 rounded-2xl">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Estabilidad</span>
              </div>
              <div class="flex items-baseline gap-2 mb-1">
                <span class="font-display text-3xl md:text-4xl font-black text-emerald-700 tracking-tight tabular-nums">−84%</span>
              </div>
              <p class="text-sm font-bold text-midnight mb-1">Menos crashes</p>
              <p class="text-xs text-body leading-relaxed">Errores en iOS pasaron de 997 a 162 en la versión actual.</p>
            </div>

            <!-- Descargas repetidas: +82.5% -->
            <div class="bg-emerald-50/60 border border-emerald-200/60 p-5 rounded-2xl">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Satisfacción</span>
              </div>
              <div class="flex items-baseline gap-2 mb-1">
                <span class="font-display text-3xl md:text-4xl font-black text-emerald-700 tracking-tight tabular-nums">+82%</span>
              </div>
              <p class="text-sm font-bold text-midnight mb-1">Más descargas repetidas</p>
              <p class="text-xs text-body leading-relaxed">Usuarios que reinstalan o comparten la app con su familia.</p>
            </div>

            <!-- Tasa de conversión App Store: 18.2% -->
            <div class="bg-emerald-50/60 border border-emerald-200/60 p-5 rounded-2xl">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Conversión ASO</span>
              </div>
              <div class="flex items-baseline gap-2 mb-1">
                <span class="font-display text-3xl md:text-4xl font-black text-emerald-700 tracking-tight tabular-nums">18.2<span class="text-xl font-bold text-emerald-600">%</span></span>
              </div>
              <p class="text-sm font-bold text-midnight mb-1">Visitas que descargan</p>
              <p class="text-xs text-body leading-relaxed">3-4× el promedio de apps de viaje (benchmark: 3-5%).</p>
            </div>

            <!-- Retención día 1: +167% -->
            <div class="bg-emerald-50/60 border border-emerald-200/60 p-5 rounded-2xl">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Engagement</span>
              </div>
              <div class="flex items-baseline gap-2 mb-1">
                <span class="font-display text-3xl md:text-4xl font-black text-emerald-700 tracking-tight tabular-nums">+167%</span>
              </div>
              <p class="text-sm font-bold text-midnight mb-1">Retención día 1</p>
              <p class="text-xs text-body leading-relaxed">De ~1.5% a ~4% de usuarios que vuelven al día siguiente.</p>
            </div>
          </div>

          <p class="text-xs text-slate-400 italic mt-4 max-w-3xl">
            Fuente: panel de análisis de App Store Connect. Métricas de adquisición (primeras descargas, descargas repetidas, tasa de conversión, impresiones) y errores por versión de la app.
          </p>
        </div>

        <!-- Validación: eliminado - testimonios genéricos reemplazados por métricas de testing -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-extrabold text-highlight tracking-tight tabular-nums mb-2">12</span>
            <p class="text-sm font-bold text-midnight mb-1">Usuarios en crisis simuladas</p>
            <p class="text-xs text-body leading-relaxed">Validación con viajeros reales en escenarios de emergencia.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-extrabold text-highlight tracking-tight tabular-nums mb-2">4.5<span class="text-lg font-bold text-body">/6</span></span>
            <p class="text-sm font-bold text-midnight mb-1">Pasos recordados sin ayuda</p>
            <p class="text-xs text-body leading-relaxed">De 1.2 a 4.5 de 6 pasos memorizados.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-extrabold text-highlight tracking-tight tabular-nums mb-2">+90%</span>
            <p class="text-sm font-bold text-midnight mb-1">Claridad del proceso</p>
            <p class="text-xs text-body leading-relaxed">Usuarios saben qué pasa después al abrir la app.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. RIGOR DEL PROYECTO (colapsable) -->
    <section class="case-section section-alt">
      <div class="max-w-5xl mx-auto px-6">
        <div class="section-header fade-in mb-8 text-center">
          <span class="section-number">07</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Lo que aprendimos en el camino</h2>
          <p class="section-intro">5 meses de iteraciones, pruebas y errores que documentaron el rediseño.</p>
        </div>

        <DetrasDeEscena title="Lecciones, errores y decisiones intermedias">
          <div class="space-y-8">
            <div>
              <h4 class="text-sm font-bold uppercase tracking-widest text-midnight mb-4">4 aprendizajes clave</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-surface p-5 rounded-2xl">
                  <span class="text-xs font-bold text-primary uppercase tracking-widest">01</span>
                  <p class="text-sm text-slate-700 leading-relaxed mt-2"><strong>El contexto define el diseño.</strong> Las urgencias se resuelven desde el móvil. Priorizar el botón de emergencia fue lo más impactante.</p>
                </div>
                <div class="bg-surface p-5 rounded-2xl">
                  <span class="text-xs font-bold text-primary uppercase tracking-widest">02</span>
                  <p class="text-sm text-slate-700 leading-relaxed mt-2"><strong>Transparencia anticipa preguntas.</strong> Dashboard que respondía dudas antes de que surgieran. Bajamos 40% las llamadas a soporte.</p>
                </div>
                <div class="bg-surface p-5 rounded-2xl">
                  <span class="text-xs font-bold text-primary uppercase tracking-widest">03</span>
                  <p class="text-sm text-slate-700 leading-relaxed mt-2"><strong>Menos features, más impacto.</strong> De 8 features priorizadas a 3 flujos core. Esas 3 cubren el 90% del uso real.</p>
                </div>
                <div class="bg-surface p-5 rounded-2xl">
                  <span class="text-xs font-bold text-primary uppercase tracking-widest">04</span>
                  <p class="text-sm text-slate-700 leading-relaxed mt-2"><strong>Documentación elimina ambigüedad.</strong> Prototipos HD y specs claras antes de cada sprint aceleraron la entrega.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-sm font-bold uppercase tracking-widest text-midnight mb-4">Lo que probamos primero y descartamos</h4>
              <ul class="space-y-2 text-sm text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5 font-bold">✗</span>
                  <span><strong>Más onboarding:</strong> Más educación = más fricción. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5 font-bold">✗</span>
                  <span><strong>Modal de confirmación:</strong> Fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5 font-bold">✗</span>
                  <span><strong>Carousel de productos:</strong> Cancelaban compras al verlo. Lo quitamos.</span>
                </li>
              </ul>
            </div>

            <div class="text-xs text-slate-400 italic border-t border-borderline pt-4">
              <p><strong>Detalle técnico:</strong> 18 entrevistas con viajeras reales. Tests de usabilidad con 12 usuarios en escenarios de emergencia. Métricas validadas con Mixpanel + Firebase Crashlytics.</p>
            </div>
          </div>
        </DetrasDeEscena>
      </div>
    </section>

    <!-- Case Navigation -->
    <nav class="py-20 md:py-24 border-t border-borderline">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header mb-10">
          <span class="section-number">Continúa explorando</span>
          <h2 class="font-display text-2xl md:text-3xl font-bold tracking-tight text-midnight mb-3">Más casos de estudio</h2>
          <p class="section-intro">Cada proyecto documenta el problema, las decisiones de diseño y el impacto medible.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RouterLink to="/contacto" class="group flex items-center justify-between bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Conversemos</span>
              <h4 class="text-lg font-bold text-midnight group-hover:text-secondary transition-colors">Contacto</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowRight :size="20" />
            </div>
          </RouterLink>
          <RouterLink to="/ecommerce" class="group flex items-center justify-between bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Siguiente caso</span>
              <h4 class="text-lg font-bold text-midnight group-hover:text-secondary transition-colors">Checkout +4x</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowRight :size="20" />
            </div>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import CaseStudyHero from '@/components/case-study/CaseStudyHero.vue'
import DetrasDeEscena from '@/components/case-study/DetrasDeEscena.vue'
import heroAppImg from '/public/assets/images/home/hero-app-full.jpg'
import {
  Layers, GitBranch, ClipboardList, ShieldOff, Smartphone, Package,
  CreditCard, ChevronRight, ArrowRight, ArrowLeft, CheckCircle, MapPin,
  MessageSquare, Mail, Lightbulb, Eye, ListOrdered, Plane, Globe,
  Split, Bug, TrendingDown, UserX, Calendar,
  Wallet, Crown, MessageCircle, Bell, Home, HeartPulse,
  Gift, User, Rocket, FileText, Receipt, Siren, Zap, ShieldCheck
} from 'lucide-vue-next'

useScrollAnimations()
</script>
