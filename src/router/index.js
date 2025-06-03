import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/DetalhesView.vue'
import Category from '../views/CategoriaView.vue'
import Cart from '../views/CarrinhoView.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/product/:id', name: 'product', component: ProductDetails },
  { path: '/category/:name', name: 'category', component: Category },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/search', name: 'search', component: Home } // reutilizando Home para exibir resultados de busca
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
