import { defineStore } from 'pinia'
import { fetchFlowers, fetchFlowerById, addFlower, updateFlower, deleteFlower } from '../services/api'

export const useFlowerStore = defineStore('flower', {
  state: () => ({
    flowers: [],
    cart: [],
    loading: false,
    error: null,
    selectedFlower: null
  }),

  getters: {
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
    getFlowerById: (state) => {
      return (id) => state.flowers.find(flower => flower.id === parseInt(id))
    }
  },

  actions: {
    async loadFlowers() {
      this.loading = true
      this.error = null
      try {
        this.flowers = await fetchFlowers()
      } catch (error) {
        this.error = error.message
        console.error('Error loading flowers:', error)
      } finally {
        this.loading = false
      }
    },

    async loadFlower(id) {
      this.loading = true
      this.error = null
      try {
        this.selectedFlower = await fetchFlowerById(id)
      } catch (error) {
        this.error = error.message
        console.error(`Error loading flower ${id}:`, error)
      } finally {
        this.loading = false
      }
    },

    async createFlower(flowerData) {
      this.loading = true
      this.error = null
      try {
        const newFlower = await addFlower(flowerData)
        this.flowers.push(newFlower)
        return newFlower
      } catch (error) {
        this.error = error.message
        console.error('Error creating flower:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async editFlower(id, flowerData) {
      this.loading = true
      this.error = null
      try {
        const updatedFlower = await updateFlower(id, flowerData)
        const index = this.flowers.findIndex(f => f.id === parseInt(id))
        if (index !== -1) {
          this.flowers[index] = updatedFlower
        }
        return updatedFlower
      } catch (error) {
        this.error = error.message
        console.error(`Error updating flower ${id}:`, error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async removeFlower(id) {
      this.loading = true
      this.error = null
      try {
        await deleteFlower(id)
        this.flowers = this.flowers.filter(flower => flower.id !== parseInt(id))
        // Remove from cart if exists
        this.cart = this.cart.filter(item => item.id !== parseInt(id))
      } catch (error) {
        this.error = error.message
        console.error(`Error deleting flower ${id}:`, error)
        throw error
      } finally {
        this.loading = false
      }
    },

    addToCart(flower) {
      const existingItem = this.cart.find(item => item.id === flower.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ ...flower, quantity: 1 })
      }
      // Save to localStorage
      localStorage.setItem('flowerCart', JSON.stringify(this.cart))
    },

    removeFromCart(flowerId) {
      const index = this.cart.findIndex(item => item.id === flowerId)
      if (index !== -1) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity -= 1
        } else {
          this.cart.splice(index, 1)
        }
      }
      localStorage.setItem('flowerCart', JSON.stringify(this.cart))
    },

    removeItemFromCart(flowerId) {
      this.cart = this.cart.filter(item => item.id !== flowerId)
      localStorage.setItem('flowerCart', JSON.stringify(this.cart))
    },

    clearCart() {
      this.cart = []
      localStorage.removeItem('flowerCart')
    },

    loadCartFromStorage() {
      const savedCart = localStorage.getItem('flowerCart')
      if (savedCart) {
        this.cart = JSON.parse(savedCart)
      }
    }
  }
})