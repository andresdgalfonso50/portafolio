<template>
  <div class="view-wrapper">
    <!-- 1. HERO SECTION -->
    <AuroraBg variant="hero" class="case-hero section xentral-hero">
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="case-hero-balanced-grid">
          <div class="case-header-content fade-in">
            <span class="case-badge text-emerald-600"><HeartPulse :size="14" class="icon-prefix" />Diseño de producto</span>
            <h1 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-950 mb-6">
              <span class="text-emerald-600">Xentral Health</span>:
              Transformando la asistencia médica telefónica en un
              <span class="text-gradient-violet">ecosistema de telemedicina</span>
            </h1>
            <span class="inline-block mt-4 px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-glow-emerald">
              Health Tech
            </span>
            <p class="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl leading-relaxed drop-cap">
              Cada segundo cuenta. Diseñamos para contextos de crisis donde el tiempo es la diferencia.
            </p>
          </div>
          <div class="case-header-visual fade-in stagger-1">
            <HeroFloating src="/assets/images/xentral-health/hero-xentral.jpg" alt="Plataforma de telemedicina moderna" />
          </div>
        </div>

        <!-- METADATA -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200 mt-12 mb-16 w-full max-w-7xl mx-auto">
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">Product Designer</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Mi Rol</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">6 Semanas</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Duración</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">3 Devs + 1 PM</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Equipo</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-black text-emerald-600">-60% Tiempo</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Impacto Principal</span>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- 3. LA SITUACIÓN CRÍTICA -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="stakes-box fade-in p-8 md:p-10 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2 block">La situación era crítica</span>
              <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-3">Un viajero enfermo en el extranjero sin atención inmediata</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Viajero en París con fiebre, sin hablar el idioma, sin saber a dónde ir. <strong class="text-slate-900">Cada minuto empeoraba la situación.</strong> 6 semanas para crear la solución.</p>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">El reto de atenderse en el extranjero</h2>
          <p class="section-intro">4 barreras que enfrenta un viajero al necesitar atención médica urgente.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <MapPin :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">No sabe a dónde acudir</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Desconoce opciones médicas locales y no tiene referencias confiables.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <ShieldOff :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Desconoce su cobertura</h3>
            <p class="text-sm text-slate-600 leading-relaxed">No sabe qué servicios tiene disponibles ni cómo acceder a ellos.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Languages :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Barreras de idioma</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Dificultad para comunicarse en otro país con personal médico.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Clock :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Pierde tiempo valioso</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Buscando soluciones sin guía clara mientras los síntomas progresan.</p>
          </div>
        </div>

        <div class="insight-box fade-in mt-8 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-3">
            <MessageSquare :size="18" class="text-blue-600 mt-0.5 shrink-0" />
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Investigación y usuarios</h2>
          <p class="section-intro">Tres arquetipos con necesidades opuestas guiaron las decisiones de diseño.</p>
        </div>

        <!-- Perfiles: 3 roles -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0 text-sm"><Plane :size="16" /></div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Paciente — Viajero</h4>
              <p class="text-xs text-blue-600 font-semibold uppercase tracking-widest mt-0.5">Usuario Cliente</p>
              <p class="text-xs text-slate-500 mt-1">Vulnerable, sin acceso, necesita atención médica inmediata sin fricción de login.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 text-sm"><Stethoscope :size="16" /></div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Médico — Doctor</h4>
              <p class="text-xs text-emerald-600 font-semibold uppercase tracking-widest mt-0.5">Atención clínica</p>
              <p class="text-xs text-slate-500 mt-1">Enfocado en atender. Gestiona su agenda y consultas con información clara del paciente.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-emerald-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start relative">
            <span class="absolute -top-2 right-4 px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Clave</span>
            <div class="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 text-sm"><UserCog :size="16" /></div>
            <div>
              <h4 class="font-bold text-slate-900 text-sm">Coordinador Médico</h4>
              <p class="text-xs text-emerald-600 font-semibold uppercase tracking-widest mt-0.5">Superusuario</p>
              <p class="text-xs text-slate-500 mt-1">Supervisa operaciones, asigna turnos, edita agendas y extrae reportes de rendimiento.</p>
            </div>
          </div>
        </div>

        <!-- Aha Moment: el verdadero motor -->
        <div class="aha-moment fade-in bg-slate-950 text-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
              <Lightbulb :size="18" class="text-white" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">El momento "aha"</span>
              <h4 class="text-lg font-bold text-white mb-2">El verdadero motor era el Coordinador Médico</h4>
              <p class="text-sm text-slate-300 leading-relaxed">"Pensábamos que el diseño se centraría casi exclusivamente en el paciente, pero la investigación reveló que el verdadero motor y cuello de botella del servicio era el Coordinador Médico. Si su interfaz no era hiper-eficiente para gestionar datos masivos, agendas y reportes, el servicio colapsaba."</p>
            </div>
          </div>
        </div>

        <!-- Insights compactados (Premium) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-2">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
            <p class="text-sm text-slate-700 leading-relaxed">En crisis, cada segundo cuenta. Respuestas inmediatas.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
            <p class="text-sm text-slate-700 leading-relaxed">El Coordinador Médico es el cuello de botella operativo del servicio.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Arquitectura de Información</h2>
          <p class="section-intro">Diseñé sitemap y user flows para los 3 roles del sistema.</p>
        </div>

        <!-- Sitemap -->
        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Sitemap General</h3>
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-12">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Home :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Inicio</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Video :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Videollamada</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><Calendar :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Mis Citas</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center text-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><FileText :size="18" /></div>
            <span class="text-xs font-medium text-slate-600">Historial</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center text-emerald-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><UserCog :size="18" /></div>
            <span class="text-xs font-medium text-emerald-700 font-bold">Agendas</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center text-emerald-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"><BarChart2 :size="18" /></div>
            <span class="text-xs font-medium text-emerald-700 font-bold">Reportes</span>
          </div>
        </div>

        <!-- User Flows por rol -->
        <div class="section-header fade-in mb-6">
          <span class="section-number">03b</span>
          <h2 class="font-display text-xl font-bold tracking-tight text-slate-950 mb-6">User Flows por Rol</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><Plane :size="16" class="inline mr-2 text-blue-600" />Paciente</h4>
            <p class="text-xs text-slate-600 leading-relaxed">Link email → Verificar cobertura → Síntomas → Videollamada → NPS.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><Stethoscope :size="16" class="inline mr-2 text-emerald-600" />Médico</h4>
            <p class="text-xs text-slate-600 leading-relaxed">Login → Cola de pacientes → Atender → Notas → Cerrar consulta.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border-2 border-emerald-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><UserCog :size="16" class="inline mr-2 text-emerald-600" />Coordinador</h4>
            <p class="text-xs text-slate-600 leading-relaxed">Dashboard → Apertura agendas → Asignar turnos → Editar → Reportes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FLUJO PRINCIPAL -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Flujo Principal</h2>
          <p class="section-intro">Flujo guiado paso a paso para reducir el tiempo entre necesidad y atención.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-slate-200 rounded-md items-center justify-center text-xs font-bold mr-2">1</span>Acceso a la plataforma</h4>
            <p class="text-xs text-slate-600">Entrada simple y directa al servicio con credenciales del plan.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-slate-200 rounded-md items-center justify-center text-xs font-bold mr-2">2</span>Validación de beneficio</h4>
            <p class="text-xs text-slate-600">Verificación rápida de cobertura médica con indicador claro.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-slate-200 rounded-md items-center justify-center text-xs font-bold mr-2">3</span>Registro de síntomas</h4>
            <p class="text-xs text-slate-600">Selección intuitiva de síntomas actuales con jerarquía clara.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-slate-200 rounded-md items-center justify-center text-xs font-bold mr-2">4</span>Tipo de atención</h4>
            <p class="text-xs text-slate-600">Orientación basada en los síntomas registrados por el usuario.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-slate-200 rounded-md items-center justify-center text-xs font-bold mr-2">5</span>Conexión con médico</h4>
            <p class="text-xs text-slate-600">Llamada o videollamada según preferencia y disponibilidad.</p>
          </div>
          <div class="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-slate-900 mb-2"><span class="inline-flex w-6 h-6 bg-emerald-200 rounded-md items-center justify-center text-xs font-bold mr-2 text-emerald-800">6</span>Recomendaciones + NPS</h4>
            <p class="text-xs text-slate-600">Indicaciones médicas claras, accionables y en el idioma del usuario. Encuesta NPS al cierre.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. DECISIONES DE DISEÑO - BENTO GRID -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Decisiones de Diseño</h2>
          <p class="section-intro">Cada decisión validada con viajeros en contextos de crisis simulada.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Acceso rápido - dark hero, span 2 -->
          <div class="md:col-span-2 bg-slate-900 rounded-2xl p-8 flex flex-col justify-center">
            <Zap :size="28" class="text-emerald-400 mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">Acceso rápido a atención</h4>
            <p class="text-sm text-slate-400 max-w-lg">Flujo reducido a pasos esenciales para evitar sobrecarga cognitiva en momentos de estrés.</p>
          </div>

          <!-- Claridad -->
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Eye :size="24" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-2">Claridad del beneficio</h4>
            <p class="text-xs text-slate-600">Indicador visible del estado de cobertura para decisiones inmediatas.</p>
          </div>

          <!-- Priorización -->
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ListFilter :size="24" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-2">Priorización por síntomas</h4>
            <p class="text-xs text-slate-600">Sistema que orienta al tipo de atención más adecuada según gravedad.</p>
          </div>

          <!-- Contexto emocional -->
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Heart :size="24" class="text-rose-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-2">Contexto emocional</h4>
            <p class="text-xs text-slate-700">Botones grandes, lenguaje claro, decisiones guiadas para estados de ansiedad.</p>
          </div>

          <!-- NPS dark -->
          <div class="md:col-span-2 bg-emerald-950 rounded-2xl p-8 flex flex-col justify-center">
            <BarChart2 :size="28" class="text-emerald-400 mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">NPS post-consulta</h4>
            <p class="text-sm text-emerald-200/70 max-w-lg">Encuesta de satisfacción al cerrar la videollamada para que el negocio mida la calidad de atención de cada médico en tiempo real.</p>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">La Solución</h2>
          <p class="section-intro">Plataforma web que conecta pacientes, médicos y coordinadores en tiempo real.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Acceso por link único" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Acceso por Link Único</h4>
              <p class="text-xs text-slate-600">Paciente entra a la videollamada con un enlace seguro. Cero fricción, cero contraseñas.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/mockup-xentral-comparacion.jpg" alt="Validación de cobertura" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Validación de Cobertura Visible</h4>
              <p class="text-xs text-slate-600">El usuario ve su plan y servicios disponibles desde el primer paso.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Flujo guiado de síntomas" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Flujo Guiado de Síntomas</h4>
              <p class="text-xs text-slate-600">Selección intuitiva con jerarquía que orienta al tipo de atención adecuado.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/mockup-xentral-comparacion.jpg" alt="Videollamada integrada" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Videollamada Integrada</h4>
              <p class="text-xs text-slate-600">Conexión directa médico-paciente con notas y cierre estructurado.</p>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border-2 border-emerald-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden md:col-span-2 relative">
            <span class="absolute top-4 right-4 px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Destacado</span>
            <div class="overflow-hidden">
              <img src="/assets/images/xentral-health/xentral-dashboard-lifestyle.jpg" alt="Encuesta NPS post-consulta" class="w-full h-auto object-cover">
            </div>
            <div class="p-5">
              <h4 class="text-sm font-bold text-slate-900 mb-1">Encuesta NPS Post-consulta</h4>
              <p class="text-xs text-slate-600">El negocio mide la calidad de atención de cada médico en tiempo real. Permite iterar el servicio según datos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. IMPACTO - RAW METRICS -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 block">07</span>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-4">Impacto</h2>
        <p class="text-lg text-slate-500">Resultados proyectados del rediseño de la experiencia.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-slate-200 py-16 w-full max-w-6xl mx-auto mt-16 border border-slate-100 rounded-[2.5rem] bg-slate-50 shadow-inner">
        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">-60%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Tiempo de acceso</h3>
            <p class="text-sm text-slate-400 mt-2">Entre necesidad y atención médica</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">+90%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Claridad del proceso</h3>
            <p class="text-sm text-slate-400 mt-2">Mejora en la comprensión del flujo</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">100%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Cobertura visible</h3>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Validación con Usuarios</h2>
          <p class="section-intro">Tests de usabilidad validaron la experiencia y confirmaron la necesidad del NPS.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Por fin sé exactamente qué va a pasar después. Ya no siento que estoy entrando a algo desconocido cuando me siento mal de viaje."</p>
              <cite class="text-xs font-semibold text-slate-500">— Carlos, 42 años, empresario</cite>
            </blockquote>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <blockquote>
              <p class="text-sm text-slate-700 leading-relaxed italic mb-3">"Saber que tengo telemedicina disponible si algo pasa me da tranquilidad. Antes no tenía idea de qué hacer."</p>
              <cite class="text-xs font-semibold text-slate-500">— Ana, 35 años, nómada digital</cite>
            </blockquote>
          </div>
          <div class="bg-emerald-950 p-8 md:p-10 rounded-[2rem] flex flex-col justify-center">
            <BarChart2 :size="28" class="text-emerald-400 mb-4" />
            <h4 class="text-lg font-bold text-white mb-2">Validación continua con NPS</h4>
            <p class="text-sm text-emerald-200/70">Encuesta de satisfacción al cierre de cada videollamada. El negocio mide la calidad de atención médica en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. LEARNINGS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">09</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Lo que aprendí</h2>
          <p class="section-intro">Diseñar para crisis en 4 lecciones.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>En crisis cada segundo cuenta.</strong> Descubrimos que flujo corto no es mejor: en emergencias médicas, los usuarios prefieren ver todas las opciones para sentirse en control. No querían recomendaciones automáticas que no podían confiar.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Claridad mata ansiedad.</strong> Los primeros prototipos tenían 3 pasos para activar telemedicina. Los usuarios testeados nos dijeron que necesitaban ver todos los pasos desde el inicio para sentirse en control. Eso cambió la arquitectura del flujo.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Stakeholders internos importan.</strong> Los médicos que usarían la plataforma tenían objeciones distintas a los pacientes. Identificar ambos grupos desde el inicio previno rework en la arquitectura de información.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-slate-200 mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>HTML acelera validación.</strong> Crear prototipos clickeables en código sin depender de Figma redujo el ciclo de feedback de días a horas. Los stakeholders podían ver y tocar el flujo antes de construirlo.</p>
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
                  <span><strong>Flujo ultracorto:</strong> En crisis, usuarios necesitan ver el mapa completo.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Chatbot primero:</strong> En salud, quieren un humano ya.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Minimalismo extremo:</strong> Botones pequeños no funcionan en estrés. Agrandamos todo.</span>
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
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Siguientes pasos</h2>
          <p class="section-intro">4 oportunidades priorizadas para iteración post-lanzamiento.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <BarChart2 :size="20" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Microsoft Clarity</h4>
            <p class="text-xs text-slate-600">Mapas de calor y grabaciones de sesión para entender el comportamiento real.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Activity :size="20" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Iteración NPS</h4>
            <p class="text-xs text-slate-600">Optimizar la experiencia del médico según datos de satisfacción recolectados.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <UserCheck :size="20" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Testing en contexto real</h4>
            <p class="text-xs text-slate-600">Validar flujos críticos con viajeros reales en el extranjero.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Layers :size="20" class="text-emerald-600 mb-3" />
            <h4 class="text-sm font-bold text-slate-900 mb-1">Escalabilidad Multi-país</h4>
            <p class="text-xs text-slate-600">Adaptar la plataforma a nuevos mercados y jurisdicciones regulatorias.</p>
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
          ¿Tu producto salva vidas o segundos? Conversemos sobre UX en contexto de crisis.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-glow-emerald-lg hover:shadow-glow-emerald hover:bg-emerald-500 hover:scale-[1.02] transition-all duration-200"
          >
            Iniciar conversación
          </router-link>
          <router-link
            to="/app-web"
            class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
          >
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Siguiente Caso</span>
              <span class="text-sm font-bold text-white">App Web — Telemedicina</span>
            </div>
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
    </AuroraBg>

    <!-- Case Navigation -->
    <nav class="py-16 border-t border-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RouterLink to="/app" class="group flex items-center justify-between bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Caso anterior</span>
              <h4 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">App de Asistencia</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowLeft :size="20" />
            </div>
          </RouterLink>

          <RouterLink to="/contacto" class="group flex items-center justify-between bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Siguiente caso</span>
              <h4 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Contacto</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
import HeroFloating from '@/components/HeroFloating.vue'
import IPhoneMockup from '@/components/IPhoneMockup.vue'
import BrowserMockup from '@/components/BrowserMockup.vue'
import {
  HeartPulse, Plane, Stethoscope, MapPin, ShieldOff, Languages, Clock, MessageSquare,
  Zap, Eye, ListFilter, Heart, ChevronRight, Lightbulb, XCircle, BarChart2, UserCheck, Layers,
  ArrowLeft, ArrowRight, Mail, UserCog, Home, Video, Calendar, FileText, Activity
} from 'lucide-vue-next'

useScrollAnimations()
</script>
