<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">新时代的伟大成就</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <!-- 辉煌中国 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">辉煌中国</h4>
        </b-col>
      </b-row>
      <!-- 辉煌中国卡片介绍 -->
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="brilliantChina[0].title" :img-src="require('./img/newera-achieve-brilliant-china-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ brilliantChina[0].brief }}
            </b-card-text>
            <b-button :href="brilliantChina[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="brilliantChina[1].title" :img-src="require('./img/newera-achieve-brilliant-china-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ brilliantChina[1].brief }}
            </b-card-text>
            <b-button :href="brilliantChina[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="brilliantChina[2].title" :img-src="require('./img/newera-achieve-brilliant-china-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ brilliantChina[2].brief }}
            </b-card-text>
            <b-button :href="brilliantChina[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="brilliantChina[3].title" :img-src="require('./img/newera-achieve-brilliant-china-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ brilliantChina[3].brief }}
            </b-card-text>
            <b-button :href="brilliantChina[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

      </b-row>
      <!-- 大国外交 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInUp">大国外交</h4>
        </b-col>
      </b-row>
      <!-- 大国外交卡片介绍 -->
      <b-row align-h="around">
        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatPowerPolitics[0].title" :img-src="require('./img/newera-achieve-greatPowerPolitics-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatPowerPolitics[0].brief }}
            </b-card-text>
            <b-button :href="greatPowerPolitics[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatPowerPolitics[1].title" :img-src="require('./img/newera-achieve-greatPowerPolitics-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatPowerPolitics[1].brief }}
            </b-card-text>
            <b-button :href="greatPowerPolitics[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatPowerPolitics[2].title" :img-src="require('./img/newera-achieve-greatPowerPolitics-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatPowerPolitics[2].brief }}
            </b-card-text>
            <b-button :href="greatPowerPolitics[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatPowerPolitics[3].title" :img-src="require('./img/newera-achieve-greatPowerPolitics-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatPowerPolitics[3].brief }}
            </b-card-text>
            <b-button :href="greatPowerPolitics[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
      </b-row>
      <!-- 大国重器 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInDown">大国重器</h4>
        </b-col>
      </b-row>
      <!-- 大国重器卡片介绍 -->
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatTool[0].title" :img-src="require('./img/newera-achieve-greatTool-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatTool[0].brief }}
            </b-card-text>
            <b-button :href="greatTool[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatTool[1].title" :img-src="require('./img/newera-achieve-greatTool-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatTool[1].brief }}
            </b-card-text>
            <b-button :href="greatTool[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatTool[2].title" :img-src="require('./img/newera-achieve-greatTool-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatTool[2].brief }}
            </b-card-text>
            <b-button :href="greatTool[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="greatTool[3].title" :img-src="require('./img/newera-achieve-greatTool-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ greatTool[3].brief }}
            </b-card-text>
            <b-button :href="greatTool[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

      </b-row>
      <!-- 航拍中国 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInUp">航拍中国</h4>
        </b-col>
      </b-row>
      <!-- 航拍中国卡片介绍 -->
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="aerialPhotoChina[0].title" :img-src="require('./img/newera-achieve-aerialPhotoChina-sichuan.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ aerialPhotoChina[0].brief }}
            </b-card-text>
            <b-button :href="aerialPhotoChina[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="aerialPhotoChina[1].title" :img-src="require('./img/newera-achieve-aerialPhotoChina-zhejiang.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ aerialPhotoChina[1].brief }}
            </b-card-text>
            <b-button :href="aerialPhotoChina[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="aerialPhotoChina[2].title" :img-src="require('./img/newera-achieve-aerialPhotoChina-gansu.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ aerialPhotoChina[2].brief }}
            </b-card-text>
            <b-button :href="aerialPhotoChina[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="aerialPhotoChina[3].title" :img-src="require('./img/newera-achieve-aerialPhotoChina-fujian.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ aerialPhotoChina[3].brief }}
            </b-card-text>
            <b-button :href="aerialPhotoChina[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

      </b-row>
      <!-- 超级工程 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInDown">超级工程</h4>
        </b-col>
      </b-row>
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="superProject[0].title" :img-src="require('./img/newera-achieve-superProject-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ superProject[0].brief }}
            </b-card-text>
            <b-button :href="superProject[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="superProject[1].title" :img-src="require('./img/newera-achieve-superProject-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ superProject[1].brief }}
            </b-card-text>
            <b-button :href="superProject[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="superProject[2].title" :img-src="require('./img/newera-achieve-superProject-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ superProject[2].brief }}
            </b-card-text>
            <b-button :href="superProject[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="superProject[3].title" :img-src="require('./img/newera-achieve-superProject-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ superProject[3].brief }}
            </b-card-text>
            <b-button :href="superProject[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

      </b-row>
      <!-- 大美中国 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInUp">大美中国</h4>
        </b-col>
      </b-row>
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="bigGreatChina[0].title" :img-src="require('./img/newera-achieve-bigGreatChina-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ bigGreatChina[0].brief }}
            </b-card-text>
            <b-button :href="bigGreatChina[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="bigGreatChina[1].title" :img-src="require('./img/newera-achieve-bigGreatChina-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ bigGreatChina[1].brief }}
            </b-card-text>
            <b-button :href="bigGreatChina[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="bigGreatChina[2].title" :img-src="require('./img/newera-achieve-bigGreatChina-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ bigGreatChina[2].brief }}
            </b-card-text>
            <b-button :href="bigGreatChina[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="bigGreatChina[3].title" :img-src="require('./img/newera-achieve-bigGreatChina-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ bigGreatChina[3].brief }}
            </b-card-text>
            <b-button :href="bigGreatChina[3].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

      </b-row>
      <!-- 中国桥梁 -->
      <b-row>
        <b-col>
          <h4 class="ml-5 mt-2 wow animated fadeInDown">中国桥梁</h4>
        </b-col>
      </b-row>
      <b-row align-h="around">

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="chinaBridge[0].title" :img-src="require('./img/newera-achieve-chinaBridge-1.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ chinaBridge[0].brief }}
            </b-card-text>
            <b-button :href="chinaBridge[0].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="chinaBridge[1].title" :img-src="require('./img/newera-achieve-chinaBridge-2.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ chinaBridge[1].brief }}
            </b-card-text>
            <b-button :href="chinaBridge[1].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="chinaBridge[2].title" :img-src="require('./img/newera-achieve-chinaBridge-3.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ chinaBridge[2].brief }}
            </b-card-text>
            <b-button :href="chinaBridge[2].link" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>

        <b-col lg="3" sm="auto" class="mt-4 wow animated fadeInUp">
          <b-card :title="chinaBridge[3].title" :img-src="require('./img/newera-achieve-chinaBridge-4.png')"
            img-alt="Image" img-top tag="article" style="max-width: 23rem;" class="mb-2">
            <b-card-text class="text-indent">
              {{ chinaBridge[3].brief }}
            </b-card-text>
            <b-button :href="chinaBridge[3].link" variant="primary">查看详情</b-button>
          </b-card>
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
        brilliantChina: [{
            title: '辉煌中国——圆梦工程',
            brief: `百年前的《建国方略》，孙中山先生构想了这样的宏伟蓝图，要修建约16万公里的铁路、160万公里的公路，开凿并整修全国水道和运河，建设3个世界级大港，发展内河交通和水利，发展电力事业……在他看来，只有这样才能“振兴中华”。本集将 ...`,
            link: 'http://tv.cctv.com/2017/09/21/VIDEAcyO24K2rcQB2J6CI0PX170921.shtml'
          },
          {
            title: '辉煌中国——创新活力',
            brief: `这五年，从移动支付到共享单车，从“中国制造2025”到物联网、大数据、云计算等新技术，从空天领域、海工领域，到芯片等尖端领域，再到参与大科学计划，中国的创新动力源源不竭，中国的创新人才不断涌现。本集选取的这些创新故事 ...`,
            link: 'http://tv.cctv.com/2017/09/21/VIDEc5WQ515t9aWk1SHAmWg1170921.shtml'
          },
          {
            title: '辉煌中国——协调发展',
            brief: `走遍东西南北，本集记录下天梯上孩子们的笑容、记录下扶贫干部的汗与泪、记录下姑苏小镇城乡统筹的奇迹，记录下“闽宁模式”东西部牵手的成功跨越，记录下一个个特色小镇、中心城市、城市群的兴起。从长江经济带，到京津冀一体化 ...`,
            link: 'http://tv.cctv.com/2017/09/22/VIDELEO00FIATcUCw0cJWbuE170922.shtml'
          },
          {
            title: '辉煌中国——绿色家园',
            brief: ` 西方的工业化进程，中国的快速发展，都经历了自然界的报复。面对经济增长和保护环境的矛盾不断加剧，取舍之间，考验的是决心、勇气和担当。翻越海拔6000米的高原，下潜到南海300米以下的海底，穿过大兴安岭的密林,本集讲述 ...`,
            link: 'http://tv.cctv.com/2017/09/23/VIDEgIbEZ52pf8VLHzj5Vx5c170923.shtml'
          }
        ],
        greatPowerPolitics: [{
            title: '大国外交——大道之行',
            brief: `世事纷繁多元应，纵横当有凌云笔。党的十八大以来，以习近平同志为核心的党中央深刻思考并洞察人类前途命运，中国和世界发展大势。紧紧围绕实现“两个一百年”奋斗目标和实现中华民族伟大复兴中国梦，统筹国内国际两个大局 ...`,
            link: 'http://tv.cctv.com/2017/11/09/VIDEwRPiaU9b4WohR78113ur171109.shtml?spm=C55924871139.PiBcPr7RBv8W.0.0'
          },
          {
            title: '大国外交——众行致远',
            brief: `独行快，众行远。5年来，以习近平同志为核心的党中央积极推动构建以合作共赢为核心的新型国际关系，对“21世纪国际关系向何处去”这一时代命题给出了中国答案。中国全方位外交布局实现新拓展，中国的全球伙伴关系网更加紧密 ...`,
            link: 'http://tv.cctv.com/2017/11/09/VIDECoGzb4BN4smogLieZa5x171109.shtml?spm=C55924871139.PiBcPr7RBv8W.0.0'
          },
          {
            title: '大国外交——中流击水',
            brief: `一个有担当的负责任大国，必须做有益于人类的事业。共赢共享，中国智慧点亮世界；遇到难题，中国方案从不缺席；面对挑战，中国行动自信从容。本集聚焦党的十八大以来，以习近平同志为核心的党中央积极参与和引领全球治理体系变革 ...`,
            link: 'http://tv.cctv.com/2017/11/10/VIDE9IbIvlKKi95mDhxNj7WB171110.shtml?spm=C55924871139.PiBcPr7RBv8W.0.0'
          },
          {
            title: '大国外交——穿云破雾',
            brief: `本集聚焦党的十八大以来，在以习近平同志为核心的党中央坚强领导下，我国坚定捍卫国家主权和领土完整，维护国家核心重大利益，在尊重历史事实和国际法的基础上进行了一系列必要和有力的斗争，同国际社会积极开展反腐败追赃追逃合作 ...`,
            link: 'http://tv.cctv.com/2017/11/10/VIDEZQTO2x6I8u9ufMJx2pDE171110.shtml'
          }
        ],
        greatTool: [{
            title: '大国重器——构筑基石',
            brief: `作为世界第一制造大国，中国500多种主要工业产品中有220多种产量位居世界第一。从百年梦想川藏铁路工程，到孟加拉国帕德玛大桥的千年圆梦，从中国高铁拉动一个个产业基地，到中国核工业产业链上一个个尖兵，它们托起了 ...`,
            link: 'http://tv.cctv.com/2018/03/07/VIDEh0Ln01tPZZJu3GX52GEV180307.shtml'
          },
          {
            title: '大国重器——发动中国',
            brief: ` 探索浩瀚宇宙，建设空天强国，中国人的飞天梦，迎来了圆梦的新时代。作为高新技术最为集中、产业溢出效应最强的领域，空天技术水平是一个国家科技实力的重要标志，也是一个国家经济实力、国防实力、综合国力的重要体现 ...`,
            link: 'http://tv.cctv.com/2018/03/07/VIDEHKwTL9ezQUF72oewjydj180307.shtml'
          },
          {
            title: '大国重器——通达天下',
            brief: `超级装备让人类获得超越自身的能力，工程机械制造水平和能力，成为衡量一个国家工业水平的关键指标。中国，已经是全球工程机械最大的制造基地。这是中国迈向制造强国最有可能率先跻身最先进行列的领域。`,
            link: 'http://tv.cctv.com/2018/03/07/VIDE6kAVADCm0JfEJy4jpFFY180307.shtml'
          },
          {
            title: '大国重器——造血通脉',
            brief: `中国是世界上最大的能源生产国和消费国。在这个关系国家繁荣发展、人民生活改善、社会长治久安的战略领域，中国的态度是明确的——着力推动能源生产利用方式变革，建设一个清洁低碳、安全高效的现代能源体系。这背后 ...`,
            link: 'http://tv.cctv.com/2018/03/01/VIDE95KQu6Ks4w3sBUMqntQp180301.shtml'
          }
        ],
        aerialPhotoChina: [{
            title: '航拍中国——四川',
            brief: `四川位于中国内陆的西南部，它的西边是雄伟的山脉与高原，中部和东部则是深陷在群山中的盆地，其中的成都平原沃野千里，被誉为“天府之国”。我们的旅程从西北端的高原开始，然后深入高山峡谷，发现举世无双的人间仙境，翻越雪山 ...`,
            link: 'http://tv.cctv.com/2019/04/08/VIDEK0hxH6lJEgOJTBnd6Zxd190408.shtml?spm=C55924871139.PY8jbb3G6NT9.0.0'
          },
          {
            title: '航拍中国——浙江',
            brief: `浙江，位于中国东南沿海，一条曲折的大江将这块土地划分为东部与西部，起伏的山脉从西南向东北绵延伸展，版图的东部，是繁星般的海岛和曲折的海岸。我们的旅程从跨越海湾的大桥开始，在群岛中去探访一段遥远的记忆，穿越 ...`,
            link: 'http://tv.cctv.com/2019/04/08/VIDEpiJ4jDsPSu9JpbQNfs1g190408.shtml?spm=C55924871139.PY8jbb3G6NT9.0.0'
          },
          {
            title: '航拍中国——甘肃',
            brief: `甘肃，位于中国的西北部，黄河穿越兰州，将这片土地划分为河东与河西，一南一北的山脉挤压出一条约1000公里的狭长走廊，片片绿洲，勾连着中原与塞外。我们的飞行之旅从甘肃中部开启，邂逅别样的黄土高原。穿越时空隧道 ...`,
            link: 'http://tv.cctv.com/2019/04/08/VIDEWRi80NUFha0dEX2YNE5a190408.shtml?spm=C55924871139.PY8jbb3G6NT9.0.0'
          },
          {
            title: '航拍中国——福建',
            brief: `福建，位于中国东南沿海，“八山一水一分田”，绵延的武夷山雄踞西北部。近700条大大小小的河流穿行于群山之间，隔台湾海峡与台湾相望。进入福建的旅程，从闽赣边界的武夷山开始。探寻一片树叶的传奇，造访一座古村聆听往昔的繁华 ...`,
            link: 'http://tv.cctv.com/2019/04/08/VIDEdHKOZu1ROUWdewiZ87wR190408.shtml?spm=C55924871139.PY8jbb3G6NT9.0.0'
          }
        ],
        superProject: [{
            title: '超级工程——港珠澳大桥',
            brief: `港珠澳大桥是一座连接香港、珠海和澳门的巨大桥梁，港珠澳大桥在促进香港、澳门和珠江三角洲西岸地区经济上的进一步发展具重要的策略意义。
      港珠澳大桥主体建造工程于2009年12月15日开工建设，以期于2015至2016年完成，大桥投资超700亿元 ...`,
            link: 'http://tv.cctv.com/2014/11/06/VIDE1415241548060331.shtml?spm=C86503.PVVgJv0Rp0FF.EwkpNJey7X7C.3'
          },
          {
            title: '超级工程——上海中心大厦',
            brief: `这是一个关于上海的梦想，一个20年前便开始的计划，目标是打造上海最醒目的地标性建筑。632米的高度，将超越金茂大厦和环球金融中心。这是上海浦东最后一座超级摩天大楼——上海中心大厦。`,
            link: 'http://tv.cctv.com/2014/11/06/VIDE1415241547883318.shtml?spm=C86503.PVVgJv0Rp0FF.Ec1vH2NvxcCu.2'
          },
          {
            title: '超级工程——北京地铁网络',
            brief: `北京有着令世界惊叹的奇迹，但是外来人口越来越多，交通日益拥堵，成了困扰北京的一个难题。目前北京正在建造31条线路，560座车站，1000公里行程，一个立体的轨道交通网络将辐射于这座城市 ...`,
            link: 'http://tv.cctv.com/2014/11/06/VIDE1415241548744395.shtml?spm=C86503.PVVgJv0Rp0FF.E7ZdMMq3KAna.3'
          },
          {
            title: '超级工程——海上巨型风机',
            brief: `在人类目前开发利用的清洁能源中，风能是在可知范围内对环境影响最小的绿色能源。在中国市场，一部5兆瓦的风力发电机可以不消耗任何燃料，从空气中最终获取超过4亿人民币的电能 ...`,
            link: 'http://tv.cctv.com/2014/11/06/VIDE1415241547636305.shtml'
          }
        ],
        bigGreatChina: [{
            title: '美丽中国——锦绣华南',
            brief: `长江是世界第三大的河流，总长超过6000公里。它刻出了中国最精彩的地貌--喀斯特地貌，一个个石灰石山峰耸立，到处是峭壁深洞的神话世界。沿着长江，我们可以看到扬子鳄孵化出壳，大鲵发出婴孩啼哭般的叫声，大足鼠耳蝠轻掠过水面 ...`,
            link: 'http://tv.cctv.com/2012/12/16/VIDE1355597474239204.shtml'
          },
          {
            title: '美丽中国——云翔天边',
            brief: `本集涵盖的土地是系列中最少的，只是覆盖了云南省范围，云南约占国土总面积的2%到3%，但是它占有全国总数近四分之一的植物、动物物种在这里都随处可见。西双版纳的亚洲野象，白马雪山的滇金丝猴，高黎贡山的红腹角雉，无量山的 ...`,
            link: 'http://tv.cctv.com/2012/12/16/VIDE1355597503281684.shtml'
          },
          {
            title: '美丽中国——神奇高原',
            brief: `本集以神秘辽远的青藏高原为背景，向你展示那些日夜守护这片心灵净土的异兽珍禽--盘羊、藏羚羊、藏野驴、野牦牛、蓝羊、黑颈鹤、温泉蛇……有被中国古人视作介于动植物之间的冬虫夏草，还有由寺庙僧人喂养的藏马鸡。朝珠穆朗玛峰 ...`,
            link: 'http://tv.cctv.com/2012/12/16/VIDE1355597485842348.shtml'
          },
          {
            title: '美丽中国——风雪塞外',
            brief: `本集所涉及的地域样貌是系列中最多样化最丰富的。有内蒙草原、甘肃戈壁，也有东北密林、西部边陲。有以“魔鬼城”闻名的敦煌雅丹，也有凡间仙境长白山天池，有硕果累累的吐鲁番，也有荒芜人迹的大沙漠 ...`,
            link: 'http://tv.cctv.com/2012/12/16/VIDE1355597492191473.shtml'
          }
        ],
        chinaBridge: [{
            title: '中国大桥——钱塘风雨',
            brief: `这是一座经历了磨难和沧桑的大桥。如果按人的年龄来算它已年逾七旬，它像一个洞察世事的老人在滚滚的江流上见惯了潮落潮涌，也亲眼见证了中国桥梁界70年奋斗的风雨历程。而它自身的经历就是一部传奇。它在刚刚建成的89天时就 ...`,
            link: 'http://tv.cntv.cn/video/C21817/9eeb77a21cf04ee19c3a5981c8aaa9e8'
          },
          {
            title: '中国大桥——振兴之梦',
            brief: `1978年，中共十一届三中全会的召开标志着一个崭新历史时期的到来。会议决定把党的工作重心转移到社会主义现代化建设中来。南浦大桥于1991年12月1日建成通车。这是我国第一座400米以上跨径的大型桥梁。1993年，虎门大桥 ...`,
            link: 'http://tv.cntv.cn/video/C21817/90fd956aac694581fa42a69a08bc43fd'
          },
          {
            title: '中国大桥——各领风骚',
            brief: `老百姓看桥往往看桥的外观和跨度是否雄伟壮观，令人惊叹，而内行人看桥却不是水面之上而是水面之下，因为一个桥梁的基础才是一个桥梁岿然百年的关键。节目中专家们为我们讲述了建桥打桩时的艰辛历程及他们是怎样突破重重困难的 ...`,
            link: 'http://tv.cntv.cn/video/C21817/34b2c1e69d5e401b423ff8811933ca3f'
          },
          {
            title: '中国大桥——走向世界',
            brief: `中国自古被称为“拱桥之父”。山西的丹河大桥主跨146米，是目前世界第一大石拱桥。四川万县长江大桥采用钢筋混凝土材料和无支架施工方法，使拱桥突破了400米跨径。建于2005年的广州新光大桥为钢桁拱结构;重庆的菜园坝大桥则采用 ...`,
            link: 'http://tv.cntv.cn/video/C21817/843ca30963c54f645a34cebfbe7e6c19'
          }
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
<style scoped>
  fieldset {
    margin: 0 2px;
  }

  legend {
    border: 0;
    width: auto;
    margin-bottom: 0px;
  }

  .text-indent {
    text-indent: 2rem;
  }

</style>
