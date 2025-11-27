<template>
  <div class="card">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})
</script>

<style>
.card {
  background: white;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
</style>
