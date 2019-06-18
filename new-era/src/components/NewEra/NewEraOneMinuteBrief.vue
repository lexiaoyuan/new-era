<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="dark" class="wow animated fadeInUp">
      <template slot="header">
        {{ brief.title }}
        <b-img :src="require('./img/newera-one-minute-brief-img.png')" fluid rounded class="newera-one-minute-brief-img mb-5 ml-3"></b-img>
      </template>
      
      <template slot="lead">
        {{ brief.content }}
      </template>
      <hr class="my-4">
      <p>
        {{ brief.evalute }}
      </p>
    </b-jumbotron>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  export default {
    data () {
      return {
        brief: 
        {
          title: '中国一分钟',
          content: `以“今天的中国，每一分钟会发生什么”为切入点，运用快速的剪辑、精美的画面、直观的数字，
          展示党的十八大以来的五年中国在经济、社会、文化、科技等方面取得的历史性成就，
          展现中国人民意气风发的精神风貌。`,
          evalute: `一分钟很短，在伟大的中国却能干这么多事；一分钟很长，正在腾飞的中国需要做出多大的努力，
          才能有今天快速发展的局面。为祖国发展加油助威，希望祖国越来越好!`
        }
      }
    },
    mounted () {
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        mobile: true,
        live: false
      })
      wow.init()
    }
  }
</script>
<style scoped>
  .newera-one-minute-brief-img {
    float: right;
  }
</style>
