<template>
  <main class="error-page">
    <h1>404</h1>
    <p>Página no encontrada</p>
    <router-link to="/" class="btn btn-primary">
      <ArrowLeft :size="18" />
      Volver al inicio
    </router-link>
  </main>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
</script>
