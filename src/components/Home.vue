<template>
  <div>


    <div class="row pb-4">
      <div class="col-lg-3">
        <div class="list-group">
          <a v-for="genre in genres" :class="genre_filter_id == genre.id ? 'active' : ''" :key="genre.id"
            @click="goToSortUri(genre.id)" href="#" class="list-group-item">{{genre.label}}</a>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <div v-for="book in books" :key="book.id" class="card">
              <div class="card-body">
                <div class="media">
                  <img width=160 class="align-self-center mr-3" :src="book.coverUri" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0">{{book.title}}</h5>
                    <p>Auteur : {{book.author}}</p>
                    <p>Sortie : {{book.year}}</p>
                    <button @click="goToBookDetails(book.id)" class="mt-4 r-0 btn btn-info">Détail</button>
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
  import axios from "axios"

  const BOOKS_API_ENDPOINT = 'http://localhost:3000/books'

  const BOOKS_GENRE_API_ENDPOINT = 'http://localhost:3000/books?genre.id='

  const GENRES_API_ENDPOINT = 'http://localhost:3000/genres'

  export default {
    name: 'Home',
    data: () => ({
      books: [],
      genres: [],
      genre_filter_id: false,
    }),
    methods: {
      async fetchAllBooks() {
        if (this.$route.query && this.$route.query.genre) {
          let sortedBooks = await axios.get(`${BOOKS_GENRE_API_ENDPOINT}${this.$route.query.genre}`)
          this.books = sortedBooks.data
          this.genre_filter_id = this.$route.query.genre
        } else {
          let allBooks = await axios.get(BOOKS_API_ENDPOINT)
          this.books = allBooks.data
        }

      },
      async fetchAllGenres() {
        let allGenres = await axios.get(GENRES_API_ENDPOINT)
        this.genres = allGenres.data
      },
      goToBookDetails(bookId) {
        this.$router.push({
          name: 'bookDetails',
          params: {
            bookId
          }
        })
      },
      goToSortUri(genreId) {
        this.$router.push({query: {genre: genreId}})
      }
    },
    async created() {
      await this.fetchAllBooks()
      await this.fetchAllGenres()
    }
  };
</script>

<style></style>