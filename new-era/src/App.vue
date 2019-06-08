<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <NavBar></NavBar>
    <AppCarousel></AppCarousel>
    <Marvelous></Marvelous>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import AppCarousel from './components/AppCarousel'
  import Marvelous from './components/Marvelous'
  export default {
    name: 'app',
    components: {
      NavBar,
      AppCarousel,
      Marvelous
    }
  }
</script>

<style scpoed>

</style>
