<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Navbar</router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">Kezdőlap</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books" class="nav-link" exact-active-class="active">Könyvek</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" exact-active-class="active">Kapcsolat</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-link {
  font-weight: 500;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>