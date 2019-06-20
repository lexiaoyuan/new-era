<template>
  <div>
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="layui-bg-red w-25">
      <h3 class="wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('AppMarvelous.name') }}</h3>
      <hr class="layui-bg-red w-25">
    </div>
    <b-container fluid>
      <b-row>
        <b-col class="wow animated fadeInUp" cols="4" sm="4" data-wow-duration="1.5s" data-wow-delay="0.5s">
          <b-card class="mt-5" :title="$t('AppMarvelous.gdp')" sub-title="GDP">
            <b-card-text>
              {{ $t('AppMarvelous.gdp_describe') }}
            </b-card-text>

            <b-card-text>{{ $t('AppMarvelous.statistical_cycle')}}</b-card-text>

            <b-link href="http://www.gov.cn/shuju/index.htm" class="card-link">{{ $t('AppMarvelous.see_details') }}</b-link>
          </b-card>
        </b-col>
        <b-col class="wow animated fadeInUp" cols="8" sm="8" data-wow-duration="2.5s" data-wow-delay="0.5s">
          <x-chart id="xchart" :options="options"></x-chart>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import XChart from '../HighCharts'
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      options: {
        chart: {
          type: 'column'
        },
        title: {
          text: '国内生产总值（亿元）'
        },
        subtitle: {
          useHTML: true,
          text: "数据来源: <a href='http://www.gov.cn/shuju/index.htm' target='_blank'>中国政府网</a>"
        },
        xAxis: {
          categories: [
             '2013年第1季度',
             '2013年1-2季度',
             '2013年1-3季度',
             '2013年1-4季度',
             '2014年第1季度',
             '2014年1-2季度',
             '2014年1-3季度',
             '2014年1-4季度',
             '2015年第1季度',
             '2015年1-2季度',
             '2015年1-3季度',
             '2015年1-4季度',
             '2016年第1季度',
             '2016年1-2季度',
             '2016年1-3季度',
             '2016年1-4季度',
             '2017年第1季度',
             '2017年1-2季度',
             '2017年1-3季度',
             '2017年1-4季度',
             '2018年第1季度',
             '2018年1-2季度',
             '2018年1-3季度',
             '2018年1-4季度',
             '2019年第1季度'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: '单位(亿元)'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} 亿元</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [{
          name: '国内生产总值（亿元）',
          data: [
            129449.6,
            272968.2,
            425190.9,
            592963.2,
            140270.2,
            296192.5,
            461090.3,
            641280.6,
            150593.8,
            318468.4,
            494272.1,
            685992.9,
            160967.3,
            340846,
            530183.6,
            740060.8,
            179403.4,
            378581.1,
            588405.3,
            820754.3,
            197920,
            417215.4,
            646710.9,
            900309.5,
            213432.8,
            ]
        }]
      }
    }
  },
  components: {
    XChart
  },
  mounted () {
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

</style>
