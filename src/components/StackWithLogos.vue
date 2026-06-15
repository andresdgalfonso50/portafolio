<template>
  <div class="stack-with-logos">
    <div
      v-for="(tool, index) in tools"
      :key="tool.name"
      class="stack-item fade-in"
      :style="{ '--stagger': index * 50 + 'ms' }"
      :title="tool.name"
    >
      <div class="stack-icon" :style="{ background: tool.bg || '#f8fafc' }">
        <img
          :src="tool.icon"
          :alt="tool.name"
          loading="lazy"
          width="20"
          height="20"
        >
      </div>
      <span class="stack-name">{{ tool.name }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tools: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(t => t.name && t.icon)
  }
})
</script>

<style scoped>
.stack-with-logos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--stagger, 0ms);
}

.stack-item:hover {
  border-color: rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.06);
}

.stack-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.stack-item:hover .stack-icon {
  transform: scale(1.08);
}

.stack-icon img {
  width: 20px;
  height: 20px;
  display: block;
  object-fit: contain;
}

.stack-name {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-midnight, #1d1d1f);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 640px) {
  .stack-with-logos {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  .stack-item { padding: 0.625rem 0.75rem; }
  .stack-name { font-size: 0.8125rem; }
}
</style>
