<template>
  <div class="card h-100 shadow-sm">
    <img :src="flower.imageUrl" class="card-img-top" :alt="flower.name" style="height: 200px; object-fit: cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ flower.name }}</h5>
      <p class="card-text flex-grow-1">{{ flower.description }}</p>
      <div class="mt-auto">
        <p class="card-text fw-bold text-primary">{{ formattedPrice }} Ft</p>
        <button @click="addToCart" class="btn btn-success w-100">
          <i class="bi bi-cart-plus"></i> Kosárba
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFlowerStore } from '../stores/flowerStore'

const props = defineProps({
  flower: {
    type: Object,
    required: true
  }
})

const store = useFlowerStore()

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('hu-HU').format(props.flower.price)
})

const addToCart = () => {
  store.addToCart(props.flower)
}
</script>