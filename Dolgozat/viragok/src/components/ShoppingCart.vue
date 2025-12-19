<template>
  <div class="cart-container">
    <h3 class="mb-4">
      <i class="bi bi-cart3"></i> Kosár
      <span v-if="store.cartItemCount > 0" class="badge bg-primary rounded-pill ms-2">
        {{ store.cartItemCount }}
      </span>
    </h3>

    <div v-if="store.cart.length === 0" class="alert alert-info">
      A kosár üres.
    </div>

    <div v-else>
      <div class="list-group mb-4">
        <div v-for="item in store.cart" :key="item.id" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img :src="item.imageUrl" :alt="item.name" style="width: 60px; height: 60px; object-fit: cover;" class="rounded me-3">
              <div>
                <h6 class="mb-0">{{ item.name }}</h6>
                <small class="text-muted">{{ new Intl.NumberFormat('hu-HU').format(item.price) }} Ft / db</small>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <button @click="store.removeFromCart(item.id)" class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-dash"></i>
              </button>
              <span class="mx-3">{{ item.quantity }} db</span>
              <button @click="store.addToCart(item)" class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-plus"></i>
              </button>
              <span class="ms-4 fw-bold">
                {{ new Intl.NumberFormat('hu-HU').format(item.price * item.quantity) }} Ft
              </span>
              <button @click="store.removeItemFromCart(item.id)" class="btn btn-sm btn-outline-danger ms-3">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">Összesen:</h4>
        <h4 class="mb-0 text-primary">{{ new Intl.NumberFormat('hu-HU').format(store.totalPrice) }} Ft</h4>
      </div>

      <div class="d-flex gap-2">
        <button @click="store.clearCart" class="btn btn-outline-danger">
          <i class="bi bi-trash"></i> Kosár ürítése
        </button>
        <button class="btn btn-primary flex-grow-1">
          <i class="bi bi-check-circle"></i> Megrendelés
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFlowerStore } from '../stores/flowerStore'

const store = useFlowerStore()
</script>

<style scoped>
.cart-container {
  position: sticky;
  top: 20px;
}
</style>