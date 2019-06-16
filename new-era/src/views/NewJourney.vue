<template>
  <div>
      <nav-bar></nav-bar>
      <new-journey-belt-road></new-journey-belt-road>
      <new-journey-heart></new-journey-heart>
      <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import NewJourneyBeltRoad from '../components/NewJourney/NewJourneyBeltRoad'
import NewJourneyHeart from '../components/NewJourney/NewJourneyHeart'
export default {
    components: {
        NavBar,
        NewJourneyBeltRoad,
        NewJourneyHeart
    }
}
</script>
<style scoped>

</style>
