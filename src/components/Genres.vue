<template>
  <div>
    <div>
      <h1 class="py-4">Les genres</h1>
    </div>
    <div>
      <div class="card p-2">
        <div v-for="(genre, idx) in genres" :key="idx" class="card py-3 px-2">
          {{genre.label}} : {{ genres_books[genre.id] }} livres de ce genre
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  const GENRES_API_ENDPOINT = 'http://localhost:3000/genres/'

  const BOOKS_GENRE_API_ENDPOINT = 'http://localhost:3000/books?genre.id='

  export default {
    name: 'Genres',
    data: () => ({
      genres: [],
      genres_books: {}
    }),
    methods: {
      async fetchAllGenres() {
        let allGenres = await axios.get(GENRES_API_ENDPOINT)
        this.genres = allGenres.data
        this.genres.forEach(genre => {
          this.countGenreBooks(genre.id)
        });
        
      },
      async countGenreBooks(genreId) {
        let sortedBooks = await axios.get(`${BOOKS_GENRE_API_ENDPOINT}${genreId}`)
        let totalBooks = sortedBooks.data.length
        this.genres_books[genreId] = totalBooks
        //Sinon le total ne s'affichait pas
        this.$forceUpdate()
      }
    },
    async created() {
      await this.fetchAllGenres()
    }
  };
</script>

<style></style>