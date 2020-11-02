<template>
  <form>
    <router-link to="/admin/books"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <div class="form-group">
      <label for="exampleInputEmail1">Titre</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="selectedBook.title"
        required
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Auteur</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="selectedBook.author"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Année</label>
      <input
        class="form-control"
        id="exampleInputPassword1"
        v-model="selectedBook.year"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Résumé</label>
      <input
        class="form-control"
        id="exampleInputPassword1"
        v-model="selectedBook.resume"
      />
    </div>
    <div class="form-group">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Genre</label>
      </div>
      <select
        v-model="selectedGenre"
        class="custom-select"
        id="inputGroupSelect01"
      >
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">
          {{ genre.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Couverture</label>
      <input
        class="form-control"
        id="exampleInputPassword1"
        v-model="selectedBook.coverUri"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Disponible en e-books ?</label>
      <input
        type="checkbox"
        v-model="selectedBook.ebooks"
        aria-label="Radio button for following text input"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="handleBtn">
      Sauvegarder
    </button>
  </form>
</template>

<script>
import axios from "axios";
const BOOKS_API_ENDPOINT = "http://localhost:3000/books";
const GENRES_API_ENDPOINT = "http://localhost:3000/genres";
export default {
  data: () => ({
    selectedBook: {},
    selectedGenre: "",
    genres: [],
    editMode: false,
  }),
  watch: {
    selectedGenre() {
      this.selectedBook.genre = this.genres.find(
        (genre) => this.selectedGenre === genre.id
      );
    },
  },
  methods: {
    async fetchGenres() {
      const { status, data } = await axios.get(`${GENRES_API_ENDPOINT}`);
      if (status === 200) this.genres = data;
      else console.log("Unable to reach the API !");
    },
    async fetchSelectedBook(bookId) {
      const { status, data } = await axios.get(
        `${BOOKS_API_ENDPOINT}/${bookId}`
      );

      if (status === 200) {
        this.selectedBook = data;
        this.selectedGenre = data.genre.id;
      } else console.log("Unable to reach the API !");
    },
    getSelectedBook(bookId) {
      this.fetchSelectedBook(bookId);
    },
    async handleBtn() {
      if (this.editMode) {
        const tryToUpdate = await axios.patch(
          `${BOOKS_API_ENDPOINT}/${this.selectedBook.id}`,
          this.selectedBook
        );
        console.log("req :", tryToUpdate);
      } else {
        let body = {
          id: this.selectedBook.id,
          title: this.selectedBook.title,
          author: this.selectedBook.author,
          resume: this.selectedBook.resume,
          coverUri: this.selectedBook.coverUri,
          year: this.selectedBook.year,
          genre: this.selectedBook.genre,
        };
        if (body.title != "") {
          const tryToCreate = await axios.post(`${BOOKS_API_ENDPOINT}`, body);
          console.log("req :", tryToCreate);
        } else {
          console.log("erreur titre");
        }
      }
    },
  },
  created() {
    this.fetchGenres();
    const { bookId = false } = this.$route.params;
    if (bookId) {
      this.editMode = true;
      this.getSelectedBook(bookId);
    }
  },
};
</script>

<style></style>
