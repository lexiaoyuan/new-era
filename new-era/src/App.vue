<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <nav-bar></nav-bar>
    <app-carousel></app-carousel>
    <app-marvelous></app-marvelous>
    <app-word-cloud></app-word-cloud>
    <app-important-speech></app-important-speech>
    <app-info-window></app-info-window>
    <bottom-declare></bottom-declare>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import AppCarousel from './components/Home/AppCarousel'
  import AppMarvelous from './components/Home/AppMarvelous'
  import AppWordCloud from './components/Home/AppWordCloud'
  import AppImportantSpeech from './components/Home/AppImportantSpeech'
  import AppInfoWindow from './components/Home/AppInfoWindow'
  import BottomDeclare from './components/BottomDeclare'
  export default {
    name: 'app',
    components: {
      NavBar,
      AppCarousel,
      AppMarvelous,
      AppWordCloud,
      AppImportantSpeech,
      AppInfoWindow,
      BottomDeclare
    }
  }
</script>

<style scpoed>

</style>
