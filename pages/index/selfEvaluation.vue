<template>
  <div class="self-evaluation">
    <div v-for="(item, index) in evaluate" :key="index" class="evaluate-box" :style="{ 'animation-delay': index * 0.1 + 's' }">
      <el-card class="work-card">
        <p class="text">{{ item }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import selfEvaluationMixin from '@/components/beautiful/mixins/selfEvaluationMixin.js'
export default {
  mixins: [selfEvaluationMixin]
}
</script>

<style lang="stylus" scoped>
.self-evaluation
  padding 2rem
  font-size 16px
  .evaluate-box
    -webkit-transition .5s
    transition .5s
    padding 8px
    position relative
    z-index 9
    margin-bottom 2px
    -webkit-animation textMove 1s ease 1 both
    animation textMove 1s ease 1 both
    // white-space nowrap
    // overflow hidden
    // text-overflow ellipsis
    animation-delay 0s
    .text
      font-weight 100
      color #5a5a5a
      line-height 20px
    &:hover
      background #eee
      -webkit-box-shadow 1px 1px 3px #ccc inset
      box-shadow inset 1px 1px 3px #ccc
  @keyframes textMove
    from
      opacity 0
      top 50px
    to
      opacity 1
      top 0
  @-webkit-keyframes textMove /*Safari and Chrome*/
    from
      opacity 0
      top 50px
    to
      opacity 1
      top 0
@media all and (max-width: 500px)
  .self-evaluation
    font-size 12px
    padding 10px 3px
</style>
