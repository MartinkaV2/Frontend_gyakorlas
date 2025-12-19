<template>
  <div class="container-fluid p-0">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="bi bi-flower1"></i> Virágüzlet
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#" @click="currentView = 'home'">
                <i class="bi bi-house"></i> Főoldal
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="currentView = 'manage'">
                <i class="bi bi-pencil"></i> Virágok kezelése
              </a>
            </li>
            <li class="nav-item">
              <span class="nav-link position-relative">
                <i class="bi bi-cart"></i> Kosár
                <span v-if="store.cartItemCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ store.cartItemCount }}
                  <span class="visually-hidden">termék a kosárban</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <div class="container my-4">
      <div v-if="currentView === 'home'">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="mb-4">Virágkínálatunk</h1>
            <FlowerList />
          </div>
          <div class="col-lg-4">
            <ShoppingCart />
          </div>
        </div>
      </div>

      <div v-else-if="currentView === 'manage'">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1>Virágok kezelése</h1>
          <button class="btn btn-primary" @click="showAddForm">
            <i class="bi bi-plus-circle"></i> Új virág
          </button>
        </div>

        <div v-if="showForm">
          <FlowerForm 
            :flower-id="editingFlowerId" 
            @success="handleFormSuccess"
            @cancel="closeForm"
          />
        </div>

        <div v-else>
          <div v-if="store.loading" class="text-center my-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Betöltés...</span>
            </div>
          </div>

          <div v-else class="table-responsive">
            <table class="table table-hover">
              <thead class="table-light">
                <tr>
                  <th>ID</th>
                  <th>Kép</th>
                  <th>Név</th>
                  <th>Ár</th>
                  <th>Leírás</th>
                  <th>Műveletek</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="flower in store.flowers" :key="flower.id">
                  <td>{{ flower.id }}</td>
                  <td>
                    <img :src="flower.imageUrl" :alt="flower.name" style="width: 50px; height: 50px; object-fit: cover;" class="rounded">
                  </td>
                  <td>{{ flower.name }}</td>
                  <td>{{ new Intl.NumberFormat('hu-HU').format(flower.price) }} Ft</td>
                  <td>{{ flower.description }}</td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <button @click="editFlower(flower.id)" class="btn btn-outline-primary">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button @click="deleteFlower(flower.id)" class="btn btn-outline-danger">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p class="mb-0">Virágüzlet &copy; 2023 - Minden jog fenntartva</p>
        <small>Készítette: Vue 3, Pinia, Bootstrap és JSON Server</small>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFlowerStore } from './stores/flowerStore'
import FlowerList from './components/FlowerList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import FlowerForm from './components/FlowerForm.vue'

const store = useFlowerStore()
const currentView = ref('home')
const showForm = ref(false)
const editingFlowerId = ref(null)

onMounted(() => {
  store.loadFlowers()
  store.loadCartFromStorage()
})

const showAddForm = () => {
  editingFlowerId.value = null
  showForm.value = true
}

const editFlower = (id) => {
  editingFlowerId.value = id
  showForm.value = true
}

const handleFormSuccess = () => {
  showForm.value = false
  store.loadFlowers() // Refresh the list
}

const closeForm = () => {
  showForm.value = false
}

const deleteFlower = async (id) => {
  if (confirm('Biztosan törölni szeretné ezt a virágot?')) {
    await store.removeFlower(id)
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
}
</style>