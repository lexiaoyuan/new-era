<template>
  <div>
    <!-- 未来一起走 -->
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="w-25 layui-bg-red" />
      <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">未来一起走</h3>
      <hr class="w-25 layui-bg-red">
    </div>

    <b-container>
      <b-embed type="video" aspect="4by3" controls :poster="require('./new-journey-img/new-journey-together-img.gif')">
        <source :src="require('./new-journey-video/new-journey-together-video.mp4')" type="video/mp4">
      </b-embed>
    </b-container>
  </div>
</template>
<script>
  export default {

  }

</script>
<style scoped>

</style>
