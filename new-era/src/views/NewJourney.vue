<template>
  <div>
      <nav-bar></nav-bar>
      <new-journey-belt-road></new-journey-belt-road>
      <new-journey-heart></new-journey-heart>
      <new-journey-together></new-journey-together>
      <bottom-declare></bottom-declare>
      <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import NewJourneyBeltRoad from '../components/NewJourney/NewJourneyBeltRoad'
import NewJourneyHeart from '../components/NewJourney/NewJourneyHeart'
import NewJourneyTogether from '../components/NewJourney/NewJourneyTogether'
import BottomDeclare from '../components/BottomDeclare'
export default {
    components: {
        NavBar,
        NewJourneyBeltRoad,
        NewJourneyHeart,
        NewJourneyTogether,
        BottomDeclare
    }
}
</script>
<style scoped>

</style>
