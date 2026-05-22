<template>
  <main>
    <!-- HERO SECTION -->
    <section class="about-hero section">
      <div class="container">
        <div class="about-hero-grid md:grid-cols-2 md:gap-12 items-center">
          <div class="about-hero-content fade-in">
            <span class="label">Sobre mí</span>
            <h1 class="about-name">Yeison Alfonso</h1>
            <p class="about-tagline text-xl md:text-2xl leading-relaxed">Product Designer con Maestría en UX/UI. Especialidad en conversión y experiencia de usuario. Diseño productos que generan resultados medibles.</p>
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
            <div class="about-photo-frame rounded-2xl overflow-hidden">
              <img src="/assets/images/about/yeison-profile.png" alt="Yeison Alfonso - Product Designer UX/UI" class="about-photo" width="600" height="750" fetchpriority="high" decoding="async">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACT METRICS -->
    <section class="section metrics-section-dark">
      <div class="container">
        <div class="about-metrics-grid fade-in">
          <div class="about-metric-item">
            <span class="about-metric-number">+4x</span>
            <span class="about-metric-label">Ingresos en proyectos de e-commerce</span>
          </div>
          <div class="about-metric-item">
            <span class="about-metric-number">4+</span>
            <span class="about-metric-label">Años de experiencia</span>
          </div>
          <div class="about-metric-item">
            <span class="about-metric-number">10+</span>
            <span class="about-metric-label">Proyectos end-to-end</span>
          </div>
          <div class="about-metric-item">
            <span class="about-metric-number">2</span>
            <span class="about-metric-label">Apps en producción</span>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Trayectoria</span>
          <h2>Experiencia Profesional</h2>
        </div>

        <div class="experience-grid">
          <div class="experience-card card">
            <div class="experience-header">
              <div class="experience-company">
                <h3>Continental Assist</h3>
                <span class="experience-period">Ago 2025 – Presente</span>
              </div>
            </div>
            <p class="experience-role">Product Designer</p>
            <p class="experience-desc">Liderando el rediseño de la plataforma de asistencia. Mobile-first, enfoque en conversión y experiencia de usuario.</p>
            <div class="experience-tags">
              <span class="experience-tag">UX Research</span>
              <span class="experience-tag">UI Design</span>
              <span class="experience-tag">Prototyping</span>
              <span class="experience-tag">A/B Testing</span>
            </div>
          </div>

          <div class="experience-card card">
            <div class="experience-header">
              <div class="experience-company">
                <h3>ASSA ABLOY (YALE)</h3>
                <span class="experience-period">Feb 2024 – Jun 2024</span>
              </div>
            </div>
            <p class="experience-role">Diseñador UX/UI</p>
            <p class="experience-desc">Diseño IoT y experiencia mobile. Validación heurística y testing con usuarios reales.</p>
            <div class="experience-tags">
              <span class="experience-tag">IoT Design</span>
              <span class="experience-tag">Mobile App</span>
              <span class="experience-tag">Design System</span>
            </div>
          </div>

          <div class="experience-card card">
            <div class="experience-header">
              <div class="experience-company">
                <h3>Azzorti (Dupree)</h3>
                <span class="experience-period">Feb 2021 – Ago 2025</span>
              </div>
            </div>
            <p class="experience-role">Diseñador Gráfico</p>
            <p class="experience-desc">Diseño de marca, material POP y gestión de redes sociales. Gestión de identidad visual para 5 países.</p>
            <div class="experience-tags">
              <span class="experience-tag">Branding</span>
              <span class="experience-tag">Social Media</span>
              <span class="experience-tag">Print</span>
              <span class="experience-tag">Packaging</span>
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
          <h2>Educación</h2>
        </div>

        <div class="education-grid">
          <div class="education-card card">
            <div class="education-icon">
              <GraduationCap :size="20" />
            </div>
            <div class="education-content">
              <h4>Máster en Diseño UX/UI</h4>
              <p class="education-school">Universidad Internacional de La Rioja – España</p>
              <span class="education-year">2023–2024</span>
            </div>
          </div>

          <div class="education-card card">
            <div class="education-icon">
              <Palette :size="20" />
            </div>
            <div class="education-content">
              <h4>Diseño Gráfico Profesional</h4>
              <p class="education-school">Escuela de Artes y Letras – Bogotá</p>
              <span class="education-year">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="label">Capacidades</span>
          <h2>Habilidades</h2>
        </div>

        <div class="skills-3-pillars fade-in">
          <!-- UX/UI Design Pillar -->
          <div class="skill-pillar">
            <div class="skill-pillar-icon">
              <PenTool :size="24" />
            </div>
            <h4 class="skill-pillar-title">UX/UI Design</h4>
            <div class="skill-pillar-list">
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M15.85 15.85c-.47-.47-1.24-.47-1.24-2.36V3.9l1.42-1.42a1.52 1.52 0 0 1 2.12 0c.59.59.59 1.54 0 2.12l-.59.59 1.77 1.77-8.63 8.63-1.77-1.77 1.06-1.06c.59-.59 1.54-.59 2.12 0 .59.59.59 1.54 0 2.12l-.59.59zM3 21.25V12l7.25-7.25L12 6l-9 9 1.5 1.5-4.5 4.5c-.47.47-.47 1.24.35 2.12l1.77 1.77c.47.47 1.24.47 1.24 2.36V22H3z"/></svg>
                Figma
              </span>
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 6h-15A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19.5 6zM5 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3.5 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4.5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm1.5-1.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/></svg>
                Adobe XD
              </span>
              <span class="skill-badge">Research</span>
              <span class="skill-badge">Architecture</span>
              <span class="skill-badge">User flows</span>
              <span class="skill-badge">Wireframes</span>
              <span class="skill-badge">Testing</span>
            </div>
          </div>

          <!-- Research Pillar -->
          <div class="skill-pillar">
            <div class="skill-pillar-icon">
              <BarChart2 :size="24" />
            </div>
            <h4 class="skill-pillar-title">Research</h4>
            <div class="skill-pillar-list">
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M21.75 14v-5.25c0-.89-.57-1.71-1.48-2.03l-3.38-1.2c-.13-.05-.27-.1-.4-.1H7.78L5.84 2.57A2.99 2.99 0 0 0 3.4 0H.6c-.66 0-1.2.54-1.2 1.2v4.95c0 .66.54 1.2 1.2 1.2h1.8v9.9c0 .66.54 1.2 1.2 1.2h3.9c.66 0 1.2-.54 1.2-1.2v-4.8h7.5l1.95 3.25c.13.22.37.36.62.36h2.93c.66 0 1.2-.54 1.2-1.2V15c0-.66-.54-1.2-1.2-1.2h-2.1zM6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                Analytics
              </span>
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                A/B Testing
              </span>
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Clarity
              </span>
              <span class="skill-badge">User research</span>
              <span class="skill-badge">Hotjar</span>
            </div>
          </div>

          <!-- Development Pillar -->
          <div class="skill-pillar">
            <div class="skill-pillar-icon">
              <Code2 :size="24" />
            </div>
            <h4 class="skill-pillar-title">Development</h4>
            <div class="skill-pillar-list">
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h18v2H3v-2zm0 4h12v2H3v-2z"/></svg>
                HTML/CSS
              </span>
              <span class="skill-badge flex items-center gap-2">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/></svg>
                Vue.js
              </span>
              <span class="skill-badge">Figma to code</span>
              <span class="skill-badge">Dev collaboration</span>
              <span class="skill-badge">Prototyping</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="section about-cta">
      <div class="container">
        <div class="cta-box fade-in">
          <h2>¿Hablamos?</h2>
          <p>Disponible para roles de Product Design, UX/UI Design y proyectos donde el diseño pueda generar impacto medible.</p>
          <div class="cta-buttons">
            <router-link to="/contacto" class="btn btn-accent">
              <Mail :size="18" />
              Contactar
            </router-link>
            <a href="/assets/cv-yeison-alfonso.html" target="_blank" class="btn btn-secondary">
              <Download :size="18" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { MapPin, GraduationCap, Palette, BarChart2, Code2, PenTool, Mail, Download } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
useScrollAnimations()
</script>