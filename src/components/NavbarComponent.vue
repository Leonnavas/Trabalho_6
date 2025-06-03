<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const handleSearch = () => {
  if (search.value.trim() !== '') {
    router.push({ name: 'search', query: { q: search.value } })
    search.value = ''
  }
}
</script>

<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <div class="text-xl font-bold text-black-600">
        <router-link to="/"> Global Ecommerce </router-link>
      </div>

      <div class="flex items-center gap-4">
        <input
          v-model="search"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Buscar produtos..."
          class="border rounded px-3 py-1 focus:outline-none focus:ring focus:ring-black-200"
        />
        <button
          @click="handleSearch"
          class="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-200"
        >
          Buscar
        </button>
        <router-link
          to="/cart"
          class="text-sm bg-gray-300 px-3 py-1 rounded hover:bg-gray-200"
        >
          Carrinho
        </router-link>
      </div>
    </div>
  </nav>
</template>
