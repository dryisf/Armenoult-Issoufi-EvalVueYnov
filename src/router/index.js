import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/books",
      redirect: "/home",
    },
    {
      path: "/books/:bookId",
      name: "bookDetails",
      component: () => import("../components/BookDetails.vue"),
    },
    {
      path: "/genres",
      name: "genres",
      component: () => import("../components/Genres.vue"),
    },
    {
      path: "/admin",
      name: "adminHome",
      component: () => import("../components/AdminHome.vue"),
    },
    {
      path: "/admin/books/new",
      name: "bookCreate",
      component: () => import("../components/BookForm.vue"),
    },
    {
      path: "/admin/books",
      name: "adminBooks",
      component: () => import("../components/AdminBooks.vue"),
    },
    {
      path: "/admin/books/:bookId",
      name: "bookEdit",
      component: () => import("../components/BookForm.vue"),
    },
    {
      path: "/admin/genres/new",
      name: "genreCreate",
      component: () => import("../components/GenreForm.vue"),
    },
    {
      path: "/admin/genres",
      name: "adminGenres",
      component: () => import("../components/AdminGenres.vue"),
    },
    {
      path: "/admin/genres/:genreId",
      name: "genreEdit",
      component: () => import("../components/GenreForm.vue"),
    },
  ],
});

export default router;
