<template>
  <div style="max-width: 500px; margin: 0 auto;">
    <h2>{{ isEditing ? 'Editar Producto' : 'Crear Producto' }}</h2>

    <form @submit.prevent="handleSubmit" style="margin-top: 1.5rem;">
      <div class="form-group">
        <label>Nombre del producto:</label>
        <input v-model="form.name" type="text" required />
      </div>

      <div class="form-group">
        <label>Precio ($):</label>
        <input v-model.number="form.price" type="number" step="0.01" required />
      </div>

      <div class="form-group">
        <label>Ruta de la imagen (ej: <code>/imgs/laptop.png</code>):</label>
        <input v-model="form.image" type="text" placeholder="/imgs/laptop.png" required />
      </div>

      <div class="form-group">
        <label>Descripción:</label>
        <textarea v-model="form.description" rows="3" required></textarea>
      </div>

      <div style="display: flex; gap: 0.5rem;">
        <button type="submit" class="btn btn-primary">
          {{ isEditing ? 'Guardar Cambios' : 'Crear Producto' }}
        </button>
        <button type="button" @click="router.push('/productos')" class="btn btn-danger">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/useProductStore'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

const isEditing = ref(false)
const form = ref({
  id: null,
  name: '',
  price: 0,
  image: '/imgs/',
  description: ''
})

onMounted(() => {
  if (route.params.id) {
    const existing = productStore.getProductById(route.params.id)
    if (existing) {
      isEditing.value = true
      form.value = { ...existing }
    }
  }
})

const handleSubmit = () => {
  if (isEditing.value) {
    productStore.updateProduct(form.value)
  } else {
    productStore.addProduct(form.value)
  }
  router.push('/productos')
}
</script>