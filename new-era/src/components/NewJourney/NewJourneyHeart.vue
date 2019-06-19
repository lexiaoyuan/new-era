<template>
  <div>
    <!-- 不忘初心，砥砺前行 -->
    <div class="d-flex justify-content-sm-around mt-5">
      <hr class="w-25 layui-bg-red" />
      <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">不忘初心，砥砺前行</h3>
      <hr class="w-25 layui-bg-red">
    </div>

    <b-container fluid>
      <!-- 红船精神 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">红船精神</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li">
              <b-img class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.png')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[2].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[2].brief }}
              </p>
            </b-media>
          </ul>
        </b-col>
      </b-row>

      <!-- 智慧中国 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">智慧中国</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[2].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[2].brief }}
              </p>
            </b-media>
          </ul>
        </b-col>
      </b-row>

      <!-- 中国高铁 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">中国高铁</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[0].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[1].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[2].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[2].brief }}
              </p>
            </b-media>
          </ul>
        </b-col>
      </b-row>

      <!-- 大国工匠 -->
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3 class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">大国工匠</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[2].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[2].brief }}
              </p>
            </b-media>
          </ul>
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
    },
    data() {
      return {
        redshipSpirit: [{
            title: '红船精神',
            brief: `红船精神指的是开天辟地、敢为人先的首创精神，坚定理想、百折不挠的奋斗精神，立党为公、忠诚为民的奉献精神，来源于2005年6月21日习近平在《光明日报》上刊发5000多字的署名文章《弘扬“红船精神” 走在时代前列》。《弘扬“红船精神” 走在时代前列》系统阐述“红船精神”  ...........`,
            link: 'https://mr.baidu.com/lzfnb48?f=cp&u=137b2ff165d3d7a4'

          },
          {
            title: '不惧严寒，捍卫疆土',
            brief: '铮铮铁骨，不畏严寒，致敬新时代',
            link: 'https://m.weibo.cn/6252261533/4383931807571054'
          },
          {
            title: '老兵相见，战友重逢',
            brief: '跨越70年的光阴，穿越历史的硝烟，两名战友相逢',
            link: 'https://m.weibo.cn/2785347507/4384204764234600'
          }
        ],
        wisdomChina: [{
            title: '智慧中国：智慧前行',
            brief: `<<智慧中国>>每集节目都会介绍一系列独特的本土创新产品，它们致力于打造全新的未来，应对中国面临的一些重大环境与生活挑战，包括空气污染、水资源短缺、城市交通拥堵和食品安全。主持人与专家组将在节目中对这些发明进行评估，他们希望这些发明不仅能帮助中国，更能让世界以一个更加清洁、绿色、智能的姿态进入22世纪`,
            link: 'https://b23.tv/av9612271/p1'
          },
          {
            title: '智慧中国：智慧生活',
            brief: `<<智慧中国>>将向观众展示中国在诸多世界级顶尖智囊的助力下领先全球的创新热潮。这些发明创造正让中国变成一个更加清洁、环保、“智慧”的国家。短短几年间，曾经被称为“世界工厂”的中国就转变成为世界上最大的创业和创新实验室，成为一个把新技术推向未来的“智慧中国”`,
            link: 'https://b23.tv/av9612271/p2'
          },
          {
            title: '智慧中国：智慧星球',
            brief: `《智慧中国》将带观众踏上一段充满未来色彩的旅程，体验面向未来的前沿创新。在诸多世界级顶尖智囊的助力下，这些发明创造正让中国变成一个更加清洁、环保、“智慧”的国家。我们将跟随来自纽约的技术专家乔希•克莱因一起走遍中国，拜访这些创新者，并且了解这些令人赞叹的创新背后的技术与思维`,
            link: 'https://b23.tv/av9612271/p3'
          },
        ],
        highRail: [{
          title: '中国高铁',
          brief: `经过十年的快速发展，高铁已成为人们日常出行的重要交通工具，“千里江陵一日还”早已变成现实，高铁改变的不仅是不断刷新的“中国速度”，更为区域与城市发展带来新的模式与机遇。高铁以高速、大容量、集约型、通勤化的特征，在中等距离的出行上具备极强的竞争力.........`,
          link: 'http://m.elecfans.com/article/620495.html#viewShare'
        },
        {
          title: '中国高铁有多厉害',
          brief: '中国高铁到底有多厉害？零下40度正常运行，美国记者直言太厉害',
          link: 'https://m.weibo.cn/2101707714/4383442495965348'
        }
        ],
        craftsmen: [{
            title: '大国工匠:大勇不惧',
            brief: '徒手雕琢高能炸药 百米高空与特高压线共舞 呼吸间尽是致命危险！工匠胆魄，勇者无惧！',
            link: 'https://b23.tv/av6490900/p1'
          },
          {
            title: '大国工匠：大术无极',
            brief: '工匠的工作貌似平常无奇，但是这些工作中都积淀着经年累月淬炼而成的珍重技艺，承担着身家性命和社会民生的重大责任，饱含着常人不易承受的坚忍辛劳',
            link: 'https://b23.tv/av6490900/p2'
          },
          {
            title: '大国工匠：大巧难破',
            brief: `事实上相当多的工匠岗位是以一身犯险而保大业安全，以一人之力而系万民康乐,从少年春风，到皓首苍颜，穷尽一生热血。`,
            link: 'https://b23.tv/av6490900/p3'
          }
        ]
      }
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
