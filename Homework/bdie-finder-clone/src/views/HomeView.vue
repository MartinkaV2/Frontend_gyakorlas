<template>
  <div class="container">
    <h1>BDIE Finder – Mini Klón</h1>

    <SearchBar @search="onSearch" />

    <ResultList :items="store.results" />
  </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue'
import ResultList from '../components/ResultList.vue'
import { useSearchStore } from '../store'

const store = useSearchStore()

function onSearch(q) {
  if (q.length < 2) return
  store.searchBDIE(q)
}
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
