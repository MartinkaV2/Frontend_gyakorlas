<template>
  <input
    class="search"
    type="text"
    placeholder="Keresés..."
    v-model="text"
    @input="emitSearch"
  >
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
let timeout = null

const emit = defineEmits(['search'])

function emitSearch() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    emit('search', text.value)
  }, 400)
}
</script>

<style>
.search {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
}
</style>
