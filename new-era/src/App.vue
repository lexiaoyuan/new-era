<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <nav-bar></nav-bar>
    <app-carousel></app-carousel>
    <app-marvelous></app-marvelous>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import AppCarousel from './components/AppCarousel'
  import AppMarvelous from './components/AppMarvelous'
  export default {
    name: 'app',
    components: {
      NavBar,
      AppCarousel,
      AppMarvelous
    }
  }
</script>

<style scpoed>

</style>
