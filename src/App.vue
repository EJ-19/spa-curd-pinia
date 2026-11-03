
<script setup>
import { useCartStore } from './stores/useCartStore'

const cartStore = useCartStore()
</script>

<template>
  <header>
    <h1>Alejandria</h1>

    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>

      <router-link to="/carrito" class="cart-link">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart-icon">
          <path d="M2 3L2.26 3.09C3.56 3.55 4.21 3.78 4.59 4.32C4.96 4.87 4.96 5.59 4.96 7.04V9.76C4.96 12.7 5.02 13.67 5.89 14.59C6.75 15.5 8.15 15.5 10.94 15.5H12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          <path d="M4.96 6.12H17.09C18.77 6.12 20.29 6.12 20.73 6.7C21.18 7.27 21 8.14 20.66 9.88L20.16 12.31C19.84 13.84 19.69 14.6 19.13 15.05C18.58 15.5 17.8 15.5 16.24 15.5H12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          <circle cx="7.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="16.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.3"/>
        </svg>

        <span>
          ({{ cartStore.items.reduce((acc, item) => acc + item.quantity, 0) }})
        </span>
      </router-link>
    </nav>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>
</template>
