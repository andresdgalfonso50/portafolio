<template>
  <div class="view-wrapper">
    <!-- 1. HERO SECTION -->
    <AuroraBg variant="hero" class="case-hero section app-hero">
  <div class="w-full max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div class="lg:col-span-7 flex flex-col items-start">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>
          <span class="text-xs font-bold text-violet-600 uppercase tracking-widest">Diseño de Producto</span>
        </div>
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-950 mb-6">
          App de asistencia en viajes: de
          <span class="font-light italic text-violet-600">concepto</span>
          a
          <span class="text-gradient-violet">producción</span>
        </h1>
        <span class="inline-block px-4 py-1.5 bg-violet-600 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-glow-violet">
          Continental Assist
        </span>
      </div>

      <div class="lg:col-span-5 flex flex-col mt-4 lg:mt-0 lg:border-l border-slate-200 lg:pl-10">
        <p class="text-xl text-slate-600 leading-relaxed mb-10 drop-cap">
          De 97% de abandono a 2 apps en producción. Una experiencia que los viajeros usan.
        </p>

        <div class="grid grid-cols-2 gap-x-6 gap-y-8">
          <div>
            <span class="block text-xl font-bold text-slate-950">Product Designer</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">Mi Rol</span>
          </div>
          <div>
            <span class="block text-xl font-bold text-slate-950">5 Meses</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">Duración</span>
          </div>
          <div>
            <span class="block text-xl font-bold text-slate-950">PM + 2 Devs</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">Equipo</span>
          </div>
          <div>
            <span class="block text-xl font-black text-emerald-600">+35% Activación</span>
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">Impacto</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-visual fade-in stagger-2 mt-12 relative z-10">
    <img src="/assets/images/app/hero-app-lifestyle.jpg" alt="App mobile moderna con interfaz premium" width="1400" height="800" fetchpriority="high" decoding="async">
  </div>
</AuroraBg>

    <!-- 3. EL PROBLEMA (ANTES) -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Por qué nadie usaba la app</h2>
          <p class="section-intro">Identifiqué 5 barreras de adopción mediante investigación con usuarios.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <TrendingDown :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Retención casi nula</h3>
            <p class="text-sm text-slate-600 leading-relaxed">1.5% día 1. 0.1% día 7. Nadie volvía.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Bug :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Errores críticos en iOS</h3>
            <p class="text-sm text-slate-600 leading-relaxed">997 errores en versión 2.2.1. App inestable.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Split :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Servicios dispersos</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Asistencia, wallet y telemedicina en silos sin conexión entre sí.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <UserX :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Sin adopción</h3>
            <p class="text-sm text-slate-600 leading-relaxed">No resolvía necesidades reales. Preferían canales tradicionales.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Smartphone :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Experiencia desktop-first</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Adaptación mobile, no experiencia nativa de viaje.</p>
          </div>
        </div>

<!-- UI Antes -->
        <div class="ui-comparison fade-in stagger-2 mt-12">
          <div class="ui-label">
            <span class="ui-label-badge">APP ANTERIOR</span>
          </div>

          <!-- Phones: larger, full-bleed on its own row -->
          <div class="ui-image-wrapper relative mt-8 max-w-5xl mx-auto">
            <img
              src="/assets/images/app/app-before.png"
              alt="Comparación UI app antes y después"
              class="w-full h-auto rounded-2xl"
              loading="lazy"
              decoding="async"
            >
          </div>

          <!-- Observations moved below for more breathing room -->
          <div class="ui-observations grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
            <div class="observation-item flex gap-4 bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base shrink-0">1</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-slate-900 mb-1">Navegación confusa</h4>
                <p class="text-sm text-slate-600">Usuarios perdidos. Sin jerarquía.</p>
              </div>
            </div>
            <div class="observation-item flex gap-4 bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base shrink-0">2</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-slate-900 mb-1">Sin feedback de estados</h4>
                <p class="text-sm text-slate-600">Sin transparencia en vouchers ni coberturas.</p>
              </div>
            </div>
            <div class="observation-item flex gap-4 bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div class="observation-number w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base shrink-0">3</div>
              <div class="observation-text">
                <h4 class="text-base font-bold text-slate-900 mb-1">Interfaz genérica</h4>
                <p class="text-sm text-slate-600">Sin confianza ni diferenciación.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. RESEARCH & INSIGHTS -->
    <section class="w-full bg-slate-50 py-24 border-y border-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <section class="case-section">
          <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Investigación y hallazgos</h2>
          <p class="section-intro">Los datos revelaron por qué los usuarios no volvían.</p>
        </div>

        <!-- Datos clave compactados -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-slate-900 block">97%</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest">Abandono Día 7</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-slate-900 block">997</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest">Errores iOS</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-slate-900 block">1.5%</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest">Retención Día 1</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <span class="text-2xl font-black text-slate-900 block">0.1%</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest">Retención Día 7</span>
          </div>
        </div>

        <!-- Perfiles de Usuario compactos -->
        <div class="section-header fade-in mb-6">
          <span class="section-number">02b</span>
          <h2 class="font-display text-xl font-bold tracking-tight text-slate-950 mb-6">Perfiles de Usuario</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0 text-sm">LM</div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Laura Méndez - Viajera Frecuente</h4>
              <p class="text-xs text-slate-500 mt-1">Necesita: Acceso rápido a beneficios VIP y procesos sin fricción.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 text-sm">RT</div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Ricardo Torres - Ejecutivo</h4>
              <p class="text-xs text-slate-500 mt-1">Necesita: Mantener eficiencia, soporte confiable y respuestas rápidas.</p>
            </div>
          </div>
        </div>

        <!-- Insights (Premium) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-2">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
            <p class="text-sm text-slate-700 leading-relaxed">La app no resolvía necesidades reales de viaje.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
            <p class="text-sm text-slate-700 leading-relaxed">997 errores iOS. Estabilidad era prerequisito, no diferenciador.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
            <p class="text-sm text-slate-700 leading-relaxed">Personalización por contexto aumenta engagement.</p>
          </div>
        </div>
      </section>
    </div>
    </section>

    <!-- 5. BENCHMARK -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Benchmark Competitivo</h2>
          <p class="section-intro">Analicé 4 líderes del sector travel para identificar patrones ganadores.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <Plane :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Avianca</h3>
            <p class="text-sm text-slate-600 mb-3">Navegación intuitiva.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> La navegación inferior persistente es el estándar de la industria travel.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <CreditCard :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Lifemiles</h3>
            <p class="text-sm text-slate-600 mb-3">Transparencia de estados.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> Los usuarios necesitan saber exactamente el estado de sus beneficios.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <Calendar :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Booking</h3>
            <p class="text-sm text-slate-600 mb-3">Diseño limpio y minimalista.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> Menos es más: interfaces claras reducen la carga cognitiva.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <Globe :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Despegar</h3>
            <p class="text-sm text-slate-600 mb-3">Flujos de cotización claros.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> Los procesos deben ser lineales y mostrar progreso visible.</p>
          </div>
        </div>

        <div class="conclusion-box fade-in mt-8 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-3">
            <Lightbulb :size="18" class="text-blue-600 mt-0.5 shrink-0" />
            <p class="text-sm text-slate-700"><strong>Conclusión:</strong> Navegación persistente + transparencia total + diseño minimalista = confianza y adopción.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. ESTRATEGIA -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Estrategia</h2>
          <p class="section-intro">4 principios que gobernaron cada decisión de diseño.</p>
        </div>

        <div class="strategy-grid fade-in stagger-1">
          <div class="strategy-objective p-8 bg-slate-900 rounded-xl mb-10">
            <span class="strategy-badge text-xs font-bold uppercase tracking-widest px-2 py-1 bg-blue-600 text-white rounded-full mb-4 inline-block">Objetivo</span>
            <h3 class="text-xl font-bold text-white mb-2">De app ignorada a herramienta esencial de viaje</h3>
            <p class="text-sm text-slate-400">2 apps en producción con 25% retención día 1.</p>
          </div>

          <div class="principles-list">
            <h4 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Principios aplicados</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="principle-mini p-4 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Smartphone :size="18" class="text-blue-600 mb-2" />
                <span class="text-sm font-semibold text-slate-900 block">Mobile-first</span>
                <span class="text-xs text-slate-500">El contexto donde ocurre la urgencia es el punto de partida para cada decisión.</span>
              </div>
              <div class="principle-mini p-4 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Eye :size="18" class="text-blue-600 mb-2" />
                <span class="text-sm font-semibold text-slate-900 block">Claridad > Estética</span>
                <span class="text-xs text-slate-500">Interfaces limpias que reducen carga cognitiva en momentos de estrés.</span>
              </div>
              <div class="principle-mini p-4 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Zap :size="18" class="text-blue-600 mb-2" />
                <span class="text-sm font-semibold text-slate-900 block">Velocidad = Confianza</span>
                <span class="text-xs text-slate-500">Respuesta inmediata elimina la incertidumbre del usuario en crisis.</span>
              </div>
              <div class="principle-mini p-4 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <ShieldCheck :size="18" class="text-blue-600 mb-2" />
                <span class="text-sm font-semibold text-slate-900 block">Confianza visual</span>
                <span class="text-xs text-slate-500">Estética profesional que transmite seguridad y legitimidad al usuario.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ARQUITECTURA DE INFORMACIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Arquitectura de Información</h2>
          <p class="section-intro">5 tabs. Acceso a emergencia en 1 tap.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 md:gap-10 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-12">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Home :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Inicio</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><HeartPulse :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Asistencia</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Gift :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Beneficios</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Wallet :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Wallet</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><User :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Perfil</span>
          </div>
        </div>

        <div class="section-header fade-in mb-6">
          <span class="section-number">05b</span>
          <h2 class="font-display text-xl font-bold tracking-tight text-slate-950 mb-6">User Flows Principales</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><Rocket :size="16" class="inline mr-2 text-blue-600" />Onboarding → Activación</h4>
            <p class="text-xs text-slate-600">Login → Ver beneficios activos → Activar servicios automáticamente. Elimina fricción desde el primer uso.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><FileText :size="16" class="inline mr-2 text-blue-600" />Consulta de Vouchers</h4>
            <p class="text-xs text-slate-600">Wallet → Seleccionar plan → Ver vouchers y coberturas vigentes. Todo en 3 taps.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><Receipt :size="16" class="inline mr-2 text-blue-600" />Solicitud de Reembolso</h4>
            <p class="text-xs text-slate-600">Perfil → Reembolsos → Nueva solicitud → Subir documentación → Seguir estado. Proceso transparente.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><Siren :size="16" class="inline mr-2 text-blue-600" />Acceso a Emergencias</h4>
            <p class="text-xs text-slate-600">Tap en Emergency → Confirmar ubicación → Contacto inmediato con asistencia. Sin fricción en crisis.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. DESIGN SYSTEM -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Design System</h2>
          <p class="section-intro">Componentes que aceleraron el desarrollo en 30%.</p>
        </div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-slate-900 mb-1">Tipografía</h3>
            <p class="text-xs text-slate-600">Galano Grotesque + Inter. Claridad y jerarquía visual para contextos de alta presión.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-slate-900 mb-1">Espaciado</h3>
            <p class="text-xs text-slate-600">Sistema de 8px. Consistencia visual en toda la interfaz para reducir carga cognitiva.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-slate-900 mb-1">Bordes</h3>
            <p class="text-xs text-slate-600">Radius 16px. Suavidad visual que transmite calma en contextos de urgencia.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 class="text-sm font-bold text-slate-900 mb-1">Sombras</h3>
            <p class="text-xs text-slate-600">3 niveles de profundidad. Jerarquía clara para orientar la atención del usuario.</p>
          </div>
</div>

        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Paleta de Color</h3>
        <div class="flex flex-wrap gap-6 md:gap-8 mb-12">
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #1f3a7a;"></div>
            <span class="text-xs font-bold text-slate-900">Primary</span>
            <span class="text-xs text-slate-500">#1F3A7A</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #3b82f6;"></div>
            <span class="text-xs font-bold text-slate-900">Accent</span>
            <span class="text-xs text-slate-500">#3B82F6</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #10b981;"></div>
            <span class="text-xs font-bold text-slate-900">Success</span>
            <span class="text-xs text-slate-500">#10B981</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #f59e0b;"></div>
            <span class="text-xs font-bold text-slate-900">Warning</span>
            <span class="text-xs text-slate-500">#F59E0B</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #ef4444;"></div>
            <span class="text-xs font-bold text-slate-900">Error</span>
            <span class="text-xs text-slate-500">#EF4444</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm" style="background-color: #0f172a;"></div>
            <span class="text-xs font-bold text-slate-900">Dark</span>
            <span class="text-xs text-slate-500">#0F172A</span>
          </div>
        </div>

        <h3 class="text-sm font-bold text-slate-900 mb-4">Componentes, Tokens & Escalabilidad</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center text-xs font-semibold text-slate-600">Botones & Estados</div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center text-xs font-semibold text-slate-600">Inputs & Validaciones</div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center text-xs font-semibold text-slate-600">Grid & Responsive</div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center text-xs font-semibold text-slate-600">Accesibilidad (a11y)</div>
        </div>
      </div>
    </section>

    <!-- 9. LA SOLUCIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">07</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">La Solución</h2>
          <p class="section-intro">4 features nativas. Retención día 1: 1.5% → 25%.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Soporte-con-IA-Generativa.png" alt="Chat de soporte" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Soporte con IA Generativa</h4>
              <p class="text-xs text-slate-600">Asistente virtual 24/7 que resuelve dudas complejas en segundos.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Gestión-de-Viajes-Premium.png" alt="Pantalla de inicio" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Gestión de Viajes Premium</h4>
              <p class="text-xs text-slate-600">Vouchers, coberturas y beneficios en tiempo real.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Emergencias-24-7.png" alt="Wallet de beneficios" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Emergencias 24/7</h4>
              <p class="text-xs text-slate-600">Soporte geolocalizado para situaciones críticas.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Flujo-de-Cotización-Optimizado.png" alt="Cotizador" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Flujo de Cotización Optimizado</h4>
              <p class="text-xs text-slate-600">Proceso intuitivo de 4 pasos que aumentó la conversión.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/app/Ecosistema-de-Beneficios-Premium.png" alt="Ecosistema de beneficios" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Ecosistema de Beneficios Premium</h4>
              <p class="text-xs text-slate-600">Integración de partners (Avis, Holafly, rxless) para añadir valor real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. FUNCIONALIDADES CORE -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">08</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Funcionalidades Core</h2>
          <p class="section-intro">4 features. Cubren el 90% del uso real.</p>
        </div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px/30px_rgb(0,0,0,0.04)]">
            <Wallet :size="20" class="text-blue-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Wallet Digital</h4>
            <p class="text-xs text-slate-600">Vouchers, coberturas y beneficios en un solo lugar. Sin buscar en múltiples sitios.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px/30px_rgb(0,0,0,0.04)]">
            <Crown :size="20" class="text-blue-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Xentral Pass</h4>
            <p class="text-xs text-slate-600">Acceso a salas VIP por retrasos de vuelo. Beneficio tangible sin fricción.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px/30px_rgb(0,0,0,0.04)]">
            <Stethoscope :size="20" class="text-blue-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Telemedicina 24/7</h4>
            <p class="text-xs text-slate-600">Asistencia médica online inmediata. Resuelve antes de que escalada.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px/30px_rgb(0,0,0,0.04)]">
            <MessageCircle :size="20" class="text-blue-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Chat de Soporte</h4>
            <p class="text-xs text-slate-600">Genesys integration para atención humana o automatizada según urgencia.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px/30px_rgb(0,0,0,0.04)]">
            <Bell :size="20" class="text-blue-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Notificaciones Inteligentes</h4>
            <p class="text-xs text-slate-600">Alertas de vuelos y recordatorios de activación. Mantiene al usuario activo.</p>
          </div>
</div>
      </div>
    </section>

    <!-- 11. ANTES VS DESPUÉS -->
    <section class="w-full bg-black py-24 border-y border-slate-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number text-white">09</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">Evolución de la UI</h2>
          <p class="text-lg text-slate-400">Antes y después de la experiencia.</p>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <div class="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Antes
          </div>

          <div class="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="/assets/images/app/mockup-app-comparacion.png" alt="Comparativa de Evolución UI" class="w-full h-auto object-cover" />
          </div>

          <div class="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Después
          </div>
        </div>
      </div>
    </section>

    <!-- 12. IMPACTO - RESULTS THAT MATTER -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-20">
        <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 block">12</span>
        <h2 class="text-4xl md:text-5xl font-display font-extrabold text-slate-950 tracking-tight mb-4">Impacto</h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">Los resultados validaron la estrategia de diseño.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">

        <!-- METRIC 1: RETENCIÓN DÍA 1 -->
        <div class="metric-card group">
          <div class="flex items-center gap-4 mb-6">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Antes</span>
              <span class="font-display text-xl font-medium text-slate-300 tracking-tight tabular-nums leading-none">1.5%</span>
            </div>
            <svg class="w-6 h-6 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Después</span>
              <span class="font-display text-4xl md:text-5xl font-black text-slate-950 tracking-tighter tabular-nums leading-none">25%</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
              +23.5pp
            </span>
            <span class="text-xs font-medium text-slate-400">16x más</span>
          </div>

          <h3 class="text-base font-semibold text-slate-950 mb-1">Retención Día 1</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Crecimiento exponencial en adopción inicial.</p>
        </div>

        <!-- METRIC 2: RETENCIÓN DÍA 7 -->
        <div class="metric-card group md:border-l md:border-slate-200 md:pl-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Antes</span>
              <span class="font-display text-xl font-medium text-slate-300 tracking-tight tabular-nums leading-none">0.1%</span>
            </div>
            <svg class="w-6 h-6 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Después</span>
              <span class="font-display text-4xl md:text-5xl font-black text-slate-950 tracking-tighter tabular-nums leading-none">12%</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
              +11.9pp
            </span>
            <span class="text-xs font-medium text-slate-400">120x más</span>
          </div>

          <h3 class="text-base font-semibold text-slate-950 mb-1">Retención Día 7</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Mejora drástica en engagement sostenido.</p>
        </div>

        <!-- METRIC 3: ERRORES iOS -->
        <div class="metric-card group md:border-l md:border-slate-200 md:pl-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Antes</span>
              <span class="font-display text-xl font-medium text-slate-300 tracking-tight tabular-nums leading-none">997</span>
            </div>
            <svg class="w-6 h-6 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Después</span>
              <span class="font-display text-4xl md:text-5xl font-black text-slate-950 tracking-tighter tabular-nums leading-none">0</span>
            </div>
          </div>

          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
              -100%
            </span>
            <span class="text-xs font-medium text-slate-400">estable</span>
          </div>

          <h3 class="text-base font-semibold text-slate-950 mb-1">Errores iOS</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Crashes críticos eliminados por completo.</p>
        </div>

      </div>
    </section>

    <!-- 13. VALIDACIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">10</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Validación con Usuarios</h2>
          <p class="section-intro">Tests de usabilidad validaron la nueva experiencia.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Por fin puedo ver todos mis beneficios en un solo lugar. Antes tenía que entrar a 3 páginas diferentes."</p>
              <cite class="text-xs font-semibold text-slate-500">— Laura M., Viajera Frecuente</cite>
            </blockquote>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"El botón de emergencia es lo que más valoro. Sé que si algo pasa, tengo ayuda inmediata."</p>
              <cite class="text-xs font-semibold text-slate-500">— Ricardo T., Ejecutivo Corporativo</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. LEARNINGS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">11</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Lo que aprendí</h2>
          <p class="section-intro">4 lecciones del proyecto.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>El contexto define el diseño.</strong> No era mal diseño: necesitaban resolver urgencias desde el móvil. Priorizar emergencia fue lo más impactante.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Transparencia anticipa preguntas.</strong> Dashboard que respondía dudas antes de que surgieran. -40% llamadas de soporte.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Menos features, más impacto.</strong> De 8 features a 3 flows core. 90% del uso real.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Documentación elimina ambigüedad.</strong> Prototipos HD y specs claras antes de cada sprint.</p>
          </div>
        </div>

        <!-- Lo que no funcionó -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-rose-50/50 border border-rose-100 rounded-[2rem] p-8 md:p-10 mb-16">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <XCircle :size="18" class="text-rose-600" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900 mb-3">Lo que intentamos y no funcionó</h4>
              <ul class="space-y-2 text-lg text-slate-800">
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Más onboarding:</strong> Más educación = más fricción. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Modal de confirmación:</strong> Agregaba fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Productos relacionados en checkout:</strong> Cancelaban compras al ver el carousel. Lo quitamos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 15. NEXT STEPS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">12</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Siguientes pasos</h2>
          <p class="section-intro">3 sprints: features, testing, métricas post-lanzamiento.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BarChart2 :size="20" class="text-slate-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Métricas Post-lanzamiento</h4>
            <p class="text-xs text-slate-600">Medir retención, engagement y satisfacción después del launch.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserCheck :size="20" class="text-slate-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Testing con Usuarios</h4>
            <p class="text-xs text-slate-600">Validar flujos críticos con usuarios reales en contexto de viaje.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Layers :size="20" class="text-slate-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Iteración de Features</h4>
            <p class="text-xs text-slate-600">Priorizar mejoras según datos de uso y feedback.</p>
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
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-full shadow-glow-violet-lg hover:shadow-glow-violet hover:bg-violet-500 hover:scale-[1.02] transition-all duration-200"
          >
            Iniciar conversación
          </router-link>
          <router-link
            to="/ecommerce"
            class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
          >
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
import {
  Layers,
  GitBranch,
  ClipboardList,
  ShieldOff,
  Smartphone,
  Package,
  CreditCard,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MapPin,
  MessageSquare,
  Mail,
  Lightbulb,
  Eye,
  ListOrdered,
  Plane,
  Globe,
  Split,
  UserCheck,
  XCircle,
  Bug,
  TrendingDown,
  UserX,
  Calendar,
  Wallet,
  Crown,
  Stethoscope,
  MessageCircle,
  Bell,
  Home,
  HeartPulse,
  Gift,
  User,
  Rocket,
  FileText,
  Receipt,
  Siren,
  Zap,
  ShieldCheck,
  BarChart2
} from 'lucide-vue-next'

useScrollAnimations()
</script>

<style scoped>
.metric-card {
  position: relative;
  background: transparent !important;
  border: 0 !important;
  padding: 24px 0 !important;
  border-radius: 0 !important;
  transition: transform 0.2s ease-out;
}

.metric-card:hover {
  transform: translateY(-2px);
}

/* Subtle accent line that appears on hover */
.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  transition: width 0.3s ease-out;
}

.metric-card:hover::before {
  width: 48px;
}

@media (max-width: 768px) {
  .metric-card {
    padding-bottom: 32px !important;
    border-bottom: 1px solid rgb(226 232 240) !important;
  }

  .metric-card:last-child {
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }

  .metric-card::before {
    display: none;
  }
}
</style>
