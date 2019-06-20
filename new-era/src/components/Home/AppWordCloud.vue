<template>
  <div>
    <div class="bg-light pt-2 mt-5 pb-4">
      <!-- -------------十九大词云-------------------- -->
      <div class="d-flex justify-content-sm-around">
        <hr class="layui-bg-red w-25" />
        <h3 class="wow animated flipInX" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('AppWordCloud.name') }}</h3>
        <hr class="layui-bg-red w-25">
      </div>
      <!-- 报告全文高频词分析 -->
      <b-container fluid>
        <b-row align-h="around">
          <b-col class="wow animated fadeInDown" cols="5" sm="5" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>{{ $t('AppWordCloud.word_cloud_full_text_title') }}</h2>
            <p class="app-word-cloud-p">{{ $t('AppWordCloud.word_cloud_full_text_1') }}</p>
            <p class="app-word-cloud-p">{{ $t('AppWordCloud.word_cloud_full_text_2') }}</p>
          </b-col>
          <b-col cols="5" sm="5" class="text-center wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img-lazy :src="require('./img/app-word-cloud-fulltext.png')" fluid blank-color="rgba(128, 255, 255, 0.5)" blank-height="325" blank-src=null blank-width="340"></b-img-lazy>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 报告中的成语词云分析 -->
    <div class="pt-2 mt-5">
      <b-container fluid>
        <b-row align-h="around">
          <b-col cols="5" sm="5" class="text-center wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img-lazy :src="require('./img/app-word-cloud-idiom.png')" fluid blank-color="rgba(128, 255, 255, 0.5)" blank-height="340" blank-src=null blank-width="340"></b-img-lazy>
          </b-col>
          <b-col cols="5" sm="5" class="wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>{{ $t('AppWordCloud.word_cloud_idiom_title') }}</h2>
            <p class="app-word-cloud-p">{{ $t('AppWordCloud.word_cloud_idiom') }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
     <!-- 高频动词的词云分析 -->
    <div class="bg-light pt-4 mt-5 pb-4">
      <b-container fluid>
        <b-row align-h="around">
          <b-col cols="5" sm="5" class="wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>{{ $t('AppWordCloud.word_cloud_verb_title') }}</h2>
            <p class="app-word-cloud-p">{{ $t('AppWordCloud.word_cloud_verb') }}</p>
          </b-col>
          <b-col cols="5" sm="5" class="text-center wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img-lazy :src="require('./img/app-word-cloud-verb.png')" fluid blank-color="rgba(128, 255, 255, 0.5)" blank-height="340" blank-src=null blank-width="246"></b-img-lazy>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
.app-word-cloud-p {
  text-indent: 2rem;
}
</style>
