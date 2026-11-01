<template>
  <header>
    <h1>🛍️ Mi Tienda SPA</h1>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/carrito">
        Carrito ({{ cartStore.items.reduce((acc, item) => acc + item.quantity, 0) }})
      </router-link>
    </nav>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script setup>
import { useCartStore } from './stores/useCartStore'
const cartStore = useCartStore()
</script>