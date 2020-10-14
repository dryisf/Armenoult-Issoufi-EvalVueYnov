<template>
  <div id="app">
    <RoverNav />
    <div class="container">

        <div class="row">
            <RoverSideBar />
            <RoverMainContainer />
        </div>
    </div>
    <RoverFooter />
  </div>
</template>

<script>
import RoverNav           from './components/RoverNav.vue'
import RoverSideBar       from './components/RoverSideBar.vue'
import RoverMainContainer from './components/RoverMainContainer.vue'
import RoverFooter        from './components/RoverFooter.vue'

export default {
  name: 'App',
  components: {
    RoverNav,
    RoverSideBar,
    RoverMainContainer,
    RoverFooter
  }
}
</script>

<style>
body {
  padding-top: 56px;
}

</style>
