<template>
  <main>
    <!-- HERO SECTION -->
    <section class="case-hero section xentral-hero">
      <div class="container">
        <div class="case-hero-balanced-grid">
          <div class="case-header-content fade-in">
            <span class="case-badge"><HeartPulse :size="14" class="icon-prefix" />Diseño de producto</span>
            <h1 class="case-hero-title">Xentral Health — Telemedicina para viajeros</h1>
            <span class="product-badge xentral-badge">Telemedicina</span>
            <p class="case-hero-subtitle">Cuando un viajero se enferma en el extranjero, cada segundo cuenta. Diseñamos una plataforma para contextos de alta ansiedad.</p>
          </div>
          <div class="case-header-metrics fade-in stagger-1">
            <div class="metric-card">
              <span class="metric-value">1</span>
              <span class="metric-label">Web App</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">6</span>
              <span class="metric-label">Pasos del flujo</span>
            </div>
            <div class="metric-card highlight">
              <span class="metric-value">100%</span>
              <span class="metric-label">Contexto crítico</span>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-in stagger-2">
          <img src="/assets/images/heroes/hero-xentral.jpg" alt="Plataforma de telemedicina moderna" width="1400" height="800" fetchpriority="high" decoding="async">
        </div>
      </div>
    </section>

    <!-- CONTEXTO DEL PROYECTO -->
    <section class="case-section">
      <div class="container">
        <div class="project-context fade-in">
          <div class="context-grid">
            <div class="context-item">
              <span class="context-label">Rol</span>
              <h4>Product Designer (End-to-End)</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Tipo</span>
              <h4>Web App / Telemedicina</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Enfoque</span>
              <h4>UX/UI + Producto</h4>
            </div>
            <div class="context-item wide">
              <span class="context-label">Responsabilidades</span>
              <p>Research, Flujos de usuario, Diseño UX/UI, Prototipado, Validación con stakeholders</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EL PROBLEMA -->
    <section class="case-section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">01</span>
          <h2>El reto de atenderse médica en el extranjero</h2>
          <p class="section-intro">Cuando un viajero se siente mal en otro país, enfrenta múltiples barreras para recibir atención médica.</p>
        </div>

        <div class="problems-grid fade-in stagger-1">
          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="problem-icon">
              <MapPin :size="24" />
            </div>
            <h3>No sabe a dónde acudir</h3>
            <p>Desconoce opciones médicas locales y no tiene referencias confiables.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Desorientación total</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="problem-icon">
              <ShieldOff :size="24" />
            </div>
            <h3>Desconoce su cobertura</h3>
            <p>No sabe qué servicios tiene disponibles ni cómo acceder a ellos.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Incertidumbre sobre beneficios</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="problem-icon">
              <Languages :size="24" />
            </div>
            <h3>Barreras de idioma</h3>
            <p>Dificultad para comunicarse en otro país con personal médico.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Comunicación fallida</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="problem-icon">
              <Clock :size="24" />
            </div>
            <h3>Pierde tiempo valioso</h3>
            <p>Buscando soluciones sin guía clara mientras los síntomas progresan.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Retraso en atención</span>
            </div>
          </div>
        </div>

        <div class="insight-box fade-in stagger-2" style="margin-top: 48px;">
          <MessageSquare :size="20" class="icon-prefix" />
          <p><strong>Pregunta de diseño:</strong> ¿Cómo podríamos facilitar el acceso rápido y confiable a atención médica remota en momentos de incertidumbre?</p>
        </div>
      </div>
    </section>

    <!-- USUARIOS -->
    <section class="case-section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">02</span>
          <h2>Usuarios</h2>
          <p class="section-intro">Dos arquetipos principales interactúan con la plataforma.</p>
        </div>

        <div class="personas-grid fade-in stagger-1">
          <div class="persona-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="persona-header">
              <div class="persona-avatar"><Plane :size="20" /></div>
              <div class="persona-info">
                <h3>Viajero</h3>
                <span class="persona-type">Usuario principal</span>
              </div>
            </div>
            <div class="persona-meta">
              <span>En el extranjero</span>
              <span>Alta carga emocional</span>
              <span>Urgencia real</span>
            </div>
            <div class="persona-section">
              <h4>Necesidades</h4>
              <ul>
                <li>Atención médica inmediata</li>
                <li>Confirmar cobertura activa</li>
                <li>Comunicarse sin barreras de idioma</li>
                <li>Recibir indicaciones claras</li>
              </ul>
            </div>
            <div class="persona-goal">
              <Target :size="16" />
              <span>Obtener atención médica rápida y confiable</span>
            </div>
          </div>

          <div class="persona-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="persona-header">
              <div class="persona-avatar rt"><Stethoscope :size="20" /></div>
              <div class="persona-info">
                <h3>Médico</h3>
                <span class="persona-type">Profesional de salud</span>
              </div>
            </div>
            <div class="persona-meta">
              <span>Consulta remota</span>
              <span>Atiende múltiples casos</span>
              <span>Requiere contexto rápido</span>
            </div>
            <div class="persona-section">
              <h4>Necesidades</h4>
              <ul>
                <li>Información clara del paciente</li>
                <li>Historial de síntomas</li>
                <li>Datos del plan del usuario</li>
                <li>Herramientas de comunicación</li>
              </ul>
            </div>
            <div class="persona-goal">
              <Target :size="16" />
              <span>Tomar decisiones médicas informadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FLUJO PRINCIPAL -->
    <section class="case-section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">03</span>
          <h2>Flujo Principal</h2>
          <p class="section-intro">Se priorizó un flujo guiado, simple y sin fricción para reducir el tiempo entre necesidad y atención.</p>
        </div>

        <div class="new-flow fade-in stagger-1">
          <div class="flow-diagram">
            <div class="flow-step">
              <div class="flow-number">1</div>
              <span>Acceso</span>
            </div>
            <div class="flow-arrow">
              <ChevronRight :size="20" />
            </div>
            <div class="flow-step">
              <div class="flow-number">2</div>
              <span>Validar</span>
            </div>
            <div class="flow-arrow">
              <ChevronRight :size="20" />
            </div>
            <div class="flow-step">
              <div class="flow-number">3</div>
              <span>Síntomas</span>
            </div>
            <div class="flow-arrow">
              <ChevronRight :size="20" />
            </div>
            <div class="flow-step">
              <div class="flow-number">4</div>
              <span>Orientación</span>
            </div>
            <div class="flow-arrow">
              <ChevronRight :size="20" />
            </div>
            <div class="flow-step">
              <div class="flow-number">5</div>
              <span>Consulta</span>
            </div>
            <div class="flow-arrow">
              <ChevronRight :size="20" />
            </div>
            <div class="flow-step">
              <div class="flow-number">6</div>
              <span>Recomendaciones</span>
            </div>
          </div>
          <p class="flow-description">6 pasos lineales con validación en cada etapa.</p>
        </div>

        <div class="decisions-list fade-in stagger-2" style="margin-top: 48px;">
          <div class="decision-item">
            <div class="decision-number">1</div>
            <div class="decision-content">
              <h4>Acceso a la plataforma</h4>
              <p>Entrada simple y directa al servicio con credenciales del plan.</p>
            </div>
          </div>
          <div class="decision-item">
            <div class="decision-number">2</div>
            <div class="decision-content">
              <h4>Validación de beneficio activo</h4>
              <p>Verificación rápida de cobertura médica con indicador claro.</p>
            </div>
          </div>
          <div class="decision-item">
            <div class="decision-number">3</div>
            <div class="decision-content">
              <h4>Registro de síntomas</h4>
              <p>Selección intuitiva de síntomas actuales con jerarquía clara.</p>
            </div>
          </div>
          <div class="decision-item">
            <div class="decision-number">4</div>
            <div class="decision-content">
              <h4>Sugerencia de tipo de atención</h4>
              <p>Orientación basada en los síntomas registrados por el usuario.</p>
            </div>
          </div>
          <div class="decision-item">
            <div class="decision-number">5</div>
            <div class="decision-content">
              <h4>Conexión con médico</h4>
              <p>Llamada o videollamada según preferencia y disponibilidad.</p>
            </div>
          </div>
          <div class="decision-item">
            <div class="decision-number">6</div>
            <div class="decision-content">
              <h4>Recepción de recomendaciones</h4>
              <p>Indicaciones médicas claras, accionables y en el idioma del usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DECISIONES DE DISEÑO -->
    <section class="case-section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">04</span>
          <h2>Decisiones de Diseño</h2>
          <p class="section-intro">Cada decisión fue guiada por el contexto crítico de uso.</p>
        </div>

        <div class="features-grid fade-in stagger-1">
          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="feature-icon">
              <Zap :size="24" />
            </div>
            <h4>Acceso rápido a la atención</h4>
            <p>Se redujo el flujo a pocos pasos para evitar sobrecarga cognitiva en momentos de estrés.</p>
          </div>

          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="feature-icon">
              <Eye :size="24" />
            </div>
            <h4>Claridad del estado del beneficio</h4>
            <p>Se diseñó un indicador visible que permite al usuario entender rápidamente si puede acceder al servicio.</p>
          </div>

          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="feature-icon">
              <ListFilter :size="24" />
            </div>
            <h4>Priorización por síntomas</h4>
            <p>Se implementó un sistema de selección de síntomas que permite orientar el tipo de atención más adecuada.</p>
          </div>

          <div class="feature-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="feature-icon">
              <Heart :size="24" />
            </div>
            <h4>Diseño para contexto emocional</h4>
            <p>La interfaz fue pensada para usuarios en estado de ansiedad: botones grandes, lenguaje claro, decisiones guiadas.</p>
          </div>
        </div>

        <div class="case-image fade-in stagger-2" style="margin-top: 48px;">
          <div class="w-full h-[400px] md:h-[600px] bg-slate-900 rounded-3xl flex items-center justify-center border-4 border-slate-800 shadow-2xl overflow-hidden relative">
            <span class="text-slate-400 font-medium text-lg z-10">Insertar Mockup Dual (App Viajero + Dashboard Médico)</span>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- DISEÑO DE INTERFAZ -->
    <section class="case-section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">05</span>
          <h2>Diseño de Interfaz</h2>
          <p class="section-intro">El sistema visual se enfocó en simplicidad y legibilidad para contextos de alta ansiedad.</p>
        </div>

        <div class="design-system-grid fade-in stagger-1">
          <div class="ds-card">
            <h4>Simplicidad</h4>
            <p class="ds-value">UI mínima</p>
            <span class="ds-desc">Interfaces limpias sin distracciones</span>
          </div>
          <div class="ds-card">
            <h4>Legibilidad</h4>
            <p class="ds-value">Tipografía clara</p>
            <span class="ds-desc">Texto grande y fácil de leer</span>
          </div>
          <div class="ds-card">
            <h4>Jerarquía</h4>
            <p class="ds-value">Acciones destacadas</p>
            <span class="ds-desc">Elementos principales siempre visibles</span>
          </div>
          <div class="ds-card">
            <h4>Feedback</h4>
            <p class="ds-value">Estados claros</p>
            <span class="ds-desc">El usuario siempre sabe qué pasó y qué sigue</span>
          </div>
        </div>

        <div class="ui-style fade-in stagger-2">
          <h4>UI Style</h4>
          <div class="style-tags">
            <span class="style-tag">Diseño calmante</span>
            <span class="style-tag">Colores suaves</span>
            <span class="style-tag">Espacio generoso</span>
            <span class="style-tag">Botones grandes</span>
            <span class="style-tag">Lenguaje claro</span>
            <span class="style-tag">Decisiones guiadas</span>
          </div>
        </div>

        <div class="case-image fade-in stagger-3" style="margin-top: 48px;">
          <img src="/assets/images/xentral-health/xentral-03.png" alt="Pantallas finales de Xentral Health" width="1200" height="675" loading="lazy">
        </div>
      </div>
    </section>

    <!-- OPORTUNIDADES CON IA -->
    <section class="case-section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">06</span>
          <h2>Oportunidades con IA</h2>
          <p class="section-intro">Se exploraron posibilidades de integración futura para mejorar la experiencia.</p>
        </div>

        <div class="benchmark-grid fade-in stagger-1">
          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="benchmark-logo">
              <Brain :size="24" />
            </div>
            <h3>Clasificación automática</h3>
            <p class="benchmark-learner">IA para categorizar síntomas y sugerir nivel de atención.</p>
            <div class="benchmark-insight">
              <span class="insight-from">Beneficio:</span>
              <p>Reducir tiempo de triaje y mejorar precisión de derivación.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="benchmark-logo">
              <Sparkles :size="24" />
            </div>
            <h3>Asistentes conversacionales</h3>
            <p class="benchmark-learner">Chatbots previos a la consulta para recopilar información.</p>
            <div class="benchmark-insight">
              <span class="insight-from">Beneficio:</span>
              <p>Optimizar tiempo del médico y reducir fricción para el paciente.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-slate-100 bg-white">
            <div class="benchmark-logo">
              <MessageCircle :size="24" />
            </div>
            <h3>Traducción en tiempo real</h3>
            <p class="benchmark-learner">Comunicación multilingual durante la consulta.</p>
            <div class="benchmark-insight">
              <span class="insight-from">Beneficio:</span>
              <p>Eliminar barreras de idioma en contextos críticos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACTO -->
    <section class="case-section section-alt">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">07</span>
          <h2>Impacto</h2>
          <p class="section-intro">Aunque fue una solución inicial, se definieron objetivos claros de impacto.</p>
        </div>

        <div class="impact-metrics fade-in stagger-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div class="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 transition-all hover:bg-blue-50">
              <div class="text-4xl font-bold text-blue-600 mb-2">-60%</div>
              <h4 class="text-lg font-semibold text-slate-900 mb-1">Tiempo de acceso</h4>
              <p class="text-slate-600 font-medium">Reducir el tiempo entre necesidad y atención médica</p>
            </div>

            <div class="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 transition-all hover:bg-blue-50">
              <div class="text-4xl font-bold text-blue-600 mb-2">+90%</div>
              <h4 class="text-lg font-semibold text-slate-900 mb-1">Claridad del proceso</h4>
              <p class="text-slate-600 font-medium">Mejorar la claridad del proceso de atención</p>
            </div>

            <div class="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 transition-all hover:bg-blue-50">
              <div class="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <h4 class="text-lg font-semibold text-slate-900 mb-1">Cobertura visible</h4>
              <p class="text-slate-600 font-medium">El usuario siempre sabe qué servicios tiene disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APRENDIZAJES -->
    <section class="case-section">
      <div class="container">
        <div class="section-header fade-in">
          <span class="section-number">08</span>
          <h2>Aprendizajes</h2>
          <p class="section-intro">Lo que aprendí diseñando esta solución.</p>
        </div>

        <div class="learnings-grid fade-in stagger-1">
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <span class="learning-number">01</span>
            <p class="text-slate-700 leading-relaxed"><strong>En contextos de crisis, cada segundo cuenta.</strong> Descubrimos que el flujo más corto no siempre es el mejor: en emergencias médicas, los usuarios prefieren ver más opciones y decidir rápido, no recibir recomendaciones automáticas que no confían ciegamente.</p>
          </div>

          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <span class="learning-number">02</span>
            <p class="text-slate-700 leading-relaxed"><strong>La claridad mata la ansiedad más que la velocidad.</strong> Los primeros prototipos tenían 3 pasos para activar telemedicina. Los usuarios testeados nos dijeron que necesitaban ver todos los pasos disponibles desde el inicio para sentirse en control.</p>
          </div>

          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <span class="learning-number">03</span>
            <p class="text-slate-700 leading-relaxed"><strong>El diseño para stakeholders internos es tan importante como para usuarios finales.</strong> Los médicos que usarían la plataforma tenían objeciones distintas a los pacientes. Identificar ambos grupos early previno rework en la arquitectura de información.</p>
          </div>

          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <span class="learning-number">04</span>
            <p class="text-slate-700 leading-relaxed"><strong>HTML y CSS básico aceleran la validación con stakeholders.</strong> Poder crear prototipos clickeables en código sin depender de Figma redujo el ciclo de feedback de días a horas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="case-cta section">
      <div class="container">
        <div class="cta-box fade-in">
          <h2>¿Hablamos?</h2>
          <p>Explora otro caso de estudio o contáctame para discutir proyectos.</p>
          <div class="cta-buttons">
            <router-link to="/app" class="btn btn-secondary">
              <ArrowLeft :size="16" />
              Caso anterior
            </router-link>
            <router-link to="/contacto" class="btn btn-accent">
              <Mail :size="16" />
              Contactar
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Navigation -->
    <nav class="case-nav">
      <div class="container">
        <router-link to="/ecommerce" class="case-nav-link">
          <span>Caso anterior</span>
          <h4><ArrowLeft :size="16" />Rediseño E-commerce</h4>
        </router-link>
        <router-link to="/contacto" class="case-nav-link next">
          <span>Siguiente caso</span>
          <h4>Contacto <ArrowRight :size="16" /></h4>
        </router-link>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import {
  HeartPulse, Plane, Stethoscope, MapPin, ShieldOff, Languages, Clock, Target, MessageSquare,
  Zap, Eye, ListFilter, Heart, ChevronRight, Brain, Sparkles, MessageCircle, Mail, ArrowLeft,
  ArrowRight, Shield, AlertTriangle, Globe
} from 'lucide-vue-next'

useScrollAnimations()
</script>