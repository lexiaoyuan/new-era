<template>
  <div>
    <!-- ------------重要讲话----------- -->
    <div class="d-flex justify-content-sm-between mt-5">
      <hr class="w-25" />
      <h3>重要讲话</h3>
      <hr class="w-25">
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
            <h4 id="list-item-1">{{ speech[0].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[0].speechContent }}</p>
            <h4 id="list-item-2">{{ speech[1].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[1].speechContent }}</p>
            <h4 id="list-item-3">{{ speech[2].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[2].speechContent }}</p>
            <h4 id="list-item-4">{{ speech[3].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[3].speechContent }}</p>
            <h4 id="list-item-5">{{ speech[4].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[4].speechContent }}</p>
            <h4 id="list-item-6">{{ speech[5].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[5].speechContent }}</p>
            <h4 id="list-item-7">{{ speech[6].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[2].speechContent }}</p>
            <h4 id="list-item-8">{{ speech[7].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[3].speechContent }}</p>
            <h4 id="list-item-9">{{ speech[8].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[4].speechContent }}</p>
            <h4 id="list-item-10">{{ speech[9].speechTitle }}</h4>
            <p class="app-important-speech-p">{{ speech[5].speechContent }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        speech: [{
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
          {
            speechTime: '2019年6月18日',
            speechTitle: '习近平在第二十三届圣彼得堡国际经济论坛全会上的致辞',
            speechContent: `第二十三届圣彼得堡国际经济论坛全会7日在圣彼得堡举行，国家主席习近平出席并
            发表题为《坚持可持续发展　共创繁荣美好世界》的致辞。全文如下：`
          },
        ]
      }
    }
  }

</script>
<style lang="">
  .app-important-speech-p {
    text-indent: 2rem;
  }

</style>
