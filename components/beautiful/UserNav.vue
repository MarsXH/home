<template>
  <div class="user-warpper">
    <div class="user-img">
      <img src="@/assets/img/photo3.jpg">
    </div>
    <div v-for="tab in tabs" :key="tab.name" class="user-tab-nav" :style="tab.tabStyle" @click="goPage(tab)">
      <span class="user-tab-nav-text" :style="tab.tabTextStyle" v-html="tab.name"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.setTabStyle()
  },
  methods: {
    setTabStyle () {
      const radius = ['50%', '0']
      const opacitys = ['0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']
      // const rotates = ['0', '72', '144', '216', '288']
      const avgRotate = 360 / this.tabs.length
      setTimeout(() => {
        this.tabs.forEach((tab, tabIdx) => {
          tab.tabStyle = {
            'border-radius': radius[this.getRandomIndex(radius.length)],
            opacity: opacitys[this.getRandomIndex(opacitys.length)],
            // transform: `rotate(${tab.rotate}deg) translateX(${this.getTranslateX()}px) scale(1)`
            transform: `rotate(${avgRotate * tabIdx}deg) translateX(${this.getTranslateX()}px) scale(1)`,
            left: '-100px',
            'transform-origin': '150px 50%'
          }
          tab.tabTextStyle = {
            transform: `rotate(-${avgRotate * tabIdx}deg)`
          }
        })
      }, 500)
    },
    getRandomIndex (length) {
      return Math.floor(Math.random() * length)
    },
    getTranslateX () {
      const i = Math.random() > 0.6 ? 1 : -1
      return Math.floor(Math.random() * 30) * i
    },
    goPage (tab) {
      if (tab.route === '/simple') {
        this.$router.push('/simple')
      } else {
        this.$router.push(tab.route)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-warpper
  width 100px
  height 100px
  position relative
  z-index 9
  display flex
  justify-content center
  align-items center
  .user-img
    width 100%
    height 100%
    border-radius 50%
    z-index 5
    overflow hidden
    position absolute
    background #777
    &:hover
      width 150px
      height 150px
      transition all .1s
    img
      width 100%
      height 100%
      transform: rotate(10deg)
  .user-tab-nav
    position absolute
    width 60px
    height 60px
    display flex
    align-items center
    justify-content center
    color #fff
    left 0
    background #01579B
    opacity 0
    border-radius 0
    transition all 1s
    cursor pointer
    transform rotate(0deg) translateX(0px) scale(1)
    transform-origin 0 0
    &:hover
      width 65px
      height 65px
      transition all .1s
    .user-tab-nav-text
      transform: rotate(-288deg)
</style>
