<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="dark" class="wow animated fadeInUp">
      <template slot="header">{{ $t('NewYouthBrief.brief.title') }}</template>
      <template slot="lead">
        {{ $t('NewYouthBrief.brief.content') }}
      </template>
      <hr class="my-4">
      <p>
        {{ $t('NewYouthBrief.brief.evalute') }}
      </p>
    </b-jumbotron>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  export default {
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
