<template>
  <div>
    <nav-bar></nav-bar>
    <new-youth-brief></new-youth-brief>
    <new-youth-flash></new-youth-flash>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from '../components/NavBar'
  import NewYouthBrief from '../components/NewYouth/NewYouthBrief'
  import NewYouthFlash from '../components/NewYouth/NewYouthFlash'
  export default {
    components: {
      NavBar,
      NewYouthBrief,
      NewYouthFlash
    }
  }

</script>
<style scoped>

</style>
