<template>
  <article class="skill-pillar" :class="[`skill-pillar--${color}`, { 'skill-pillar--featured': featured }]">
    <div class="skill-pillar-header">
      <div class="skill-pillar-icon">
        <component :is="icon" :size="22" :stroke-width="2" />
      </div>
      <h3 class="skill-pillar-title">{{ title }}</h3>
    </div>
    <p v-if="description" class="skill-pillar-description">{{ description }}</p>
    <div class="skill-pillar-tags">
      <span v-for="tag in tags" :key="tag" class="skill-pillar-tag">{{ tag }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  icon: { type: [Object, Function], required: true },
  color: {
    type: String,
    default: 'violet',
    validator: (v) => ['violet', 'blue', 'emerald', 'amber'].includes(v)
  },
  featured: { type: Boolean, default: false }
})
</script>

<style scoped>
.skill-pillar {
  position: relative;
  padding: 2rem 1.75rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.skill-pillar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--pillar-color, rgba(0, 113, 227, 0.04)) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.skill-pillar:hover {
  border-color: rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.08);
}

.skill-pillar:hover::after { opacity: 1; }

.skill-pillar--violet { --pillar-color: rgba(10, 16, 34, 0.06); }
.skill-pillar--blue { --pillar-color: rgba(0, 113, 227, 0.08); }
.skill-pillar--emerald { --pillar-color: rgba(16, 185, 129, 0.08); }
.skill-pillar--amber { --pillar-color: rgba(245, 158, 11, 0.08); }

.skill-pillar--violet .skill-pillar-icon { background: rgba(10, 16, 34, 0.08); color: #0A1022; }
.skill-pillar--blue .skill-pillar-icon { background: rgba(0, 113, 227, 0.12); color: #0071e3; }
.skill-pillar--emerald .skill-pillar-icon { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.skill-pillar--amber .skill-pillar-icon { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }

/* Featured pillar: gradient border + accent icon + subtle badge feel */
.skill-pillar--featured {
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, rgba(0, 113, 227, 0.5) 0%, rgba(109, 40, 217, 0.5) 100%) border-box;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  box-shadow: 0 1px 0 rgba(0, 113, 227, 0.04), 0 8px 24px -16px rgba(0, 113, 227, 0.18);
}

.skill-pillar--featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(0, 113, 227, 0.04) 0%, rgba(109, 40, 217, 0.04) 100%);
  pointer-events: none;
  z-index: 0;
}

.skill-pillar--featured:hover {
  box-shadow: 0 1px 0 rgba(0, 113, 227, 0.06), 0 24px 48px -20px rgba(0, 113, 227, 0.22);
}

.skill-pillar--featured .skill-pillar-icon {
  background: rgba(0, 113, 227, 0.14);
  color: #0071e3;
  box-shadow: inset 0 0 0 1px rgba(0, 113, 227, 0.18);
}

.skill-pillar-header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
  position: relative;
  z-index: 1;
}

.skill-pillar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.skill-pillar-title {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-midnight, #1d1d1f);
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.01em;
}

.skill-pillar-description {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--color-body, #475569);
  margin: 0 0 1.25rem;
  position: relative;
  z-index: 1;
}

.skill-pillar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  position: relative;
  z-index: 1;
}

.skill-pillar-tag {
  display: inline-block;
  padding: 0.28125rem 0.6875rem;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: var(--color-body, #475569);
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.skill-pillar-tag:hover {
  background: var(--pillar-color, rgba(0, 113, 227, 0.08));
  border-color: transparent;
  color: var(--color-midnight, #1d1d1f);
}

/* Featured pillar: tags adopt a slightly stronger accent border */
.skill-pillar--featured .skill-pillar-tag {
  border-color: rgba(0, 113, 227, 0.18);
}

.skill-pillar--featured .skill-pillar-tag:hover {
  border-color: transparent;
}
</style>
