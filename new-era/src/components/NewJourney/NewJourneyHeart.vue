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
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.jpg')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="红船精神"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ redshipSpirit[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ redshipSpirit[0].brief }}
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
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.jpg')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="智慧中国"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ wisdomChina[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ wisdomChina[0].brief }}
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
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[0].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.jpg')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[1].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[1].brief }}
              </p>
            </b-media>

            <b-media tag="li">
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="中国高铁"></b-img>

              <h5 class="mt-0 mb-1 animated fadeInUp">{{ highRail[0].title }}</h5>
              <p class="mb-0 animated fadeInUp">
                {{ highRail[0].brief }}
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
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[0].brief }}
              </p>
            </b-media>

            <b-media tag="li" class="my-4" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img2.jpg')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[1].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[1].brief }}
              </p>
            </b-media>

            <b-media tag="li" right-align>
              <b-img class="wow animated fadeInUp" slot="aside"
                :src="require('./new-journey-img/new-journey-heart-redship-img1.jpg')" width="300" height="169"
                alt="大国工匠"></b-img>

              <h5 class="mt-0 mb-1 wow animated fadeInUp">{{ craftsmen[0].title }}</h5>
              <p class="mb-0 wow animated fadeInUp">
                {{ craftsmen[0].brief }}
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
            brief: `关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，`,
            link: 'http://'
          },
          {
            title: '红船精神',
            brief: `关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，
                    关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，关于红船精神的介绍，`,
            link: 'http://'
          }
        ],
        wisdomChina: [{
            title: '智慧中国',
            brief: `关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，
                    关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，`,
            link: 'http://'
          },
          {
            title: '智慧中国',
            brief: `关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，
                    关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，关于智慧中国的介绍，`,
            link: 'http://'
          },
        ],
        highRail: [{
            title: '中国高铁',
            brief: `关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，
                    关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，
                    关于中国高铁的介绍，`,
            link: 'http://'
          },
          {
            title: '中国高铁',
            brief: `关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，
                    关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，关于中国高铁的介绍，
                    关于中国高铁的介绍，`,
            link: 'http://'
          }
        ],
        craftsmen: [{
            title: '大国工匠',
            brief: `关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，
                  关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，
                  关于大国工匠的介绍，关于大国工匠的介绍，`,
            link: 'http://'
          },
          {
            title: '大国工匠',
            brief: `关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，
                  关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，关于大国工匠的介绍，
                  关于大国工匠的介绍，关于大国工匠的介绍，`,
            link: 'http://'
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
