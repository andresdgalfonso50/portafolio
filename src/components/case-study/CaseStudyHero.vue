<template>
  <AuroraBg variant="hero" class="case-hero section" :class="`case-hero--${caseSlug}`">
    <div class="max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10">
      <div class="text-center max-w-4xl mx-auto mb-12 fade-in">
        <div class="flex items-center justify-center gap-2 mb-6">
          <component v-if="icon" :is="icon" class="w-5 h-5 text-primary" :size="20" />
          <span class="text-xs font-bold text-primary uppercase tracking-widest">Caso de estudio</span>
        </div>
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-midnight mb-6">
          <span>{{ title }}</span>
          <span v-if="highlight" class="font-light italic text-primary">: {{ highlight }}</span>
        </h1>
        <span v-if="badge" class="inline-block px-4 py-1.5 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-glow-primary mb-8">
          {{ badge }}
        </span>
        <p v-if="subtitle" class="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

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

    <div v-if="meta && meta.length" class="max-w-6xl mx-auto px-6 pt-16 pb-12 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-borderline">
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
