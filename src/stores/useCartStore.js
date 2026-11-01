import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const addToCart = (product) => {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Disminuye la cantidad de uno en uno; si llega a 0, lo elimina
  const removeFromCart = (id) => {
    const existing = items.value.find(i => i.id === id)
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity--
      } else {
        items.value = items.value.filter(i => i.id !== id)
      }
    }
  }

  // Elimina el producto por completo sin importar la cantidad
  const deleteItemCompletely = (id) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const clearCart = () => {
    items.value = []
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return { items, addToCart, removeFromCart, deleteItemCompletely, clearCart, totalPrice }
})