<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
    <AuroraBg variant="hero" class="about-hero section">
      <div class="container relative z-10">
        <div class="about-hero-grid md:grid-cols-2 md:gap-12 items-center">
          <div class="about-hero-content fade-in">
            <span class="label text-violet-600">Product Designer · Bogotá</span>
            <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-950 mb-6">
              Diseño
              <span class="text-gradient-violet">productos</span>
              que el negocio defiende con
              <span class="font-light italic text-violet-600">números</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-600 mt-6 max-w-lg leading-relaxed drop-cap">
              Product Designer con Maestría en UX/UI. Convierto complejidad en flujos medibles.
            </p>
            <div class="about-meta">
              <span class="about-meta-item">
                <MapPin :size="16" />
                Bogotá, Colombia
              </span>
              <span class="about-meta-item">
                <GraduationCap :size="16" />
                Master UX/UI - España
              </span>
            </div>
            <div class="about-actions">
              <a href="/assets/cv-yeison-alfonso.html" target="_blank" class="btn btn-primary">
                <Download :size="18" />
                Descargar CV
              </a>
              <router-link to="/contacto" class="btn btn-secondary">
                <Mail :size="18" />
                Contactar
              </router-link>
            </div>
          </div>
          <div class="about-photo-wrapper fade-in stagger-2 md:ml-auto">
            <div class="about-photo-frame rounded-2xl overflow-hidden shadow-glow-violet">
              <img src="/assets/images/about/yeison-profile.png" alt="Yeison Alfonso - Product Designer UX/UI" class="about-photo" width="600" height="750" fetchpriority="high" decoding="async">
            </div>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- IMPACT METRICS - RAW -->
    <AuroraBg variant="dark" class="py-24">
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-gradient-blue tracking-tighter block leading-[0.85]">+4x</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Ingresos en e-commerce</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-gradient-violet tracking-tighter block leading-[0.85]">4+</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Años de experiencia</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-emerald-400 tracking-tighter block leading-[0.85]">10+</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Proyectos end-to-end</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-white tracking-tighter block leading-[0.85]">2</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Apps en producción</span>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- EXPERIENCE SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Trayectoria</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Experiencia Profesional</h2>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <div class="card-elevated--violet p-8 md:p-10">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-lg font-bold text-slate-900">Continental Assist</h3>
              <span class="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Actual</span>
            </div>
            <p class="text-sm font-semibold text-violet-700 mb-2">Product Designer</p>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">De 0.82% a 3.8% de conversión. Lidero el rediseño mobile-first de la plataforma de asistencia.</p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">UX Research</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">UI Design</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Prototyping</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">A/B Testing</span>
            </div>
          </div>

          <div class="card-elevated--blue p-8 md:p-10">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-lg font-bold text-slate-900">ASSA ABLOY (YALE)</h3>
              <span class="text-xs font-medium text-slate-400">Feb 2024 – Jun 2024</span>
            </div>
            <p class="text-sm font-semibold text-blue-700 mb-2">Diseñador UX/UI</p>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Diseñé la experiencia mobile de cerraduras inteligentes IoT. Testing con usuarios reales para validar cada flujo.</p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">IoT Design</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Mobile App</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Design System</span>
            </div>
          </div>

          <div class="card-elevated--emerald p-8 md:p-10">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-lg font-bold text-slate-900">Azzorti (Dupree)</h3>
              <span class="text-xs font-medium text-slate-400">Feb 2021 – Ago 2025</span>
            </div>
            <p class="text-sm font-semibold text-emerald-700 mb-2">Diseñador Gráfico</p>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Diseñé la identidad visual de la marca desplegada en 5 países. Gestión integral de branding, redes y material impreso.</p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Branding</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Social Media</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Print</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT IMAGE SECTION -->
    <section class="section about-visual-section">
      <div class="container">
        <div class="about-visual-grid fade-in">
          <div class="about-visual-item">
            <img src="/assets/images/about/about-collaboration.jpg" alt="Trabajo colaborativo en diseño" loading="lazy">
          </div>
          <div class="about-visual-item">
            <img src="/assets/images/about/about-design.jpg" alt="Diseño de interfaces moderno" loading="lazy">
          </div>
          <div class="about-visual-item">
            <img src="/assets/images/about/about-process.jpg" alt="Proceso de diseño UX" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Formación</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Educación</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card-elevated--violet p-8 md:p-10 flex items-start gap-5">
            <div class="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap :size="22" class="text-violet-600" />
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-base mb-1">Máster en Diseño UX/UI</h4>
              <p class="text-sm text-slate-600">Universidad Internacional de La Rioja – España</p>
              <span class="text-xs font-medium text-slate-400 mt-1 block">2023–2024</span>
            </div>
          </div>

          <div class="card-elevated--emerald p-8 md:p-10 flex items-start gap-5">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
              <Palette :size="22" class="text-emerald-600" />
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-base mb-1">Diseño Gráfico Profesional</h4>
              <p class="text-sm text-slate-600">Escuela de Artes y Letras – Bogotá</p>
              <span class="text-xs font-medium text-slate-400 mt-1 block">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Stack</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Habilidades</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
          <!-- UX/UI Design Pillar (Opción Principal) -->
          <div class="card-elevated--violet p-8 md:p-10">
            <div class="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <PenTool :size="22" class="text-violet-600" />
            </div>
            <h4 class="font-bold text-slate-900 text-base mb-4">UX/UI Design</h4>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Figma</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Adobe XD</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Research</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Architecture</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">User flows</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Wireframes</span>
              <span class="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Testing</span>
            </div>
          </div>

          <!-- Research Pillar (Opción Principal) -->
          <div class="card-elevated--blue p-8 md:p-10">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <BarChart2 :size="22" class="text-blue-600" />
            </div>
            <h4 class="font-bold text-slate-900 text-base mb-4">Research</h4>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Analytics</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">A/B Testing</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Clarity</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">User research</span>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Hotjar</span>
            </div>
          </div>

          <!-- Development Pillar (Opción Principal) -->
          <div class="card-elevated--emerald p-8 md:p-10">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <Code2 :size="22" class="text-emerald-600" />
            </div>
            <h4 class="font-bold text-slate-900 text-base mb-4">Development</h4>
            <div class="flex flex-wrap gap-2">
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">HTML/CSS</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Vue.js</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Figma to code</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Dev collab</span>
              <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-widest rounded-full">Prototyping</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          ¿Te
          <span class="text-gradient-mixed">sumas</span>?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Disponible para proyectos. Respondo en 24h.
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
            class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
          >
            <Download :size="18" />
            Descargar CV
          </a>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { MapPin, GraduationCap, Palette, BarChart2, Code2, PenTool, Mail, Download } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
useScrollAnimations()
</script>