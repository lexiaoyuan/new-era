<template>
    <div>
        <div class="highcharts-container"></div>
    </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  props: ['options'],
  name: 'highcharts',
  data () {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart () {
      // console.log(this.$el)
      // this.$el.style.width = (this.styles.width || 800) + 'px'
      // this.$el.style.height = (this.styles.height || 400) + 'px'
      this.chart = new HighCharts.Chart(this.$el, this.options)
    }
  }
}
</script>
<style>
  /* .highcharts-container {
    width: 800px;
    height: 400px;
  } */
</style>
