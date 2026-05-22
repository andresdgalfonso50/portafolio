<template>
  <main>
    <!-- HERO SECTION -->
    <section class="home-hero section">
      <div class="container max-w-[1440px]">
        <div class="home-hero-grid">
          <div class="home-hero-content fade-in">
            <span class="label">UX/UI Designer</span>
            <h1 class="home-title text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">Diseño productos digitales que venden</h1>
            <p class="home-tagline">Especialista en UX/UI con Maestría. +4x ingresos en e-commerce, apps publicadas y telemedicina. Resultados medibles, no opiniones.</p>
            <div class="home-hero-actions">
              <a href="#proyectos" class="btn btn-primary">
                Ver proyectos
                <ArrowRight :size="18" />
              </a>
              <router-link to="/contacto" class="btn btn-secondary">
                Contactar
                <MessageCircle :size="18" />
              </router-link>
              <a href="/assets/cv-yeison-alfonso.html" target="_blank" class="btn btn-outline">
                <Download :size="18" />
                Descargar CV
              </a>
            </div>
          </div>
          <div class="home-hero-visual fade-in stagger-2">
            <div class="hero-image-wrapper rounded-2xl overflow-hidden">
              <img src="/assets/images/home/hero-home.jpg" alt="Diseño de producto digital - Interface moderna" width="1400" height="800" fetchpriority="high" decoding="async">
            </div>
          </div>
        </div>
        <div class="scroll-indicator fade-in stagger-3">
          <span>Scroll</span>
          <ChevronsDown :size="20" />
        </div>
      </div>
    </section>

    <!-- TRUST SIGNALS -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-grid fade-in">
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 10.5-9.5 9.5-5-5L13 15.5"/></svg>
              Master UX/UI
            </span>
          </div>
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              +4x Conversión
            </span>
          </div>
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>
              Analytics Expert
            </span>
          </div>
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>
              Figma Expert
            </span>
          </div>
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              HTTPS/SSL Implementation
            </span>
          </div>
          <div class="trust-item">
            <span class="trust-badge">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              Mobile-First Design
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL PROOF / METRICS -->
    <section class="section metrics-section">
      <div class="container">
        <div class="metrics-grid fade-in">
          <div class="metric-item">
            <span class="metric-number">+4x</span>
            <span class="metric-text">De 2K a 9K USD/mes en e-commerce</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">4+</span>
            <span class="metric-text">Proyectos diseñados de 0 a producción</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">10+</span>
            <span class="metric-text">Proyectos end-to-end</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">2</span>
            <span class="metric-text">Apps en producción (iOS + Android)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="proyectos" class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Proyectos</span>
          <h2>Trabajo con impacto real</h2>
        </div>

        <div class="projects-gallery">
          <button class="gallery-arrow left hidden md:flex" @click="scrollGallery(-1)" aria-label="Anterior">
            <ChevronLeft :size="24" />
          </button>
          
          <div class="projects-slider" ref="gallerySlider">
            <router-link to="/app" class="project-slide">
              <div class="card">
                <div class="card-image">
                  <img src="/assets/images/thumbnails/thumb-app.jpg" alt="App mobile - Interfaz moderna" width="800" height="500" loading="lazy">
                  <span class="card-badge">App Mobile</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <h3>App de asistencia en viajes</h3>
                  <p>Wallet digital, telemedicina y cobertura internacional en una sola app.</p>
                  <div class="card-metric">
                    <Rocket :size="14" />
                    <span>2 apps en producción</span>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link to="/ecommerce" class="project-slide">
              <div class="card">
                <div class="card-image">
                  <img src="/assets/images/thumbnails/thumb-ecommerce.jpg" alt="Rediseño de e-commerce - Dashboard analytics" width="800" height="500" loading="lazy">
                  <span class="card-badge">E-commerce</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <h3>Rediseño de plataforma de asistencia</h3>
                  <p>Mobile-first, flujo optimizado y +4x ingresos en 6 meses.</p>
                  <div class="card-metric">
                    <TrendingUp :size="14" />
                    <span>+4x ingresos</span>
                  </div>
                </div>
              </div>
            </router-link>

            <router-link to="/xentral-health" class="project-slide">
              <div class="card">
                <div class="card-image">
                  <img src="/assets/images/thumbnails/thumb-xentral.jpg" alt="Xentral Health - Telemedicina para viajeros" width="800" height="500" loading="lazy">
                  <span class="card-badge">Telemedicina</span>
                  <div class="card-overlay">
                    <span class="card-cta">Ver caso de estudio →</span>
                  </div>
                </div>
                <div class="card-content">
                  <h3>Xentral Health — Telemedicina</h3>
                  <p>UX para momentos críticos: cuando un viajero necesita asistencia médica.</p>
                  <div class="card-metric">
                    <HeartPulse :size="14" />
                    <span>Diseño centrado en el usuario</span>
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
              v-for="(_, index) in 3" 
              :key="index"
              class="gallery-dot"
              :class="{ active: activeDot === index }"
              @click="scrollToSlide(index)"
              :aria-label="`Ir a proyecto ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- DIFFERENTIAL SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Cómo trabajo</span>
          <h2>Lo que me diferencia</h2>
        </div>

        <div class="differential-grid">
          <div class="differential-card card border-2 border-slate-100 p-10">
            <div class="differential-icon text-slate-900">
              <Layers :size="22" />
            </div>
            <h4>Decisiones basadas en datos</h4>
            <p>Cada pixel tiene un propósito. Diseño conectado a métricas de negocio.</p>
          </div>

          <div class="differential-card card border-2 border-slate-100 p-10">
            <div class="differential-icon text-slate-900">
              <BarChart2 :size="22" />
            </div>
            <h4>CRO con evidencia</h4>
            <p>Analytics y Clarity para optimizar conversión. Resultados verificables.</p>
          </div>

          <div class="differential-card card border-2 border-slate-100 p-10">
            <div class="differential-icon text-slate-900">
              <Code2 :size="22" />
            </div>
            <h4>Diseño que llega a producción</h4>
            <p>Colaboración directa con desarrollo. Sin excusas, sin "no se puede".</p>
          </div>

          <div class="differential-card card border-2 border-slate-100 p-10">
            <div class="differential-icon text-slate-900">
              <Cpu :size="22" />
            </div>
            <h4>Prototipado rápido con IA</h4>
            <p>Figma + IA para iterar y validar ideas en horas, no semanas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="section section-alt home-cta">
      <div class="container">
        <div class="cta-box fade-in">
          <h2>¿Hablamos?</h2>
          <p>¿Tienes un proyecto donde el diseño puede generar impacto? Conversemos.</p>
          <router-link to="/contacto" class="btn btn-accent">
            <Mail :size="18" />
            Contactar
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronsDown, ChevronLeft, ChevronRight, TrendingUp, Rocket, HeartPulse, Layers, BarChart2, Code2, Cpu, MessageCircle, Mail, Download } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

useScrollAnimations()

const gallerySlider = ref(null)
const hasScrolled = ref(false)
const activeDot = ref(0)

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
    activeDot.value = Math.min(newActiveDot, 2)
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