<template>
  <div class="process-section">
    <ol class="process-list">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="process-step fade-in"
        :style="{ '--stagger': index * 60 + 'ms' }"
      >
        <div class="process-number" aria-hidden="true">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
        </div>
        <div class="process-content">
          <h3 class="process-title">{{ step.title }}</h3>
          <p class="process-description">{{ step.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(s => s.title && s.description)
  }
})
</script>

<style scoped>
.process-section {
  position: relative;
}

.process-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

.process-step {
  position: relative;
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  transition: background 0.3s ease;
  transition-delay: var(--stagger, 0ms);
}

.process-step:last-child { border-bottom: 1px solid rgba(0, 0, 0, 0.06); }

.process-step:hover {
  background: linear-gradient(90deg, rgba(0, 113, 227, 0.02) 0%, transparent 100%);
}

.process-number {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--color-primary, #0071e3);
  text-stroke: 1.5px var(--color-primary, #0071e3);
  letter-spacing: -0.02em;
  padding-top: 0.25rem;
  transition: all 0.3s ease;
}

.process-step:hover .process-number {
  -webkit-text-stroke: 0;
  text-stroke: 0;
  color: var(--color-primary, #0071e3);
}

.process-content { padding-top: 0.5rem; }

.process-title {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-midnight, #1d1d1f);
  line-height: 1.2;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}

.process-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-body, #475569);
  margin: 0;
  max-width: 56ch;
}

@media (max-width: 640px) {
  .process-step {
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
    padding: 1.5rem 0;
  }
  .process-number { font-size: 1.5rem; }
  .process-title { font-size: 1.125rem; }
  .process-description { font-size: 0.9375rem; }
}
</style>
