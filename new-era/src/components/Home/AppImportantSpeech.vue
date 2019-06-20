<template>
  <div>
    <!-- ------------重要讲话----------- -->
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="w-25 layui-bg-red" />
      <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">{{ $t('AppImportantSpeech.name') }}</h3>
      <hr class="w-25 layui-bg-red">
    </div>
    <!-- 讲话内容 -->
    <b-container class="mt-3" fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group class="text-center" v-b-scrollspy:listgroup-ex>
            <b-list-group-item href="#list-item-1">{{ speech[0].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-2">{{ speech[1].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-3">{{ speech[2].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-4">{{ speech[3].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-5">{{ speech[4].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-6">{{ speech[5].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-7">{{ speech[6].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-8">{{ speech[7].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-9">{{ speech[8].speechTime }}</b-list-group-item>
            <b-list-group-item href="#list-item-10">{{ speech[9].speechTime }}</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">
          <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:500px">
            <h4 id="list-item-1">
              <b-link :href="speech[0].speechLink">{{ speech[0].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[0].speechContent }}</p>
            <h4 id="list-item-2">
              <b-link :href="speech[1].speechLink">{{ speech[1].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[1].speechContent }}</p>
            <h4 id="list-item-3">
              <b-link :href="speech[2].speechLink">{{ speech[2].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[2].speechContent }}</p>
            <h4 id="list-item-4">
              <b-link :href="speech[3].speechLink">{{ speech[3].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[3].speechContent }}</p>
            <h4 id="list-item-5">
              <b-link :href="speech[4].speechLink">{{ speech[4].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[4].speechContent }}</p>
            <h4 id="list-item-6">
              <b-link :href="speech[5].speechLink">{{ speech[5].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[5].speechContent }}</p>
            <h4 id="list-item-7">
              <b-link :href="speech[6].speechLink">{{ speech[6].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[6].speechContent }}</p>
            <h4 id="list-item-8">
              <b-link :href="speech[7].speechLink">{{ speech[7].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[7].speechContent }}</p>
            <h4 id="list-item-9">
              <b-link :href="speech[8].speechLink">{{ speech[8].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[8].speechContent }}</p>
            <h4 id="list-item-10">
              <b-link :href="speech[9].speechLink">{{ speech[9].speechTitle }}</b-link>
            </h4>
            <p class="app-important-speech-p">{{ speech[9].speechContent }}</p>
          </div>
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
        speech: [{
            speechTime: '2019年6月7日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `2019年6月7日，第二十三届圣彼得堡国际经济论坛全会在圣彼得堡举行，
    国家主席习近平出席并发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-06/08/c_1124596100.htm'
          },
          {
            speechTime: '2019年6月5日',
            speechTitle: '习近平在中俄建交70周年纪念大会上的讲话',
            speechContent: `2019年6月5日， 国家主席习近平和俄罗斯总统普京在莫斯科大剧院共同出席中俄建交70周年纪念大会，
    习近平在会上发表题为《携手努力，并肩前行，开创新时代中俄关系的美好未来》的致辞。`,
            speechLink: 'http://www.xinhuanet.com/world/2019-06/06/c_1124589505.htm'
          },
          {
            speechTime: '2019年5月15日',
            speechTitle: '习近平在亚洲文明对话大会开幕式上的主旨演讲',
            speechContent: `2019年5月15日， 国家主席习近平在亚洲文明对话大会开幕式上发表了题为 
    《深化文明交流互鉴　共建亚洲命运共同体》的主旨演讲。`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-05/15/c_1124497022.htm'
          },
          {
            speechTime: '2019年4月30日',
            speechTitle: '习近平：在纪念五四运动100周年大会上的讲话',
            speechContent: `2019年4月30日， 国家主席习近平在纪念五四运动100周年大会上发表了重要的的讲话`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-04/30/c_1124440193.htm'
          },
          {
            speechTime: '2019年4月28日',
            speechTitle: '习近平在2019年中国北京世界园艺博览会开幕式上的讲话',
            speechContent: `2019年4月28日，国家主席习近平在北京延庆出席2019年中国北京世界园艺博览会开幕式，
    并发表题为《共谋绿色生活，共建美丽家园》的重要讲话。`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-04/28/c_1124429816.htm'
          },
          {
            speechTime: '2019年4月27日',
            speechTitle: '习近平在第二届“一带一路”国际合作高峰论坛记者会上的讲话',
            speechContent: `2019年4月27日， 国家主席习近平在在第二届“一带一路”国际合作高峰论坛记者会上发表了重要的的讲话`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-04/27/c_1124425067.htm'
          },
          {
            speechTime: '2019年4月26日',
            speechTitle: '习近平在第二届“一带一路”国际合作高峰论坛开幕式上的主旨演讲',
            speechContent: `2019年4月26日， 国家主席习近平在北京出席第二届“一带一路”国际合作高峰论坛开幕式，
    并发表题为《齐心开创共建“一带一路”美好未来》的主旨演讲。`,
            speechLink: 'http://www.xinhuanet.com/2019-04/26/c_1124420187.htm'
          },
          {
            speechTime: '2019年3月26日',
            speechTitle: '习近平在中法全球治理论坛闭幕式上的讲话',
            speechContent: `2019年3月26日， 国家主席习近平26日在巴黎出席中法全球治理论坛闭幕式，
    并发表题为《为建设更加美好的地球家园贡献智慧和力量》的重要讲话。`,
            speechLink: 'http://www.xinhuanet.com/world/2019-03/26/c_1124286585.htm'
          },
          {
            speechTime: '2019年2月3日',
            speechTitle: '习近平：在2019年春节团拜会上的讲话',
            speechContent: `2019年2月3日， 中共中央、国务院在北京人民大会堂举行2019年春节团拜会。
    中共中央总书记、国家主席、中央军委主席习近平发表讲话。`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-02/03/c_1124084002.htm'
          },
          {
            speechTime: '2019年1月2日',
            speechTitle: '习近平：为实现民族伟大复兴 推进祖国和平统一而共同奋斗——在《告台湾同胞书》发表40周年纪念会上的讲话',
            speechContent: `2019年1月2日， 《告台湾同胞书》发表40周年纪念会在北京人民大会堂隆重举行。
    中共中央总书记、国家主席、中央军委主席习近平出席纪念会并发表重要讲话。`,
            speechLink: 'http://www.xinhuanet.com/politics/leaders/2019-01/02/c_1123937757.htm'
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
<style lang="">
  .app-important-speech-p {
    text-indent: 2rem;
  }

</style>
