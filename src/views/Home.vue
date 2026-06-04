<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
    <AuroraBg variant="hero" class="home-hero section pt-12 md:pt-16">
      <div class="container max-w-[1440px] relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div class="home-hero-content col-span-1 lg:col-span-6 fade-in lg:pr-8">
            <span class="label">Product Designer</span>
            <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-950 mb-6">
              Diseño
              <span class="font-light italic text-violet-600">productos</span>
              que generan
              <span class="text-gradient-blue">dinero</span>
            </h1>
            <p class="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed drop-cap">
              +4x ingresos en e-commerce. -50% abandono en apps de viaje. Resultados medibles, no pitches.
            </p>
            <div class="flex flex-wrap gap-4 items-center">
              <a
                href="#proyectos"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 text-white font-semibold text-sm rounded-full shadow-glow-violet hover:shadow-glow-violet-lg hover:bg-violet-700 hover:scale-[1.02] transition-all duration-200"
              >
                Ver proyectos
                <ArrowRight :size="18" />
              </a>
              <router-link
                to="/contacto"
                class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-950 font-semibold text-sm rounded-full border border-slate-200 hover:border-slate-300 hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle :size="18" />
                Contactar
              </router-link>
            </div>
          </div>
          <div class="col-span-1 lg:col-span-6 flex items-center justify-end mt-12 lg:mt-0 fade-in stagger-2">
            <div class="relative">
              <img
                src="/assets/images/home/hero-home-celulares.png"
                alt="Diseño de producto digital - Interfaces móviles modernas"
                class="w-full object-cover relative z-10"
                fetchpriority="high"
                loading="eager"
              />
              <!-- Subtle glow behind image -->
              <div class="absolute inset-0 -z-10 blur-3xl opacity-30">
                <div class="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-violet-500"></div>
                <div class="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- SKILL TAGS -->
    <div class="flex flex-wrap justify-center gap-3 w-full max-w-4xl mx-auto mt-12 mb-8">
      <span class="px-4 py-2 bg-slate-100 text-slate-700 font-semibold text-sm rounded-full">UX/UI Design</span>
      <span class="px-4 py-2 bg-slate-100 text-slate-700 font-semibold text-sm rounded-full">CRO & Analytics</span>
      <span class="px-4 py-2 bg-slate-950 text-white font-semibold text-sm rounded-full">Mobile-First</span>
      <span class="px-4 py-2 bg-slate-100 text-slate-700 font-semibold text-sm rounded-full">Figma Advanced</span>
      <span class="px-4 py-2 bg-slate-100 text-slate-700 font-semibold text-sm rounded-full">Prototipado Rápido</span>
    </div>

    <!-- METRICS -->
    <div class="w-full max-w-6xl mx-auto px-6 mt-12 pt-8 pb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value="+4x" label="Ingresos generados" accent="blue" :icon="TrendingUp" />
        <StatCard value="4+" label="Años de experiencia" accent="violet" :icon="Briefcase" />
        <StatCard value="10+" label="Proyectos end-to-end" accent="emerald" :icon="Layers" />
        <StatCard value="2" label="Apps en producción" accent="slate" :icon="Globe" />
      </div>
    </div>

    <!-- PROJECTS SECTION -->
    <section class="w-full bg-slate-50 py-24 border-y border-slate-100">
      <!-- MARQUEE — clientes y stack -->
      <div class="mb-16">
        <p class="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Clientes & Stack</p>
        <Marquee speed="35s" container-class="py-4">
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <Briefcase :size="20" class="text-slate-700" />
            <span class="font-display font-bold text-lg text-slate-700">Continental Assist</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-slate-700">YALE</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">ASSA ABLOY</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-bold text-lg text-slate-700">Azzorti</span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dupree</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-slate-700" viewBox="0 0 38 57" fill="currentColor"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38C14.7467 38 19 42.2533 19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"/><path d="M19 9.5C19 4.25329 23.2533 0 28.5 0C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19C23.2533 19 19 14.7467 19 9.5Z"/></svg>
            <span class="font-display font-bold text-lg text-slate-700">Figma</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-emerald-600">Vue 3</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-black text-lg text-sky-500">Tailwind</span>
          </div>
          <div class="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <span class="font-display font-bold text-lg text-slate-700">Notion</span>
          </div>
        </Marquee>
      </div>

      <div class="max-w-7xl mx-auto px-6">
        <section id="proyectos" class="section section-alt">
          <div class="container">
        <div class="w-full max-w-7xl mx-auto px-6 mb-12">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">Casos con resultados medibles</h2>
          <p class="text-lg text-slate-600 mt-4">Cada proyecto vinculado a una métrica de negocio.</p>
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
                  <span class="card-badge bg-violet-600 text-white border-0">App Mobile</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-violet-600 tabular-nums">+12,000%</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">retención</span>
                  </div>
                  <h3>App de asistencia en viajes</h3>
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
                  <span class="card-badge bg-blue-600 text-white border-0">E-commerce</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-blue-600 tabular-nums">+4x</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">ingresos</span>
                  </div>
                  <h3>Rediseño de plataforma de asistencia</h3>
                  <p>De 0.82% a 3.8% de conversión en 3 meses. Resultado auditado y público.</p>
                  <div class="card-metric">
                    <TrendingUp :size="14" />
                    <span>+4x ingresos en 3 meses</span>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link to="/app-web" class="project-slide">
              <div class="card-elevated--emerald bg-white overflow-hidden">
                <div class="card-image">
                  <BrowserMockup src="/assets/images/xentral-health/card-xentral.jpg" alt="Xentral Health" />
                  <span class="card-badge bg-emerald-600 text-white border-0">Health Tech</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="font-display text-2xl font-black text-emerald-600 tabular-nums">-60%</span>
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400">tiempo</span>
                  </div>
                  <h3>Xentral Health</h3>
                  <p>Diseñado para crisis: 6 semanas para llevar atención médica a viajeros en el extranjero.</p>
                  <div class="card-metric">
                    <HeartPulse :size="14" />
                    <span>Diseño para crisis</span>
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
            <span>Scroll para explorar</span>
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
    </div>
    </section>

    <!-- DIFFERENTIAL SECTION -->
    <section class="section">
      <div class="container">
        <div class="w-full max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 class="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">Por qué me contratan</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Card grande destacada -->
          <div class="lg:row-span-2 card-elevated--blue p-8 md:p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-8">
                <BarChart2 :size="24" />
              </div>
              <div class="font-display text-6xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-4 tabular-nums">+4x</div>
              <h3 class="text-2xl font-bold tracking-tight text-slate-950 mb-3">CRO verificable</h3>
              <p class="text-base text-slate-600 leading-relaxed">De 0.82% a 3.8% de conversión en 3 meses. Dashboard público disponible para auditoría.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-slate-200">
              <p class="text-xs font-bold uppercase tracking-widest text-slate-400">Auditable</p>
              <p class="text-sm text-slate-700 font-semibold mt-1">Resultados publicados, no promesas.</p>
            </div>
          </div>

          <!-- 3 cards compactas -->
          <div class="card-flat p-6 md:p-8">
            <div class="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 mb-5">
              <Layers :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-slate-950 mb-2">Decisiones con datos</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Cada decisión respaldada por un dato de uso real. Sin suposiciones.</p>
          </div>

          <div class="card-flat p-6 md:p-8">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
              <Code2 :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-slate-950 mb-2">Del diseño al código</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Trabajo directo con desarrollo. El diseño que entrego es el que se construye.</p>
          </div>

          <div class="card-flat p-6 md:p-8">
            <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-5">
              <Cpu :size="20" />
            </div>
            <h3 class="text-lg font-bold tracking-tight text-slate-950 mb-2">Prototipado a velocidad</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Itero y valido soluciones en horas. Testing con usuarios desde el día 1.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div class="fade-in">
          <p class="text-xs font-bold uppercase tracking-widest text-violet-300 mb-6">Disponible para nuevos proyectos</p>
          <h2 class="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            ¿Listos para
            <span class="text-gradient-mixed">+4x</span>?
          </h2>
          <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Proyectos con impacto medible. Sin fluff. Respuesta en menos de 24h.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <router-link
              to="/contacto"
              class="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-full shadow-glow-violet-lg hover:shadow-glow-violet hover:bg-violet-500 hover:scale-[1.02] transition-all duration-200"
            >
              <Mail :size="18" />
              Iniciar conversación
            </router-link>
            <a
              href="/assets/cv-yeison-alfonso.html"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
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
  { path: '/app', label: 'App de asistencia' },
  { path: '/ecommerce', label: 'E-commerce' },
  { path: '/app-web', label: 'App Web' }
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