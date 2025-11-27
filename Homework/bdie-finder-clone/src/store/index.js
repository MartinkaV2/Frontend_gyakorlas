import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: []
  }),

  actions: {
    async searchBDIE(query) {
      this.query = query

      const res = await fetch('/src/assets/data.json')
      const data = await res.json()

      this.results = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    }
  }
})
