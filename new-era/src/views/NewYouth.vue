<template>
  <div>
    <nav-bar></nav-bar>
    <new-youth-brief></new-youth-brief>
    <new-youth-flash></new-youth-flash>
    <new-youth-voice></new-youth-voice>
    <new-youth-power></new-youth-power>
    <bottom-declare></bottom-declare>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from '../components/NavBar'
  import NewYouthBrief from '../components/NewYouth/NewYouthBrief'
  import NewYouthFlash from '../components/NewYouth/NewYouthFlash'
  import NewYouthVoice from '../components/NewYouth/NewYouthVoice'
  import NewYouthPower from '../components/NewYouth/NewYouthPower'
  import BottomDeclare from '../components/BottomDeclare'
  export default {
    components: {
      NavBar,
      NewYouthBrief,
      NewYouthFlash,
      NewYouthVoice,
      NewYouthPower,
      BottomDeclare
    }
  }

</script>
<style scoped>

</style>
