<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
    <AuroraBg variant="hero" class="home-hero section">
      <div class="w-full max-w-6xl mx-auto px-6 pt-10 pb-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <!-- Columna izquierda: texto + CTAs -->
          <div class="flex flex-col items-start fade-in">
            <span class="label block mb-5">Product Design Director</span>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-midnight mb-6">
              Diseño de producto que
              <span class="font-light italic text-primary">escala</span>
              el negocio.
            </h1>
            <p class="text-lg text-body mb-8 max-w-lg leading-relaxed">
              Estrategia UX y sistemas de diseño de alto rendimiento enfocados en maximizar la conversión, retención y la eficiencia de producto. Prototipado funcional en código (Vue + Tailwind + IA) para validar más rápido. El ciclo de feedback pasa de días a horas.
            </p>
            <div class="flex flex-wrap gap-4 items-center">
              <ButtonPrimary href="#proyectos" variant="primary">
                Ver 3 casos
                <template #suffix>
                  <ArrowRight :size="18" />
                </template>
              </ButtonPrimary>
            </div>
          </div>

          <!-- Columna derecha: mockups con halo aurora -->
          <div class="flex items-center justify-center lg:justify-end fade-in stagger-2">
            <div class="relative w-full max-w-[380px] aspect-[670/768] max-h-[520px]">
              <!-- Aurora backdrop: destello radial difuso -->
              <div
                class="absolute inset-0 -z-10 blur-3xl opacity-40"
                aria-hidden="true"
                style="background: radial-gradient(ellipse at 60% 40%, rgba(0, 113, 227, 0.35) 0%, rgba(0, 113, 227, 0) 65%);"
              ></div>
              <img
                src="/assets/images/home/hero-home-celulares.png"
                alt="Diseño de producto digital - Interfaces móviles modernas"
                class="absolute inset-0 w-full h-full object-contain relative z-10"
                fetchpriority="high"
                loading="eager"
                width="670"
                height="768"
              />
            </div>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- SKILL TAGS -->
    <div class="flex flex-wrap justify-center gap-3 w-full max-w-4xl mx-auto mt-12 mb-8 px-6">
      <span class="px-4 py-2 bg-chip text-body font-semibold text-sm rounded-full">UX/UI Design</span>
      <span class="px-4 py-2 bg-chip text-body font-semibold text-sm rounded-full">CRO & Analytics</span>
      <span class="px-4 py-2 bg-midnight text-white font-semibold text-sm rounded-full">Mobile-First</span>
      <span class="px-4 py-2 bg-chip text-body font-semibold text-sm rounded-full">Figma</span>
      <span class="px-4 py-2 bg-chip text-body font-semibold text-sm rounded-full">Prototipado</span>
    </div>

    <!-- METRICS -->
    <section class="w-full max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border border-borderline rounded-2xl px-6 py-10 md:px-10 bg-white">
        <div class="text-center md:text-left">
          <span class="block font-display text-4xl md:text-5xl font-black text-highlight tracking-tighter leading-none tabular-nums">+4x</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Incremento en conversión</p>
        </div>
        <div class="text-center md:text-left">
          <span class="block font-display text-4xl md:text-5xl font-black text-highlight tracking-tighter leading-none tabular-nums">4+</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Años de experiencia líder</p>
        </div>
        <div class="text-center md:text-left">
          <span class="block font-display text-4xl md:text-5xl font-black text-highlight tracking-tighter leading-none tabular-nums">10+</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Proyectos desplegados</p>
        </div>
        <div class="text-center md:text-left">
          <span class="block font-display text-4xl md:text-5xl font-black text-highlight tracking-tighter leading-none tabular-nums">2</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Apps nativas en producción</p>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="proyectos" class="w-full bg-surface py-24">
      <div class="container">
        <div class="mb-16 max-w-3xl">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">3 casos · 1 método</h2>
          <p class="text-lg text-body mt-4">App de viaje, e-commerce, telemedicina. Métricas auditables en cada uno.</p>
        </div>

        <div class="space-y-20">
          <!-- Fila 1: Texto izquierda, mockup derecha -->
          <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-5 order-2 lg:order-1">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Continental Assist · App</span>
              <h3 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                +11,900% conversión en canal digital
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Rediseño del flujo transaccional y selector de planes reduciendo la tasa de abandono al 12% global.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Retención día 7: 0.1% → 12%
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  997 errores iOS eliminados
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  2 productos live, +35% activación
                </li>
              </ul>
              <ButtonPrimary to="/app" variant="secondary">
                Ver caso
                <template #suffix><ArrowRight :size="18" /></template>
              </ButtonPrimary>
            </div>
            <div class="lg:col-span-7 order-1 lg:order-2">
              <div class="relative w-full aspect-[3/2] rounded-2xl border border-borderline overflow-hidden bg-white shadow-sm">
                <img
                  src="/assets/images/home/hero-app-full.jpg"
                  alt="App de asistencia al viajero - Continental Assist"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="2400"
                  height="1350"
                />
              </div>
            </div>
          </article>

          <!-- Fila 2: Mockup izquierda, texto derecha -->
          <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-7">
              <div class="relative w-full aspect-[3/2] rounded-2xl border border-borderline overflow-hidden bg-white shadow-sm">
                <img
                  src="/assets/images/home/hero-ecommerce-full.jpg"
                  alt="Checkout de asistencia en viaje"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="2400"
                  height="1350"
                />
              </div>
            </div>
            <div class="lg:col-span-5">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Continental Assist · E-commerce</span>
              <h3 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                +4x incremento en checkout
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Optimización de la arquitectura de información y consistencia UI implementando un sistema de diseño modular en 3 meses.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Conversión: 0.82% → 3.8%
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Campos reducidos: 12 → 4
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Ingresos: ~2K → ~9K USD/mes
                </li>
              </ul>
              <ButtonPrimary to="/ecommerce" variant="secondary">
                Ver caso
                <template #suffix><ArrowRight :size="18" /></template>
              </ButtonPrimary>
            </div>
          </article>

          <!-- Fila 3: Texto izquierda, mockup derecha -->
          <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-5 order-2 lg:order-1">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Xentral Health · Health Tech</span>
              <h3 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                -60% tiempo de espera en telemedicina
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Simplificación del flujo crítico de conexión entre médico y paciente de 5 minutos a solo 2 minutos en entornos de crisis.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Acceso: 5 min → 2 min
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Claridad del proceso: +90%
                </li>
                <li class="text-sm text-slate-700 font-semibold flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  NPS por médico en tiempo real
                </li>
              </ul>
              <ButtonPrimary to="/app-web" variant="secondary">
                Ver caso
                <template #suffix><ArrowRight :size="18" /></template>
              </ButtonPrimary>
            </div>
            <div class="lg:col-span-7 order-1 lg:order-2">
              <div class="relative w-full aspect-[3/2] rounded-2xl border border-borderline overflow-hidden bg-white shadow-sm">
                <img
                  src="/assets/images/home/hero-xentral-full.jpg"
                  alt="Telemedicina urgente para viajeros"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="2400"
                  height="1350"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- METODOLOGÍA: 3 fases macro + 8 pasos -->
    <section id="proceso" class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Metodología</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Del problema a la métrica.</h2>
          <p class="text-lg text-body max-w-2xl">8 etapas organizadas en 3 fases. No es una receta rígida — es cómo convierto complejidad en decisiones que se sostienen.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Fase 1: Descubrimiento y Estrategia -->
          <article class="bg-white border border-borderline rounded-2xl p-8 flex flex-col">
            <header class="mb-8">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Fase 01</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 leading-tight">Descubrimiento y Estrategia</h3>
              <p class="text-xs text-slate-600 mt-1 uppercase tracking-widest">Pasos 01–03</p>
            </header>
            <ol class="space-y-5 flex-1">
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">01</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Discovery</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Entiendo el negocio y las restricciones antes de diseñar.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">02</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Research</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Usuarios y datos reemplazan suposiciones por evidencia.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">03</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Define</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Sintetizo el problema en algo accionable y priorizado.</p>
                </div>
              </li>
            </ol>
          </article>

          <!-- Fase 2: Definición Táctica -->
          <article class="bg-white border border-borderline rounded-2xl p-8 flex flex-col">
            <header class="mb-8">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Fase 02</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 leading-tight">Definición Táctica</h3>
              <p class="text-xs text-slate-600 mt-1 uppercase tracking-widest">Pasos 04–05</p>
            </header>
            <ol class="space-y-5 flex-1">
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">04</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Ideate</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Varios caminos antes de comprometerme con uno.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">05</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Prototype</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Bajo las ideas a prototipos navegables para validar.</p>
                </div>
              </li>
            </ol>
          </article>

          <!-- Fase 3: Iteración y Entrega -->
          <article class="bg-white border border-borderline rounded-2xl p-8 flex flex-col">
            <header class="mb-8">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Fase 03</span>
              <h3 class="font-display text-xl font-bold text-midnight mt-2 leading-tight">Iteración y Entrega</h3>
              <p class="text-xs text-slate-600 mt-1 uppercase tracking-widest">Pasos 06–08</p>
            </header>
            <ol class="space-y-5 flex-1">
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">06</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Test</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Frente a usuarios reales. La evidencia decide.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">07</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Ship</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">UI de alta fidelidad lista para desarrollo.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="text-sm font-black text-primary tabular-nums shrink-0 mt-0.5">08</span>
                <div>
                  <h4 class="text-sm font-bold text-midnight mb-1">Measure</h4>
                  <p class="text-xs text-slate-700 leading-relaxed">Impacto real en producción. Datos para la próxima iteración.</p>
                </div>
              </li>
            </ol>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Social Proof</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Lo que dice el equipo.</h2>
          <p class="text-lg text-body max-w-2xl">Engineering leads, product managers y stakeholders con los que he trabajado.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <blockquote class="bg-white border border-borderline rounded-2xl p-8 flex flex-col h-full">
            <p class="text-base text-midnight leading-relaxed italic flex-1">
              "Yeison transformó nuestro checkout. De 12 pasos a 4. Revenue aumentó directo, sin necesidad de A/B tests adicionales."
            </p>
            <footer class="flex items-center gap-3 mt-6 pt-6 border-t border-borderline">
              <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-black text-sm shrink-0" aria-hidden="true">CM</div>
              <div>
                <cite class="block text-sm font-bold text-midnight not-italic">Carlos Mendoza</cite>
                <span class="block text-xs text-slate-700">CEO · Continental Assist</span>
              </div>
            </footer>
          </blockquote>

          <blockquote class="bg-white border border-borderline rounded-2xl p-8 flex flex-col h-full">
            <p class="text-base text-midnight leading-relaxed italic flex-1">
              "Su enfoque en el Coordinador como superusuario cambió la arquitectura completa. Redujo tiempos de gestión a la mitad en producción."
            </p>
            <footer class="flex items-center gap-3 mt-6 pt-6 border-t border-borderline">
              <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-black text-sm shrink-0" aria-hidden="true">MG</div>
              <div>
                <cite class="block text-sm font-bold text-midnight not-italic">Dra. María González</cite>
                <span class="block text-xs text-slate-700">Cardiología · Xentral Health</span>
              </div>
            </footer>
          </blockquote>

          <blockquote class="bg-white border border-borderline rounded-2xl p-8 flex flex-col h-full">
            <p class="text-base text-midnight leading-relaxed italic flex-1">
              "Lo que más valoro: prototipos en HTML, no en Figma. El ciclo de feedback pasó de días a horas. Cambió cómo iteramos."
            </p>
            <footer class="flex items-center gap-3 mt-6 pt-6 border-t border-borderline">
              <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-black text-sm shrink-0" aria-hidden="true">DR</div>
              <div>
                <cite class="block text-sm font-bold text-midnight not-italic">Diego Ramírez</cite>
                <span class="block text-xs text-slate-700">Engineering Lead · Continental Assist</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div class="fade-in">
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-6">Disponible desde abril 2026</p>
          <h2 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            ¿
            <span class="bg-gradient-to-r from-[#0071e3] to-white bg-clip-text text-transparent">Construimos</span>
            algo juntos?
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            30 min de discovery. Cotización en 24h. Empezamos en 1 semana.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ButtonPrimary to="/contacto" variant="accent" size="lg">
              <template #icon>
                <Mail :size="18" />
              </template>
              Conversemos
            </ButtonPrimary>
            <ButtonPrimary to="/contacto" variant="secondary" size="lg">
              Agendar discovery
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { ArrowRight, Mail } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import ButtonPrimary from '@/components/primitives/ButtonPrimary.vue'

useScrollAnimations()
</script>