<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="card shadow-sm border-0">
    <div class="card-body text-center">
      <h3 class="card-title text-success">{{ msg }}</h3>

      <div class="card mt-3 bg-light">
        <div class="card-body">
          <button type="button" class="btn btn-outline-primary btn-lg" @click="count++">
            Kattintások száma: {{ count }}
          </button>
          <p class="mt-2 mb-1 small text-muted">
            Szerkeszd a <code>components/HelloWorld.vue</code> fájlt a HMR teszteléséhez
          </p>
        </div>
      </div>

      <div class="mt-4">
        <p class="mb-2">
          Tekintsd meg a
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-decoration-none">
            create-vue
          </a>-t, a hivatalos Vue + Vite startert
        </p>
        <p class="mb-2">
          Tudj meg többet az IDE támogatásról a
          <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" class="text-decoration-none">
            Vue Docs Scaling up Guide
          </a>-ban
        </p>
        <p class="read-the-docs mt-3">Kattints a Vite és Vue logo-kra, hogy többet megtudj</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
}

.read-the-docs {
  color: #6c757d;
  font-size: 0.9rem;
}

code {
  background-color: #e9ecef;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>