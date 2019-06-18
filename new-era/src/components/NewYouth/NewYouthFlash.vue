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
      <b-row align-h="around">
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          <b-img></b-img>
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          
        </b-col>
        <b-col sm="auto" class="mt-3 wow animated fadeInUp">
          
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
