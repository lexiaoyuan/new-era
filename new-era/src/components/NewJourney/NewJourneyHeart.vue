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
      <!-- 红船精神列表介绍 -->
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li">
              <b-img class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.png')" width="300" height="169"
                alt="红船精神"></b-img>
              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="redshipSpirit[0].link" target="_blank"> {{ redshipSpirit[0].title }}</b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.png')" width="300" height="169"
                alt="红船精神"></b-img>
              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="redshipSpirit[1].link" target="_blank">
                  {{ redshipSpirit[1].title }}
                </b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img3.png')" width="300" height="169"
                alt="红船精神"></b-img>
              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="redshipSpirit[2].link" target="_blank">{{ redshipSpirit[2].title }}</b-link>
              </h5>
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
      <!-- 智慧中国卡片介绍 -->
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-wisdomchina-img1.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="wisdomChina[0].link" target="_blank">{{ wisdomChina[0].title }}</b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-wisdomchina-img2.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="wisdomChina[1].link" target="_blank">{{ wisdomChina[1].title }}</b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-wisdomchina-img3.png')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="wisdomChina[2].link" target="_blank">{{ wisdomChina[2].title }}</b-link>
              </h5>
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
      <!-- 中国高铁列表介绍 -->
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-highrail-img1.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">
                <b-link :href="highRail[0].link" target="_blank">{{ highRail[0].title }}</b-link>
              </h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-highrail-img2.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">
                <b-link :href="highRail[1].link" target="_blank">{{ highRail[1].title }}</b-link>
              </h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-highrail-img3.png')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">
                <b-link :href="highRail[2].link" target="_blank">{{ highRail[2].title }}</b-link>
              </h5>
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
      <!-- 大国工匠卡片介绍 -->
      <b-row>
        <b-col>
          <ul class="list-unstyled">
            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-craftsmen-img1.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="craftsmen[0].link" target="_blank">{{ craftsmen[0].title }}</b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-craftsmen-img2.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="craftsmen[1].link" target="_blank">{{ craftsmen[1].title }}</b-link>
              </h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-craftsmen-img3.png')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">
                <b-link :href="craftsmen[2].link" target="_blank">{{ craftsmen[2].title }}</b-link>
              </h5>
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
            brief: `红船精神是开天辟地,敢为人先的首创精神，是坚定理想,百折不挠的奋斗精神
      是立党为公，忠诚为民奉献的精神1921年，中国共产党第一次全国代表大会在浙江嘉兴南湖的一条游船上胜利闭幕，庄严宣告中国共产党的诞生。
      这条游船因而获得了一个永载中国革命史册的名字——红船。`,
            link: 'http://news.12371.cn/2018/07/01/VIDE1530430861277343.shtml'
          },
          {
            title: '红船精神',
            brief: `本篇介绍的是晚清政府的腐败引发了西方列强瓜分中国的狂潮，
      近代嘉兴有志之士敖嘉熊等人成立了反帝反封建的团体，在向西方学习的思潮中，马列主义传入中国，
      嘉兴独特的地理位置得到了新的思潮的熏陶，文化基础深厚的嘉兴为接纳更重大的时代事件做好准备`,
            link: 'http://tv.cntv.cn/video/C28790/027ee0ede2f745d0096220882feba7ee'
          },
          {
            title: '红船精神',
            brief: `此片是献给中国共产党成立90周年。一个区域所以能够名动天下，通常或者曾经正在发生伟大事件。
      一个时代如果创造了令人瞩目的业绩，一定有一种作为原动力的伟大精神鼓舞人民，今日嘉兴既名动天下，又创造出令人瞩目的业绩。
      作为共产党的诞生地，这一方水土秉承了革命年代里流传下来的红船精神。`,
            link: 'http://tv.cntv.cn/video/C28790/f6eef6c7c6fa4e38df453c81455a1b81'
          }
        ],
        wisdomChina: [{
            title: '智慧中国：智慧前行',
            brief: `<<智慧中国>>每集节目都会介绍一系列独特的本土创新产品，它们致力于打造全新的未来，
      应对中国面临的一些重大环境与生活挑战，包括空气污染、水资源短缺、城市交通拥堵和食品安全。
      主持人与专家组将在节目中对这些发明进行评估，他们希望这些发明不仅能帮助中国，更能让世界以一个更加清洁、绿色、智能的姿态进入22世纪`,
            link: 'https://b23.tv/av9612271/p1'
          },
          {
            title: '智慧中国：智慧生活',
            brief: `<<智慧中国>>将向观众展示中国在诸多世界级顶尖智囊的助力下领先全球的创新热潮。
      这些发明创造正让中国变成一个更加清洁、环保、“智慧”的国家。
      短短几年间，曾经被称为“世界工厂”的中国就转变成为世界上最大的创业和创新实验室，成为一个把新技术推向未来的“智慧中国”。`,
            link: 'https://b23.tv/av9612271/p2'
          },
          {
            title: '智慧中国：智慧星球',
            brief: `《智慧中国》将带观众踏上一段充满未来色彩的旅程，体验面向未来的前沿创新。
      在诸多世界级顶尖智囊的助力下，这些发明创造正让中国变成一个更加清洁、环保、“智慧”的国家。
      我们将跟随来自纽约的技术专家乔希•克莱因一起走遍中国，拜访这些创新者，并且了解这些令人赞叹的创新背后的技术与思维`,
            link: 'https://b23.tv/av9612271/p3'
          },
        ],
        highRail: [{
            title: '中国高铁：时代脉动',
            brief: `从桥梁、隧道、无砟轨道等线路工程，到牵引供电和列车运行控制系统，再到高速列车的研制，
      中国的高速铁路走出了一条独具特色的创新之路，
      推动中国在这一领域占据世界领先地位。`,
            link: 'http://tv.cntv.cn/video/VSET100308296908/043503a679a34538871fc77579931a69'
          },
          {
            title: '中国高铁：创新之路',
            brief: `从一无所有，到构建起完备、成熟的技术体系，这一切既坎坷曲折，又波澜壮阔。当中国迈入高铁时代，
      高速铁路不仅为人们构筑起生活新时空，也为社会提供了优质的公共产品，并成为经济社会发展的强大推动力。`,
            link: 'http://tv.cntv.cn/video/VSET100308296908/7b145cbf2f264d988506da1b77cc0cc8'
          },
          {
            title: '中国高铁：经世通途',
            brief: `
　　   高速铁路是中国现代化、城市化进程的必然选择，也是中国现实国力发展的必然结果。中国高铁,
      它带给历史的是奇迹，带给现实的是力量，带给未来的是启示，
      带给民族的是自信，带给国家的是荣誉，带给民众的是福祉……`,
            link: 'http://tv.cntv.cn/video/VSET100308296908/ad39360a6d6e4f818d12f5225fc4fe3f'
          }
        ],
        craftsmen: [{
            title: '大国工匠：大勇不惧',
            brief: `宝剑锋从磨砺出，他们文化不同年龄有别，但他们都有一个共同的闪光点---热爱本职，敬业奉献。
      他们热爱工作从不畏惧，徒手雕琢高能炸药 百米高空与特高压线共舞 呼吸间尽是致命危险！他们承担着身家性命和社会民生的重大责任，
      饱含着常人不易承受的艰苦辛劳，工匠胆魄，勇者无惧！`,
            link: 'https://b23.tv/av6490900/p1'
          },
          {
            title: '大国工匠：大术无极',
            brief: `工匠的工作貌似平常无奇，但是这些工作中都积淀着经年累月淬炼而成的珍重技艺。有人能站在牛皮纸一样的钢板上焊接而不出一丝漏点，
      有人能把密封精度控制在发丝1/50，还有人检测手感堪比x光般精准，令人叹服！他们之所以能够匠心筑梦，凭的是传承和专研，靠的是专注和磨砺。`,
            link: 'https://b23.tv/av6490900/p2'
          },
          {
            title: '大国工匠：大巧难破',
            brief: `工匠精神，是对文化的一种传承；匠心筑梦，传承的是一种精神，诠释的是一份追求，承载的是对信仰的情怀。千百年来，工匠们执着于不断雕琢自己的产品，
      不断改善自己的工艺，享受着产品在双手升华的过程。他们对细节有着严苛的要求，他们追求完美和极致；其利虽微，他们执着的是结果，十年一剑，他们坚持的是初心。
      因为工于形，所以匠于心！从少年春风，到皓首苍颜，穷尽一生热血。`,
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
