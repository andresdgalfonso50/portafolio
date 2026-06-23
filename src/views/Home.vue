<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
    <AuroraBg variant="hero" class="home-hero section">
      <div class="w-full max-w-6xl mx-auto px-6 pt-10 pb-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <!-- Columna izquierda: texto + CTAs -->
          <div class="flex flex-col items-start fade-in">
            <span class="label block mb-5">Product Designer · Disponible abril 2026</span>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-6">
              Diseño productos que convierten usuarios en
              <span class="font-light italic text-primary">ingresos</span>.
            </h1>
            <p class="text-lg text-body mb-8 max-w-lg leading-relaxed">
              Estrategias UX y sistemas de diseño que eliminan fricción, aumentan conversión y escalan el negocio. Diseño basado en datos, validación rápida y prototipos funcionales en código.
            </p>
            <div class="flex flex-wrap gap-4 items-center mb-8">
              <ButtonPrimary variant="primary" @click="scrollToProyectos">
                Ver 3 casos de impacto
                <template #suffix>
                  <ArrowRight :size="18" />
                </template>
              </ButtonPrimary>
            </div>
            <!-- Especialidades como chips de alto valor -->
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">Especialidades</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">CRO & Analytics</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">E-commerce</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">Mobile Apps</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">Design Systems</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">IA aplicada a UX</span>
              <span class="px-3 py-1.5 bg-chip text-body text-xs font-bold rounded-full">Prototipos en Código</span>
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

    <!-- MÉTRICAS DESTACADAS — Con contexto antes → después -->
    <section class="w-full max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border border-borderline rounded-2xl px-6 py-10 md:px-10 bg-white">
        <div class="text-center">
          <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <TrendingUp :size="20" />
          </div>
          <span class="block font-display text-3xl md:text-4xl font-black text-highlight tracking-tighter leading-none tabular-nums">0.1% → 12%</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Retención día 7 en 5 meses</p>
        </div>
        <div class="text-center">
          <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <ShoppingCart :size="20" />
          </div>
          <span class="block font-display text-3xl md:text-4xl font-black text-highlight tracking-tighter leading-none tabular-nums">+4x</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Conversión en checkout web</p>
        </div>
        <div class="text-center">
          <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Smartphone :size="20" />
          </div>
          <span class="block font-display text-3xl md:text-4xl font-black text-highlight tracking-tighter leading-none tabular-nums">2</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Apps móviles en producción</p>
        </div>
        <div class="text-center">
          <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Users :size="20" />
          </div>
          <span class="block font-display text-3xl md:text-4xl font-black text-highlight tracking-tighter leading-none tabular-nums">+6K</span>
          <p class="text-sm text-slate-700 font-semibold mt-3 leading-snug">Usuarios impactados en 5 países</p>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="proyectos" class="w-full bg-surface py-24">
      <div class="container">
        <div class="mb-16 max-w-3xl mx-auto text-center">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">3 productos digitales diseñados para crecer con datos</h2>
          <p class="text-lg text-body mt-4">App móvil, e-commerce y telemedicina. Cada caso con métricas reales de negocio.</p>
        </div>

        <div class="space-y-20">
          <!-- Fila 1: Texto izquierda, mockup derecha -->
          <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-5 order-2 lg:order-1">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Continental Assist · App</span>
              <h3 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                Rediseño de la app móvil para mejorar la retención de usuarios
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Optimizamos la experiencia de Continental Assist logrando que los usuarios vuelvan de forma constante a la aplicación en sus primeros meses.
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
              <h3 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                Optimización del proceso de compra y cotización web
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Simplificamos el flujo de venta digital para multiplicar por cuatro las conversiones finalizadas con éxito.
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
              <h3 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-midnight mt-3 mb-4 leading-tight">
                Plataforma digital para agilizar la atención médica
              </h3>
              <p class="text-base text-body leading-relaxed mb-6">
                Diseñamos el ecosistema de telemedicina de Xentral Health, reduciendo a menos de la mitad el tiempo de espera de los pacientes.
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
              <ButtonPrimary to="/telemedicina" variant="secondary">
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
        <div class="section-header fade-in text-center">
          <span class="label">Metodología</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3 mx-auto">Del problema a la métrica.</h2>
          <p class="text-lg text-body max-w-2xl mx-auto">Un proceso iterativo para generar impacto medible. No es una receta rígida — es cómo convierto complejidad en decisiones que se sostienen.</p>
        </div>

        <!-- Flujo horizontal de 4 fases con conectores -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          <!-- Conector horizontal (solo desktop) -->
          <div class="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-borderline to-transparent" aria-hidden="true"></div>

          <!-- Fase 1 -->
          <article class="bg-white border border-borderline rounded-2xl p-7 flex flex-col items-start text-left relative">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Search :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">01</span>
            <h3 class="font-display text-lg font-bold text-midnight mb-2 leading-tight">Descubro</h3>
            <p class="text-xs text-slate-700 leading-relaxed">Identifico el cuello de botella que limita el crecimiento.</p>
          </article>

          <!-- Fase 2 -->
          <article class="bg-white border border-borderline rounded-2xl p-7 flex flex-col items-start text-left relative">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <ShoppingCart :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">02</span>
            <h3 class="font-display text-lg font-bold text-midnight mb-2 leading-tight">Decido</h3>
            <p class="text-xs text-slate-700 leading-relaxed">Priorizo hipótesis de mayor impacto para construir.</p>
          </article>

          <!-- Fase 3 -->
          <article class="bg-white border border-borderline rounded-2xl p-7 flex flex-col items-start text-left relative">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <ShieldCheck :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">03</span>
            <h3 class="font-display text-lg font-bold text-midnight mb-2 leading-tight">Valido</h3>
            <p class="text-xs text-slate-700 leading-relaxed">Pruebo soluciones rápidas antes de invertir en construir.</p>
          </article>

          <!-- Fase 4 -->
          <article class="bg-white border border-borderline rounded-2xl p-7 flex flex-col items-start text-left relative">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <TrendingUp :size="22" />
            </div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">04</span>
            <h3 class="font-display text-lg font-bold text-midnight mb-2 leading-tight">Escalo</h3>
            <p class="text-xs text-slate-700 leading-relaxed">Mido resultados, aprendo y optimizo de forma continua.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS — Diseño Apple minimalista con detalles de cuidado -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-white via-neutral-50/30 to-white">
      <div class="container">
        <div class="max-w-2xl fade-in">
          <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">Qué dicen de trabajar conmigo</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <!-- Testimonio 1: Juan Aldana -->
          <article class="relative bg-white border border-neutral-100 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <svg class="absolute top-6 right-6 w-7 h-7 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p class="text-base text-neutral-700 leading-relaxed relative z-10">
              Yeison no solo diseña interfaces excepcionales, sino que entiende la arquitectura del frontend. Su capacidad para estructurar componentes limpios en Vue y anticipar la viabilidad técnica acelera drásticamente el desarrollo en producción.
            </p>
            <footer class="mt-6 pt-5 border-t border-neutral-100">
              <cite class="block text-sm font-semibold text-neutral-900 not-italic">Juan Aldana</cite>
              <span class="block text-xs text-neutral-500 mt-0.5">Senior Dev</span>
            </footer>
          </article>

          <!-- Testimonio 2: Javier Prieto -->
          <article class="relative bg-white border border-neutral-100 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <svg class="absolute top-6 right-6 w-7 h-7 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p class="text-base text-neutral-700 leading-relaxed relative z-10">
              Trabajar con Yeison es asegurar un flujo de trabajo sin fricciones. Su rigurosidad de sus sistemas de diseño hacen que la transición de Figma a código sea exacta y eficiente.
            </p>
            <footer class="mt-6 pt-5 border-t border-neutral-100">
              <cite class="block text-sm font-semibold text-neutral-900 not-italic">Javier Prieto</cite>
              <span class="block text-xs text-neutral-500 mt-0.5">Senior Dev</span>
            </footer>
          </article>

          <!-- Testimonio 3: Nasly Walteros -->
          <article class="relative bg-white border border-neutral-100 rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <svg class="absolute top-6 right-6 w-7 h-7 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p class="text-base text-neutral-700 leading-relaxed relative z-10">
              La obsesión de Yeison por el detalle y la cobertura de casos de borde en UX reduce significativamente el volumen de bugs en las etapas de prueba. Su enfoque nativo en accesibilidad eleva el estándar de cualquier producto.
            </p>
            <footer class="mt-6 pt-5 border-t border-neutral-100">
              <cite class="block text-sm font-semibold text-neutral-900 not-italic">Nasly Walteros</cite>
              <span class="block text-xs text-neutral-500 mt-0.5">QA (Quality Assurance)</span>
            </footer>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-20 md:py-24">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div class="fade-in">
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-6">Disponible desde abril 2026</p>
          <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            ¿Tu producto pierde conversión
            <span class="bg-gradient-to-r from-[#0071e3] to-white bg-clip-text text-transparent">en cada paso</span>?
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            30 min de discovery. Diagnóstico del funnel en 24h. Empezamos en 1 semana.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ButtonPrimary to="/contacto" variant="accent" size="lg">
              <template #icon>
                <Mail :size="18" />
              </template>
              Conversemos
            </ButtonPrimary>
            <ButtonPrimary variant="secondary" size="lg" @click="scrollToProyectos">
              Ver 3 casos
              <template #suffix>
                <ArrowRight :size="18" />
              </template>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { ArrowRight, Mail, TrendingUp, ShoppingCart, Smartphone, Users, Search, ShieldCheck } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import ButtonPrimary from '@/components/primitives/ButtonPrimary.vue'

useScrollAnimations()

const scrollToProyectos = () => {
  const target = document.getElementById('proyectos')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>