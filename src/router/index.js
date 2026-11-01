import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/productos', name: 'products', component: ProductListView },
  { path: '/productos/crear', name: 'create-product', component: ProductFormView },
  { path: '/productos/:id', name: 'edit-product', component: ProductFormView },
  { path: '/carrito', name: 'cart', component: CartView }
]

export const router = createRouter({
  // Usamos Hash mode para evitar problemas 404 en GitHub Pages
  history: createWebHashHistory(),
  routes
})