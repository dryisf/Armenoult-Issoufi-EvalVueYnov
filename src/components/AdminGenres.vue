<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Libellé</th>
        <th scope="col">Icône</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="genre in genres" :key="genre.id">
        <td>{{ genre.label }}</td>
        <td><i :class="getClass(genre.icon)" /></td>
        <td>
          <button
            class="btn btn-secondary"
            type="submit"
            @click="editGenre(genre.id)"
          >
            Editer
          </button>
          <button
            class="btn btn-danger"
            type="submit"
            @click="deleteGenre(genre.id)"
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
const GENRES_API_ENDPOINT = "http://localhost:3000/genres";
export default {
  data: () => ({
    genres: {},
  }),
  methods: {
    async fetchGenres() {
      const { status, data } = await axios.get(GENRES_API_ENDPOINT);
      if (status === 200) this.setGenres(data);
      else console.log("Unable to reach the API !");
    },
    setGenres(fetchedGenres) {
      this.genres = fetchedGenres;
    },
    editGenre(genreId) {
      this.$router.push({ name: "genreEdit", params: { genreId } });
    },
    addGenre() {
      this.$router.push({ name: "genreCreate" });
    },
    async deleteGenre(genreId) {
      const tryToDelete = await axios.delete(
        `${GENRES_API_ENDPOINT}/${genreId}`
      );
      if (tryToDelete.status == 200) this.fetchGenres();
      console.log("req :", tryToDelete);
    },
    getClass(genreIcon) {
      return `fa fa-${genreIcon}`;
    },
  },
  created() {
    this.fetchGenres();
  },
};
</script>

<style></style>
