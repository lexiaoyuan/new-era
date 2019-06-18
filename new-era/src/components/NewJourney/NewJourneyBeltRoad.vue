<template>
  <div>
    <b-container fluid class="deletePx">
      <swiper :options="swiperOption">
        <swiper-slide>
          <b-img :src="require('./new-journey-img/new-journey-belt-road-hd-img1.jpeg')" fluid-grow></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img :src="require('./new-journey-img/new-journey-belt-road-hd-img2.jpeg')" fluid-grow></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img :src="require('./new-journey-img/new-journey-belt-road-hd-img1.jpeg')" fluid-grow></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img :src="require('./new-journey-img/new-journey-belt-road-hd-img2.jpeg')" fluid-grow></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img :src="require('./new-journey-img/new-journey-belt-road-hd-img1.jpeg')" fluid-grow></b-img>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </b-container>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },
          speed: 3000,
          grabCursor: true,
          autoplay: true,
          effect: 'fade',
          mousewheel: true,
          loop: true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>
<style scoped>
.deletePx {
  padding-left: 0; padding-right: 0;
}

</style>
