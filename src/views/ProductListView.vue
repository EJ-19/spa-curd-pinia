<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2>Lista de Productos</h2>
      <router-link to="/productos/crear" class="btn btn-primary">+ Nuevo Producto</router-link>
    </div>

    <p v-if="productStore.products.length === 0" style="margin-top: 1.5rem;">
      No hay productos disponibles.
    </p>

    <div v-else class="grid">
      <div v-for="product in productStore.products" :key="product.id" class="card">
        <div style="width: 100%; height: 160px; overflow: hidden; border-radius: 6px; margin-bottom: 1rem; background: #f1f5f9; display: flex; align-items: center; justify-content: center;">
          <img :src="product.image" :alt="product.name" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <div>
          <h3>{{ product.name }}</h3>
          <p style="color: #64748b; margin: 0.5rem 0; font-size: 0.9rem;">{{ product.description }}</p>
          <strong style="font-size: 1.25rem;">${{ product.price }}</strong>
        </div>
        
        <div class="card-actions">
          <button @click="cartStore.addToCart(product)" class="btn btn-success">Agregar</button>
          <router-link :to="`/productos/${product.id}`" class="btn btn-primary">Editar</router-link>
          <button @click="productStore.deleteProduct(product.id)" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/useProductStore'
import { useCartStore } from '../stores/useCartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
</script>