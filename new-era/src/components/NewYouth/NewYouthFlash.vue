<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">青春快闪</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <!-- 我和我的祖国 青春快闪 相关视频 -->
      <b-row align-h="around">
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
           <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
           <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">{{ meAndMotherland[0].title }}</h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
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
        meAndMotherland: [{
            title: '桂林理工大学献礼祖国',
            brief: '燃！桂林理工大学辅导员齐唱《我和我的祖国》，集体献礼祖国70周年华诞！',
            link: 'https://m.weibo.cn/detail/4360562160902173'
          },
          {
            title: '桂林理工大学献礼祖国青春告白祖国',
            brief: '桂林理工大学学子，告白献礼新中国成立70周年华诞！',
            link: 'https://m.weibo.cn/detail/4366911783992399'
          },
        ],
        singMotherland: [{
            title: '超燃表白，河北大学《我和我的祖国》',
            brief: '70年来河大人与祖国同呼吸共命运，70年来河大人秉承“实事求是”的校训，矢志不渝，艰苦奋斗。听河北大学师生共唱赞歌，礼赞新中国70华诞！送上我们对祖国的一份献礼我爱你，中国！',
            link: 'https://m.weibo.cn/3405206944/4382821151509184'
          },
          {
            title: '重大土木师生唱响《我和我的祖国》',
            brief: '在祖国七十华诞，重大建校九十周年之际，重庆大学土木工程学院师生汇聚一堂，唱响对祖国和重大的祝福~',
            link: 'https://m.weibo.cn/1875333245/4382760099780510'
          },
        ]
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

  .new-youth-flash-p {
    max-width: 20rem;
  }
</style>
