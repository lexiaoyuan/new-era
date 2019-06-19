<template>
  <div>
    <!-- <div class="d-flex justify-content-sm-between mt-5 pl-3 pr-5">
      <hr class="line-left"/>
      <h3>中国一分钟</h3>
      <hr class="w-75"/>
      <h5 class="mt-1">更多</h5>
    </div> -->
    <b-container fluid>
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">中国一分钟</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row align-h="around">
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[0].title" :img-src="require('./img/newera-one-minute-video-guangxi.jpg')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[0].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[1].title" :img-src="require('./img/newera-one-minute-video-guangxi.jpg')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[1].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[2].title" :img-src="require('./img/newera-one-minute-video-guangxi.jpg')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[2].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[3].title" :img-src="require('./img/newera-one-minute-video-guangxi.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[3].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[4].title" :img-src="require('./img/newera-one-minute-video-beijing.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[4].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-card :title="video[5].title" :img-src="require('./img/newera-one-minute-video-qinghai.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ video[5].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
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
        video: [{
            title: '中国一分钟——瞬息万象',
            brief: `中国每一分钟，都发生着巨大改变，改革开放四十年，造就中国奇迹。一分钟，你能做什么？农民窦正宝能耕地十来个平方，工人江勇所在钢厂可以出产9吨钢材，军人许利强能带领战斗机群巡航祖国 ...`,
            link: 'https://v.qq.com/x/cover/n6j4h0i09jdfmvj/j0565vcieff.html'
          },
          {
            title: '中国一分钟——跬步致远',
            brief: `每一分钟的努力，汇聚中国力量，普通的你我，成就中国奇迹。一分钟，世界在发生什么？55名外国人来到中国，2370.7万元的商品进入中国，国人境外旅游消费36.07万美元，超过2300部手机从中国销往全球。`,
            link: 'https://v.qq.com/x/cover/xy5w2esegjk7d7m/j0603howf5w.html?'
          },
          {
            title: '中国一分钟——美美与共',
            brief: `每一分钟，世界都与中国紧密相连，中国奇迹，与世界共精彩。一分钟，中国会发生什么？移动支付金额3.79亿元，“复兴号”高铁前进5833米，“神威·太湖之光”运算750亿亿次， 创造GDP1.57亿元。`,
            link: 'https://v.qq.com/x/cover/dkqrhax0ls5xfw6/h06075r4qxi.html'
          },
          {
            title: '中国一分钟——广西',
            brief: `一分钟，184人在桂林山水间自在畅游;一分钟，556袋柳州螺蛳粉通过电商销往国内外;一分钟，完成植树造林4491平方米;一分钟,对东盟进出口34.4万元 ...`,
            link: 'http://www.gxnews.com.cn/staticpages/20181022/newgx5bcd05e9-17737734.shtml'
          },
          {
            title: '中国一分钟——北京',
            brief: `一分钟，119人穿过太和门游览故宫。一分钟，64人在颐和园泛舟漫步。一分钟，13人到“鸟巢”重温激情时刻 ...`,
            link: 'https://v.qq.com/x/page/r077418u58l.html'
          },
          {
            title: '中国一分钟——青海',
            brief: `一分钟，21条裸鲤幼苗诞生在青海湖裸鲤培育中心。一分钟，可可西里巡护员能巡山166米。一分钟，奔驰在青藏铁路格拉段的列车可前进1600米 ...`,
            link: 'http://www.iqiyi.com/w_19s1oqb47x.html'
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

  .text-indent {
    text-indent: 2rem;
  }

</style>
