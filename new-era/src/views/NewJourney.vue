<template>
  <div>
      <nav-bar></nav-bar>
      <p>新征程</p>
      <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
export default {
    components: {
        NavBar
    }
}
</script>
<style scoped>

</style>
