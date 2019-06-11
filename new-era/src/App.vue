<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <nav-bar></nav-bar>
    <app-carousel></app-carousel>
    <app-marvelous></app-marvelous>
    <app-word-cloud></app-word-cloud>
    <app-important-speech></app-important-speech>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import AppCarousel from './components/AppCarousel'
  import AppMarvelous from './components/AppMarvelous'
  import AppWordCloud from './components/AppWordCloud'
  import AppImportantSpeech from './components/AppImportantSpeech'
  export default {
    name: 'app',
    components: {
      NavBar,
      AppCarousel,
      AppMarvelous,
      AppWordCloud,
      AppImportantSpeech
    }
  }
</script>

<style scpoed>

</style>
