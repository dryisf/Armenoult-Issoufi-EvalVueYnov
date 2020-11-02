<template>
  <form>
    <router-link to="/admin/genres"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <div class="form-group">
      <label for="exampleInputEmail1">Libellé</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="selectedGenre.label"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Icône</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="selectedGenre.icon"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="handleBtn">
      Save
    </button>
  </form>
</template>

<script>
import axios from "axios";
const GENRES_API_ENDPOINT = "http://localhost:3000/genres";
export default {
  data: () => ({
    selectedGenre: {},
    genres: [],
    editMode: false,
  }),
  watch: {
    selectedGenre() {
      this.selectedGenre.genre = this.genres.find(
        (genre) => this.selectedGenre === genre.id
      );
    },
  },
  methods: {
    async fetchSelectedGenre(genreId) {
      const { status, data } = await axios.get(
        `${GENRES_API_ENDPOINT}/${genreId}`
      );

      if (status === 200) {
        this.selectedGenre = data;
      } else console.log("Unable to reach the API !");
    },
    getSelectedGenre(genreId) {
      this.fetchSelectedGenre(genreId);
    },
    async handleBtn() {
      if (this.editMode) {
        const tryToUpdate = await axios.patch(
          `${GENRES_API_ENDPOINT}/${this.selectedGenre.id}`,
          this.selectedGenre
        );
        console.log("req :", tryToUpdate);
      } else {
        let body = {
          id: this.selectedGenre.id,
          label: this.selectedGenre.label,
          icon: this.selectedGenre.icon,
        };
        const tryToCreate = await axios.post(`${GENRES_API_ENDPOINT}`, body);
        console.log("req :", tryToCreate);
      }
    },
  },
  created() {
    const { genreId = false } = this.$route.params;
    if (genreId) {
      this.editMode = true;
      this.getSelectedGenre(genreId);
    }
  },
};
</script>

<style></style>
