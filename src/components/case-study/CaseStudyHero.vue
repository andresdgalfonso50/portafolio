<template>
  <AuroraBg variant="hero" class="case-hero section" :class="`case-hero--${caseSlug}`">
    <div class="max-w-6xl mx-auto px-6 pt-10 pb-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        <!-- Columna izquierda: texto -->
        <div class="text-left fade-in">
          <div class="flex items-center justify-start gap-2 mb-3">
            <component v-if="icon" :is="icon" class="w-5 h-5 text-primary" :size="20" />
            <span class="text-xs font-bold text-primary uppercase tracking-widest">Caso de estudio</span>
          </div>
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-4 text-balance">
            <span>{{ title }}</span>
            <span v-if="highlight" class="font-light italic text-primary">: {{ highlight }}</span>
          </h1>
          <span v-if="badge" class="inline-block px-4 py-1.5 bg-primary text-white font-extrabold text-xs uppercase rounded-full shadow-glow-primary mb-4">
            {{ badge }}
          </span>
          <p v-if="subtitle" class="text-base md:text-lg text-body leading-relaxed max-w-2xl mb-6">
            {{ subtitle }}
          </p>
          <div class="flex flex-wrap gap-4 items-center justify-start">
            <slot name="actions" />
          </div>
        </div>

        <!-- Columna derecha: imagen -->
        <div v-if="heroImage" class="case-hero-image fade-in stagger-1">
          <img
            :src="heroImage"
            :alt="heroImageAlt || ''"
            loading="eager"
            fetchpriority="high"
            :width="heroWidth || 2400"
            :height="heroHeight || 1350"
          />
          <div v-if="heroBadge" class="case-hero-badge top-right">
            <span>{{ heroBadge.value }}</span>
            <span class="text-xs font-bold text-body uppercase tracking-widest">{{ heroBadge.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="meta && meta.length" class="max-w-6xl mx-auto px-6 pt-6 pb-8 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-y border-borderline">
        <div v-for="item in meta" :key="item.label" class="flex flex-col">
          <span class="block text-2xl md:text-3xl font-bold text-midnight" :class="{ 'font-black text-primary': item.emphasis }">
            {{ item.value }}
          </span>
          <span class="text-xs font-bold text-body uppercase tracking-widest mt-1">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </AuroraBg>
</template>

<script setup>
import AuroraBg from '@/components/primitives/AuroraBg.vue'

defineProps({
  caseSlug: { type: String, default: 'default' },
  icon: { type: [Object, Function], default: null },
  title: { type: String, required: true },
  highlight: { type: String, default: '' },
  badge: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  heroImage: { type: String, default: '' },
  heroImageAlt: { type: String, default: '' },
  heroWidth: { type: Number, default: 2400 },
  heroHeight: { type: Number, default: 1350 },
  heroBadge: { type: Object, default: null },
  meta: { type: Array, default: () => [] }
})
</script>
