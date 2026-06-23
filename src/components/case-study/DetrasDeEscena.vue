<template>
  <details class="detras-escena group">
    <summary class="detras-escena-summary">
      <div class="detras-escena-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      </div>
      <div class="detras-escena-text">
        <span class="detras-escena-label">Detrás de escena</span>
        <h3 class="detras-escena-title">{{ title }}</h3>
      </div>
      <div class="detras-escena-chevron">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </summary>
    <div class="detras-escena-content">
      <slot />
    </div>
  </details>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Rigor del proyecto'
  }
})
</script>

<style scoped>
.detras-escena {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.detras-escena:hover {
  border-color: rgba(0, 0, 0, 0.12);
}

.detras-escena[open] {
  border-color: rgba(0, 113, 227, 0.25);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
}

.detras-escena-summary {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  cursor: pointer;
  list-style: none;
  user-select: none;
}

.detras-escena-summary::-webkit-details-marker {
  display: none;
}

.detras-escena-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(0, 113, 227, 0.08);
  color: #0071e3;
  flex-shrink: 0;
}

.detras-escena-text {
  flex: 1;
  min-width: 0;
}

.detras-escena-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0071e3;
  margin-bottom: 0.25rem;
}

.detras-escena-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.0625rem;
  font-weight: 700;
  color: #0A1022;
  margin: 0;
  letter-spacing: -0.01em;
}

.detras-escena-chevron {
  color: #64748b;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.detras-escena[open] .detras-escena-chevron {
  transform: rotate(180deg);
  color: #0071e3;
}

.detras-escena-content {
  padding: 0 1.75rem 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 1.5rem;
  animation: fadeInContent 0.3s ease;
}

@keyframes fadeInContent {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
