<template>
  <div v-if="items.length === 0">
    <p>Nincs találat...</p>
  </div>

  <div v-else>
    <ResultItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup>
import ResultItem from './ResultItem.vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
