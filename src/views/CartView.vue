<template>
  <div>
    <h2>Resumen del Carrito</h2>

    <div v-if="cartStore.items.length === 0" style="margin-top: 1.5rem;">
      <p>El carrito está vacío.</p>
      <router-link to="/productos" class="btn btn-primary" style="display: inline-block; margin-top: 1rem;">
        Ir a comprar
      </router-link>
    </div>

    <div v-else>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>{{ item.name }}</td>
              <td>${{ item.price }}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <!-- Botón para disminuir de uno en uno -->
                  <button @click="cartStore.removeFromCart(item.id)" class="btn btn-danger" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;">-</button>
                  <span>{{ item.quantity }}</span>
                  <!-- Botón para aumentar de uno en uno -->
                  <button @click="cartStore.addToCart(item)" class="btn btn-success" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;">+</button>
                </div>
              </td>
              <td>${{ item.price * item.quantity }}</td>
              <td>
                <button @click="cartStore.deleteItemCompletely(item.id)" class="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 1.5rem; text-align: right;">
        <h3>Total: ${{ cartStore.totalPrice }}</h3>
        <button @click="cartStore.clearCart()" class="btn btn-danger" style="margin-top: 1rem;">
          Vaciar Carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore'

const cartStore = useCartStore()
</script>