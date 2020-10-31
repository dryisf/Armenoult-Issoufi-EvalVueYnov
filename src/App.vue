<template>
  <div id="app">

    <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <a href="#">
                            <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
                        </a>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">

                            <li>
                                <a href="#">
                                    <i class="fas fa-book"></i>
                                    <span class="bot-line"></span>Livres</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Genre</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cogs"></i>
                                    <span class="bot-line"></span>Admin</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
        <!-- END HEADER DESKTOP-->

        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">Titre de la section
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->


            <!-- Content -->
            <section class="container">

                <div class="row mt-5 pb-5">
                    <div class="col-4">
                        <select class="form-control">
                          <option>Science</option>
                          <option>Classic</option>
                        </select>
                    </div>
                    <div class="col-8">
                        <ul class="list-group">
                          <li class="list-group-item">Cras justo odio</li>
                          <li class="list-group-item">Dapibus ac facilisis in</li>
                          <li class="list-group-item">Morbi leo risus</li>
                          <li class="list-group-item">Porta ac consectetur ac</li>
                          <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>





            </section>
            <!-- END STATISTIC CHART-->


        </div>

    </div>




  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
