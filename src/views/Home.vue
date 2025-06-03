<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Catálogo de Produtos</h1>

    <input
      v-model="search"
      @input="fetchProducts"
      type="text"
      placeholder="Buscar produtos..."
      class="border rounded px-4 py-2 mb-4 w-full"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded p-4 hover:shadow-md"
      >
        <img :src="product.thumbnail" class="w-full h-40 object-cover mb-2" />
        <h2 class="font-bold text-lg">{{ product.title }}</h2>
        <p class="text-sm text-gray-500">{{ product.category }}</p>
        <p class="text-blue-600 font-bold">R$ {{ product.price }}</p>
        <router-link
          :to="`/product/${product.id}`"
          class="text-sm text-blue-500 hover:underline"
        >
          Ver detalhes
        </router-link>
      </div>
    </div>

    <div class="flex justify-center gap-4 mt-4">
      <button
        @click="prevPage"
        :disabled="skip === 0"
        class="px-4 py-2 border rounded"
      >
        Anterior
      </button>
      <button
        @click="nextPage"
        class="px-4 py-2 border rounded"
      >
        Próximo
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const search = ref('')
const skip = ref(0)
const limit = 12

const fetchProducts = async () => {
  try {
    const url = search.value
      ? `https://dummyjson.com/products/search?q=${search.value}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`

    const res = await axios.get(url)
    products.value = res.data.products
  } catch (err) {
    console.log('Erro ao buscar produtos:', err)
  }
}

const nextPage = () => {
  skip.value += limit
  fetchProducts()
}

const prevPage = () => {
  if (skip.value >= limit) {
    skip.value -= limit
    fetchProducts()
  }
}

onMounted(fetchProducts)
</script>
