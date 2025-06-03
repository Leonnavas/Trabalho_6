<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Categoria: {{ categoryName }}</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded p-4 hover:shadow-md"
      >
        <img :src="product.thumbnail" alt="" class="w-full h-40 object-cover mb-2" />
        <h2 class="font-bold text-lg">{{ product.title }}</h2>
        <p class="text-blue-600 font-bold">R$ {{ product.price }}</p>
        <router-link
          :to="`/product/${product.id}`"
          class="text-sm text-blue-500 hover:underline"
        >
          Ver detalhes
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const products = ref([])
const categoryName = ref(route.params.name)

const loadProducts = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${categoryName.value}`)
    products.value = res.data.products
  } catch (err) {
    console.log('Erro ao carregar produtos:', err)
  }
}

onMounted(loadProducts)
watch(() => route.params.name, (newName) => {
  categoryName.value = newName
  loadProducts()
})
</script>
