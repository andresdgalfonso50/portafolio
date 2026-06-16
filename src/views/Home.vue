<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
<AuroraBg variant="hero" class="home-hero section">
  <div class="w-full max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
    <div class="flex justify-center mb-8 fade-in">
      <AvailabilityBadge text="Disponible para nuevos proyectos · Bogotá" variant="light" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div class="lg:col-span-7 flex flex-col items-start fade-in">
        <span class="label">Product Design Director</span>
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-6">
          Diseño de producto que
          <span class="font-light italic text-primary">escala</span>
          <span class="text-gradient-secondary">el negocio</span>
        </h1>
        <p class="text-lg text-body mb-10 max-w-lg leading-relaxed">
          Estrategia UX y sistemas de diseño de alto rendimiento enfocados en maximizar la conversión, retención y la eficiencia de producto. Métricas auditables en producción.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <ButtonPrimary href="#proyectos" variant="primary">
            Ver 3 casos
            <template #suffix>
              <ArrowRight :size="18" />
            </template>
          </ButtonPrimary>
          <CVButton variant="secondary" label="Descargar CV" />
          <ButtonPrimary
            href="https://wa.me/573125673243?text=Hola%20Yeison,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
            variant="secondary"
          >
            <template #icon>
              <MessageCircle :size="18" />
            </template>
            WhatsApp
          </ButtonPrimary>
        </div>
      </div>
      <div class="lg:col-span-5 flex items-center justify-end mt-12 lg:mt-0 fade-in stagger-2">
        <div class="relative">
          <img
            src="/assets/images/home/hero-home-celulares.png"
            alt="Diseño de producto digital - Interfaces móviles modernas"
            class="w-full object-cover relative z-10"
            fetchpriority="high"
            loading="eager"
            width="670" height="768" />
          <div class="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div class="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary"></div>
            <div class="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary"></div>
          </div>
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
    <div class="w-full max-w-6xl mx-auto px-6 mt-12 pt-8 pb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="+4x" label="Incremento en conversión" :icon="TrendingUp" />
        <StatCard value="4+" label="Años de experiencia líder" :icon="Briefcase" />
        <StatCard value="10+" label="Proyectos desplegados" :icon="Layers" />
        <StatCard value="2" label="Apps nativas en producción" :icon="Globe" />
      </div>
    </div>

    <!-- PROJECTS SECTION -->
    <section class="w-full bg-surface py-24 border-y border-borderline">
      <!-- MARQUEE — clientes y stack (decorativo: aria-hidden, contenido accesible abajo) -->
      <div class="mb-16" aria-hidden="true">
        <p class="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Clientes & Stack</p>
        <Marquee speed="35s" container-class="py-4">
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <Briefcase :size="20" class="text-slate-700" />
            <span class="font-display font-bold text-lg text-slate-700">Continental Assist</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-slate-700">YALE</span>
            <span class="text-xs font-semibold text-body uppercase tracking-wider">ASSA ABLOY</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-bold text-lg text-slate-700">Azzorti</span>
            <span class="text-xs font-semibold text-body uppercase tracking-wider">Dupree</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-slate-700" viewBox="0 0 38 57" fill="currentColor"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"/><path d="M19 9.5C19 4.25329 23.2533 0 28.5 0C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19C23.2533 19 19 14.7467 19 9.5Z"/></svg>
            <span class="font-display font-bold text-lg text-slate-700">Figma</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-secondary">Vue 3</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-secondary">Tailwind</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-bold text-lg text-slate-700">Notion</span>
          </div>
        </Marquee>
      </div>

      <div id="proyectos" class="container">
        <div class="mb-12 text-center">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">3 casos. 3 industrias. 1 método.</h2>
          <p class="text-lg text-body mt-4">App de viaje. E-commerce. Telemedicina. Métricas auditables en cada uno.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1: App Mobile -->
          <router-link to="/app" class="block">
            <article class="card-elevated--violet h-full flex flex-col">
              <div class="card-image">
                <img src="/assets/images/home/card-app.jpg" alt="App de asistencia al viajero - Continental Assist" loading="lazy" width="600" height="400" />
              </div>
              <div class="card-content">
                <span class="font-display text-3xl font-black text-primary tabular-nums">+11,900%</span>
                <h3>+11,900% conversión en canal digital</h3>
                <p>Rediseño del flujo transaccional y selector de planes reduciendo la tasa de abandono al 12% global.</p>
                <span class="card-cta-arrow">Ver caso <span aria-hidden="true">→</span></span>
              </div>
            </article>
          </router-link>

          <!-- Card 2: E-commerce -->
          <router-link to="/ecommerce" class="block">
            <article class="card-elevated--blue h-full flex flex-col">
              <div class="card-image">
                <img src="/assets/images/home/card-ecommerce.jpg" alt="Checkout de asistencia en viaje" loading="lazy" width="600" height="400" />
              </div>
              <div class="card-content">
                <span class="font-display text-3xl font-black text-primary tabular-nums">+4x</span>
                <h3>+4x incremento en checkout</h3>
                <p>Optimización de la arquitectura de información y consistencia UI implementando un sistema de diseño modular en 3 meses.</p>
                <span class="card-cta-arrow">Ver caso <span aria-hidden="true">→</span></span>
              </div>
            </article>
          </router-link>

          <!-- Card 3: Web App -->
          <router-link to="/app-web" class="block">
            <article class="card-elevated--emerald h-full flex flex-col">
              <div class="card-image">
                <img src="/assets/images/home/card-xentral.jpg" alt="Telemedicina urgente para viajeros" loading="lazy" width="600" height="400" />
              </div>
              <div class="card-content">
                <span class="font-display text-3xl font-black text-primary tabular-nums">-60%</span>
                <h3>-60% tiempo de espera en telemedicina</h3>
                <p>Simplificación del flujo crítico de conexión entre médico y paciente de 5 minutos a solo 2 minutos en entornos de crisis.</p>
                <span class="card-cta-arrow">Ver caso <span aria-hidden="true">→</span></span>
              </div>
            </article>
          </router-link>
        </div>
      </div>
    </section>

    <!-- DIFFERENTIAL SECTION -->
    <section class="section">
      <div class="container">
        <div class="mb-12 text-center">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">Cómo trabajo.</h2>
          <p class="text-lg text-body mt-4">4 principios que aplican en cada proyecto.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Card grande destacada — ocupa 3 filas a la izquierda -->
          <div class="lg:row-span-3 card-elevated--blue p-8 md:p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-8">
                <BarChart2 :size="24" />
              </div>
              <div class="font-display text-6xl md:text-7xl font-black text-highlight tracking-tighter leading-none mb-4 tabular-nums">+4x</div>
              <h3 class="text-2xl font-bold tracking-tight text-midnight mb-3">Conversión verificable</h3>
              <p class="text-base text-body leading-relaxed">0.82% → 3.8% en 3 meses. Dashboard público, métrica auditable por terceros.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-borderline">
              <p class="text-xs font-bold uppercase tracking-widest text-slate-400">Auditable</p>
              <p class="text-sm text-slate-700 font-semibold mt-1">Datos auditables. Resultados públicos.</p>
            </div>
          </div>

          <!-- 3 cards compactas -->
          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-5">
              <Layers :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Research que desafía</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Cada cambio se valida con usuarios reales. No diseño en el vacío.</p>
          </div>

          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-5">
              <Code2 :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Diseño que se construye</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Trabajo integrado con devs. Entrego Figma + guías de código.</p>
          </div>

          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-5">
              <Cpu :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Itero en días, no semanas</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Prototipos funcionales desde el día 1. Valido rápido, construyo seguro.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section id="proceso" class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Proceso</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Del problema a la métrica.</h2>
          <p class="text-lg text-body max-w-2xl">8 etapas. No es una receta rígida — es cómo convierto complejidad en decisiones que se sostienen.</p>
        </div>

        <ProcessSection :steps="processSteps" />
      </div>
    </section>

    <!-- PRINCIPLES SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Filosofía</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Cómo pienso el diseño.</h2>
          <p class="text-lg text-body max-w-2xl">4 valores que guían cada decisión, del brief al handoff.</p>
        </div>

        <PrinciplesSection :principles="principles" />
      </div>
    </section>

    <!-- STACK SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Stack</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Herramientas del día a día.</h2>
          <p class="text-lg text-body max-w-2xl">Las que uso para diseñar, medir, prototipar y entregar.</p>
        </div>

        <StackWithLogos :tools="stackTools" />
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div class="fade-in">
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-6">Disponible desde abril 2026</p>
          <h2 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            ¿
            <span class="text-gradient-mixed">Construimos</span>
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
            <CVButton variant="ghost" label="Descargar CV" />
          </div>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { ArrowRight, TrendingUp, Rocket, HeartPulse, Layers, BarChart2, Code2, Cpu, MessageCircle, Mail, Briefcase, Globe } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import StatCard from '@/components/primitives/StatCard.vue'
import Marquee from '@/components/primitives/Marquee.vue'
import ButtonPrimary from '@/components/primitives/ButtonPrimary.vue'
import AvailabilityBadge from '@/components/AvailabilityBadge.vue'
import CVButton from '@/components/CVButton.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import PrinciplesSection from '@/components/PrinciplesSection.vue'
import StackWithLogos from '@/components/StackWithLogos.vue'

useScrollAnimations()

const processSteps = [
  { title: 'Discovery', description: 'Entiendo el negocio, el usuario y las restricciones antes de diseñar nada.' },
  { title: 'Research', description: 'Hablo con usuarios reales y analizo datos para reemplazar suposiciones por evidencia.' },
  { title: 'Define', description: 'Sintetizo lo aprendido en un problema claro, accionable y priorizado por impacto.' },
  { title: 'Ideate', description: 'Genero varios caminos antes de comprometerme con uno. Divergir para luego converger.' },
  { title: 'Prototype', description: 'Bajo las ideas a prototipos navegables para validar rápido y barato.' },
  { title: 'Test', description: 'Pongo el diseño frente a usuarios reales y dejo que la evidencia decida.' },
  { title: 'Ship', description: 'Entrego UI de alta fidelidad y un sistema listo para desarrollo.' },
  { title: 'Measure', description: 'Mido el impacto real en producción y uso esos datos para la próxima iteración.' }
]

const principles = [
  {
    label: 'Producto',
    title: 'La pantalla es la punta; diseño el problema entero.',
    description: 'Discovery, métricas, negocio. La UI es la consecuencia, no el punto de partida.',
    color: 'violet'
  },
  {
    label: 'Confianza',
    title: 'Diseño donde el error cuesta dinero o reputación.',
    description: 'Checkout, salud, finanzas. La fricción se mide, no se discute.',
    color: 'blue'
  },
  {
    label: 'Sistemas',
    title: 'Diseño para escalar, no para una pantalla.',
    description: 'Componentes reutilizables, tokens, documentación. Velocidad sin deuda.',
    color: 'emerald'
  },
  {
    label: 'Evidencia',
    title: 'Decisiones que se defienden con datos.',
    description: 'Analytics, heatmaps, A/B tests. Lo que no se mide, no se mejora.',
    color: 'amber'
  }
]

const stackTools = [
  { name: 'Figma', icon: '/assets/logos/stack/figma.svg', bg: '#F24E1E' },
  { name: 'Notion', icon: '/assets/logos/stack/notion.svg', bg: '#000000' },
  { name: 'Vue 3', icon: '/assets/logos/stack/vue.svg', bg: '#4FC08D' },
  { name: 'Tailwind', icon: '/assets/logos/stack/tailwind.svg', bg: '#06B6D4' },
  { name: 'Analytics', icon: '/assets/logos/stack/google-analytics.svg', bg: '#E37400' },
  { name: 'Hotjar', icon: '/assets/logos/stack/hotjar.svg', bg: '#FD3A5C' },
  { name: 'Google Fonts', icon: '/assets/logos/stack/google-fonts.svg', bg: '#4285F4' },
  { name: 'GitHub', icon: '/assets/logos/stack/github.svg', bg: '#181717' },
  { name: 'Vercel', icon: '/assets/logos/stack/vercel.svg', bg: '#000000' },
  { name: 'Netlify', icon: '/assets/logos/stack/netlify.svg', bg: '#00C7B7' }
]
</script>