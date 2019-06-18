<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="./img/app-carousel-img1.png"
          alt="新时代">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="./img/app-carousel-img2.png"
          alt="新时代">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="./img/app-carousel-img3.png"
          alt="新时代">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="./img/app-carousel-img4.png"
          alt="新时代">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="./img/app-carousel-img5.png"
          alt="新时代">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
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
<style></style>
