<template>
  <section class="case-metrics-dashboard">
    <div class="max-w-6xl mx-auto px-6">
      <header v-if="label || title" class="case-metrics-dashboard__header fade-in mb-12 text-center">
        <span v-if="label" class="case-metrics-dashboard__label">{{ label }}</span>
        <h2 v-if="title" class="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="case-metrics-dashboard__subtitle">{{ subtitle }}</p>
      </header>

      <div class="case-metrics-dashboard__grid">
        <article
          v-for="(m, i) in metrics"
          :key="m.label"
          class="case-metric fade-in"
          :style="{ '--stagger': i * 80 + 'ms' }"
        >
          <span v-if="m.prefix" class="case-metric__prefix">{{ m.prefix }}</span>
          <span class="case-metric__value">{{ m.value }}</span>
          <span class="case-metric__label">{{ m.label }}</span>
          <span v-if="m.context" class="case-metric__context">{{ m.context }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  metrics: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(m => m.value && m.label)
  }
})
</script>

<style scoped>
.case-metrics-dashboard {
  padding: 5rem 0;
  background: var(--color-midnight, #0A1022);
  color: #fff;
}

.case-metrics-dashboard__label {
  display: inline-block;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary, #0071e3);
  margin-bottom: 0.75rem;
}

.case-metrics-dashboard__subtitle {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 42rem;
  margin: 0 auto;
}

.case-metrics-dashboard__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.case-metric {
  position: relative;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  transition-delay: var(--stagger, 0ms);
}

.case-metric::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary, #0071e3);
  border-radius: 1rem 1rem 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.case-metric:hover::before {
  transform: scaleX(1);
}

.case-metric__prefix {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.case-metric__value {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  color: var(--color-primary, #0071e3);
  letter-spacing: -0.02em;
  margin: 0.25rem 0;
}

.case-metric__label {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
}

.case-metric__context {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
}

@media (max-width: 640px) {
  .case-metric__value { font-size: 2.75rem; }
}
</style>
