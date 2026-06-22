<template>
  <div class="view-wrapper">
    <!-- 1. HERO -->
    <CaseStudyHero
      case-slug="xentral"
      :icon="HeartPulse"
      title="Xentral Health"
      highlight="telemedicina de alta velocidad"
      badge="Health Tech"
      subtitle="Diseño para momentos de alta presión: Simplificación de la plataforma de telemedicina reduciendo un 60% el tiempo de espera médico."
      :hero-image="heroXentralImg"
      hero-image-alt="Telemedicina urgente"
      :hero-badge="{ value: '-60%', label: 'tiempo' }"
      :meta="[
        { value: 'Product Designer', label: 'Mi Rol' },
        { value: '6 Semanas', label: 'Duración' },
        { value: '3 Devs + 1 PM', label: 'Equipo' },
        { value: '-60% Tiempo', label: 'Impacto', emphasis: true }
      ]"
    />

    <!-- 2. CONTEXTO & PROBLEMA: situación crítica + 4 barreras + pregunta diseño -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Situación crítica (compactado como callout) -->
        <div class="stakes-box fade-in p-6 md:p-7 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12">
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

        <div class="section-header fade-in mb-12">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 barreras. 5 min entre vida y muerte.</h2>
          <p class="section-intro">Lo que enfrenta un viajero enfermo en el extranjero y la pregunta de diseño que guio todo.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 fade-in stagger-1 mb-8">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <MapPin :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">No sabe a dónde acudir</h3>
            <p class="text-sm text-body leading-relaxed">Desconoce opciones médicas locales y no tiene referencias confiables.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ShieldOff :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Desconoce su cobertura</h3>
            <p class="text-sm text-body leading-relaxed">No sabe qué servicios tiene disponibles ni cómo acceder a ellos.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Languages :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Barreras de idioma</h3>
            <p class="text-sm text-body leading-relaxed">Dificultad para comunicarse con personal médico en otro país.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Clock :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Pierde tiempo valioso</h3>
            <p class="text-sm text-body leading-relaxed">Buscando soluciones sin guía clara mientras los síntomas progresan.</p>
          </div>
        </div>

        <div class="insight-box fade-in bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-3">
            <MessageSquare :size="18" class="text-secondary mt-0.5 shrink-0" />
            <p class="text-sm text-slate-700"><strong>Pregunta de diseño:</strong> ¿Cómo podríamos facilitar el acceso rápido y confiable a atención médica remota en momentos de incertidumbre?</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. RESEARCH & ARQUITECTURA: 3 roles + aha moment + sitemap + user flows -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Decisiones de diseño clave</h2>
          <p class="section-intro">3 roles unificados bajo una sola arquitectura cognitiva, con el Coordinador médico como motor operativo.</p>
        </div>

        <!-- 3 roles -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0"><Plane :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Paciente — Viajero</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Usuario Cliente</p>
              <p class="text-xs text-body mt-1">Vulnerable, sin acceso, necesita atención médica inmediata sin fricción de login.</p>
            </div>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start">
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0"><Stethoscope :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Médico — Doctor</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Atención clínica</p>
              <p class="text-xs text-body mt-1">Enfocado en atender. Gestiona su agenda y consultas con información clara del paciente.</p>
            </div>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-3xl border-2 border-secondary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-4 items-start relative">
            <span class="absolute -top-2 right-4 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Clave</span>
            <div class="w-11 h-11 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold flex-shrink-0"><UserCog :size="16" /></div>
            <div>
              <h4 class="font-bold text-midnight text-sm">Coordinador Médico</h4>
              <p class="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">Superusuario</p>
              <p class="text-xs text-body mt-1">Supervisa operaciones, asigna turnos, edita agendas y extrae reportes de rendimiento.</p>
            </div>
          </div>
        </div>

        <!-- Aha moment -->
        <div class="aha-moment fade-in bg-midnight text-white p-6 md:p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-10">
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

        <!-- Insights compactados -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-2 mb-12">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
            <p class="text-sm text-slate-700 leading-relaxed">En crisis, cada segundo cuenta. -60% tiempo de respuesta.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
            <p class="text-sm text-slate-700 leading-relaxed">El Coordinador Médico es el cuello de botella operativo del servicio.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
            <p class="text-sm text-slate-700 leading-relaxed">Claridad reduce ansiedad más que velocidad en momentos críticos.</p>
          </div>
        </div>

        <!-- Sitemap -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">Arquitectura: Sitemap + User Flows por Rol</h3>
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mb-8">
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

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><Plane :size="16" class="inline mr-2 text-secondary" />Paciente</h4>
            <p class="text-xs text-body leading-relaxed">Link email → Verificar cobertura → Síntomas → Videollamada → NPS.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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

    <!-- 4. SOLUCIÓN & DECISIONES: flujo 6 pasos + 5 decisiones + 5 features visuales -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Simplificación de Flujo Crítico: 6 Decisiones clave reducidas a minutos</h2>
          <p class="section-intro">Estructuración de pantallas de alta fidelidad optimizadas para reducir la carga cognitiva en momentos de alta presión médica.</p>
        </div>

        <!-- Flujo principal: 6 pasos -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">Flujo principal: del síntoma a la atención</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">1</span>Acceso a la plataforma</h4>
            <p class="text-xs text-body">Entrada simple y directa al servicio con credenciales del plan.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">2</span>Validación de beneficio</h4>
            <p class="text-xs text-body">Verificación rápida de cobertura médica con indicador claro.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">3</span>Registro de síntomas</h4>
            <p class="text-xs text-body">Selección intuitiva de síntomas actuales con jerarquía clara.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">4</span>Tipo de atención</h4>
            <p class="text-xs text-body">Orientación basada en los síntomas registrados por el usuario.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-chip text-body font-semibold rounded-md items-center justify-center text-xs font-bold mr-2">5</span>Conexión con médico</h4>
            <p class="text-xs text-body">Llamada o videollamada según preferencia y disponibilidad.</p>
          </div>
          <div class="bg-white p-4 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 class="text-sm font-bold text-midnight mb-2"><span class="inline-flex w-6 h-6 bg-midnight text-white rounded-md items-center justify-center text-xs font-bold mr-2">6</span>Recomendaciones + NPS</h4>
            <p class="text-xs text-body">Indicaciones médicas claras y encuesta NPS al cierre.</p>
          </div>
        </div>

        <!-- 5 decisiones de diseño (Bento) -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">5 decisiones validadas en crisis</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div class="md:col-span-2 bg-midnight rounded-2xl p-8 flex flex-col justify-center">
            <Zap :size="28" class="text-secondary mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">Acceso rápido a atención</h4>
            <p class="text-sm text-slate-400 max-w-lg">Flujo reducido a pasos esenciales para que un viajero enfermo no se pierda en momentos de estrés.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Eye :size="24" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Claridad del beneficio</h4>
            <p class="text-xs text-body">Indicador visible del estado de cobertura para decisiones inmediatas.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ListFilter :size="24" class="text-secondary mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Priorización por síntomas</h4>
            <p class="text-xs text-body">Sistema que orienta al tipo de atención más adecuada según gravedad.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Heart :size="24" class="text-rose-600 mb-3" />
            <h4 class="text-sm font-bold text-midnight mb-2">Contexto emocional</h4>
            <p class="text-xs text-slate-700">Botones grandes, lenguaje claro, decisiones guiadas para estados de ansiedad.</p>
          </div>
          <div class="md:col-span-2 bg-midnight rounded-2xl p-8 flex flex-col justify-center">
            <BarChart2 :size="28" class="text-secondary mb-4" />
            <h4 class="text-xl font-bold text-white mb-2">NPS post-consulta</h4>
            <p class="text-sm text-slate-300 max-w-lg">Encuesta de satisfacción al cerrar la videollamada para que el negocio mida la NPS de cada médico en cada consulta.</p>
          </div>
        </div>

        <!-- 8 PANTALLAS: Journey Paciente + Médico separados por rol -->
        <div class="mt-16">

          <!-- HEADER GENERAL -->
          <div class="flex items-center gap-3 mb-10">
            <span class="w-1.5 h-8 bg-secondary rounded-full"></span>
            <h3 class="text-2xl md:text-3xl font-display font-extrabold text-midnight tracking-tight">8 Pantallas, 1 Sistema</h3>
            <span class="text-xs font-bold uppercase tracking-widest text-slate-400 ml-auto hidden md:inline">Paciente → Médico</span>
          </div>

          <!-- BLOQUE 1: PACIENTE -->
          <div class="mb-14">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <UserCheck :size="20" />
              </div>
              <div>
                <h4 class="text-lg md:text-xl font-display font-extrabold text-midnight tracking-tight">Lo que ve el paciente</h4>
                <p class="text-xs text-body">3 pantallas que eliminan la ansiedad del proceso médico</p>
              </div>
              <span class="ml-auto text-xs font-bold uppercase tracking-widest text-slate-400">3 pantallas</span>
            </div>

            <!-- Grid paciente: pantalla 1 destacada + 2 pantallas inferiores -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

              <!-- Pantalla 1 destacada — Email confirmación (col-span-12) -->
              <div class="md:col-span-12 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div class="md:col-span-7 bg-secondary/5 p-6 flex items-center justify-center">
                    <img src="/assets/images/xentral-health/paciente/1-xentral-paciente-correo-confirmacion.png" alt="Email de confirmación con datos de cita y botón de acceso" class="w-full h-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]" loading="lazy" width="1396" height="1552">
                  </div>
                  <div class="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-4">
                      <span class="px-2.5 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">01 / Ingreso</span>
                    </div>
                    <h5 class="text-2xl md:text-3xl font-display font-extrabold text-midnight mb-4 tracking-tight leading-tight">Cero fricción desde el primer email</h5>
                    <p class="text-sm md:text-base text-body leading-relaxed mb-5">El paciente recibe los datos de la cita y un botón azul que abre la videollamada sin descargar apps, sin crear cuentas, sin contraseñas. <span class="font-semibold text-secondary">Acceso 1-click sin fricción de autenticación.</span></p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Sin fricción</span>
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">0 contraseñas</span>
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">1 clic</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pantalla 2 — Selección cita (col-span-6) -->
              <div class="md:col-span-6 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="bg-secondary/5 p-5">
                  <img src="/assets/images/xentral-health/paciente/2-xentral-paciente-seleccion-cita.png" alt="Selector de fecha y hora con resumen antes de confirmar" class="w-full h-auto rounded-2xl" loading="lazy" width="1680" height="1396">
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2.5 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">02 / Decisión</span>
                  </div>
                  <h5 class="text-lg font-display font-extrabold text-midnight mb-2 tracking-tight">Disponibilidad real, decisiones sin sorpresas</h5>
                  <p class="text-sm text-body leading-relaxed">Slots disponibles en azul sólido, ocupados desvanecidos. Resumen visible de día, hora y duración antes de confirmar. <span class="font-semibold text-secondary">Los huecos grises no generan ansiedad.</span></p>
                </div>
              </div>

              <!-- Pantalla 3 — Conectando (col-span-6) -->
              <div class="md:col-span-6 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="bg-secondary/5 p-5">
                  <img src="/assets/images/xentral-health/paciente/3-xentral-paciente-conectando.png" alt="Pantalla de espera mientras se conecta con el médico" class="w-full h-auto rounded-2xl" loading="lazy" width="1373" height="993">
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2.5 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">03 / Transición</span>
                  </div>
                  <h5 class="text-lg font-display font-extrabold text-midnight mb-2 tracking-tight">La espera como información, no como ansiedad</h5>
                  <p class="text-sm text-body leading-relaxed">Antes de que el médico entre, el paciente ve nombre del doctor, especialidad y tiempo estimado. <span class="font-semibold text-secondary">"Conectando" con datos es mejor que un spinner ciego.</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- BLOQUE 2: MÉDICO -->
          <div class="mb-10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-midnight/10 flex items-center justify-center text-midnight">
                <Stethoscope :size="20" />
              </div>
              <div>
                <h4 class="text-lg md:text-xl font-display font-extrabold text-midnight tracking-tight">Lo que ve el médico</h4>
                <p class="text-xs text-body">5 pantallas que devuelven tiempo al profesional para atender bien</p>
              </div>
              <span class="ml-auto text-xs font-bold uppercase tracking-widest text-slate-400">5 pantallas</span>
            </div>

            <!-- Grid médico: pantalla 4 destacada + 2 pantallas + pantalla 7 destacada dark + pantalla 8 histórica -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

              <!-- Pantalla 4 destacada — Dashboard médico (col-span-12) -->
              <div class="md:col-span-12 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div class="md:col-span-7 bg-midnight/5 p-6 flex items-center justify-center">
                    <img src="/assets/images/xentral-health/medico/1-xentral-coordinador-dashboard.png" alt="Dashboard del coordinador médico con agenda, cola y métricas" class="w-full h-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]" loading="lazy" width="1512" height="1024">
                  </div>
                  <div class="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-4">
                      <span class="px-2.5 py-1 bg-midnight text-white text-[10px] font-bold uppercase tracking-widest rounded-full">04 / Visión general</span>
                    </div>
                    <h5 class="text-2xl md:text-3xl font-display font-extrabold text-midnight mb-4 tracking-tight leading-tight">El médico entra y ya sabe qué pasa hoy</h5>
                    <p class="text-sm md:text-base text-body leading-relaxed mb-5">Dashboard con agenda del día, cola de espera ordenada por prioridad, alertas rojas en pacientes urgentes. <span class="font-semibold text-secondary">-60% tiempo entre login y primer paciente</span> porque el sistema ya hizo el triage visual.</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1.5 bg-midnight/10 text-midnight text-xs font-bold rounded-full">Triage visual</span>
                      <span class="px-3 py-1.5 bg-midnight/10 text-midnight text-xs font-bold rounded-full">Cola priorizada</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pantalla 5 — Validación contexto (col-span-6) -->
              <div class="md:col-span-6 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="bg-midnight/5 p-5">
                  <img src="/assets/images/xentral-health/medico/2-xentral-paciente-validacion-contexto.png" alt="Validación del contexto clínico del paciente antes de la consulta" class="w-full h-auto rounded-2xl" loading="lazy" width="1512" height="1223">
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2.5 py-1 bg-midnight text-white text-[10px] font-bold uppercase tracking-widest rounded-full">05 / Contexto clínico</span>
                  </div>
                  <h5 class="text-lg font-display font-extrabold text-midnight mb-2 tracking-tight">Información accionable, no histórica</h5>
                  <p class="text-sm text-body leading-relaxed">Alergias en rojo, antecedentes en gris claro, motivo de consulta destacado. El médico lee lo crítico en 5 segundos, no en 5 minutos.</p>
                </div>
              </div>

              <!-- Pantalla 6 — Videoconsulta activa DARK (col-span-6) -->
              <div class="md:col-span-6 group bg-midnight rounded-3xl border border-midnight shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-500">
                <div class="bg-secondary/20 p-5">
                  <img src="/assets/images/xentral-health/medico/3-xentral-medico-videoconsulta-activa.png" alt="Videollamada activa con contexto clínico integrado" class="w-full h-auto rounded-2xl" loading="lazy" width="1549" height="944">
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="px-2.5 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">06 / En vivo</span>
                  </div>
                  <h5 class="text-lg font-display font-extrabold text-white mb-2 tracking-tight">Videollamada con contexto, no con pestañas</h5>
                  <p class="text-sm text-slate-300 leading-relaxed">Paciente a un lado, contexto clínico al otro. Sin alternar ventanas, sin perder el hilo. <span class="font-semibold text-secondary">El paciente se siente visto, no evaluado.</span></p>
                </div>
              </div>

              <!-- Pantalla 7 — Consulta finalizada (col-span-12) -->
              <div class="md:col-span-12 group bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div class="md:col-span-7 bg-midnight/5 p-6 flex items-center justify-center">
                    <img src="/assets/images/xentral-health/medico/4-xentral-medico-consulta-finalizada.png" alt="Pantalla de consulta finalizada con confirmación y NPS" class="w-full h-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]" loading="lazy" width="1512" height="1053">
                  </div>
                  <div class="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                    <div class="flex items-center gap-2 mb-4">
                      <span class="px-2.5 py-1 bg-midnight text-white text-[10px] font-bold uppercase tracking-widest rounded-full">07 / Cierre</span>
                    </div>
                    <h5 class="text-2xl md:text-3xl font-display font-extrabold text-midnight mb-4 tracking-tight leading-tight">Cierre que alimenta la próxima consulta</h5>
                    <p class="text-sm md:text-base text-body leading-relaxed mb-5">Notas estructuradas obligatorias antes de cerrar: diagnóstico, prescripción, seguimiento. <span class="font-semibold text-secondary">El siguiente profesional lee el resumen en 30 segundos.</span></p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1.5 bg-midnight/10 text-midnight text-xs font-bold rounded-full">Notas estructuradas</span>
                      <span class="px-3 py-1.5 bg-midnight/10 text-midnight text-xs font-bold rounded-full">Continuidad</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pantalla 8 destacada — Historial pacientes (col-span-12) -->
              <div class="md:col-span-12 group bg-white rounded-3xl border-2 border-secondary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div class="md:col-span-7 bg-secondary/10 p-6 flex items-center justify-center">
                    <img src="/assets/images/xentral-health/medico/5-xentral-medico-historial-pacientes.png" alt="Historial de pacientes con filtros multi-país" class="w-full h-auto rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]" loading="lazy" width="1512" height="1257">
                  </div>
                  <div class="md:col-span-5 p-8 md:p-10 flex flex-col justify-center bg-white">
                    <div class="flex items-center gap-2 mb-4">
                      <span class="px-2.5 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">08 / Médico</span>
                      <span class="px-2.5 py-1 bg-highlight/20 text-highlight text-[10px] font-bold uppercase tracking-widest rounded-full">★ Escalable</span>
                    </div>
                    <h5 class="text-2xl md:text-3xl font-display font-extrabold text-midnight mb-4 tracking-tight leading-tight">10 pacientes, 6 países, una sola tabla</h5>
                    <p class="text-sm md:text-base text-body leading-relaxed mb-5">Listado con país de origen, doctor asignado, fecha de última atención, acceso directo al diagnóstico completo. <span class="font-semibold text-secondary">La consulta de seguimiento se vuelve trivial.</span></p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Multi-país</span>
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Búsqueda rápida</span>
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Comparación histórica</span>
                      <span class="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full">CL · MX · CO · AR · PE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer de la sección -->
          <div class="mt-10 text-center">
            <p class="text-xs font-bold uppercase tracking-widest text-slate-400">3 pantallas paciente · 5 pantallas médico · 0 pasos redundantes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. IMPACTO & VALIDACIÓN: métricas + testimonials + NPS dark card -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12 text-center">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">Impacto: -60% tiempo, +90% claridad</h2>
          <p class="text-lg text-body">12 usuarios validaron la experiencia en crisis simuladas.</p>
        </div>

        <!-- Métricas grandes -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-borderline py-16 w-full max-w-6xl mx-auto border border-borderline rounded-[2.5rem] bg-surface shadow-inner mb-16">
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

        <!-- Validación: métricas de testing + NPS dark card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-black text-highlight tracking-tighter tabular-nums mb-2">12</span>
            <p class="text-sm font-bold text-midnight mb-1">Usuarios en crisis simuladas</p>
            <p class="text-xs text-body leading-relaxed">Validación con pacientes y médicos en escenarios de urgencia.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="block font-display text-4xl font-black text-highlight tracking-tighter tabular-nums mb-2">+90%</span>
            <p class="text-sm font-bold text-midnight mb-1">Claridad del proceso</p>
            <p class="text-xs text-body leading-relaxed">Usuarios entienden qué pasa en cada paso del flujo.</p>
          </div>
          <div class="bg-midnight p-6 md:p-7 rounded-3xl flex flex-col justify-center">
            <BarChart2 :size="28" class="text-secondary mb-4" />
            <h4 class="text-lg font-bold text-white mb-2">Validación continua con NPS</h4>
            <p class="text-sm text-slate-300">Encuesta de satisfacción al cierre de cada videollamada. El negocio mide la calidad de atención médica en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. APRENDIZAJES & NEXT STEPS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">4 lecciones, 4 iteraciones, escalabilidad multi-país</h2>
          <p class="section-intro">Lo que aprendí sobre tiempo, claridad y decisiones bajo presión. Roadmap ordenado por impacto.</p>
        </div>

        <!-- 4 lecciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>En crisis cada segundo cuenta.</strong> Descubrimos que flujo corto no es mejor: en emergencias, los usuarios prefieren ver todas las opciones para sentirse en control.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Claridad mata ansiedad.</strong> Los usuarios necesitaban ver todos los pasos desde el inicio para sentirse en control. Eso cambió la arquitectura del flujo.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Stakeholders internos importan.</strong> Los médicos tenían objeciones distintas a los pacientes. Identificar ambos grupos desde el inicio previno retrabajo.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-black text-borderline mb-3 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>HTML acelera validación.</strong> Crear prototipos clickeables en código redujo el ciclo de feedback de días a horas. Stakeholders podían ver y tocar el flujo antes de construirlo.</p>
          </div>
        </div>

        <!-- Lecciones aprendidas -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-zinc-50 border-l-4 border-primary border border-borderline rounded-2xl p-6 md:p-7 mb-10">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Lightbulb :size="18" class="text-primary" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-midnight mb-3">Lo que intentamos y no funcionó</h4>
              <ul class="space-y-2 text-base text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Flujo ultracorto:</strong> En crisis, usuarios necesitan ver el mapa completo.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Chatbot primero:</strong> En salud, quieren un humano ya.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Minimalismo extremo:</strong> Botones pequeños no funcionan en estrés. Agrandamos todo +200%.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Next steps: 4 iteraciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <BarChart2 :size="20" class="text-secondary" />
            </div>
            <h4 class="text-sm font-bold text-midnight mb-1">Microsoft Clarity</h4>
            <p class="text-xs text-body">Mapas de calor y grabaciones de sesión para entender el comportamiento real.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <Activity :size="20" class="text-secondary" />
            </div>
            <h4 class="text-sm font-bold text-midnight mb-1">Iteración NPS</h4>
            <p class="text-xs text-body">Optimizar la experiencia del médico según datos de satisfacción recolectados.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <UserCheck :size="20" class="text-secondary" />
            </div>
            <h4 class="text-sm font-bold text-midnight mb-1">Testing en contexto real</h4>
            <p class="text-xs text-body">Validar flujos críticos con viajeros reales en el extranjero.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <Layers :size="20" class="text-secondary" />
            </div>
            <h4 class="text-sm font-bold text-midnight mb-1">Escalabilidad Multi-país</h4>
            <p class="text-xs text-body">Adaptar la plataforma a nuevos mercados y jurisdicciones regulatorias.</p>
          </div>
        </div>
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
          <RouterLink to="/app" class="group flex items-center justify-between bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Caso anterior</span>
              <h4 class="text-lg font-bold text-midnight group-hover:text-secondary transition-colors">App de Asistencia</h4>
            </div>
            <div class="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowLeft :size="20" />
            </div>
          </RouterLink>
          <RouterLink to="/contacto" class="group flex items-center justify-between bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Conversemos</span>
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
import CaseStudyHero from '@/components/case-study/CaseStudyHero.vue'
import heroXentralImg from '/public/assets/images/home/hero-xentral-full.jpg'
import {
  HeartPulse, Plane, Stethoscope, MapPin, ShieldOff, Languages, Clock, MessageSquare,
  Zap, Eye, ListFilter, Heart, ChevronRight, Lightbulb, XCircle, BarChart2, UserCheck, Layers,
  ArrowLeft, ArrowRight, Mail, UserCog, Home, Video, Calendar, FileText, Activity
} from 'lucide-vue-next'

useScrollAnimations()
</script>

