<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Année de publication</th>
        <th scope="col">Titre</th>
        <th scope="col">Auteur</th>
        <th scope="col">Genre</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id">
        <th scope="row">{{ book.year }}</th>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.genre.label }}</td>
        <td>
          <button
            class="btn btn-secondary"
            type="submit"
            @click="editBook(book.id)"
          >
            Editer
          </button>
          <button
            class="btn btn-danger"
            type="submit"
            @click="deleteBook(book.id)"
          >
            Supprimer
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
const BOOKS_API_ENDPOINT = "http://localhost:3000/books";
export default {
  data: () => ({
    books: {},
  }),
  methods: {
    async fetchBooks() {
      const { status, data } = await axios.get(BOOKS_API_ENDPOINT);
      if (status === 200) this.setBooks(data);
      else console.log("Unable to reach the API !");
    },
    setBooks(fetchedBooks) {
      this.books = fetchedBooks;
    },
    editBook(bookId) {
      this.$router.push({ name: "bookEdit", params: { bookId } });
    },
    addBook() {
      this.$router.push({ name: "bookCreate" });
    },
    async deleteBook(bookId) {
      const tryToDelete = await axios.delete(`${BOOKS_API_ENDPOINT}/${bookId}`);
      if (tryToDelete.status == 200) this.fetchBooks();
      console.log("req :", tryToDelete);
    },
  },
  created() {
    this.fetchBooks();
  },
};
</script>

<style></style>
