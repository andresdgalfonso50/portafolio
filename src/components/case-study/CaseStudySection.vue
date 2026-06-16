<template>
  <section class="case-section" :class="{ 'case-section--alt': alt }">
    <div class="max-w-6xl mx-auto px-6">
      <header v-if="number || title" class="case-section__header fade-in mb-12">
        <span v-if="number" class="case-section__number">{{ number }}</span>
        <h2 v-if="title" class="font-display text-3xl md:text-4xl font-bold tracking-tight text-midnight mb-4">
          {{ title }}
        </h2>
        <p v-if="intro" class="case-section__intro">{{ intro }}</p>
      </header>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  number: { type: String, default: '' },
  title: { type: String, default: '' },
  intro: { type: String, default: '' },
  alt: { type: Boolean, default: false }
})
</script>

<style scoped>
.case-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.case-section--alt {
  background: var(--color-surface, #F8FAFC);
}

.case-section__number {
  display: inline-block;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary, #0071e3);
  margin-bottom: 0.75rem;
}

.case-section__intro {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-body, #52607A);
  max-width: 56rem;
}
</style>
