<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">
        Books
      </div>
      <div class="card-body">
        <router-link to="/admin/books/new" class="btn btn-primary"
          >Ajouter</router-link
        >
        <router-link to="/admin/books" class="btn btn-primary"
          >Editer ou Supprimer</router-link
        >
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        Genres
      </div>
      <div class="card-body">
        <router-link to="/admin/genres/new" class="btn btn-primary"
          >Ajouter</router-link
        >
        <router-link to="/admin/genres" class="btn btn-primary"
          >Editer ou Supprimer</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
