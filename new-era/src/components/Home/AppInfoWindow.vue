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
          <b-carousel 
            class="mt-4"
            id="carousel-1" 
            v-model="slide" 
            :interval="4000" 
            controls 
            indicators 
            background="#ababab"
            img-width="470" 
            img-height="280" 
            style="text-shadow: 1px 1px 2px #333;" 
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img1.jpg" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img2.jpg" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img1.jpg" alt="image slot">
            </b-carousel-slide>
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="470" height="280"
                src="./img/app-info-window-img2.jpg" alt="image slot">
            </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="8" sm="8">
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[0].infoTitle }}
              <small>[{{ info[0].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[1].infoTitle }}
              <small>[{{ info[1].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[2].infoTitle }}
              <small>[{{ info[2].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[3].infoTitle }}
              <small>[{{ info[3].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[4].infoTitle }}
              <small>[{{ info[4].infoTime }}]</small>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ info[5].infoTitle }}
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
        info: [
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          },
          {
            infoTime: '2019-6-18',
            infoTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            infoContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。`,
            infoLink:'https://www.baidu.com/...'
          }
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
