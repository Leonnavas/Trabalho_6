<template>
  <div class="p-4">
    <div v-if="product">
      <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
      <img :src="product.thumbnail" class="w-full max-w-md mb-4" />
      <p class="text-gray-700 mb-2">{{ product.description }}</p>
      <p class="font-bold text-xl mb-2">R$ {{ product.price }}</p>
      <p class="text-sm text-gray-500 mb-4">Categoria: {{ product.category }}</p>

      <router-link
        to="/"
        class="text-blue-500 hover:underline"
      >
        Voltar para o catálogo
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const product = ref(null)

const fetchProduct = async () => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/${route.params.id}`
    )
    product.value = res.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchProduct)
</script>
