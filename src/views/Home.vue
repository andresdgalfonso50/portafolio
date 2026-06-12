<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
<AuroraBg variant="hero" class="home-hero section">
  <div class="w-full max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div class="lg:col-span-7 flex flex-col items-start fade-in">
        <span class="label">Product Designer</span>
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-6">
          Diseño
          <span class="font-light italic text-primary">productos</span>
          que generan
          <span class="text-gradient-secondary">ingresos</span>
        </h1>
        <p class="text-lg text-body mb-10 max-w-lg leading-relaxed drop-cap">
          +4x conversión en e-commerce. -50% abandono en apps de viaje. Métricas auditables, no pitches.
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <a
            href="#proyectos"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-midnight text-white font-semibold text-sm rounded-full hover:bg-primary transition-colors duration-300"
          >
            Ver 3 casos
            <ArrowRight :size="18" />
          </a>
          <a
            href="https://wa.me/573125673243?text=Hola%20Yeison,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-midnight font-semibold text-sm rounded-full border border-borderline hover:border-midnight transition-colors duration-300"
          >
            <MessageCircle :size="18" />
            Contactar
          </a>
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value="+4x" label="Ingresos generados" accent="highlight" :icon="TrendingUp" />
        <StatCard value="4+" label="Años de experiencia" accent="highlight" :icon="Briefcase" />
        <StatCard value="10+" label="Proyectos end-to-end" accent="highlight" :icon="Layers" />
        <StatCard value="2" label="Apps en producción" accent="highlight" :icon="Globe" />
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
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">+12,000% de retención. +4x ingresos. -60% tiempo.</h2>
          <p class="text-lg text-body mt-4">3 proyectos, cada uno con métrica de negocio verificable.</p>
        </div>

        <div class="projects-gallery">
          <button class="gallery-arrow left hidden md:flex" @click="scrollGallery(-1)" aria-label="Anterior">
            <ChevronLeft :size="24" />
          </button>
          
          <div class="projects-slider" ref="gallerySlider">
            <router-link to="/app" class="project-slide">
              <div class="card-elevated--violet bg-white overflow-hidden">
                <div class="card-image">
                  <IPhoneMockup src="/assets/images/app/card-app.jpg" alt="App mobile - Interfaz moderna" />
                  <span class="card-badge bg-primary text-white border-0">App Mobile</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-primary tabular-nums">+12,000%</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">retención</span>
                  </div>
                  <h3>Asistencia en ruta</h3>
                  <p>De 97% de abandono a 2 apps en producción. Retención día 7: 0.1% → 12%.</p>
                  <div class="card-metric">
                    <Rocket :size="14" />
                    <span>2 apps en producción</span>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link to="/ecommerce" class="project-slide">
              <div class="card-elevated--blue bg-white overflow-hidden">
                <div class="card-image">
                  <BrowserMockup src="/assets/images/ecommerce/card-ecommerce.jpg" alt="Rediseño de e-commerce - Dashboard analytics" />
                  <span class="card-badge bg-secondary text-white border-0">E-commerce</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-secondary tabular-nums">+4x</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">ingresos</span>
                  </div>
                  <h3>Checkout que convierte</h3>
                  <p>De 0.82% a 3.8% de conversión en 3 meses. Resultado auditado y público.</p>
                  <div class="card-metric">
                    <TrendingUp :size="14" />
                    <span>0.82% → 3.8% en 3 meses</span>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link to="/app-web" class="project-slide">
              <div class="card-elevated--emerald bg-white overflow-hidden">
                <div class="card-image">
                  <BrowserMockup src="/assets/images/xentral-health/card-xentral.jpg" alt="Xentral Health" />
                  <span class="card-badge bg-secondary text-white border-0">Health Tech</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-secondary tabular-nums">-60%</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">tiempo</span>
                  </div>
                  <h3>Telemedicina de alta velocidad</h3>
                  <p>De 5 minutos a 2. Atención médica para viajeros, 6 semanas de diseño.</p>
                  <div class="card-metric">
                    <HeartPulse :size="14" />
                    <span>5 min → 2 min respuesta</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <button class="gallery-arrow right hidden md:flex" @click="scrollGallery(1)" aria-label="Siguiente">
            <ChevronRight :size="24" />
          </button>

          <!-- Scroll Hint -->
          <div class="scroll-hint" :class="{ hidden: hasScrolled }">
            <span>Desliza para ver los 3 casos</span>
            <ChevronRight :size="20" class="scroll-hint-arrow" />
          </div>

          <!-- Gallery Dots -->
          <div class="gallery-dots">
            <button 
              v-for="(project, index) in projects" 
              :key="project.path"
              class="gallery-dot"
              :class="{ active: activeDot === index }"
              @click="scrollToSlide(index)"
              :aria-label="`Ir a ${project.label}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- DIFFERENTIAL SECTION -->
    <section class="section">
      <div class="container">
        <div class="mb-12 text-center">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-midnight">4 razones. 1 métrica: resultado.</h2>
          <p class="text-lg text-body mt-4">Lo que traigo a cada proyecto, en una línea cada uno.</p>
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
              <p class="text-sm text-slate-700 font-semibold mt-1">Sin promesas. Con números publicados.</p>
            </div>
          </div>

          <!-- 3 cards compactas -->
          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-5">
              <Layers :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Decisiones con datos</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Cada cambio se prueba con usuarios reales. Sin suposiciones.</p>
          </div>

          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-5">
              <Code2 :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Del diseño al código</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Trabajo directo con desarrollo. Entrego lo que se construye.</p>
          </div>

          <div class="card-flat p-7 md:p-9 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-5">
              <Cpu :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-midnight mb-2">Prototipado en horas</h3>
            <p class="text-sm text-body leading-relaxed mt-auto">Itero y valido con usuarios desde el día 1. No en semanas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div class="fade-in">
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-6">Disponible desde abril 2026</p>
          <h2 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            ¿Listos para
            <span class="text-gradient-mixed">+4x</span>?
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            30 min de discovery. Cotización en 24h. Empezamos en 1 semana.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <router-link
              to="/contacto"
              class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-white hover:text-midnight transition-colors duration-300"
            >
              <Mail :size="18" />
              Agendar discovery
            </router-link>
            <a
              href="/assets/cv-yeison-alfonso.html"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:bg-white hover:text-midnight transition-colors duration-300"
            >
              <Download :size="18" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Rocket, HeartPulse, Layers, BarChart2, Code2, Cpu, MessageCircle, Mail, Download, Briefcase, Globe } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import HeroFloating from '@/components/HeroFloating.vue'
import IPhoneMockup from '@/components/IPhoneMockup.vue'
import BrowserMockup from '@/components/BrowserMockup.vue'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import StatCard from '@/components/primitives/StatCard.vue'
import SectionLabel from '@/components/primitives/SectionLabel.vue'
import Marquee from '@/components/primitives/Marquee.vue'

useScrollAnimations()

const gallerySlider = ref(null)
const hasScrolled = ref(false)
const activeDot = ref(0)
const projects = ref([
  { path: '/app', label: 'App de Asistencia en Viajes' },
  { path: '/ecommerce', label: 'E-commerce' },
  { path: '/app-web', label: 'Xentral Health' }
])

const scrollGallery = (direction) => {
  if (gallerySlider.value) {
    const scrollAmount = 400
    gallerySlider.value.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    })
  }
}

const scrollToSlide = (index) => {
  if (gallerySlider.value) {
    const slideWidth = gallerySlider.value.offsetWidth
    gallerySlider.value.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    })
    activeDot.value = index
  }
}

const handleGalleryScroll = () => {
  if (gallerySlider.value) {
    if (gallerySlider.value.scrollLeft > 0) {
      hasScrolled.value = true
    }
    const slideWidth = gallerySlider.value.offsetWidth
    const newActiveDot = Math.round(gallerySlider.value.scrollLeft / slideWidth)
    activeDot.value = Math.min(newActiveDot, projects.value.length - 1)
  }
}

onMounted(() => {
  if (gallerySlider.value) {
    gallerySlider.value.addEventListener('scroll', handleGalleryScroll)
  }
})

onUnmounted(() => {
  if (gallerySlider.value) {
    gallerySlider.value.removeEventListener('scroll', handleGalleryScroll)
  }
})
</script>