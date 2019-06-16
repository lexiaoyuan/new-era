<template>
  <div>
    <!-- 未来一起走 -->
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="w-25 layui-bg-red" />
      <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">未来一起走</h3>
      <hr class="w-25 layui-bg-red">
    </div>

    <b-container>
      <b-row>
        <b-col class="text-center mt-3">
          <h4>2018这样“拼”出来，2019我们一起“拼”</h4>
          <small>
            视频来源：<b-link href="http://www.gov.cn/xinwen/2019-03/02/content_5370104.htm">中国政府网</b-link>
          </small>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center mt-3">
          <video :src="require('./new-journey-video/new-journey-together-video.mp4')" controls></video>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
  }

</script>
<style scoped>

</style>
