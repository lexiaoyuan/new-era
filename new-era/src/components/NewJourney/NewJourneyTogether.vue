<template>
  <div>
    <!-- 未来一起走 -->
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="w-25 layui-bg-red" />
      <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('NewJourneyTogether.name') }}</h3>
      <hr class="w-25 layui-bg-red">
    </div>

    <b-container>
      <b-row>
        <b-col class="text-center mt-3">
          <h4>{{ $t('NewJourneyTogether.together_name') }}</h4>
          <small>
            {{ $t('NewJourneyTogether.video_source') }}<b-link href="http://www.gov.cn/xinwen/2019-03/02/content_5370104.htm" target="_blank">中国政府网</b-link>
          </small>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center mt-3">
          <video :src="require('./new-journey-video/new-journey-together-video.mp4')" controls preload :poster="require('./new-journey-img/new-journey-together-img.gif')"></video>
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
