import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Laptop Pro',
      description: 'Laptop de alta gama con procesador de última generación',
      price: 1200,
      image: `${import.meta.env.BASE_URL}imgs/laptop.png`
    },
    {
      id: 2,
      name: 'Mouse Inalámbrico',
      description: 'Ergonómico, silencioso y de larga duración',
      price: 25,
      image: `${import.meta.env.BASE_URL}imgs/mouse.png`
    },
    {
      id: 3,
      name: 'Mousepad',
      description: 'Superficie deslizante optimizada para gaming',
      price: 15,
      image: `${import.meta.env.BASE_URL}imgs/mousepad.png`
    },
    {
      id: 4,
      name: 'Silla Gamer',
      description: 'Ergonómica con soporte lumbar y reclinable',
      price: 250,
      image: `${import.meta.env.BASE_URL}imgs/silla.png`
    },
    {
      id: 5,
      name: 'Teclado Mecánico',
      description: 'Switches mecánicos RGB personalizables',
      price: 80,
      image: `${import.meta.env.BASE_URL}imgs/teclado.png`
    },
    {
      id: 6,
      name: 'Alexa Echo Dot',
      description: 'Bocina inteligente con asistente virtual Alexa',
      price: 50,
      image: `${import.meta.env.BASE_URL}imgs/alexa.png`
    }
  ])

  const addProduct = (product) => {
    products.value.push({
      ...product,
      id: Date.now(),
      image: product.image || `${import.meta.env.BASE_URL}imgs/laptop.png`
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