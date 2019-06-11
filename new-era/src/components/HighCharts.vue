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
      this.chart = new HighCharts.Chart(this.$el, this.options)
    }
  }
}
</script>
<style></style>
