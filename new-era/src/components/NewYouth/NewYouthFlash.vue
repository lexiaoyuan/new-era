<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('NewYouthFlash.name') }}</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <!-- 我和我的祖国 青春快闪 相关视频 -->
      <b-row align-h="around">
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-glut.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[0].link" target="_blank">
              {{ meAndMotherland[0].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[0].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-thu.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[1].link" target="_blank">
              {{ meAndMotherland[1].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[1].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-whu.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[2].link" target="_blank">
              {{ meAndMotherland[2].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[2].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-sxnu.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[3].link" target="_blank">
              {{ meAndMotherland[3].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[3].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-xmu.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[4].link" target="_blank">
              {{ meAndMotherland[4].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[4].brief }}</p>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img :src="require('./new-youth-img/newyouth-flash-heu.png')" fluid rounded></b-img>
          <h5 class="mt-2 mb-2">
            <b-link :href="meAndMotherland[5].link" target="_blank">
              {{ meAndMotherland[5].title }}
            </b-link>
          </h5>
          <p class="text-truncate new-youth-flash-p">{{ meAndMotherland[5].brief }}</p>
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
            link: 'https://m.weibo.cn/detail/4360562160902173#&video'
          },
          {
            title: '2018，我们共芳华|清华师生快闪献礼',
            brief: '在即将告别2018年之际，清华师生齐聚一堂，用快闪的方式祝福祖国，一同唱响《我和我的祖国》。动人的旋律响彻第六教学楼,诉说着每一位清华人对祖国的无限热忱与依恋。',
            link: 'https://v.qq.com/x/page/e0820i3zmry.html'
          },
          {
            title: '快闪献礼|武大师生共唱我和我的祖国！',
            brief: '2019年即将到来，走过125年历史的武汉大学黉门新启，展现出新时代的勃勃生机。从晚清自强学堂发展成今日“双一流”高校，从抗日西迁办学到推动实现国家富强，武汉大学始终与中华民族命运同频共振。2018年岁末，千余名武大师生登上武大樱园老斋舍，用别出新意的快闪唱响《我和我的祖国》，表达当代年轻学子的爱国之情。',
            link: 'http://tv.cctv.com/2018/12/31/VIDEYS5fAp5FHoNo5VQfQZ1a181231.shtml'
          },
          {
            title: '陕西师范大学：“西部红烛” 为祖国闪耀',
            brief: '在2019年元旦到来之际，陕师大校园里一场别开生面、突如其来的快闪吸引了很多师生驻足和参与。在现场深情歌唱、演奏、舞蹈的带动和感染下，千余名师生们掩饰不住喜悦和激动，一同唱响了《我和我的祖国》，在向祖国深情告白中，表达了“为中国而教”的美好心愿和志向。',
            link: 'http://tv.cctv.com/2018/12/31/VIDEiiglh75fAxOjh4inuvmw181231.shtml'
          },
          {
            title: '厦门大学师生校友深情唱响《歌唱祖国》',
            brief: '厦门大学成立近百年来，始终与国家民族同呼吸、共命运，努力践行并实现着“为民族放一异彩”的宏愿。五四临近，在“青春为祖国歌唱”的网络拉歌活动中，厦大两千三百名师生校友深情唱响《歌唱祖国》，表达爱国之情与奋斗之志。',
            link: 'https://www.bilibili.com/video/av51146701/?p=2'
          },
          {
            title: '哈尔滨工程大学：我和我的祖国“快闪”',
            brief: '哈尔滨工程大学的师生们，将一艘 “雪舰” 开进了校园，然而，这艘“雪舰”，不仅是师生们智慧的结晶，它还承载着哈尔滨工程大学的学子们对祖国的深切祝福。在2018年的年尾，在这艘“雪舰”上，他们以军工人独特的方式表白祖国，共同唱响《我和我的祖国》，来迎接新年的到来。',
            link: 'http://www.iqiyi.com/w_19s62g3l9x.html'
          }
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
