<template>
  <div class="container mt-4">
    <h2>{{ isEditMode ? 'Virág szerkesztése' : 'Új virág hozzáadása' }}</h2>
    
    <form @submit.prevent="handleSubmit" class="mt-4">
      <div class="mb-3">
        <label for="name" class="form-label">Név</label>
        <input type="text" class="form-control" id="name" v-model="formData.name" required>
      </div>
      
      <div class="mb-3">
        <label for="price" class="form-label">Ár (Ft)</label>
        <input type="number" class="form-control" id="price" v-model.number="formData.price" required min="0">
      </div>
      
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Kép URL</label>
        <input type="url" class="form-control" id="imageUrl" v-model="formData.imageUrl" required>
      </div>
      
      <div class="mb-3">
        <label for="description" class="form-label">Leírás</label>
        <textarea class="form-control" id="description" v-model="formData.description" rows="3" required></textarea>
      </div>
      
      <div class="d-flex gap-2">
        <button type="submit" class="btn btn-primary" :disabled="store.loading">
          <span v-if="store.loading" class="spinner-border spinner-border-sm me-1"></span>
          {{ isEditMode ? 'Frissítés' : 'Hozzáadás' }}
        </button>
        <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Mégse</button>
      </div>
      
      <div v-if="store.error" class="alert alert-danger mt-3">
        {{ store.error }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFlowerStore } from '../stores/flowerStore'

const props = defineProps({
  flowerId: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['success', 'cancel'])

const store = useFlowerStore()
const isEditMode = ref(false)
const formData = ref({
  name: '',
  price: 0,
  imageUrl: '',
  description: ''
})

onMounted(async () => {
  if (props.flowerId) {
    isEditMode.value = true
    await store.loadFlower(props.flowerId)
    if (store.selectedFlower) {
      formData.value = { ...store.selectedFlower }
    }
  }
})

const handleSubmit = async () => {
  try {
    if (isEditMode.value) {
      await store.editFlower(props.flowerId, formData.value)
    } else {
      await store.createFlower(formData.value)
    }
    emit('success')
  } catch (error) {
    console.error('Hiba a virág mentése közben:', error)
  }
}
</script>