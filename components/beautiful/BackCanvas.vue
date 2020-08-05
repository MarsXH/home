<template>
  <div class="back-canvas">
    <canvas id="backCanvas" ref="backCanvas"></canvas>
  </div>
</template>

<script>
import Barrage from './Barrage'

export default {
  data () {
    return {
      keyWords: [
        '弹幕', '666', '233333333',
        'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
        'Angular', '测试弹幕效果'
      ],
      interval: {}
    }
  },
  mounted () {
    this.initCanvas()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    initCanvas () {
      const w = document.documentElement.clientWidth
      const h = document.documentElement.clientHeight - 4
      const barrage = new Barrage('backCanvas', w, h)
      barrage.draw()
      this.keyWords.forEach(t => {
        barrage.shoot(t)
      })
      // this.interval = setInterval(() => {
      //   this.keyWords.forEach(t => {
      //     barrage.shoot(t)
      //   })
      // }, 5000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.back-canvas
  position absolute
  top 0
  left 0
  bottom 0
  right 0
</style>
