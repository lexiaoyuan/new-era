<template>
  <div>
    <b-container fluid>
      <!-- 青春力量 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('NewYouthPower.name') }}</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <!-- 陆海空超燃宣传片 -->
      <b-row class="mt-3">
        <b-col cols="4" class="text-center">
          <b-img class="wow animated fadeInUp" :src="require('./new-youth-img/newyouth-power-landforce.png')" fluid
            rounded>
          </b-img>
          <h5 class="mt-2 mb-2 wow animated fadeInUp">
            <b-link :href="landForce.link" target="_blank">{{ $t('NewYouthPower.landForce.title') }}</b-link>
          </h5>
          <p class="text-center px-4 wow animated fadeInUp">{{ $t('NewYouthPower.landForce.brief') }}</p>
        </b-col>
        <b-col cols="4" class="text-center">
          <b-img class="wow animated fadeInUp" :src="require('./new-youth-img/newyouth-power-navy.png')" fluid rounded>
          </b-img>
          <h5 class="mt-2 mb-2 wow animated fadeInUp">
            <b-link :href="navy.link" target="_blank"> {{ $t('NewYouthPower.navy.title') }}</b-link>
          </h5>
          <p class="text-center px-4 wow animated fadeInUp">{{ $t('NewYouthPower.navy.brief') }}</p>
        </b-col>
        <b-col cols="4" class="text-center">
          <b-img class="wow animated fadeInUp" :src="require('./new-youth-img/newyouth-power-airforce.png')" fluid
            rounded>
          </b-img>
          <h5 class="mt-2 mb-2 wow animated fadeInUp">
            <b-link :href="airForce.link" target="_blank">{{ $t('NewYouthPower.airForce.title') }}</b-link>
          </h5>
          <p class="text-center px-4 wow animated fadeInUp">{{ $t('NewYouthPower.airForce.brief') }}</p>
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
    data() {
      return {
        landForce: {
          title: '中国陆军2019征兵宣传片',
          brief: '战无不胜，所向披靡，中国陆军宣传片火热来袭，超燃军力让人感到热血沸腾！',
          link: 'http://www.yidianzixun.com/article/V_027aqTg1'
        },
        navy: {
          title: '2019海军招飞宣传片',
          brief: '精英中的精英，王牌中的王牌，尖刀中的尖刀。驾驶“飞鲨”搏击海天、勇闯大洋、走向世界，中国海军召唤不甘平凡的你，并肩战斗、逐梦海天！',
          link: 'https://m.weibo.cn/1972589043/4293309457705986'
        },
        airForce: {
          title: '中国空军2019招飞宣传片',
          brief: '每一个时代都有英雄，他们跟随着时代，又创造属于自己的时代。如果问，为什么要飞行，只因，梦在云霄上。--献给怀有飞行梦想的你们，超燃！',
          link: 'https://m.weibo.cn/6629738135/4383480241107339'
        }
      }
    },
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
