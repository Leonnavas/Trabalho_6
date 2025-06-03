<script setup>
import Navbar from './components/NavbarComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <Navbar />
    <main class="flex-1 container mx-auto px-4 py-6">
      <router-view />
    </main>
    <footer class="bg-white border-t border-gray-200 text-center py-4">
      <p class="text-sm text-gray-600">&copy; 2025 - Catálogo de Produtos</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
