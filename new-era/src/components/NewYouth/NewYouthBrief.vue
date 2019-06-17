<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="dark" class="wow animated fadeInUp">
      <template slot="header">{{ brief.title }}</template>
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
          title: '青年兴则国家兴，青年强则国家强',
          content: `青年一代有理想、有本领、有担当，国家就有前途，民族就有希望。中国梦是历史的、现实的，也是未来的；是我们这一代的，更是青年一代的。中华民族伟大复兴的中国梦终将在一代代青年的接力奋斗中变为现实。`,
          evalute: `青年是整个社会力量中最积极、最有生气的力量，国家的希望在青年，民族的未来在青年。`
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

</style>
