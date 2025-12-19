<template>
  <div>
    <div v-if="store.loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Betöltés...</span>
      </div>
    </div>

    <div v-else-if="store.error" class="alert alert-danger" role="alert">
      Hiba történt: {{ store.error }}
    </div>

    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <div class="col" v-for="flower in store.flowers" :key="flower.id">
        <FlowerCard :flower="flower" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFlowerStore } from '../stores/flowerStore'
import FlowerCard from './FlowerCard.vue'

const store = useFlowerStore()

onMounted(() => {
  store.loadFlowers()
})
</script>