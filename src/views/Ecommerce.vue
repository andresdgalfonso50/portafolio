<template>
  <div class="view-wrapper">
    <!-- 1. HERO -->
    <CaseStudyHero
      case-slug="ecommerce"
      :icon="Layers"
      title="El cotizador web que multiplicó el checkout 4x."
      highlight=""
      badge="E-commerce"
      subtitle="Rediseño integral de la plataforma de cotización responsive para los canales B2B y B2C."
      :hero-image="heroEcomImg"
      hero-image-alt="Checkout de asistencia en viaje"
      :hero-badge="{ value: '+4x', label: 'conversión' }"
      :meta="[
        { value: 'Product Designer', label: 'Mi Rol' },
        { value: '3 Meses', label: 'Duración' },
        { value: 'PM + 3 Devs', label: 'Equipo' },
        { value: '+4x Ingresos', label: 'Impacto', emphasis: true }
      ]"
    />

    <!-- 2. CONTEXTO & PROBLEMA: el juego estaba en peligro + 5 fricciones + UI antes -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">01</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">64.5% abandonaba. 12 campos. 0 confianza.</h2>
          <p class="section-intro">5 fricciones medidas con analytics + UI anterior con 4 problemas de jerarquía.</p>
        </div>

        <!-- Métricas clave -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 fade-in stagger-1">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-midnight tracking-tight block">64.5%</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest">Tráfico Mobile</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-midnight tracking-tight block">0.82%</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest">Conversión Inicial</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-midnight tracking-tight block">53s</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest">Interacción Media</span>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-midnight tracking-tight block">&lt;20%</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest">Retención</span>
          </div>
        </div>

        <!-- 5 fricciones -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-2 mb-12">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <GitBranch :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Flujo de compra confuso</h3>
            <p class="text-sm text-body leading-relaxed">El proceso rompía el modelo mental: pedíamos el pago antes del resumen.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ClipboardList :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">12+ campos en el checkout</h3>
            <p class="text-sm text-body leading-relaxed">Sobrecarga cognitiva. Reduje a 4 campos esenciales.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ShieldOff :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Sin indicadores de confianza</h3>
            <p class="text-sm text-body leading-relaxed">Sin badges SSL visibles. Abandonaban por incertidumbre.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Smartphone :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Desktop-first obsoleto</h3>
            <p class="text-sm text-body leading-relaxed">64.5% del tráfico era mobile, pero la UX era desktop.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Package :size="22" class="text-slate-700 mb-4" />
            <h3 class="text-base font-bold text-midnight mb-2">Alta tasa de abandono</h3>
            <p class="text-sm text-body leading-relaxed">Menos del 20% completaban la compra. Patrón identificado.</p>
          </div>
        </div>

        <!-- UI antes + observaciones -->
        <div class="ui-comparison fade-in stagger-2">
          <div class="ui-label"><span class="ui-label-badge">UI ANTERIOR</span></div>
          <div class="ui-antes-grid">
            <div class="ui-image-wrapper">
              <img src="/assets/images/ecommerce/ui-anterior.jpg" alt="UI del e-commerce antes del rediseño" class="ui-image" width="1910" height="1536">
            </div>
            <div class="ui-observations">
              <div class="observation-item">
                <div class="observation-number">1</div>
                <div class="observation-text">
                  <h4>CTA sin jerarquía</h4>
                  <p>El botón principal se pierde entre otros elementos.</p>
                </div>
              </div>
              <div class="observation-item">
                <div class="observation-number">2</div>
                <div class="observation-text">
                  <h4>Sin identidad de marca</h4>
                  <p>Diseño genérico que no transmite viajes.</p>
                </div>
              </div>
              <div class="observation-item">
                <div class="observation-number">3</div>
                <div class="observation-text">
                  <h4>Propósito invisible</h4>
                  <p>El usuario no identifica que es un sitio de viajes.</p>
                </div>
              </div>
              <div class="observation-item">
                <div class="observation-number">4</div>
                <div class="observation-text">
                  <h4>Sobrecarga cognitiva</h4>
                  <p>Sin foco claro, el usuario no sabe a dónde mirar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. RESEARCH & ESTRATEGIA: insights + benchmark + principios -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Decisiones de diseño clave</h2>
          <p class="section-intro">73% abandonaba en el primer paso. Mostrábamos el formulario antes del resumen. Usuario quería ver, luego pagar.</p>
        </div>

        <!-- Aha Moment + Insights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-1 mb-12">
          <div class="md:col-span-2 bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <Lightbulb :size="22" class="text-white" />
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-secondary mb-1 block">El momento "aha"</span>
                <h4 class="text-xl font-bold text-midnight mb-2">El problema no era el diseño, era el flujo</h4>
                <p class="text-sm text-body leading-relaxed">73% abandonaba en el primer paso. El usuario esperaba ver el resumen antes del pago. <strong>Mostrábamos el formulario primero.</strong></p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
              <p class="text-sm text-slate-700 leading-relaxed">El usuario pierde motivación si hay más pasos después de iniciar checkout.</p>
            </div>
            <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
              <p class="text-sm text-slate-700 leading-relaxed">Cada paso adicional aumentaba el abandono en 15% promedio.</p>
            </div>
            <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-chip text-body font-semibold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
              <p class="text-sm text-slate-700 leading-relaxed">El flujo rompía el modelo mental: pago antes que resumen.</p>
            </div>
          </div>
        </div>

        <!-- Benchmark -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">Benchmark: 4 checkouts, 6 patrones ganadores</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-1 mb-8">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Plane :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Avianca</h3>
            <p class="text-sm text-body mb-3">Flujo lineal con progreso visible.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> El usuario necesita saber dónde está y cuánto falta.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Globe :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Despegar</h3>
            <p class="text-sm text-body mb-3">Personalización según comportamiento.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> Reducir decisiones, mostrar solo lo relevante.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <CreditCard :size="28" class="text-body mb-4" />
            <h3 class="text-base font-bold text-midnight mb-1">Assist Card</h3>
            <p class="text-sm text-body mb-3">Funcional pero faltaba emoción.</p>
            <p class="text-xs text-body"><strong>Aprendizaje:</strong> La confianza no solo es técnica, también es visual.</p>
          </div>
        </div>
        <div class="conclusion-box fade-in p-6 md:p-7 rounded-xl mb-12">
          <p class="text-sm"><strong>Conclusión:</strong> Necesitábamos flujo simple + contexto claro + señales de confianza.</p>
        </div>

        <!-- Estrategia: 4 principios -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6">Estrategia: 4 principios, 1 objetivo (-64% abandono)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-1">
          <div class="md:col-span-2 bg-midnight rounded-2xl p-8 flex flex-col justify-center">
            <span class="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Objetivo</span>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Incrementar conversión eliminando fricciones</h3>
            <p class="text-sm text-slate-400 max-w-lg">Reducir el tiempo entre intención de compra y confirmación del pago.</p>
          </div>
          <div class="md:col-span-1">
            <div class="grid grid-cols-1 gap-4 h-full">
              <div class="bg-white p-6 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Smartphone :size="20" class="text-secondary mb-2" />
                <span class="text-sm font-bold text-midnight block">Mobile-first</span>
                <span class="text-xs text-body mt-1 block">64.5% del tráfico venía de móviles, pero la UX era desktop.</span>
              </div>
              <div class="bg-white p-6 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <ListOrdered :size="20" class="text-secondary mb-2" />
                <span class="text-sm font-bold text-midnight block">Máximo 5 pasos</span>
                <span class="text-xs text-body mt-1 block">Cada paso adicional aumentaba el abandono en 15%.</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="grid grid-cols-1 gap-4 h-full">
              <div class="bg-white p-6 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Eye :size="20" class="text-secondary mb-2" />
                <span class="text-sm font-bold text-midnight block">Claridad > Estética</span>
                <span class="text-xs text-body mt-1 block">El usuario abandonaba por incertidumbre, no por diseño.</span>
              </div>
              <div class="bg-white p-6 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <MessageSquare :size="20" class="text-secondary mb-2" />
                <span class="text-sm font-bold text-midnight block">Feedback constante</span>
                <span class="text-xs text-body mt-1 block">El usuario necesita saber en qué paso está y cuánto falta.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. LA SOLUCIÓN: 5 pasos + antes vs después -->
    <section class="case-section overflow-hidden">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">El flujo optimizado paso a paso</h2>
          <p class="section-intro">5 pasos rediseñados. Cada fricción eliminada con un test A/B y validación con usuarios.</p>
        </div>

        <div class="steps-container">
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-borderline bg-surface p-4">
                <img src="/assets/images/ecommerce/Cotizador-paso-1.jpg" alt="Paso 1" class="w-full h-auto object-contain" width="1280" height="1066">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">01</span>
              <h3 class="text-2xl font-bold text-midnight mb-3">Selección de plan clara</h3>
              <p class="text-sm text-body leading-relaxed">Jerarquía visual inmediata para comparar beneficios y precios de un vistazo.</p>
            </div>
          </div>
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-2">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-borderline bg-surface p-4">
                <img src="/assets/images/ecommerce/Cotizador-paso-2.jpg" alt="Paso 2" class="w-full h-auto object-contain" width="1280" height="1066">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-1">
              <span class="step-number">02</span>
              <h3 class="text-2xl font-bold text-midnight mb-3">Entrada de datos inteligente</h3>
              <p class="text-sm text-body leading-relaxed">Validación en tiempo real para prevenir errores y mantener al usuario en el flujo.</p>
            </div>
          </div>
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-borderline bg-surface p-4">
                <img src="/assets/images/ecommerce/Cotizador-paso-3.jpg" alt="Paso 3" class="w-full h-auto object-contain" width="1280" height="1066">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">03</span>
              <h3 class="text-2xl font-bold text-midnight mb-3">Revisión transparente</h3>
              <p class="text-sm text-body leading-relaxed">Resumen detallado antes del pago para eliminar ansiedad y aumentar confianza.</p>
            </div>
          </div>
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-2">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-borderline bg-surface p-4">
                <img src="/assets/images/ecommerce/Cotizador-paso-4.jpg" alt="Paso 4" class="w-full h-auto object-contain" width="1280" height="1066">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-1">
              <span class="step-number">04</span>
              <h3 class="text-2xl font-bold text-midnight mb-3">Pago fluido</h3>
              <p class="text-sm text-body leading-relaxed">Métodos populares con interfaz limpia para minimizar distracciones.</p>
            </div>
          </div>
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-borderline bg-surface p-4">
                <img src="/assets/images/ecommerce/Cotizador-paso-5.jpg" alt="Paso 5" class="w-full h-auto object-contain" width="1600" height="1333">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">05</span>
              <h3 class="text-2xl font-bold text-midnight mb-3">Confirmación instantánea</h3>
              <p class="text-sm text-body leading-relaxed">Cerré el ciclo de confianza con confirmación inmediata y clara.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. IMPACTO & VALIDACIÓN: antes vs después + métricas + testimonials -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12 text-center">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">El flujo de cotización optimizado</h2>
          <p class="text-lg text-body">8 usuarios validaron el nuevo flujo en testing. Métricas auditables 3 meses después.</p>
        </div>

        <!-- Antes vs Después -->
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-12">
          <img src="/assets/images/ecommerce/antes-despues.jpg" alt="Comparación Antes y Después del rediseño" class="w-full h-auto object-cover" width="2652" height="1360">
        </div>

        <!-- Métricas grandes -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-borderline py-16 w-full max-w-6xl mx-auto border border-borderline rounded-[2.5rem] bg-surface shadow-inner mb-16">
          <div class="text-center px-8">
            <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">+4x</span>
            <div class="mt-4">
              <h3 class="text-sm font-bold text-body uppercase tracking-widest">Ingresos</h3>
              <p class="text-sm text-slate-400 mt-2">De ~2K USD a ~9K USD mensuales</p>
            </div>
          </div>
          <div class="text-center px-8">
            <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">-40%</span>
            <div class="mt-4">
              <h3 class="text-sm font-bold text-body uppercase tracking-widest">Abandono</h3>
              <p class="text-sm text-slate-400 mt-2">Reducción en el checkout</p>
            </div>
          </div>
          <div class="text-center px-8">
            <span class="font-display text-7xl md:text-9xl font-black text-highlight tracking-tight block leading-[0.85]">73</span>
            <div class="mt-4">
              <h3 class="text-sm font-bold text-body uppercase tracking-widest">NPS final</h3>
              <p class="text-sm text-slate-400 mt-2">Net Promoter Score post-rediseño</p>
            </div>
          </div>
        </div>

        <!-- Validación: 3 cards + testimonial -->
        <h3 class="text-sm font-bold uppercase tracking-widest text-body mb-6 text-center">Validación: 8 usuarios, 0 abandonos</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-1 mb-8">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <CheckCircle :size="28" class="text-secondary mb-4" />
            <h4 class="text-base font-bold text-midnight mb-2">Completan el flujo sin ayuda</h4>
            <p class="text-sm text-body leading-relaxed">No se requerían instrucciones adicionales para completar la compra.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <MapPin :size="28" class="text-secondary mb-4" />
            <h4 class="text-base font-bold text-midnight mb-2">Entendían los pasos</h4>
            <p class="text-sm text-body leading-relaxed">El indicador de progreso fue claro para el 100% de los usuarios testeados.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <CreditCard :size="28" class="text-secondary mb-4" />
            <h4 class="text-base font-bold text-midnight mb-2">Finalizan compra correctamente</h4>
            <p class="text-sm text-body leading-relaxed">Los errores de formulario se redujeron significativamente.</p>
          </div>
        </div>
        <div class="validation-quote fade-in mt-8 bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <blockquote>
            <p class="text-xl text-slate-700 leading-relaxed italic">"Por fin sé exactamente cuánto voy a pagar y en cuántos pasos. Es mucho más claro que antes."</p>
            <cite class="text-base font-semibold text-body mt-4 block">— Usuario durante testing</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- 6. APRENDIZAJES & NEXT STEPS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-8">Lecciones aprendidas</h2>
          <p class="section-intro">Lo que aprendí sobre CRO y los próximos pasos para llegar a 5% de conversión.</p>
        </div>

        <!-- 4 lecciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in stagger-1 mb-12">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Decidir qué NO diseñar.</strong> Redujimos 12 campos a 4. Menos fue más: cada campo eliminado redujo la fricción percibida.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Modelo mental del usuario, no proceso interno.</strong> Los usuarios querían ver el resumen antes de pagar. Resumen antes del pago = menos abandono.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>La confianza se diseña, no se asume.</strong> Se iban por incertidumbre: no sabían cuánto iban a pagar ni qué iban a obtener.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Mobile-first = rediseñar desde cero.</strong> 64.5% tráfico mobile exigía jerarquía táctil, gestos nativos e IA diferente a desktop.</p>
          </div>
        </div>

        <!-- Lo que no funcionó — diseño premium Apple-style con border-l-4 -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-zinc-50 border-l-4 border-primary p-6 md:p-8 mb-10">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Lightbulb :size="24" class="text-primary" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-midnight mb-3">Lo que intentamos primero y no funcionó</h4>
              <ul class="space-y-2 text-lg text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Más onboarding:</strong> Más educación = más fricción. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Modal de confirmación:</strong> Fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-primary mt-0.5">✗</span>
                  <span><strong>Carousel en checkout:</strong> 12% cancelaban al verlo. Lo quitamos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Next steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <Split :size="20" class="text-secondary" />
            </div>
            <h4 class="text-base font-bold text-midnight mb-1">Testeo A/B</h4>
            <p class="text-sm text-body">Variaciones del flujo para optimizar conversión.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <UserCheck :size="20" class="text-secondary" />
            </div>
            <h4 class="text-base font-bold text-midnight mb-1">Personalización</h4>
            <p class="text-sm text-body">Experiencia adaptada al historial del usuario.</p>
          </div>
          <div class="bg-white p-6 md:p-7 rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-3">
              <CreditCard :size="20" class="text-secondary" />
            </div>
            <h4 class="text-base font-bold text-midnight mb-1">Checkout express</h4>
            <p class="text-sm text-body">Implementar one-click checkout para usuarios returning.</p>
          </div>
        </div>

        <!-- Testimonial -->
        <blockquote class="bg-midnight p-8 md:p-10 rounded-3xl">
          <p class="text-xl md:text-2xl text-white leading-relaxed italic mb-4">"El rediseño redujo el abandono en checkout a la mitad en 3 semanas. El dashboard de métricas nos permitió iterar cada lunes sin esperar al equipo de desarrollo."</p>
          <footer>
            <span class="block text-base font-bold text-white">Diego Ramírez</span>
            <span class="block text-sm text-slate-400">Engineering Lead · Continental Assist</span>
          </footer>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <AuroraBg variant="dark" class="py-20 md:py-24">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          ¿Diseñamos tu próximo
          <span class="bg-gradient-to-r from-[#0071e3] to-white bg-clip-text text-transparent">producto</span>?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          CRO verificable con datos, no conjeturas. Conversemos sobre tu caso.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link to="/contacto" class="inline-flex items-center gap-2 px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300">
            Iniciar conversación
          </router-link>
          <router-link to="/app-web" class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
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
    <nav class="py-24 border-t border-borderline">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RouterLink to="/app" class="group flex items-center justify-between p-8 md:p-10 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Caso anterior</span>
              <h4 class="text-2xl font-bold text-midnight group-hover:text-secondary transition-colors">App de Asistencia en Viajes</h4>
            </div>
            <div class="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowLeft :size="24" />
            </div>
          </RouterLink>
          <RouterLink to="/app-web" class="group flex items-center justify-between p-8 md:p-10 bg-white rounded-3xl border border-borderline/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Siguiente caso</span>
              <h4 class="text-2xl font-bold text-midnight group-hover:text-secondary transition-colors">Xentral Health</h4>
            </div>
            <div class="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowRight :size="24" />
            </div>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import CaseStudyHero from '@/components/case-study/CaseStudyHero.vue'
import heroEcomImg from '/public/assets/images/home/hero-ecommerce-full.jpg'
import {
  Layers, GitBranch, ClipboardList, ShieldOff, Smartphone, Package,
  CreditCard, ChevronRight, ArrowRight, ArrowLeft, CheckCircle, MapPin,
  MessageSquare, Mail, Lightbulb, Eye, ListOrdered, Plane, Globe,
  Split, UserCheck, Code2
} from 'lucide-vue-next'

useScrollAnimations()
</script>
