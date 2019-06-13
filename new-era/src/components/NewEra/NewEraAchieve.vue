<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="ml-4 mr-4 mt-4">
          <fieldset class="layui-elem-field layui-field-title">
            <legend>
              <h3>新时代的伟大成就</h3>
            </legend>
          </fieldset>
        </b-col>
      </b-row>
      <b-row align-h="around">
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[0].title"
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')" 
            img-alt="Image" 
            img-top
            tag="article" 
            style="max-width: 23rem;"
            class="mb-2"
            >
            <b-card-text>
              {{ video[0].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[1].title" 
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')"
            img-alt="Image" 
            img-top
            tag="article"
            style="max-width: 23rem;" 
            class="mb-2">
            <b-card-text>
              {{ video[1].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[2].title" 
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')" 
            img-alt="Image" 
            img-top
            tag="article" 
            style="max-width: 23rem;"
            class="mb-2">
            <b-card-text>
              {{ video[2].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[0].title"
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')" 
            img-alt="Image" 
            img-top
            tag="article" 
            style="max-width: 23rem;"
            class="mb-2"
            >
            <b-card-text>
              {{ video[0].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[1].title" 
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')"
            img-alt="Image" 
            img-top
            tag="article"
            style="max-width: 23rem;" 
            class="mb-2">
            <b-card-text>
              {{ video[1].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
        <b-col sm="auto" class="mt-4">
          <b-card 
            :title="video[2].title" 
            :img-src="require('./img/newera-one-minute-video-guangxi.jpg')" 
            img-alt="Image" 
            img-top
            tag="article" 
            style="max-width: 23rem;"
            class="mb-2">
            <b-card-text>
              {{ video[2].brief }}
            </b-card-text>

            <b-button href="#" variant="primary">查看详情</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        video: [
          {
            title: '广西一分钟',
            brief: '关于广西一分钟的简短描述，关于广西一分钟的简短描述，关于广西一分钟的简短描述，',
            link: 'http://.....'
          },
          {
            title: '广西一分钟',
            brief: '关于广西一分钟的简短描述，关于广西一分钟的简短描述，关于广西一分钟的简短描述，',
            link: 'http://.....'
          },
          {
            title: '广西一分钟',
            brief: '关于广西一分钟的简短描述，关于广西一分钟的简短描述，关于广西一分钟的简短描述，',
            link: 'http://.....'
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
