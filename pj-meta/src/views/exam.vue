<template>
  <div id="app">
    <div class="image">
      <canvas
        ref="canvas"
        @mouseover="openSection"
        @mouseleave="closeSection"
      ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  el: '#app',
  data() {
    let obj = {
      canvas: '',
      ctx: '',
      images: [
        'http://vesti-m.ru/wp-content/uploads/2015/08/les.jpg',
        'https://img-fotki.yandex.ru/get/6805/208086671.b/0_18e407_bfc35004_XXL.jpg',
        'http://www.gandex.ru/upl/oboi/gandex.ru-19837_9450_131681-1024x768.jpg',
        'http://samlib.ru/img/l/ljutra/pict/2017.10.17.11.jpg'
      ],
      loadedImages: [],
      width: 1024,
      height: 768,
      coordinates: {
        section1: {
          image: '',
          sx: 0,
          sWidth: 256,
          dx: 0,
          dWidth: 256
        },
        section2: {
          image: '',
          sx: 256,
          sWidth: 256,
          dx: 256,
          dWidth: 256
        },
        section3: {
          image: '',
          sx: 512,
          sWidth: 256,
          dx: 512,
          dWidth: 256
        },
        section4: {
          image: '',
          sx: 768,
          sWidth: 256,
          dx: 768,
          dWidth: 256
        }
      }
    }
    return obj
  },
  methods: {
    openSection() {
      TweenMax.to(this.coordinates.section3, 1, {
        sx: 462,
        sWidth: 356,
        dx: 462,
        dWidth: 356,
        onUpdate: this.animate
      })

      //draw line onUpdate of tween to new x and y values of point
    },
    closeSection() {
      TweenMax.to(this.coordinates.section3, 1, {
        sx: 512,
        sWidth: 256,
        dx: 512,
        dWidth: 256,
        onUpdate: this.animate
      })
    },
    animate() {
      let width = this.width,
        height = this.height,
        ctx = this.ctx,
        images = this.loadedImages
      ctx.clearRect(0, 0, width, height)

      ctx.drawImage(
        images[0],
        0,
        0,
        width * 0.25,
        height,
        0,
        0,
        width * 0.25,
        height
      )
      ctx.drawImage(
        images[1],
        width * 0.25,
        0,
        width * 0.25,
        height,
        width * 0.25,
        0,
        width * 0.25,
        height
      )
      ctx.drawImage(
        images[3],
        width * 0.75,
        0,
        width * 0.25,
        height,
        width * 0.75,
        0,
        width * 0.25,
        height
      )
      ctx.drawImage(
        images[2],
        this.coordinates.section3.sx,
        0,
        this.coordinates.section3.sWidth,
        height,
        this.coordinates.section3.dx,
        0,
        this.coordinates.section3.dWidth,
        height
      )
    },
    loadingImg() {
      for (let i = 0; i < this.images.length; i++) {
        let img = new Image()
        img.src = this.images[i]
        this.loadedImages[i] = img
      }
    },
    createCanvas() {
      console.log(this)
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.canvas.width = this.width
      this.canvas.height = this.height

      let width = this.canvas.width,
        height = this.canvas.height,
        ctx = this.ctx,
        images = this.loadedImages

      for (let i = 0; i < images.length; i++) {
        this.loadedImages[i].onload = function () {
          ctx.drawImage(
            images[i],
            width * i * 0.25,
            0,
            width * 0.25,
            height,
            width * i * 0.25,
            0,
            width * 0.25,
            height
          )
        }
      }
    }
  },
  mounted() {
    this.loadingImg()
    this.createCanvas()
  }
}
</script>

<style scoped>
canvas {
  height: 600px;
}
body {
  margin: 0;
}
</style>
