<template>
  <div class="experience-timeline">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="timeline-item fade-in"
      :class="{ 'timeline-item--current': item.current }"
      :style="{ '--stagger': index * 80 + 'ms' }"
    >
      <div class="timeline-marker" aria-hidden="true">
        <span class="timeline-dot"></span>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-meta">
            <span class="timeline-period">{{ item.period }}</span>
            <span v-if="item.current" class="timeline-current-badge">Actual</span>
          </div>
          <h3 class="timeline-role">{{ item.role }}</h3>
          <p class="timeline-company">{{ item.company }}</p>
        </div>
        <p class="timeline-description">{{ item.description }}</p>
        <ul v-if="item.achievements && item.achievements.length" class="timeline-achievements">
          <li v-for="(achievement, i) in item.achievements" :key="i">{{ achievement }}</li>
        </ul>
        <div v-if="item.skills && item.skills.length" class="timeline-skills">
          <span v-for="skill in item.skills" :key="skill" class="timeline-chip">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(i => i.role && i.company && i.period)
  }
})
</script>

<style scoped>
.experience-timeline {
  position: relative;
  padding-left: 2.5rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0.6875rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--color-borderline, #e5e5e5) 8%,
    var(--color-borderline, #e5e5e5) 92%,
    transparent 100%
  );
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
  transition-delay: var(--stagger, 0ms);
}
.timeline-item:last-child { padding-bottom: 0; }

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0.25rem;
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
}

.timeline-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--color-borderline, #e5e5e5);
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--color-borderline, #e5e5e5);
  transition: all 0.3s ease;
}

.timeline-item--current .timeline-dot {
  background: var(--color-primary, #0071e3);
  box-shadow: 0 0 0 1px var(--color-primary, #0071e3), 0 0 0 4px rgba(0, 113, 227, 0.15);
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 1px var(--color-primary, #0071e3), 0 0 0 4px rgba(0, 113, 227, 0.15); }
  50% { box-shadow: 0 0 0 1px var(--color-primary, #0071e3), 0 0 0 8px rgba(0, 113, 227, 0); }
}

.timeline-content {
  padding: 1.5rem 1.75rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-content:hover {
  border-color: rgba(0, 0, 0, 0.08);
  transform: translateX(2px);
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.06);
}

.timeline-header { margin-bottom: 0.875rem; }

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.timeline-period {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.timeline-current-badge {
  display: inline-block;
  padding: 0.1875rem 0.625rem;
  background: var(--color-midnight, #1d1d1f);
  color: #fff;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: 9999px;
}

.timeline-role {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-midnight, #1d1d1f);
  line-height: 1.3;
  margin: 0 0 0.25rem;
}

.timeline-company {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-primary, #0071e3);
  margin: 0;
}

.timeline-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-body, #475569);
  margin: 0 0 0.875rem;
}

.timeline-achievements {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}
.timeline-achievements li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-body, #475569);
  margin-bottom: 0.375rem;
}
.timeline-achievements li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-secondary, #8b5cf6);
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.timeline-chip {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  background: var(--color-chip, #f5f5f7);
  color: var(--color-body, #475569);
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 9999px;
}

@media (max-width: 640px) {
  .experience-timeline { padding-left: 2rem; }
  .experience-timeline::before { left: 0.4375rem; }
  .timeline-marker { left: -2rem; width: 1.125rem; height: 1.125rem; }
  .timeline-content { padding: 1.25rem; }
  .timeline-role { font-size: 1rem; }
}
</style>
