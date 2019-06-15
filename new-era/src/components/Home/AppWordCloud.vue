<template>
  <div>
    <div class="bg-light pt-2 mt-5 pb-4">
      <!-- -------------十九大词云-------------------- -->
      <div class="d-flex justify-content-sm-around">
        <hr class="layui-bg-red w-25" />
        <h3 class="wow animated flipInX" data-wow-duration="1s" data-wow-delay="0.5s">十九大词云</h3>
        <hr class="layui-bg-red w-25">
      </div>
      <!-- 报告全文高频词分析 -->
      <b-container fluid>
        <b-row align-h="around">
          <b-col class="wow animated slideInLeft" cols="5" sm="5" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>报告全文高频词分析</h2>
            <p class="app-word-cloud-p">{{ wordCloudFullText1 }}</p>
            <p class="app-word-cloud-p">{{ wordCloudFullText2 }}</p>
          </b-col>
          <b-col cols="5" sm="5" class="text-center wow animated slideInRight" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img :src="require('./img/app-word-cloud-fulltext.png')" fluid></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 报告中的成语词云分析 -->
    <div class="pt-2 mt-5">
      <b-container fluid>
        <b-row align-h="around">
          <b-col cols="5" sm="5" class="text-center wow animated slideInRight" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img :src="require('./img/app-word-cloud-idiom.png')" fluid></b-img>
          </b-col>
          <b-col cols="5" sm="5" class="wow animated slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>报告中的成语词云分析</h2>
            <p class="app-word-cloud-p">{{ wordCloudIdiom }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
     <!-- 高频动词的词云分析 -->
    <div class="bg-light pt-4 mt-5 pb-4">
      <b-container fluid>
        <b-row align-h="around">
          <b-col cols="5" sm="5" class="wow animated slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2>高频动词的词云分析</h2>
            <p class="app-word-cloud-p">{{ wordCloudVerb }}</p>
          </b-col>
          <b-col cols="5" sm="5" class="text-center wow animated slideInRight" data-wow-duration="1s" data-wow-delay="0.5s">
            <b-img :src="require('./img/app-word-cloud-verb.png')" fluid></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  export default {
    data () {
      return {
        wordCloudFullText1: `
        报告全文共3万多字，通过中文分词技术可以得到全文的高频词列表，
        其中位列第一的词是“发展”，共出现232次；第二是“人民”，共出现203次；第三是“建设”，共出现165次。
        `,
        wordCloudFullText2: `
        由图可见，“坚持”“全面”“社会”“国家”等词也十分醒目。这些高频词的出现，
        集中体现了我们党的初心和使命：为中国人民谋幸福，为中华民族谋复兴。我们党永远把人民对美好
        生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族
        伟大复兴的宏伟目标奋勇前进。
        `,
        wordCloudIdiom: `
        十九大报告出现了一百多个成语，其数量之多，用词之准，表达之切，堪称典范！
        由这棵茂盛的树构成的词云图，我们可以看到，“繁荣富强”扎根大地，“当家作主”屹立中央，
        “旗帜鲜明”“不忘初心”辅助两翼，这是一棵充满生机与希望的“人民树”，
        这是一棵扎根于地、繁茂于天的“中国树”！
        `,
        wordCloudVerb: `十九大报告是一个高瞻远瞩、务实创新的报告，报告系统总结了过去五年取得的伟大成就，
        全面部署了当前和今后一段时期的任务要求。我们从动词的角度分析了我们党、国家、人民
        在完成和即将开展的这些事业中的动作与姿态！在这个主题下，唯有用攥紧的拳头才能恰当表达
        我们推进伟大事业的坚定决心和磅礴力量！“发展”“改革”“创新”“建设”“坚持”这些词表达出了我们
        共同的心声：在中国共产党的全面领导下，坚持改革创新，拼搏发展，为实现中华民族伟大复兴的中国梦
        而努力奋斗！
        `
      }
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
.app-word-cloud-p {
  text-indent: 2rem;
}
</style>
