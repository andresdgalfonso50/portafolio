<script setup>
import { RouterLink } from 'vue-router'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import {
  Layers,
  GitBranch,
  ClipboardList,
  ShieldOff,
  Smartphone,
  Package,
  CreditCard,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MapPin,
  MessageSquare,
  Mail,
  Lightbulb,
  Eye,
  ListOrdered,
  Plane,
  Globe,
  Split,
  UserCheck,
  XCircle
} from 'lucide-vue-next'
import ImageComparison from '@/components/ImageComparison.vue'

useScrollAnimations()
</script>

<template>
  <main>
    <!-- 1. HERO SECTION -->
    <header class="case-hero section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="case-hero-balanced-grid">
          <div class="case-header-content fade-in">
            <span class="case-badge"><Layers :size="14" class="icon-prefix" />Rediseño de producto</span>
            <h1 class="case-hero-title">Rediseño de e-commerce enfocado en conversión</h1>
            <span class="product-badge">E-commerce</span>
            <p class="case-hero-subtitle">En 3 meses pasamos de 0.82% a 3.8% de conversión. Multiplicamos ingresos x4.</p>
          </div>
          <div class="case-header-metrics fade-in stagger-1">
            <div class="metric-card">
              <span class="metric-value">64.5%</span>
              <span class="metric-label">Tráfico mobile</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">0.82%</span>
              <span class="metric-label">Conversión inicial</span>
            </div>
            <div class="metric-card highlight">
              <span class="metric-value">+4x</span>
              <span class="metric-label">Ingresos finales</span>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-in stagger-2">
          <img src="/assets/images/ecommerce/hero-ecommerce.jpg" alt="Dashboard de analytics mostrando métricas de conversión" width="1400" height="800" fetchpriority="high" decoding="async">
        </div>
      </div>
    </header>

    <!-- CONTEXTO DEL PROYECTO -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="project-context fade-in">
          <div class="context-grid">
            <div class="context-item">
              <span class="context-label">Rol</span>
              <h4>Product Designer</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Duración</span>
              <h4>3 meses</h4>
            </div>
            <div class="context-item">
              <span class="context-label">Equipo</span>
              <h4>2 devs, 1 diseñador</h4>
            </div>
            <div class="context-item wide">
              <span class="context-label">Responsabilidades</span>
              <p>Investigación UX, definición de flujo, diseño UI, prototipado y testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EL JUEGO ESTABA EN PELIGRO -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="stakes-box fade-in p-10 md:p-12 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-3xl mb-12 border border-slate-200">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center shrink-0">
              <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
<div>
              <span class="text-sm font-bold uppercase tracking-widest text-rose-600 mb-2 block">La situación era crítica</span>
              <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">El negocio estaba perdiendo dinero cada día</h3>
              <p class="text-slate-600 text-lg leading-relaxed">Con solo 0.82% de conversión, el costo de adquirir cada cliente era mayor que el ticket promedio. Literalmente: <strong class="text-slate-900">por cada 100 visitantes, perdíamos 99 ventas potenciales</strong>. El equipo de negocio nos dio 3 meses para revertir la situación o el canal digital se cerraría.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. EL PROBLEMA (ANTES) -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
<div class="section-header fade-in">
          <span class="section-number">02</span>
          <h2>Por qué los usuarios abandonaban</h2>
          <p class="section-intro">Los usuarios llegaban pero no completaban la compra. El checkout tenía más fricción que claridad.</p>
        </div>

        <!-- Una historia típica -->
        <div class="user-story fade-in mb-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <span class="text-2xl">✈️</span>
            </div>
            <div>
              <h4 class="text-lg font-bold text-slate-900 mb-2">María, 38 años, quería comprar asistencia de viaje antes de su vuelo a Cartagena</h4>
              <p class="text-lg text-slate-600 leading-relaxed">Encontró el sitio desde Google, seleccionó un plan... pero cuando llegó al checkout, le pidieron crear una cuenta primero. "No recordaba mi contraseña anterior", dice. Intentó reestablecerla pero el email no llegaba. <strong class="text-slate-900">Abandonó y compró en la competencia en 2 minutos.</strong></p>
            </div>
          </div>
        </div>

        <!-- Problemas en cards -->
        <div class="problems-grid fade-in stagger-1">
          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <GitBranch :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Flujo de compra confuso</h3>
            <p class="text-lg text-slate-600 leading-relaxed">El proceso rompía el modelo mental del usuario. Se pedía el pago antes de mostrar el resumen del pedido.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Sin claridad en los pasos</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <ClipboardList :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Formularios extensos</h3>
            <p class="text-lg text-slate-600 leading-relaxed">Más de 12 campos para completar una compra. Muchos innecesarios para la primera interacción.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Sobrecarga cognitiva</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <ShieldOff :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Sin indicadores de confianza</h3>
            <p class="text-lg text-slate-600 leading-relaxed">Sin badges de seguridad visibles. Los usuarios no sabían si sus datos estaban protegidos.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>No hay badges SSL visibles</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <Smartphone :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Desktop-first obsoleto</h3>
            <p class="text-lg text-slate-600 leading-relaxed">64.5% del tráfico venía de mobile, pero la experiencia estaba optimizada para desktop.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Mobile como segundo pensamiento</span>
            </div>
          </div>

          <div class="problem-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="problem-icon">
              <Package :size="24" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Baja retención</h3>
            <p class="text-lg text-slate-600 leading-relaxed">Menos del 20% de los usuarios que iniciaron el proceso completaban la compra.</p>
            <div class="problem-annotation">
              <span class="annotation-marker"></span>
              <span>Alta tasa de abandono</span>
            </div>
          </div>
        </div>

        <!-- UI Antes con observaciones -->
        <div class="ui-comparison fade-in stagger-2">
          <div class="ui-label">
            <span class="ui-label-badge">UI ANTERIOR</span>
          </div>
          <div class="ui-antes-grid">
            <div class="ui-image-wrapper">
              <img src="/assets/images/ui-comparisons/ui-ecommerce-antes.jpg" alt="UI del e-commerce antes del rediseño" class="ui-image">
            </div>
            <div class="ui-observations">
              <div class="observation-item">
                <div class="observation-number">1</div>
                <div class="observation-text">
                  <h4>Call-to-action poco destacado</h4>
                  <p>El botón principal no tiene jerarquía visual clara, compite con otros elementos.</p>
                </div>
              </div>
              <div class="observation-item">
                <div class="observation-number">2</div>
                <div class="observation-text">
                  <h4>Falta de identidad corporativa</h4>
                  <p>El diseño no transmite la marca de viajes, se siente genérico.</p>
                </div>
              </div>
              <div class="observation-item">
                <div class="observation-number">3</div>
                <div class="observation-text">
                  <h4>No se identifica que es un sitio de viajes</h4>
                  <p>El usuario no puede reconocer el propósito del sitio a primera vista.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. RESEARCH & INSIGHTS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">03</span>
          <h2>Investigación y hallazgos</h2>
          <p class="section-intro">La investigación reveló patrones claros de comportamiento que guiaron las decisiones de diseño.</p>
        </div>

        <!-- Datos clave -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-full fade-in stagger-1">
          <div class="flex flex-col border-l-2 border-slate-200 pl-6">
            <span class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">64.5%</span>
            <span class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tráfico Mobile</span>
          </div>
          <div class="flex flex-col border-l-2 border-slate-200 pl-6">
            <span class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">0.82%</span>
            <span class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Conversión Inicial</span>
          </div>
          <div class="flex flex-col border-l-2 border-slate-200 pl-6">
            <span class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">53s</span>
            <span class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Interacción Media</span>
          </div>
          <div class="flex flex-col border-l-2 border-slate-200 pl-6">
            <span class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">&lt;20%</span>
            <span class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Retención Usuarios</span>
          </div>
        </div>

        <!-- Insight clave - The Aha Moment -->
        <div class="aha-moment fade-in mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <Lightbulb :size="24" class="text-white" />
            </div>
            <div>
              <span class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 block">El momento "aha"</span>
              <h4 class="text-xl font-bold text-slate-900 mb-2">Cuando entendimos que el problema no era el diseño, era el flujo</h4>
              <p class="text-lg text-slate-700 leading-relaxed">Analizando los heatmaps, descubrimos que el 73% de los usuarios llegaban al checkout pero abandonaban en el <strong>primer paso</strong>. No era que no quisieran comprar — era que el modelo mental del usuario期待aba ver un resumen del pedido antes de dar datos de pago. <strong>Nosotros mostrábamos el formulario de pago primero.</strong> Ese simple cambio de orden lo cambió todo.</p>
            </div>
          </div>
        </div>

        <!-- Insights clave -->
        <div class="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 fade-in stagger-2">
          <div class="bg-slate-50 p-8 rounded-2xl">
            <span class="inline-block px-3 py-1 bg-white text-rose-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">User Pain</span>
            <p class="text-lg text-slate-700 leading-relaxed">El usuario pierde motivación después del pago si hay más pasos después de iniciar el checkout.</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-2xl">
            <span class="inline-block px-3 py-1 bg-white text-emerald-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">Business Impact</span>
            <p class="text-lg text-slate-700 leading-relaxed">Cada paso adicional en el flujo aumentaba el abandono en un 15% promedio.</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-2xl">
            <span class="inline-block px-3 py-1 bg-white text-blue-600 font-bold text-xs uppercase tracking-widest rounded-full mb-6 shadow-sm">UX Insight</span>
            <p class="text-lg text-slate-700 leading-relaxed">El flujo rompía el modelo mental esperado: el pago aparecía antes del resumen.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. BENCHMARK -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">04</span>
          <h2>Qué funcionan en la industria</h2>
          <p class="section-intro">Analicé referentes del mercado para identificar patrones que funcionaban.</p>
        </div>

        <div class="benchmark-grid fade-in stagger-1">
          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <Plane :size="32" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Avianca</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Flujo lineal claro con progreso visible en cada paso.</p>
            <div class="benchmark-insight">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed">El usuario necesita saber dónde está y cuánto falta.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <Globe :size="32" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Despegar</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Personalización basada en comportamiento previo del usuario.</p>
            <div class="benchmark-insight">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed">Reducir decisiones mostrar solo lo relevante.</p>
            </div>
          </div>

          <div class="benchmark-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-8">
            <div class="benchmark-logo">
              <CreditCard :size="32" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Assist Card</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-4">Funcional pero faltaba conexión emocional.</p>
            <div class="benchmark-insight">
              <span class="insight-from font-semibold">Aprendizaje:</span>
              <p class="text-base text-slate-700 leading-relaxed">La confianza no solo es técnica, también es visual.</p>
            </div>
          </div>
        </div>

        <div class="benchmark-conclusion fade-in stagger-2">
          <div class="conclusion-box">
            <Lightbulb :size="20" class="icon-prefix" />
            <p><strong>Conclusión:</strong> Necesitábamos flujo simple + contexto claro + señales de confianza.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. ESTRATEGIA -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">05</span>
          <h2>Estrategia</h2>
          <p class="section-intro">Definimos principios de diseño claros para guiar cada decisión.</p>
        </div>

        <div class="strategy-grid fade-in stagger-1">
          <div class="strategy-objective p-10 md:p-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl mb-8">
            <span class="strategy-badge text-sm font-bold uppercase tracking-widest px-3 py-1 bg-blue-600 text-white rounded-full mb-6 inline-block">Objetivo</span>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Incrementar conversión eliminando fricciones</h3>
            <p class="text-slate-300 text-lg md:text-xl leading-relaxed mt-4">Reducir el tiempo entre la intención de compra y la confirmación. Minimizar puntos de abandono.</p>
          </div>

          <div class="principles-list">
            <h4 class="text-xl font-bold text-slate-900 mb-6">Principios de diseño</h4>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <Smartphone :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Mobile-first</h5>
                <p class="text-base text-slate-600 leading-relaxed">Diseñar primero para el dispositivo principal (64.5% del tráfico)</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <ListOrdered :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Máximo 5 pasos</h5>
                <p class="text-base text-slate-600 leading-relaxed">Reducir el checkout a lo esencial, validar en tiempo real</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100 mb-4">
              <div class="principle-icon">
                <Eye :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Claridad > Estética</h5>
                <p class="text-base text-slate-600 leading-relaxed">Priorizar la función sobre lo decorativo en cada decisión</p>
              </div>
            </div>
            <div class="principle-item transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-6 bg-white rounded-2xl border border-slate-100">
              <div class="principle-icon">
                <MessageSquare :size="20" />
              </div>
              <div>
                <h5 class="text-lg font-bold text-slate-900 mb-2">Feedback constante</h5>
                <p class="text-base text-slate-600 leading-relaxed">El usuario siempre sabe qué pasó y qué sigue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. SOLUCIÓN (DESPUÉS) -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">06</span>
          <h2>La Solución</h2>
          <p class="section-intro">Flujo de compra lineal, mobile-first, con validación en tiempo real.</p>
        </div>

        <!-- Nuevo flujo -->
        <div class="new-flow fade-in stagger-1">
          <div class="flow-diagram flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <div class="flow-step flex flex-col items-center">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-3">1</div>
              <span class="text-base font-medium text-slate-700">Selección</span>
            </div>
            <div class="flow-arrow flex items-center text-slate-300 font-light text-2xl"><ChevronRight :size="24" /></div>
            <div class="flow-step flex flex-col items-center">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-3">2</div>
              <span class="text-base font-medium text-slate-700">Datos</span>
            </div>
            <div class="flow-arrow flex items-center text-slate-300 font-light text-2xl"><ChevronRight :size="24" /></div>
            <div class="flow-step flex flex-col items-center">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-3">3</div>
              <span class="text-base font-medium text-slate-700">Revisión</span>
            </div>
            <div class="flow-arrow flex items-center text-slate-300 font-light text-2xl"><ChevronRight :size="24" /></div>
            <div class="flow-step flex flex-col items-center">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-3">4</div>
              <span class="text-base font-medium text-slate-700">Pago</span>
            </div>
            <div class="flow-arrow flex items-center text-slate-300 font-light text-2xl"><ChevronRight :size="24" /></div>
            <div class="flow-step flex flex-col items-center">
              <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-3">5</div>
              <span class="text-base font-medium text-slate-700">Confirmación</span>
            </div>
          </div>
          <p class="flow-description text-center text-lg text-slate-600">5 pasos lineales con progreso visible en cada etapa.</p>
        </div>

        <!-- Pantallas con insights -->
        <div class="solution-screens fade-in stagger-2">
          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <img src="/assets/images/ecommerce/despues-1.jpg" alt="Pantalla de selección de plan" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Insight</span>
                <p>Diseño claro de planes con diferenciación visual para facilitar decisión y-upselling.</p>
              </div>
            </div>
            <div class="screen-info mt-6">
              <h4 class="text-xl font-bold text-slate-900 mb-2">Selección de plan clara</h4>
              <p class="text-lg text-slate-600 leading-relaxed">Selección de plan con toda la información relevante visible sin scroll.</p>
            </div>
          </div>

          <div class="screen-card">
            <div class="screen-image overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <img src="/assets/images/ecommerce/despues-2.jpg" alt="Checkout simplificado" class="w-full h-auto object-cover">
              <div class="screen-insight">
                <span class="insight-label">Insight</span>
                <p>Validación en tiempo real reduce errores y aumenta confianza.</p>
              </div>
            </div>
            <div class="screen-info mt-6">
              <h4 class="text-xl font-bold text-slate-900 mb-2">Formulario inteligente</h4>
              <p class="text-lg text-slate-600 leading-relaxed">Solo los campos necesarios, con validación inmediata y mensajes de ayuda contextuales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ANTES VS DESPUÉS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">07</span>
          <h2>Antes vs Después</h2>
          <p class="section-intro">El contraste visual muestra la magnitud del cambio.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12 fade-in stagger-1">
          <div class="flex flex-col gap-4">
            <span class="inline-block px-3 py-1 bg-rose-100 text-rose-700 font-bold tracking-widest uppercase text-xs rounded-full mb-4">Antes</span>
            <div class="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/assets/images/ecommerce/comparacion-antes.jpg" alt="E-commerce antes del rediseño" class="w-full aspect-[4/3] md:aspect-video object-cover object-top rounded-xl border border-slate-200 shadow-sm">
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold tracking-widest uppercase text-xs rounded-full mb-4">Después</span>
            <div class="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/assets/images/ecommerce/comparacion-despues.jpg" alt="E-commerce después del rediseño" class="w-full aspect-[4/3] md:aspect-video object-cover object-top rounded-xl border border-slate-200 shadow-sm">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. VALIDACIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">08</span>
          <h2>Validación</h2>
          <p class="section-intro">Las pruebas con usuarios confirmaron que el nuevo flujo funcionaba.</p>
        </div>

        <div class="validation-grid fade-in stagger-1">
          <div class="validation-card p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div class="validation-icon">
              <CheckCircle :size="32" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Usuarios completan el flujo sin ayuda</h4>
            <p class="text-lg text-slate-600 leading-relaxed">No se requerían instrucciones adicionales para completar la compra.</p>
          </div>

          <div class="validation-card p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div class="validation-icon">
              <MapPin :size="32" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Entendían los pasos</h4>
            <p class="text-lg text-slate-600 leading-relaxed">El indicador de progreso fue claro para el 100% de los usuarios testeados.</p>
          </div>

          <div class="validation-card p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div class="validation-icon">
              <CreditCard :size="32" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Finalizan compra correctamente</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Los errores de formulario se redujeron significativamente.</p>
          </div>
        </div>

        <div class="validation-quote fade-in stagger-2 mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <blockquote>
            <p class="text-xl text-slate-700 leading-relaxed italic">"Por fin sé exactamente cuánto voy a pagar y en cuántos pasos. Es mucho más claro que antes."</p>
            <cite class="text-base font-semibold text-slate-500 mt-4 block">Usuario durante testing</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- 9. IMPACTO -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Impacto</h2>
        <p class="text-lg text-slate-500">Los resultados validaron la estrategia de diseño.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">

        <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2">
          <span class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4">+4x</span>
          <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">Ingresos</h3>
          <p class="text-sm text-slate-400">De ~2K USD a ~9K USD mensuales</p>
        </div>

        <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2">
          <span class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4">-40%</span>
          <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">Abandono</h3>
          <p class="text-sm text-slate-400">Reducción significativa en el checkout</p>
        </div>

        <div class="flex flex-col items-center justify-center text-center p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2">
          <span class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-4">+23</span>
          <h3 class="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">Puntos NPS</h3>
          <p class="text-sm text-slate-400">Net Promoter Score mejorado</p>
        </div>

      </div>
    </section>

    <!-- 10. LEARNINGS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">10</span>
          <h2>Lo que aprendí</h2>
          <p class="section-intro">Lo que aprendí diseñando esta solución.</p>
        </div>

        <div class="learnings-grid fade-in stagger-1">
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number text-3xl font-black text-slate-200 mb-4 block">01</span>
            <p class="text-lg text-slate-700 leading-relaxed"><strong>Decidir qué NO diseñar es tan importante como decidir qué sí.</strong> Redujimos el checkout de 12 campos a 4 esenciales porque descubrimos que los usuarios de asistencia de viaje abandonan cuando enfrentan demasiadas opciones.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number text-3xl font-black text-slate-200 mb-4 block">02</span>
            <p class="text-lg text-slate-700 leading-relaxed"><strong>El modelo mental del usuario debe guiar el flujo, no el proceso interno.</strong> Mostrar el resumen antes del pago (no después) redujo el abandono porque coincidía con lo que el usuario esperaba ver primero.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number text-3xl font-black text-slate-200 mb-4 block">03</span>
            <p class="text-lg text-slate-700 leading-relaxed"><strong>La confianza se diseña, no se asume.</strong> Los badges SSL importan menos que la claridad del precio y la transparencia del proceso. Descubrimos que los usuarios se iban antes de pagar por incertidumbre, no por falta de seguridad.</p>
          </div>
          <div class="learning-card bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <span class="learning-number text-3xl font-black text-slate-200 mb-4 block">04</span>
            <p class="text-lg text-slate-700 leading-relaxed"><strong>Mobile-first significa rediseñar desde cero, no adaptar.</strong> El 64.5% de tráfico mobile no era solo un número: requería repensar jerarquía, gestos y arquitectura de información para pantallas pequeñas.</p>
          </div>
        </div>

        <!-- Lo que no funcionó -->
        <div class="failures-section fade-in mt-12 p-8 bg-rose-50 rounded-2xl border border-rose-100">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <XCircle :size="24" class="text-rose-600" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-slate-900 mb-3">Lo que intentamos primero y no funcionó</h4>
              <ul class="space-y-3 text-lg text-slate-700 leading-relaxed">
                <li class="flex items-start gap-3">
                  <span class="text-rose-500 mt-1">✗</span>
                  <span><strong>Agregar más pasos de onboarding:</strong> Pensamos que si explicábamos mejor el proceso, los usuarios entenderían. Error. Más educación = más fricción.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-rose-500 mt-1">✗</span>
                  <span><strong>Un modal de confirmación antes de pagar:</strong> El equipo quería "asegurar" que el usuario quería pagar. Agregaba fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-rose-500 mt-1">✗</span>
                  <span><strong>Carousel de productos relacionados:</strong> En el checkout, sugeríamos productos adicionales. Cancelaron el 12% de las compras al ver el carousel. Lo quitamos del flujo principal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. NEXT STEPS -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">11</span>
          <h2>Siguientes pasos</h2>
          <p class="section-intro">Mejoras identificadas para iteración continua.</p>
        </div>

        <div class="next-steps-grid fade-in stagger-1">
          <div class="next-step-card p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="next-step-icon">
              <Split :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Testeo A/B</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Experimentar con variaciones del flujo para optimizar conversión.</p>
          </div>

          <div class="next-step-card p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="next-step-icon">
              <UserCheck :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Personalización</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Adaptar la experiencia según el historial del usuario.</p>
          </div>

          <div class="next-step-card p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="next-step-icon">
              <CreditCard :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Checkout express</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Implementar one-click checkout para usuariosreturning.</p>
          </div>
        </div>

        <!-- Testimonial Quote -->
        <div class="testimonial-section fade-in stagger-2">
          <blockquote class="testimonial-quote">
            <p>"Yeison transformó nuestro checkout en una máquina de conversión. El proceso que antes tomaba 12 pasos ahora se completa en 4, con un increase directo en revenue."</p>
            <footer class="testimonial-footer">
              <span class="testimonial-author">Carlos Mendoza</span>
              <span class="testimonial-role">CEO, Continental Assist</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="case-cta section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="cta-content fade-in">
          <h2>¿Hablamos?</h2>
          <p>Explora otro caso de estudio o contáctame para discutir proyectos.</p>
          <div class="cta-buttons">
            <RouterLink to="/app" class="btn btn-secondary">
              <ArrowLeft :size="16" style="margin-right:8px;" />
              Caso anterior
            </RouterLink>
            <RouterLink to="/contacto" class="btn btn-accent">
              <Mail :size="16" style="margin-right:8px;" />
              Contactar
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

<!-- Case Navigation -->
    <nav class="py-24 border-t border-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Previous Case -->
          <RouterLink to="/app" class="group flex items-center justify-between p-8 bg-white rounded-3xl border border-slate-200 transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Caso anterior</span>
              <h4 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">App de Asistencia en Viajes</h4>
            </div>
            <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowLeft :size="24" />
            </div>
          </RouterLink>

          <!-- Next Case -->
          <RouterLink to="/xentral-health" class="group flex items-center justify-between p-8 bg-white rounded-3xl border border-slate-200 transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Siguiente caso</span>
              <h4 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Xentral Health</h4>
            </div>
            <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowRight :size="24" />
            </div>
          </RouterLink>
        </div>
      </div>
    </nav>
  </main>
</template>