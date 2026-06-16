<template>
  <div class="principles-grid">
    <article
      v-for="(principle, index) in principles"
      :key="index"
      class="principle-card fade-in"
      :class="`principle-card--${principle.color || 'violet'}`"
      :style="{ '--stagger': index * 80 + 'ms' }"
    >
      <span class="principle-label" aria-hidden="true">{{ principle.label }}</span>
      <h3 class="principle-title">{{ principle.title }}</h3>
      <p class="principle-description">{{ principle.description }}</p>
    </article>
  </div>
</template>

<script setup>
defineProps({
  principles: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(p => p.label && p.title && p.description)
  }
})
</script>

<style scoped>
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.principle-card {
  position: relative;
  padding: 2rem 1.75rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--stagger, 0ms);
}

.principle-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent, var(--color-primary, #0071e3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.principle-card:hover {
  border-color: rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.08);
}

.principle-card:hover::before { transform: scaleX(1); }

.principle-card--violet { --accent: #0A1022; }
.principle-card--blue { --accent: #0071e3; }
.principle-card--emerald { --accent: #10b981; }
.principle-card--amber { --accent: #f59e0b; }

.principle-label {
  display: inline-block;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent, var(--color-primary, #0071e3));
  margin-bottom: 1rem;
}

.principle-title {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-midnight, #1d1d1f);
  margin: 0 0 0.75rem;
  letter-spacing: -0.01em;
}

.principle-description {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--color-body, #475569);
  margin: 0;
}
</style>
