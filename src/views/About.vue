<template>
  <div class="view-wrapper">
    <!-- HERO SECTION -->
    <AuroraBg variant="hero" class="about-hero section">
      <div class="container relative z-10">
        <div class="flex justify-center md:justify-start mb-8 fade-in">
          <AvailabilityBadge text="Disponible para nuevos proyectos · Bogotá" variant="light" />
        </div>
        <div class="about-hero-grid md:grid-cols-2 md:gap-12 items-center">
          <div class="about-hero-content fade-in">
            <span class="label text-primary">Product Designer · Bogotá</span>
            <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-midnight mb-6">
              Diseño
              <span class="text-gradient-primary">productos</span>
              que el negocio defiende con
              <span class="font-light italic text-primary">números</span>
            </h1>
            <p class="text-lg md:text-xl text-body mt-6 max-w-lg leading-relaxed">
              +4x ingresos. 0.1% → 12% retención. Resultados que defiendo con datos.
            </p>
            <div class="about-meta">
              <span class="about-meta-item">
                <MapPin :size="16" />
                Bogotá, Colombia
              </span>
              <span class="about-meta-item">
                <GraduationCap :size="16" />
                Máster UX/UI — España
              </span>
            </div>
            <div class="about-actions">
              <ButtonPrimary to="/contacto" variant="primary">
                <template #icon>
                  <Mail :size="18" />
                </template>
                Agendar llamada
              </ButtonPrimary>
              <CVButton variant="secondary" label="Descargar CV" />
            </div>
          </div>
          <div class="about-photo-wrapper fade-in stagger-2 md:ml-auto">
            <div class="about-photo-frame rounded-2xl overflow-hidden shadow-glow-primary">
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
            <span class="font-display text-5xl md:text-7xl font-black text-highlight tracking-tighter block leading-[0.85]">+4x</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Ingresos en e-commerce</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-highlight tracking-tighter block leading-[0.85]">4+</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Años de experiencia</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-highlight tracking-tighter block leading-[0.85]">10+</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Proyectos end-to-end</span>
          </div>
          <div class="text-center">
            <span class="font-display text-5xl md:text-7xl font-black text-highlight tracking-tighter block leading-[0.85]">2</span>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3 block">Apps en producción</span>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- EXPERIENCE SECTION -->
    <section id="experiencia" class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Trayectoria</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Experiencia Profesional</h2>
          <p class="text-lg text-body max-w-2xl">De freelance a producto. Una evolución hacia diseño con mirada de sistema, decisiones documentadas y trabajo cercano con desarrollo.</p>
        </div>

        <ExperienceTimeline :items="experienceItems" />
      </div>
    </section>

    <!-- ABOUT IMAGE SECTION -->
    <section class="section about-visual-section">
      <div class="container">
        <div class="about-visual-grid fade-in">
          <div class="about-visual-item">
            <img src="/assets/images/about/about-collaboration.jpg" alt="Trabajo colaborativo en diseño" loading="lazy" width="600" height="400">
          </div>
          <div class="about-visual-item">
            <img src="/assets/images/about/about-design.jpg" alt="Diseño de interfaces moderno" loading="lazy" width="600" height="400">
          </div>
          <div class="about-visual-item">
            <img src="/assets/images/about/about-process.jpg" alt="Proceso de diseño UX" loading="lazy" width="600" height="400">
          </div>
        </div>
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

    <!-- EDUCATION SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Formación</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Educación y Cursos</h2>
          <p class="text-lg text-body max-w-2xl">De diseño gráfico a producto: una formación que siguió al foco, no al revés.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
          <div class="card-elevated--violet p-8 md:p-10 flex items-start gap-5">
            <div class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap :size="22" class="text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-midnight text-base mb-1">Máster en Diseño UX/UI</h4>
              <p class="text-sm text-body">Universidad Internacional de La Rioja – España</p>
              <span class="text-xs font-medium text-slate-400 mt-1 block">2023–2024</span>
            </div>
          </div>

          <div class="card-elevated--emerald p-8 md:p-10 flex items-start gap-5">
            <div class="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
              <Palette :size="22" class="text-secondary" />
            </div>
            <div>
              <h4 class="font-bold text-midnight text-base mb-1">Diseño Gráfico Profesional</h4>
              <p class="text-sm text-body">Escuela de Artes y Letras – Bogotá</p>
              <span class="text-xs font-medium text-slate-400 mt-1 block">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Stack</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Cómo trabajo</h2>
          <p class="text-lg text-body max-w-2xl">6 categorías de capacidades. Diseño productos con visión integral, del problema a la implementación.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          <SkillPillar
            title="UX/UI Design"
            description="Interfaces que priorizan claridad y conversión."
            :tags="['Figma', 'Adobe XD', 'User flows', 'Wireframes', 'Prototyping', 'Design System']"
            :icon="PenTool"
            color="violet"
          />
          <SkillPillar
            title="Research & CRO"
            description="Decisiones validadas con datos, no con opinión."
            :tags="['Google Analytics', 'Microsoft Clarity', 'Hotjar', 'A/B Testing', 'User research', 'Heuristics']"
            :icon="BarChart2"
            color="blue"
          />
          <SkillPillar
            title="Product"
            description="Discovery, métricas, estrategia. Diseño el problema entero."
            :tags="['Product Discovery', 'User Personas', 'Benchmarking', 'Priorización', 'Métricas', 'Roadmap']"
            :icon="Compass"
            color="emerald"
          />
          <SkillPillar
            title="Metodologías"
            description="Procesos iterativos y validados con el equipo."
            :tags="['Design Thinking', 'Lean UX', 'Design Sprints', 'Agile/Scrum', 'DCU', 'Jobs To Be Done']"
            :icon="Workflow"
            color="amber"
          />
          <SkillPillar
            title="Frontend Bridge"
            description="Hablo el idioma de desarrollo. Figma → código sin fricción."
            :tags="['HTML/CSS', 'Vue.js', 'Tailwind', 'Figma to code', 'Dev collaboration', 'QA review']"
            :icon="Code2"
            color="violet"
          />
          <SkillPillar
            title="IA & Agentic"
            description="Diseño y prototipado asistido con IA para iterar más rápido."
            :tags="['Prompt Engineering', 'Claude', 'ChatGPT', 'Cursor', 'Figma AI', 'Validación asistida']"
            :icon="Sparkles"
            color="blue"
          />
        </div>
      </div>
    </section>

    <!-- STACK SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Herramientas</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-3">Stack del día a día</h2>
          <p class="text-lg text-body max-w-2xl">Las que uso para diseñar, medir, prototipar y entregar.</p>
        </div>

        <StackWithLogos :tools="stackTools" />
      </div>
    </section>

    <!-- CTA SECTION -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          ¿
          <span class="text-gradient-mixed">Trabajamos</span>
          juntos?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Disponible para nuevos proyectos. 30 min de discovery, respuesta en 24h.
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
    </AuroraBg>
  </div>
</template>

<script setup>
import { MapPin, GraduationCap, Palette, BarChart2, Code2, PenTool, Mail, Compass, Workflow, Sparkles } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import ButtonPrimary from '@/components/primitives/ButtonPrimary.vue'
import AvailabilityBadge from '@/components/AvailabilityBadge.vue'
import CVButton from '@/components/CVButton.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import PrinciplesSection from '@/components/PrinciplesSection.vue'
import SkillPillar from '@/components/SkillPillar.vue'
import StackWithLogos from '@/components/StackWithLogos.vue'

useScrollAnimations()

const experienceItems = [
  {
    period: 'Ago 2025 – Actualidad',
    current: true,
    role: 'Product Designer (UX/UI)',
    company: 'Continental Assist',
    description: 'Lidero el diseño end-to-end de e-commerce y apps nativas de asistencia en viaje. Métricas auditables, decisiones con datos.',
    achievements: [
      'E-commerce: 0.82% → 3.8% conversión en 3 meses (+4x ingresos, 2K → 9K USD/mes)',
      'App nativa: 0 → producción. Telemedicina, vouchers y reembolsos centralizados',
      'Definición de arquitectura, user flows y experiencia con research + analytics'
    ],
    skills: ['UX Research', 'UI Design', 'Prototyping', 'A/B Testing', 'Mobile-First']
  },
  {
    period: 'Feb 2024 – Jun 2024',
    role: 'Diseñador UX/UI',
    company: 'ASSA ABLOY (YALE)',
    description: 'Diseño de app mobile para cerraduras inteligentes IoT en 5 países.',
    achievements: [
      'Validación con 12 usuarios reales en 5 meses',
      'Sistema de diseño escalable para línea de productos IoT'
    ],
    skills: ['IoT Design', 'Mobile App', 'Design System', 'User Testing']
  },
  {
    period: 'Feb 2021 – Ago 2025',
    role: 'Diseñador Gráfico',
    company: 'Azzorti (Dupree)',
    description: 'Identidad visual y campañas en 5 países. Branding, redes y material impreso.',
    achievements: [
      'Estandarización de marca en 5 mercados',
      'Material impreso, packaging y campañas digitales'
    ],
    skills: ['Branding', 'Social Media', 'Print', 'Packaging']
  }
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