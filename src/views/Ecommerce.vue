<script setup>
import { RouterLink } from 'vue-router'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
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
  XCircle,
  Code2
} from 'lucide-vue-next'

useScrollAnimations()
</script>

<template>
  <div class="view-wrapper">
    <!-- 1. HERO SECTION -->
    <AuroraBg variant="hero" class="case-hero section">
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="case-hero-balanced-grid">
          <div class="case-header-content fade-in">
            <span class="case-badge text-blue-600"><Layers :size="14" class="icon-prefix" />Rediseño de producto</span>
            <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-950 mb-6">
              De 0.82% a
              <span class="text-gradient-blue">3.8%</span>
              de
              <span class="font-light italic text-blue-600">conversión</span>
              en 3 meses.
            </h1>
            <span class="inline-block mt-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-glow-blue">
              E-commerce
            </span>
            <p class="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl leading-relaxed drop-cap">
              De 0.82% a 3.8% en 3 meses. +4x ingresos. CRO verificable, no suposiciones.
            </p>
          </div>
        </div>

        <!-- METADATA -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200 mt-12 mb-16 w-full max-w-7xl mx-auto">
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">Product Designer</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Mi Rol</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">5 Meses</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Duración</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-bold text-slate-950">PM + 2 Devs</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Equipo</span>
          </div>
          <div class="flex flex-col">
            <span class="block text-2xl md:text-3xl font-black text-emerald-600">+4x Ingresos</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Impacto Principal</span>
          </div>
        </div>
      </div>
    </AuroraBg>

    <!-- EL JUEGO ESTABA EN PELIGRO -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="stakes-box fade-in p-8 md:p-10 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2 block">La situación era crítica</span>
              <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-3">El negocio estaba perdiendo dinero cada día</h3>
               <p class="text-base text-slate-600 leading-relaxed">0.82% de conversión. Perdíamos más adquiriendo clientes de lo que generaban. <strong class="text-slate-900">3 meses</strong> para salvar el canal digital.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- 2. EL PROBLEMA (ANTES) -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">02</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Por qué los usuarios abandonaban</h2>
          <p class="section-intro">5 barreras de conversión identificadas mediante análisis de datos y research.</p>
        </div>

        <!-- Problemas en cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <GitBranch :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Flujo de compra confuso</h3>
            <p class="text-sm text-slate-600 leading-relaxed">El proceso rompía el modelo mental: pedíamos el pago antes del resumen.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <ClipboardList :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">12+ campos en el checkout</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Sobrecarga cognitiva. Reduje a 4 campos esenciales.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <ShieldOff :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Sin indicadores de confianza</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Sin badges SSL visibles. Abandonaban por incertidumbre.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Smartphone :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Desktop-first obsoleto</h3>
            <p class="text-sm text-slate-600 leading-relaxed">64.5% del tráfico era mobile, pero la UX era desktop.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-700 mb-4">
              <Package :size="22" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Alta tasa de abandono</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Menos del 20% completaban la compra. Patrón identificado.</p>
          </div>
        </div>

        <!-- UI Antes con observaciones -->
        <div class="ui-comparison fade-in stagger-2">
          <div class="ui-label">
            <span class="ui-label-badge">UI ANTERIOR</span>
          </div>
          <div class="ui-antes-grid">
            <div class="ui-image-wrapper">
              <img src="/assets/images/ecommerce/ui-anterior.jpg" alt="UI del e-commerce antes del rediseño" class="ui-image">
            </div>
<div class="ui-observations">
          <div class="observation-item">
            <div class="observation-number">1</div>
            <div class="observation-text">
              <h4>CTA sin jerarquía</h4>
              <p>El botón principal se pierde entre otros elementos.</p>
            </div>
          </div>
          <div class="observation-item">
            <div class="observation-number">2</div>
            <div class="observation-text">
              <h4>Sin identidad de marca</h4>
              <p>Diseño genérico que no transmite viajes.</p>
            </div>
          </div>
          <div class="observation-item">
            <div class="observation-number">3</div>
            <div class="observation-text">
              <h4>Propósito invisible</h4>
              <p>El usuario no identifica que es un sitio de viajes.</p>
            </div>
          </div>
          <div class="observation-item">
            <div class="observation-number">4</div>
            <div class="observation-text">
              <h4>Sobrecarga cognitiva</h4>
              <p>Sin foco claro, el usuario no sabe a dónde mirar.</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. RESEARCH & INSIGHTS - BENTO GRID -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">03</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Investigación y hallazgos</h2>
           <p class="section-intro">Datos de uso revelaron el patrón de abandono en el checkout.</p>
        </div>

        <!-- Bento metrics row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-slate-950 tracking-tight block">64.5%</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Tráfico Mobile</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-slate-950 tracking-tight block">0.82%</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Conversión Inicial</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-slate-950 tracking-tight block">53s</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Interacción Media</span>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="font-display text-4xl font-black text-slate-950 tracking-tight block">&lt;20%</span>
            <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Retención</span>
          </div>
        </div>

        <!-- Aha Moment + Insights: Bento 2-col layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-1">
          <!-- Aha Moment - span 2 cols -->
          <div class="md:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Lightbulb :size="22" class="text-white" />
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">El momento "aha"</span>
                <h4 class="text-xl font-bold text-slate-900 mb-2">El problema no era el diseño, era el flujo</h4>
                <p class="text-sm text-slate-600 leading-relaxed">73% abandonaba en el primer paso. El usuario esperaba ver el resumen antes del pago. <strong>Mostrábamos el formulario primero.</strong></p>
              </div>
            </div>
          </div>

          <!-- Insight cards stacked (Premium) -->
          <div class="flex flex-col gap-4">
            <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">User Pain</span>
              <p class="text-sm text-slate-700 leading-relaxed">El usuario pierde motivación si hay más pasos después de iniciar checkout.</p>
            </div>
            <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">Business</span>
              <p class="text-sm text-slate-700 leading-relaxed">Cada paso adicional aumentaba el abandono en 15% promedio.</p>
            </div>
            <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1">
              <span class="inline-block px-3 py-1 bg-slate-200 text-slate-600 font-bold text-[11px] uppercase tracking-widest rounded-full mb-4">UX</span>
              <p class="text-sm text-slate-700 leading-relaxed">El flujo rompía el modelo mental: pago antes que resumen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. BENCHMARK -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">04</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Benchmarking</h2>
          <p class="section-intro">Analicé 4 plataformas de checkout para extraer patrones de conversión.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <Plane :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Avianca</h3>
            <p class="text-sm text-slate-600 mb-3">Flujo lineal con progreso visible.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> El usuario necesita saber dónde está y cuánto falta.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <Globe :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Despegar</h3>
            <p class="text-sm text-slate-600 mb-3">Personalización según comportamiento.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> Reducir decisiones, mostrar solo lo relevante.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-slate-600 mb-4">
              <CreditCard :size="28" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Assist Card</h3>
            <p class="text-sm text-slate-600 mb-3">Funcional pero faltaba emoción.</p>
            <p class="text-xs text-slate-500"><strong>Aprendizaje:</strong> La confianza no solo es técnica, también es visual.</p>
          </div>
        </div>

        <div class="conclusion-box fade-in mt-8 p-5 rounded-xl">
          <p class="text-sm"><strong>Conclusión:</strong> Necesitábamos flujo simple + contexto claro + señales de confianza.</p>
        </div>
      </div>
    </section>

    <!-- 5. ESTRATEGIA - BENTO GRID -->
    <section class="case-section">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">05</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Estrategia</h2>
          <p class="section-intro">5 principios para reducir abandono paso a paso.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 fade-in stagger-1">
          <!-- Objetivo - span 2 cols -->
          <div class="md:col-span-2 bg-slate-900 rounded-2xl p-8 flex flex-col justify-center">
            <span class="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Objetivo</span>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Incrementar conversión eliminando fricciones</h3>
            <p class="text-sm text-slate-400 max-w-lg">Reducir el tiempo entre intención de compra y confirmación del pago.</p>
          </div>

          <!-- Principios - full width row -->
          <div class="md:col-span-1">
            <div class="grid grid-cols-1 gap-4 h-full">
              <div class="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Smartphone :size="20" class="text-blue-600 mb-2" />
                <span class="text-sm font-bold text-slate-900 block">Mobile-first</span>
                <span class="text-xs text-slate-500 mt-1 block">64.5% del tráfico venía de móviles, pero la UX era desktop.</span>
              </div>
              <div class="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <ListOrdered :size="20" class="text-blue-600 mb-2" />
                <span class="text-sm font-bold text-slate-900 block">Máximo 5 pasos</span>
                <span class="text-xs text-slate-500 mt-1 block">Cada paso adicional aumentaba el abandono en 15%.</span>
              </div>
            </div>
          </div>

          <div class="md:col-span-1">
            <div class="grid grid-cols-1 gap-4 h-full">
              <div class="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Eye :size="20" class="text-blue-600 mb-2" />
                <span class="text-sm font-bold text-slate-900 block">Claridad > Estética</span>
                <span class="text-xs text-slate-500 mt-1 block">El usuario abandonaba por incertidumbre, no por diseño.</span>
              </div>
              <div class="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <MessageSquare :size="20" class="text-blue-600 mb-2" />
                <span class="text-sm font-bold text-slate-900 block">Feedback constante</span>
                <span class="text-xs text-slate-500 mt-1 block">El usuario necesita saber en qué paso está y cuánto falta.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. LA SOLUCIÓN (PASO A PASO) -->
    <section class="case-section section-alt overflow-hidden">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in mb-12">
          <span class="section-number">06</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Solución paso a paso</h2>
          <p class="section-intro">Rediseñé el flujo de checkout para eliminar fricciones.</p>
        </div>

        <div class="steps-container">
          <!-- Paso 1 -->
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img src="/assets/images/ecommerce/Cotizador-paso-1.jpg" alt="Paso 1" class="w-full h-auto object-cover">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">01</span>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Selección de plan clara</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Diseñé jerarquía visual inmediata para comparar beneficios y precios de un vistazo.
              </p>
            </div>
          </div>

          <!-- Paso 2 -->
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-2">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img src="/assets/images/ecommerce/Cotizador-paso-2.jpg" alt="Paso 2" class="w-full h-auto object-cover">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-1">
              <span class="step-number">02</span>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Entrada de datos inteligente</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Implementé validación en tiempo real para prevenir errores y mantener al usuario en el flujo.
              </p>
            </div>
          </div>

          <!-- Paso 3 -->
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img src="/assets/images/ecommerce/Cotizador-paso-3.jpg" alt="Paso 3" class="w-full h-auto object-cover">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">03</span>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Revisión transparente</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Agregué resumen detallado antes del pago para eliminar ansiedad y aumentar confianza.
              </p>
            </div>
          </div>

          <!-- Paso 4 -->
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-2">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img src="/assets/images/ecommerce/Cotizador-paso-4.jpg" alt="Paso 4" class="w-full h-auto object-cover">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-1">
              <span class="step-number">04</span>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Pago fluido</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Integré métodos de pago populares con interfaz limpia para minimizar distracciones.
              </p>
            </div>
          </div>

          <!-- Paso 5 -->
          <div class="step-item flex flex-col md:flex-row items-center gap-8 md:gap-16 fade-in">
            <div class="step-visual w-full md:w-1/2 order-2 md:order-1">
              <div class="step-image-wrapper rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img src="/assets/images/ecommerce/Cotizador-paso-5.jpg" alt="Paso 5" class="w-full h-auto object-cover">
              </div>
            </div>
            <div class="step-content w-full md:w-1/2 order-1 md:order-2">
              <span class="step-number">05</span>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Confirmación instantánea</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Cerré el ciclo de confianza con confirmación inmediata y clara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ANTES VS DESPUÉS - FULL-BLEED DARK -->
    <section class="w-full bg-slate-950 py-24 md:py-32">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block">07</span>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Antes vs Después</h2>
          <p class="text-base text-slate-400 mt-4 max-w-xl mx-auto">El antes y después del flujo de compra.</p>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <img src="/assets/images/ecommerce/antes-despues.jpg" alt="Comparación Antes y Después del rediseño" class="w-full h-auto object-cover">
        </div>
      </div>
    </section>

    <!-- 8. VALIDACIÓN -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">08</span>
<h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Validación</h2>
           <p class="section-intro">Tests con 8 usuarios validaron el nuevo flujo. 0 abandonos en el checkout rediseñado.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-blue-600 mb-4">
              <CheckCircle :size="28" />
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-3">Usuarios completan el flujo sin ayuda</h4>
            <p class="text-sm text-slate-600 leading-relaxed">No se requerían instrucciones adicionales para completar la compra.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-blue-600 mb-4">
              <MapPin :size="28" />
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-3">Entendían los pasos</h4>
            <p class="text-sm text-slate-600 leading-relaxed">El indicador de progreso fue claro para el 100% de los usuarios testeados.</p>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="text-blue-600 mb-4">
              <CreditCard :size="28" />
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-3">Finalizan compra correctamente</h4>
            <p class="text-sm text-slate-600 leading-relaxed">Los errores de formulario se redujeron significativamente.</p>
          </div>
        </div>

        <div class="validation-quote fade-in stagger-2 mt-12 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <blockquote>
            <p class="text-xl text-slate-700 leading-relaxed italic">"Por fin sé exactamente cuánto voy a pagar y en cuántos pasos. Es mucho más claro que antes."</p>
            <cite class="text-base font-semibold text-slate-500 mt-4 block">Usuario durante testing</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- 9. IMPACTO - RAW METRICS -->
    <section class="w-full max-w-6xl mx-auto px-6 py-24">
      <div class="text-center mb-16">
        <span class="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 block">09</span>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-slate-950 tracking-tight mb-4">Impacto</h2>
        <p class="text-lg text-slate-500">Los resultados validaron la estrategia de diseño.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-slate-200 py-16 w-full max-w-6xl mx-auto mt-16 border border-slate-100 rounded-[2.5rem] bg-slate-50 shadow-inner">
        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">+4x</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Ingresos</h3>
            <p class="text-sm text-slate-400 mt-2">De ~2K USD a ~9K USD mensuales</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">-40%</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Abandono</h3>
            <p class="text-sm text-slate-400 mt-2">Reducción en el checkout</p>
          </div>
        </div>

        <div class="text-center px-8">
          <span class="font-display text-7xl md:text-9xl font-black text-slate-950 tracking-tight block leading-[0.85]">+23</span>
          <div class="mt-4">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Puntos NPS</h3>
            <p class="text-sm text-slate-400 mt-2">Net Promoter Score mejorado</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. LEARNINGS -->
    <section class="case-section section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-header fade-in">
          <span class="section-number">10</span>
<h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Lo que aprendí</h2>
           <p class="section-intro">4 lecciones del proyecto.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in stagger-1">
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">01</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Decidir qué NO diseñar.</strong> Redujimos 12 campos a 4 en el checkout. Menos fue más: cada campo eliminado redujo la fricción percibida.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">02</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Modelo mental del usuario, no proceso interno.</strong> El equipo quería mostrar el formulario primero. Los usuarios querían ver el resumen antes de pagar. Resumen antes del pago = menos abandono.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">03</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>La confianza se diseña, no se asume.</strong> Asumíamos que los usuarios se iban por falta de seguridad. En realidad se iban por incertidumbre: no sabían cuánto iban a pagar ni qué iban a obtener.</p>
          </div>
          <div class="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <span class="text-2xl font-bold text-slate-300 mb-4 block">04</span>
            <p class="text-sm text-slate-700 leading-relaxed"><strong>Mobile-first = rediseñar desde cero.</strong> 64.5% tráfico mobile exigía jerarquía táctil, gestos nativos y arquitectura de información diferente a desktop.</p>
          </div>
        </div>

        <!-- Lo que no funcionó -->
        <div class="failures-section fade-in w-full max-w-5xl mx-auto bg-rose-50/50 border border-rose-100 rounded-[2rem] p-8 md:p-10 mb-16">
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
              <XCircle :size="24" class="text-rose-600" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-slate-900 mb-3">Lo que intentamos primero y no funcionó</h4>
              <ul class="space-y-2 text-lg text-slate-800">
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Más onboarding:</strong> Más educación = más fricción. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Modal de confirmación:</strong> Fricción sin valor. Lo eliminamos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 mt-0.5">✗</span>
                  <span><strong>Carousel en checkout:</strong> 12% cancelaban al verlo. Lo quitamos.</span>
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
<h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-8">Siguientes pasos</h2>
           <p class="section-intro">3 iteraciones: copy, métodos de pago, recomendación post-compra.</p>
        </div>

        <div class="next-steps-grid fade-in stagger-1">
          <div class="next-step-card bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="next-step-icon">
              <Split :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Testeo A/B</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Variaciones del flujo para optimizar conversión.</p>
          </div>

          <div class="next-step-card bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="next-step-icon">
              <UserCheck :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Personalización</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Experiencia adaptada al historial del usuario.</p>
          </div>

          <div class="next-step-card bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div class="next-step-icon">
              <CreditCard :size="24" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-3">Checkout express</h4>
            <p class="text-lg text-slate-600 leading-relaxed">Implementar one-click checkout para usuarios returning.</p>
          </div>
        </div>

        <!-- Testimonial Quote -->
        <div class="testimonial-section fade-in stagger-2">
          <blockquote class="testimonial-quote">
            <p>"Yeison transformó nuestro checkout. De 12 pasos a 4. Revenue aumentó directo."</p>
            <footer class="testimonial-footer">
              <span class="testimonial-author">Carlos Mendoza</span>
              <span class="testimonial-role">CEO, Continental Assist</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <AuroraBg variant="dark" class="py-32">
      <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Tu próximo
          <span class="text-gradient-mixed">+4x</span>?
        </h2>
        <p class="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          CRO verificable con datos, no conjeturas. Conversemos sobre tu caso.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <router-link
            to="/contacto"
            class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-glow-blue-lg hover:shadow-glow-blue hover:bg-blue-500 hover:scale-[1.02] transition-all duration-200"
          >
            Iniciar conversación
          </router-link>
          <router-link
            to="/app-web"
            class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
          >
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Siguiente Caso</span>
              <span class="text-sm font-bold text-white">Xentral Health</span>
            </div>
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </router-link>
        </div>
      </div>
    </AuroraBg>

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
          <RouterLink to="/app-web" class="group flex items-center justify-between p-8 bg-white rounded-3xl border border-slate-200 transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Siguiente caso</span>
              <h4 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">App Web</h4>
            </div>
            <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowRight :size="24" />
            </div>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>