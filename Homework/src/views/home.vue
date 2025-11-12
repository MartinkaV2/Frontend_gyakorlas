<template>
  <div class="home-page">
    <div class="row">
      <div class="col-md-8">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h1 class="card-title text-primary">Kezdőlap</h1>
            <p class="card-text">Ez az alkalmazás kezdőoldala, amely bemutatja a Vue 3 és Vue Router használatát.</p>
            <div class="alert alert-info">
              <strong>Funkcionalitások:</strong>
              <ul class="mb-0 mt-2">
                <li>Vue 3 Composition API</li>
                <li>Vue Router navigáció</li>
                <li>Reszponzív Bootstrap design</li>
                <li>Komponens alapú architektúra</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <!-- HelloWorld komponens integrálása -->
        <HelloWorld msg="Üdvözöllek a Vue Router App-ban!" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>

<style scoped>
.home-page {
  min-height: 70vh;
}

.card {
  border: none;
  border-radius: 10px;
}
</style>