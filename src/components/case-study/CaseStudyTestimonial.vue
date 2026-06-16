<template>
  <figure class="testimonial fade-in" :class="{ 'testimonial--inverse': inverse }">
    <blockquote class="testimonial__quote">
      <p>"{{ quote }}"</p>
    </blockquote>
    <figcaption class="testimonial__author">
      <span class="testimonial__author-name">{{ author }}</span>
      <span v-if="role" class="testimonial__author-role">{{ role }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, default: '' },
  inverse: { type: Boolean, default: false }
})
</script>

<style scoped>
.testimonial {
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  max-width: 56rem;
  margin: 0 auto;
}

.testimonial--inverse {
  background: var(--color-midnight, #0A1022);
  border-color: transparent;
}

.testimonial__quote p {
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--color-midnight, #0A1022);
  margin: 0 0 1.5rem;
  font-weight: 500;
}

.testimonial--inverse .testimonial__quote p {
  color: #fff;
}

.testimonial__author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial__author-name {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--color-midnight, #0A1022);
}

.testimonial--inverse .testimonial__author-name {
  color: #fff;
}

.testimonial__author-role {
  font-size: 0.8125rem;
  color: var(--color-body, #52607A);
}

.testimonial--inverse .testimonial__author-role {
  color: rgba(255, 255, 255, 0.6);
}
</style>
