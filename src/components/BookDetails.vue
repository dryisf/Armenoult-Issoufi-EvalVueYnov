<template>
  <div>
    <div class="py-4">
      <h1>{{book.title}}</h1>
    </div>
    <div class="card p-4 mb-4">
      <div class="media">
        <img width=160 class="align-self-start mr-3" :src="book.coverUri" alt="Generic placeholder image">
        <div class="media-body">
          <div class="d-flex justify-content-between">
            <span>{{book.author}} - Sortie : {{book.year}}</span>
            <div>
              <span v-if="book.ebooks" class="badge badge-info mr-2 p-1">eBook</span>
            </div>
          </div>
          <div class="mt-4 p-2">
            <h5>Résumé</h5>
            <p>{{book.resume}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  const BOOKS_API_ENDPOINT = 'http://localhost:3000/books/'

  export default {
    name: 'BookDetails',
    data: () => ({
      book: {},
    }),
    methods: {
      async fetchOneBook(bookId) {
        let oneBook = await axios.get(`${BOOKS_API_ENDPOINT}${bookId}`)
        this.book = oneBook.data
      },
    },
    async created() {
      await this.fetchOneBook(this.$route.params.bookId)
    }
  };
</script>

<style></style>