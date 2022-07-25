<template>
  <canvas class="canvas" width="1680" height="900"></canvas>
</template>

<script>
export default {
  data() {
    console.log(this.$el)
    const charSet = {
      CX: this.$el.width * 0.5,
      CY: this.$el.height * 0.5
    }
    console.log(charSet)
    return charSet
  },
  // props: {
  //   radius: {
  //     type: Number,
  //     default: 50
  //   }
  // },
  watch: {
    // radius() {
    //   this.draw(this.radius)
    // }
    move() {
      this.charDraw()
    }
  },
  methods: {
    // draw(radius) {
    //   this.ctx.beginPath()
    //   this.ctx.clearRect(0, 0, 200, 200)
    //   this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
    //   this.ctx.fill()
    // },
    charDraw() {
      this.ctx.beginPath()
      this.ctx.arc(this.CX + 25, this.CY + 10, 10, 0, Math.PI * 2, false)
      this.ctx.fill()
    }
  },
  mounted() {
    // mounted 이후부터 canvas의 DOM에 접근할 수 있습니다.
    // CreateJS 등을 사용할 때에도 여기에서 canvas를 매개 변수로 전달해야 합니다.
    console.log(this.$el)
    this.$el.width = window.innerWidth - 50
    this.$el.height = window.innerHeight - 50
    this.ctx = this.$el.getContext('2d')
    // this.draw(this.radius)
    this.charDraw()
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
