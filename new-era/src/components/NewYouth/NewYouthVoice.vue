<template>
  <div>
    <b-container fluid>
      <!-- 青春声音 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('NewYouthVoice.name') }}</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <!-- 青春声音动漫短视频 -->
      <!-- 新时代来啦动漫短视频 -->
      <b-row align-h="center">
        <b-col class="text-center mt-3">
          <h4 class="text-center">{{ $t('NewYouthVoice.newera_come') }}</h4>
          <small>
            {{ $t('NewYouthVoice.video_source') }}<b-link href="http://cpc.people.com.cn/n1/2017/1109/c164113-29636182.html" target="_blank">中国共产党新闻网</b-link>
          </small>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center mt-3">
          <video :src="require('./new-youth-video/newyouth-voice-newera-come.mp4')" controls preload :poster="require('./new-youth-img/newyouth-voice-newera-come.png')"></video>
        </b-col>
      </b-row>
      <!-- 美丽中国如何绘就 -->
      <b-row align-h="center">
        <b-col class="text-center mt-3">
          <h4 class="text-center">{{ $t('NewYouthVoice.beautiful_china') }}</h4>
          <small>
           {{ $t('NewYouthVoice.video_source') }}<b-link href="http://theory.people.com.cn/n1/2018/0124/c148980-29783446.html" target="_blank">中国共产党新闻网</b-link>
          </small>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center mt-3">
          <video :src="require('./new-youth-video/newyouth-voice-beautiful-china.mp4')" controls preload width="640" height="360" :poster="require('./new-youth-img/newyouth-voice-beautiful-china.png')"></video>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import {
    WOW
  } from 'wowjs'
  export default {
    mounted() {
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
  fieldset {
    margin: 0 2px;
  }

  legend {
    border: 0;
    width: auto;
    margin-bottom: 0px;
  }

</style>
