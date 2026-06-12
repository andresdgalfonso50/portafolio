<template>
  <div class="view-wrapper">
    <!-- 1. HERO SECTION -->
    <AuroraBg variant="hero" class="case-hero section xentral-hero">
      <div class="max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center fade-in">
          <!-- Column 1: Copy (7 cols) -->
          <div class="lg:col-span-7 flex flex-col items-start">
            <div class="flex items-center gap-2 mb-6">
              <HeartPulse class="w-5 h-5 text-primary" :size="20" />
              <span class="text-xs font-bold text-primary uppercase tracking-widest">Caso de estudio</span>
            </div>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-6">
              <span class="font-light italic text-primary">Telemedicina</span>
              <span class="text-midnight"> de alta velocidad.</span>
            </h1>
            <span class="inline-block px-4 py-1.5 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-glow-primary mb-8">
              Health Tech
            </span>
          <p class="text-lg md:text-xl text-body leading-relaxed max-w-xl">
            5 min → 2 min entre crisis y atención. Plataforma web para crisis reales.
          </p>
          </div>

          <!-- Column 2: Visual placeholder (5 cols) -->
          <div class="lg:col-span-5 hero-visual-wrapper">
            <div class="hero-mockup-placeholder rounded-3xl border border-borderline/60 bg-surface aspect-[4/3] flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)]">
              <div class="text-center px-8">
                <div class="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <HeartPulse :size="24" />
                </div>
                <p class="text-xs font-bold text-body uppercase tracking-widest">Product Mockup</p>
                <p class="text-sm text-body mt-1">Telemedicina interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <!-- METADATA -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-borderline">
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-midnight">Product Designer</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest mt-1">Mi Rol</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-midnight">6 Semanas</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest mt-1">Duración</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-midnight">3 Devs + 1 PM</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest mt-1">Equipo</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-black text-primary">-60% Tiempo</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest mt-1">Impacto</span>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- 3. LA SITUACIÓN CRÍTICA -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="stakes-box fade-in p-8 md:p-10 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2 block">La situación era crítica</span>
              <h3 class="text-xl md:text-2xl font-bold text-midnight mb-3">Un viajero enfermo. En el extranjero. Sin atención.</h3>
              <p class="text-sm text-body leading-relaxed">Viajero en París con fiebre, sin hablar el idioma, sin saber a dónde ir. <strong class="text-midnight">Cada minuto empeoraba la situación.</strong> 6 semanas para crear la solución.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. EL PROBLEMA -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 barreras. 5 min entre vida y muerte.</h2>
          <p class="section-intro">Lo que enfrenta un viajero enfermo en el extranjero.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <MapPin :size="22" />
            </div>
            <h3 class="text-lg font-bold text-midnight mb-2">No sabe a dónde acudir</h3>
            <p class="text-sm text-body leading-relaxed">Desconoce opciones médicas locales y no tiene referencias confiables.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <ShieldOff :size="22" />
            </div>
            <h3 class="text-lg font-bold text-midnight mb-2">Desconoce su cobertura</h3>
            <p class="text-sm text-body leading-relaxed">No sabe qué servicios tiene disponibles ni cómo acceder a ellos.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Languages :size="22" />
            </div>
            <h3 class="text-lg font-bold text-midnight mb-2">Barreras de idioma</h3>
            <p class="text-sm text-body leading-relaxed">Dificultad para comunicarse en otro país con personal médico.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Clock :size="22" />
            </div>
            <h3 class="text-lg font-bold text-midnight mb-2">Pierde tiempo valioso</h3>
            <p class="text-sm text-body leading-relaxed">Buscando soluciones sin guía clara mientras los síntomas progresan.</p>
          </div>
        </div>

        <div class="insight-box fade-in mt-8 bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-3">
            <MessageSquare :size="18" class="text-secondary mt-0.5 shrink-0" />
            <p class="text-sm text-slate-700"><strong>Pregunta de diseño:</strong> ¿Cómo podríamos facilitar el acceso rápido y confiable a atención médica remota en momentos de incertidumbre?</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. RESEARCH -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">3 arquetipos, 1 plataforma</h2>
          <p class="section-intro">Viajeros, coordinadores y médicos con necesidades opuestas.</p>
        </div>

        <!-- Perfiles: 3 roles -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0 text-sm"><Plane :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Paciente — Viajero</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Usuario Cliente</p>
              <p class="text-xs text-body mt-1">Vulnerable, sin acceso, necesita atención médica inmediata sin fricción de login.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0 text-sm"><Stethoscope :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Médico — Doctor</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Atención clínica</p>
              <p class="text-xs text-body mt-1">Enfocado en atender. Gestiona su agenda y consultas con información clara del paciente.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start relative">
            <span class="absolute -top-2 right-4 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Clave</span>
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0 text-sm"><UserCog :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Coordinador Médico</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Superusuario</p>
              <p class="text-xs text-body mt-1">Supervisa operaciones, asigna turnos, edita agendas y extrae reportes de rendimiento.</p>
            </div>
          </div>
        </div>

        <!-- Aha Moment: el verdadero motor -->
        <div class="aha-moment fade-in bg-midnight text-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
              <Lightbulb :size="18" class="text-white" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-secondary mb-1 block">El momento "aha"</span>
              <h4 class="text-lg font-bold text-white mb-2">El verdadero motor era el Coordinador Médico</h4>
              <p class="text-sm text-slate-300 leading-relaxed">"Pensábamos que el diseño se centraría casi exclusivamente en el paciente, pero la investigación reveló que el verdadero motor y cuello de botella del servicio era el Coordinador Médico. Si su interfaz no era hiper-eficiente para gestionar datos masivos, agendas y reportes, el servicio colapsaba."</p>
            </div>
          </div>
        </div>

        <!-- Insights compactados (Premium) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-2">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
            <p class="text-sm text-slate-700 leading-relaxed">En crisis, cada segundo cuenta. -60% tiempo de respuesta.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
            <p class="text-sm text-slate-700 leading-relaxed">El Coordinador Médico es el cuello de botella operativo del servicio.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
            <p class="text-sm text-slate-700 leading-relaxed">Claridad reduce ansiedad más que velocidad en momentos críticos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. ARQUITECTURA DE INFORMACIÓN -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">3 roles, 1 arquitectura</h2>
          <p class="section-intro">Sitemap y user flows para conectar viajero, médico y coordinador.</p>
        </div>

        <!-- Sitemap -->
        <h3 class="text-sm font-bold text-body uppercase tracking-widest mb-6">Sitemap General</h3>
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-12">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Home :size="18" /></div>
            <span class="text-xs font-medium text-body">Inicio</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Video :size="18" /></div>
            <span class="text-xs font-medium text-body">Videollamada</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Calendar :size="18" /></div>
            <span class="text-xs font-medium text-body">Mis Citas</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><FileText :size="18" /></div>
            <span class="text-xs font-medium text-body">Historial</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-secondary/20 rounded-[2.5rem] flex items-center justify-center text-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><UserCog :size="18" /></div>
            <span class="text-xs font-medium text-secondary font-bold">Agendas</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-secondary/20 rounded-[2.5rem] flex items-center justify-center text-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><BarChart2 :size="18" /></div>
            <span class="text-xs font-medium text-secondary font-bold">Reportes</span>
          </div>
        </div>

        <!-- User Flows por rol -->
        <div class="section-header fade-in mb-6">
          <span class="section-number">03b</span>
          <h2 class="font-display text-xl font-bold tracking-tight text-midnight mb-6">User Flows por Rol</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Plane :size="16" class="inline mr-2 text-secondary" />Paciente</h4>
            <p class="text-xs text-body leading-relaxed">Link email → Verificar cobertura → Síntomas → Videollamada → NPS.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Stethoscope :size="16" class="inline mr-2 text-secondary" />Médico</h4>
            <p class="text-xs text-body leading-relaxed">Login → Cola de pacientes → Atender → Notas → Cerrar consulta.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border-2 border-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><UserCog :size="16" class="inline mr-2 text-secondary" />Coordinador</h4>
            <p class="text-xs text-body leading-relaxed">Dashboard → Apertura agendas → Asignar turnos → Editar → Reportes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FLUJO PRINCIPAL -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">5 min → 2 min: el flujo crítico</h2>
          <p class="section-intro">Paso a paso, del síntoma a la atención médica.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">1</span>Acceso a la plataforma</h4>
            <p class="text-xs text-body">Entrada simple y directa al servicio con credenciales del plan.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">2</span>Validación de beneficio</h4>
            <p class="text-xs text-body">Verificación rápida de cobertura médica con indicador claro.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">3</span>Registro de síntomas</h4>
            <p class="text-xs text-body">Selección intuitiva de síntomas actuales con jerarquía clara.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">4</span>Tipo de atención</h4>
            <p class="text-xs text-body">Orientación basada en los síntomas registrados por el usuario.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">5</span>Conexión con médico</h4>
            <p class="text-xs text-body">Llamada o videollamada según preferencia y disponibilidad.</p>
          </div>
          <div class="bg-white p-5 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-midnight text-white rounded-md items-center justify-center text-xs font-bold mr-2">6</span>Recomendaciones + NPS</h4>
            <p class="text-xs text-body">Indicaciones médicas claras, accionables y en el idioma del usuario. Encuesta NPS al cierre.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. DECISIONES DE DISEÑO - BENTO GRID -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">5 decisiones validadas en crisis</h2>
          <p class="section-intro">Cada decisión probada con viajeros en contextos simulados.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Acceso rápido - dark hero, span 2 -->
          <div class="md:col-span-2 bg-midnight rounded-2xl p-8 flex flex-col justify-center">
            <Zap :size="28" class="text-secondary mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">Acceso rápido a atención</h4>
            <p class="text-sm text-slate-400 max-w-lg">Flujo reducido a pasos esenciales para que un viajero enfermo no se pierda en momentos de estrés.</p>
          </div>

          <!-- Claridad -->
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Eye :size="24" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Claridad del beneficio</h4>
            <p class="text-xs text-body">Indicador visible del estado de cobertura para decisiones inmediatas.</p>
          </div>

          <!-- Priorización -->
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ListFilter :size="24" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Priorización por síntomas</h4>
            <p class="text-xs text-body">Sistema que orienta al tipo de atención más adecuada según gravedad.</p>
          </div>

          <!-- Contexto emocional -->
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Heart :size="24" class="text-rose-600 mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Contexto emocional</h4>
            <p class="text-xs text-slate-700">Botones grandes, lenguaje claro, decisiones guiadas para estados de ansiedad.</p>
          </div>

          <!-- NPS dark -->
          <div class="md:col-span-2 bg-midnight rounded-2xl p-8 flex flex-col justify-center">
            <BarChart2 :size="28" class="text-secondary mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">NPS post-consulta</h4>
            <p class="text-sm text-slate-300 max-w-lg">Encuesta de satisfacción al cerrar la videollamada para que el negocio mida la NPS de cada médico en cada consulta.</p>
          </div>
        </div>

        <div class="mt-10">
          <BrowserMockup src="/assets/images/xentral-health/mockup-xentral-comparacion.jpg" alt="Mockup dual - App Viajero y Dashboard Coordinador" />
        </div>
      </div>
    </section>

    <!-- 9. LA SOLUCIÓN -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Tiempo de respuesta: -60%</h2>
          <p class="section-intro">Plataforma web que conecta paciente, médico y coordinador en tiempo real.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Acceso por link único" class="w-full h-auto object-cover" width="2816" height="1536">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Acceso por Link Único</h4>
              <p class="text-xs text-body">El paciente entra a videollamada con 1 clic. 0 contraseñas, 0 registros.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/mockup-xentral-comparacion.jpg" alt="Validación de cobertura" class="w-full h-auto object-cover" width="2816" height="1536">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Validación de Cobertura Visible</h4>
              <p class="text-xs text-body">El usuario ve su plan y servicios disponibles desde el primer paso.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Flujo guiado de síntomas" class="w-full h-auto object-cover" width="2816" height="1536">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Flujo Guiado de Síntomas</h4>
              <p class="text-xs text-body">Selección intuitiva con jerarquía que orienta al tipo de atención adecuado.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/mockup-xentral-comparacion.jpg" alt="Videollamada integrada" class="w-full h-auto object-cover" width="2816" height="1536">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Videollamada Integrada</h4>
              <p class="text-xs text-body">Conexión directa médico-paciente con notas y cierre estructurado.</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border-2 border-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden md:col-span-2 relative">
            <span class="absolute top-4 right-4 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Destacado</span>
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Encuesta NPS post-consulta" class="w-full h-auto object-cover" width="2816" height="1536">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-midnight mb-1">Encuesta NPS Post-consulta</h4>
              <p class="text-xs text-body">NPS por médico, por consulta, en tiempo real. El negocio itera con datos, no con opiniones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. IMPACTO - RAW METRICS -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 block bg-gradient-to-br from-primary via-[#7B61FF] to-secondary bg-clip-text text-transparent">07</span>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-midnight tracking-tight mb-4">Impacto</h2>
        <p class="text-lg text-body">Resultados del rediseño de la experiencia.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-borderline py-16 w-full max-w-6xl mx-auto mt-16 border border-borderline rounded-[2.5rem] bg-surface shadow-inner">
        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">-60%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-body uppercase tracking-widest">Tiempo de acceso</h3>
            <p class="text-sm text-slate-400 mt-2">Entre necesidad y atención médica</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">+90%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-body uppercase tracking-widest">Claridad del proceso</h3>
            <p class="text-sm text-slate-400 mt-2">Pasos recordados sin ayuda: 1.2 → 4.5 de 6</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">100%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-body uppercase tracking-widest">Cobertura visible</h3>
            <p class="text-sm text-slate-400 mt-2">Usuario sabe qué servicios tiene</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. VALIDACIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">08</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">NPS +52, validación con 12 usuarios</h2>
          <p class="section-intro">Tests de usabilidad validaron la experiencia en crisis reales.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Por fin sé exactamente qué va a pasar después. Ya no siento que estoy entrando a algo desconocido cuando me siento mal de viaje."</p>
              <cite class="text-xs font-semibold text-body">— Carlos, 42, viajero frecuente</cite>
            </blockquote>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Saber que tengo telemedicina disponible si algo pasa me da tranquilidad. Antes no tenía idea de qué hacer."</p>
              <cite class="text-xs font-semibold text-body">— Ana, 35, viajera crónica</cite>
            </blockquote>
          </div>
          <div class="bg-midnight p-8 md:p-10 rounded-3xl flex flex-col justify-center">
            <BarChart2 :size="28" class="text-secondary mb-4" />
            <h4 class="text-lg font-bold text-white mb-2">Validación continua con NPS</h4>
            <p class="text-sm text-slate-300">Encuesta de satisfacción al cierre de cada videollamada. El negocio mide la calidad de atención médica en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. LEARNINGS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">09</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 lecciones de diseñar para crisis</h2>
          <p class="section-intro">Lo que aprendí sobre tiempo, claridad y decisiones bajo presión.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>En crisis cada segundo cuenta.</strong> Descubrimos que flujo corto no es mejor: en emergencias médicas, los usuarios prefieren ver todas las opciones para sentirse en control. No querían recomendaciones automáticas que no podían confiar.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Claridad mata ansiedad.</strong> Los primeros prototipos tenían 3 pasos para activar telemedicina. Los usuarios testeados nos dijeron que necesitaban ver todos los pasos desde el inicio para sentirse en control. Eso cambió la arquitectura del flujo.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Stakeholders internos importan.</strong> Los médicos que usarían la plataforma tenían objeciones distintas a los pacientes. Identificar ambos grupos desde el inicio previno retrabajo en la arquitectura de información.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>HTML acelera validación.</strong> Crear prototipos clickeables en código sin depender de Figma redujo el ciclo de feedback de días a horas. Los stakeholders podían ver y tocar el flujo antes de construirlo.</p>
          </div>
        </div>

        <!-- Lo que no funcionó -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-rose-50/50 border border-rose-100 rounded-3xl p-8 md:p-10 mb-16">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <XCircle :size="18" class="text-rose-600" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-midnight mb-3">Lo que intentamos y no funcionó</h4>
              <ul class="space-y-2 text-lg text-slate-800">
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Flujo ultracorto:</strong> En crisis, usuarios necesitan ver el mapa completo.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Chatbot primero:</strong> En salud, quieren un humano ya.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Minimalismo extremo:</strong> Botones pequeños no funcionan en estrés. Agrandamos todo +200%.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. NEXT STEPS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">10</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 iteraciones priorizadas</h2>
          <p class="section-intro">Roadmap post-lanzamiento, ordenado por impacto.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BarChart2 :size="20" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Microsoft Clarity</h4>
            <p class="text-xs text-body">Mapas de calor y grabaciones de sesión para entender el comportamiento real.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Activity :size="20" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Iteración NPS</h4>
            <p class="text-xs text-body">Optimizar la experiencia del médico según datos de satisfacción recolectados.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserCheck :size="20" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Testing en contexto real</h4>
            <p class="text-xs text-body">Validar flujos críticos con viajeros reales en el extranjero.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Layers :size="20" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-1">Escalabilidad Multi-país</h4>
            <p class="text-xs text-body">Adaptar la plataforma a nuevos mercados y jurisdicciones regulatorias.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Diseño para
          <span class="text-gradient-mixed">momentos críticos</span>
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          ¿Tu producto opera en crisis? Conversemos.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300"
          >
            Iniciar conversación
          </router-link>
          <router-link
            to="/app-web"
            class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
          >
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Siguiente Caso</span>
              <span class="text-sm font-bold text-white">Xentral Health</span>
            </div>
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
    </AuroraBg>

    <!-- Case Navigation -->
    <nav class="py-16 border-t border-borderline">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RouterLink to="/app" class="group flex items-center justify-between bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Caso anterior</span>
              <h4 class="text-lg font-bold text-midnight group-hover:text-secondary transition-colors">App de Asistencia</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowLeft :size="20" />
            </div>
          </RouterLink>

          <RouterLink to="/contacto" class="group flex items-center justify-between bg-white p-8 md:p-10 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Siguiente caso</span>
              <h4 class="text-lg font-bold text-midnight group-hover:text-secondary transition-colors">Contacto</h4>
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
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import IPhoneMockup from '@/components/IPhoneMockup.vue'
import BrowserMockup from '@/components/BrowserMockup.vue'
import {
  HeartPulse, Plane, Stethoscope, MapPin, ShieldOff, Languages, Clock, MessageSquare,
  Zap, Eye, ListFilter, Heart, ChevronRight, Lightbulb, XCircle, BarChart2, UserCheck, Layers,
  ArrowLeft, ArrowRight, Mail, UserCog, Home, Video, Calendar, FileText, Activity
} from 'lucide-vue-next'

useScrollAnimations()
</script>
