<template>
  <div>
    <nav-bar></nav-bar>
    <new-youth-brief></new-youth-brief>
    <router-view></router-view>
  </div>
</template>
<script>
  import NavBar from '../components/NavBar'
  import NewYouthBrief from '../components/NewYouth/NewYouthBrief'
  export default {
    components: {
      NavBar,
      NewYouthBrief
    }
  }

</script>
<style scoped>

</style>
