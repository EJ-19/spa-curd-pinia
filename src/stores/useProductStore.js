import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref([
    { 
      id: 1, 
      name: 'Laptop Pro', 
      price: 1200, 
      description: 'Laptop de alta gama con procesador de última generación', 
      image: '/imgs/laptop.png' 
    },
    { 
      id: 2, 
      name: 'Mouse Inalámbrico', 
      price: 25, 
      description: 'Ergonómico, silencioso y de larga duración', 
      image: '/imgs/mouse.png' 
    },
    { 
      id: 3, 
      name: 'Mousepad', 
      price: 15, 
      description: 'Superficie deslizante optimizada para gaming', 
      image: '/imgs/mousepad.png' 
    },
    { 
      id: 4, 
      name: 'Silla Gamer', 
      price: 250, 
      description: 'Ergonómica con soporte lumbar y reclinable', 
      image: '/imgs/silla.png' 
    },
    { 
      id: 5, 
      name: 'Teclado Mecánico', 
      price: 80, 
      description: 'Switches mecánicos RGB personalizables', 
      image: '/imgs/teclado.png' 
    },
    { 
      id: 6, 
      name: 'Alexa Echo Dot', 
      price: 50, 
      description: 'Bocina inteligente con asistente virtual Alexa', 
      image: '/imgs/alexa.png' 
    }
  ])

  const addProduct = (product) => {
    products.value.push({
      ...product,
      id: Date.now(),
      image: product.image || '/imgs/laptop.png'
    })
  }

  const updateProduct = (updatedProduct) => {
    const index = products.value.findIndex(p => p.id === Number(updatedProduct.id))
    if (index !== -1) {
      products.value[index] = { ...updatedProduct }
    }
  }

  const deleteProduct = (id) => {
    products.value = products.value.filter(p => p.id !== id)
  }

  const getProductById = (id) => {
    return products.value.find(p => p.id === Number(id))
  }

  return { products, addProduct, updateProduct, deleteProduct, getProductById }
})