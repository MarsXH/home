<template>
  <div class="beautiful">
    <div v-if="!isShowChild" class="beautiful-home">
      <!-- <back-canvas></back-canvas> -->
      <user-nav :tabs="tabs"></user-nav>
    </div>
    <div v-else>
      <el-page-header :content="title" class="beautiful-child-header" @back="goBack"></el-page-header>
      <div class="beautiful-child-content">
        <nuxt-child />
      </div>
    </div>
    <div v-if="isShowChild">
      <p class="beautiful-footer">RESUME</p>
      <box3d></box3d>
    </div>
  </div>
</template>

<script>
// import BackCanvas from '@/components/beautiful/BackCanvas.vue'
import UserNav from '@/components/beautiful/UserNav.vue'
import Box3d from '@/components/beautiful/Box3d.vue'

export default {
  components: {
    // BackCanvas,
    UserNav,
    Box3d
  },
  data () {
    return {
      isShowChild: false,
      title: '',
      tabs: [
        {
          name: '个人信息',
          route: '/personalInformation',
          tabStyle: { transform: 'rotate(0deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(0deg)' },
          rotate: 0
        },
        {
          name: '工作经历',
          route: '/workExperience',
          tabStyle: { transform: 'rotate(72deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(-72deg)' },
          rotate: 72
        },
        {
          name: '自我评价',
          route: '/selfEvaluation',
          tabStyle: { transform: 'rotate(144deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(-144deg)' },
          rotate: 144
        },
        {
          name: '技能标签',
          route: '/skillLabel',
          tabStyle: { transform: 'rotate(216deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(-216deg)' },
          rotate: 216
        },
        {
          name: '项目经历',
          route: '/projectExperience',
          tabStyle: { transform: 'rotate(288deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(-288deg)' },
          rotate: 288
        },
        {
          name: 'Simple<br>Resume',
          route: '/simple',
          tabStyle: { transform: 'rotate(288deg) translateX(0px) scale(1)' },
          tabTextStyle: { transform: 'rotate(-288deg)' },
          rotate: 288
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.getTitle()
    }
  },
  mounted () {
    this.getTitle()
  },
  methods: {
    getTitle () {
      let result = false
      this.tabs.forEach(item => {
        if (this.$route.path === item.route) {
          result = true
          this.title = item.name
        }
      })
      this.isShowChild = result
    },
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.beautiful
  width 100%
  height 100%
  position absolute
  top 0
  left 0
  background-color #f1f1f1
  .beautiful-home
    width 100%
    height 100%
    background #f1f1f1
    display flex
    justify-content center
    align-items center
    position absolute
    top 0
    left 0
  .beautiful-child-header
    padding 10px
  .beautiful-footer
    padding 1.5rem 0
    position absolute
    left 0
    bottom 0
    width 100%
    color transparent
    background linear-gradient(45deg, #3B3B3B, #3B3B3B 50%, #fff 0, #fff)
    -webkit-background-clip text
    background-clip text
    font-size 20px
    font-weight 700
    letter-spacing 10px
    text-shadow 1px 1px 2px #ccc
    text-align center
</style>
