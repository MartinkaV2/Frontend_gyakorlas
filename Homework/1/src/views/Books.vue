<template>
  <div class="books-page">
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="card-title text-primary">Könyvek Oldal</h1>
            <p class="card-text">Itt találhatóak a könyvek katalógusa.</p>
            
            <div class="row mt-4">
              <div class="col-md-4 mb-4" v-for="book in books" :key="book.id">
                <div class="card h-100 book-card">
                  <div class="card-body">
                    <h5 class="card-title">{{ book.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
                    <p class="card-text">{{ book.description }}</p>
                  </div>
                  <div class="card-footer bg-transparent">
                    <span class="badge bg-success">{{ book.year }}</span>
                    <span class="badge bg-info ms-2">{{ book.genre }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Vue.js 3 alapok',
          author: 'Kovács János',
          description: 'Egy átfogó útmutató a Vue.js 3 framework használatához.',
          year: 2023,
          genre: 'Programozás'
        },
        {
          id: 2,
          title: 'JavaScript mesterfokon',
          author: 'Nagy Eszter',
          description: 'Haladó JavaScript technikák és minták.',
          year: 2022,
          genre: 'Programozás'
        },
        {
          id: 3,
          title: 'A webdesign alapjai',
          author: 'Szabó Péter',
          description: 'Modern webdesign elvek és gyakorlati alkalmazásuk.',
          year: 2023,
          genre: 'Design'
        }
      ]
    }
  }
}
</script>

<style scoped>
.books-page {
  min-height: 70vh;
}

.book-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e9ecef;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
}

.card {
  border-radius: 10px;
}
</style>