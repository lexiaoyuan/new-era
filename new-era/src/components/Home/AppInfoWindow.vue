<template>
  <div>
    <!-- ------------新时代动态----------- -->
    <div class="d-flex justify-content-sm-between mt-5">
      <hr class="w-25" />
      <h3>新时代动态</h3>
      <hr class="w-25">
    </div>

    <!-- --------------信息窗口------------- -->
    <b-container class="bg-light mt-3 p-3" fluid>
      <b-row>
        <b-col cols="4" sm="4">
          <b-carousel class="mt-4" id="carousel-1" v-model="slide" :interval="4000" controls indicators
            background="#ababab" img-width="470" img-height="280" style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img1.png" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img2.png" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img3.png" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img4.png" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img5.png" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="8" sm="8">
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[0].infoTitle }}</span>
              <small>[{{ info[0].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[1].infoTitle }}</span>
              <small>[{{ info[1].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[2].infoTitle }}</span>
              <small>[{{ info[2].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[3].infoTitle }}</span>
              <small>[{{ info[3].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[4].infoTitle }}</span>
              <small>[{{ info[4].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span class="d-inline-block text-truncate" style="max-width: 500px;">{{ info[5].infoTitle }}</span>
              <small>[{{ info[5].infoTime }}]</small>
            </b-list-group-item>

          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        info: [{
            infoTime: '2019-6-12',
            infoTitle: '习近平抵达比什凯克开始访问吉尔吉斯共和国并出席上合组织峰会',
            infoContent: `2019.06.12-2019.06.16 习近平出访吉尔吉斯斯坦、塔吉克斯坦并出席上合组织峰会和亚信峰会`,
            infoLink: 'http://www.xinhuanet.com/world/cnleaders/xijinping/xjpcfkazkgz1906/'
          },

          {
            infoTime: '2019-5-31',
            infoTitle: '习近平：守初心担使命找差距抓落实 确保主题教育取得扎扎实实的成效',
            infoContent: `5月31日，“不忘初心、牢记使命”主题教育工作会议在北京召开。
    中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。`,
            infoLink: 'https://www.xuexi.cn/lgpage/detail/index.html?id=9262009328460498130'
          },

          {
            infoTime: '2019-5-29',
            infoTitle: '习近平：因势利导统筹谋划精准施策 推动改革更好服务经济社会发展大局',
            infoContent: `新华社北京5月29日电　中共中央总书记、国家主席、中央军委主席、
    中央全面深化改革委员会主任习近平5月29日下午主持召开中央全面深化改革委员会第八次会议并发表重要讲话。`,
            infoLink: 'https://www.xuexi.cn/lgpage/detail/index.html?id=7385331391203427876'
          },
          {
            infoTime: '2019-5-15',
            infoTitle: '习近平出席亚洲文明对话大会开幕式并发表主旨演讲',
            infoContent: `2019年5月16日，国家主席习近平在北京国家会议中心出席亚洲文明对话大会开幕式，
    并发表题为《深化文明交流互鉴　共建亚洲命运共同体》的主旨演讲`,
            infoLink: 'http://www.xinhuanet.com/politics/leaders/2019-05/15/c_1124499008.htm'
          },
          {
            infoTime: '2019-5-8',
            infoTitle: '习近平：坚持政治建警改革强警科技兴警从严治警履行好党和人民赋予的新时代职责使命',
            infoContent: `新华社北京5月8日电  全国公安工作会议7日至8日在北京召开。
    中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。`,
            infoLink: 'https://www.xuexi.cn/e5beee7f8fbbc1e003e0c4a854f63559/e43e220633a65f9b6d8b53712cba9caa.html'
          },
          {
            infoTime: '2019-4-23',
            infoTitle: '【一带一路】开启共建新征程',
            infoContent: `2019年4月22日，国务院新闻办公室举行新闻发布会，
    请推进“一带一路”建设工作介绍《共建“一带一路”倡议：进展、贡献和展望》有关情况。`,
            infoLink: 'https://www.xuexi.cn/ddb8986286d7bc35cccdbb640a6cd59c/e43e220633a65f9b6d8b53712cba9caa.html'
          },
          {
            infoTime: '2019-4-23',
            infoTitle: '人社部：保证长期按时足额发放养老金',
            infoContent: `新华社北京4月23日电　2035年养老金将要用光？人力资源社会保障部回应：能够保证长期按时足额发放`,
            infoLink: 'https://www.xuexi.cn/7a1df2ecda39d8dcdd156d66c9bd9458/e43e220633a65f9b6d8b53712cba9caa.html'
          },
          {
            infoTime: '2019-4-22',
            infoTitle: '【海军成立70周年】向海图强春潮涌',
            infoContent: `向海图强春潮涌——党中央、中央军委和习主席关心人民海军建设发展纪实`,
            infoLink: 'https://www.xuexi.cn/f577f14aa61245530b205d4b4a391ce7/e43e220633a65f9b6d8b53712cba9caa.html'
          },
          {
            infoTime: '2019-5-8',
            infoTitle: '习近平：坚持政治建警改革强警科技兴警从严治警履行好党和人民赋予的新时代职责使命',
            infoContent: `新华社北京5月8日电  全国公安工作会议7日至8日在北京召开。
    中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。`,
            infoLink: 'https://www.xuexi.cn/e5beee7f8fbbc1e003e0c4a854f63559/e43e220633a65f9b6d8b53712cba9caa.html'
          },
          {
            infoTime: '2019-5-8',
            infoTitle: '习近平：坚持政治建警改革强警科技兴警从严治警履行好党和人民赋予的新时代职责使命',
            infoContent: `新华社北京5月8日电  全国公安工作会议7日至8日在北京召开。
    中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。`,
            infoLink: 'https://www.xuexi.cn/e5beee7f8fbbc1e003e0c4a854f63559/e43e220633a65f9b6d8b53712cba9caa.html'
          },
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }

</script>
<style lang="">

</style>
