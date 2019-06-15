<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="dark" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
      <template slot="header">一分钟，会发生什么呢？</template>

      <template slot="lead">
        关于中国一分钟的简短描述，关于中国一分钟的简短描述，关于中国一分钟的简短描述，关于中国一分钟的简短描述，
      </template>

      <hr class="my-4">

      <p>
        关于中国一分钟的简短描述，关于中国一分钟的简短描述，关于中国一分钟的简短描述，
      </p>
    </b-jumbotron>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  export default {
    mounted () {
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 30,
        mobile: true,
        live: false
      })
      wow.init()
    }
  }
</script>
<style scoped>

</style>
