<template>
  <div>
    <div>
      <h1 class="p-3">Mes livres</h1>
    </div>

    <div class="row pb-4">
      <div class="col-lg-3">
        <div class="list-group">
          <a href="#" class="list-group-item active">Category 1</a>
          <a href="#" class="list-group-item">Category 2</a>
          <a href="#" class="list-group-item">Category 3</a>
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

  export default {
    name: 'Home',
    data: () => ({
      books: [],
    }),
    methods: {
      async fetchAllBooks() {
        let allBooks = await axios.get(BOOKS_API_ENDPOINT)
        this.books = allBooks.data
      },
      goToBookDetails(bookId) {
        this.$router.push({
          name: 'bookDetails',
          params: {
            bookId
          }
        })
      }
    },
    async created() {
      await this.fetchAllBooks()
    }
  };
</script>

<style></style>