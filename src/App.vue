<template>
  <div id="app">
    <div class="page-wrapper">
      <Navbar />
      <!-- PAGE CONTENT-->
      <div class="page-content--bgf7">
        <!-- WELCOME-->

        <!-- END WELCOME-->

        <!-- Content -->
        <section class="container">
          <router-view></router-view>
        </section>
        <!-- END STATISTIC CHART-->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
