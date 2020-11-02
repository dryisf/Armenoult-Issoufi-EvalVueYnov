<template>
  <section class="welcome p-t-10">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title-4">{{ currentRouteName }}</h1>
          <hr class="line-seprate" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const sectionTitles = {
  home: "Mes Livres",
  genres: "Les genres",
  adminHome: "Administration",
  adminBooks: "Administration des livres",
  adminGenres: "Administration des genres",
  bookEdit: "Edition d'un livre",
  bookCreate: "Création d'un livre",
  genreEdit: "Edition d'un genre",
  genreCreate: "Création d'un genre",
};
export default {
  data: () => ({
    title: "",
  }),
  computed: {
    currentRouteName() {
      return this.$route.name ? sectionTitles[this.$route.name] : "";
    },
  },
};
</script>

<style></style>
