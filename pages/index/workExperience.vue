<template>
  <div class="work-experience">
    <div v-for="(item, index) in workHistory" :key="item.company" class="work-box" :style="{ 'animation-delay': index * 0.1 + 's' }">
      <el-card class="work-card">
        <p class="text font-weight-bold">{{ item.company }}</p>
        <p class="text font-weight-bold">{{ item.time }}</p>
        <p class="text font-weight-bold">{{ item.position }}</p>
        <!-- <p class="text">{{ item.content }}</p> -->
      </el-card>
    </div>
  </div>
</template>

<script>
import workExperienceMixin from '@/components/beautiful/mixins/workExperienceMixin.js'
export default {
  mixins: [workExperienceMixin]
}
</script>

<style lang="stylus" scoped>
.work-experience
  padding 2rem
  font-size 16px
  .work-box
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
      line-height 30px
    &:hover
      background #eee
      -webkit-box-shadow 1px 1px 3px #ccc inset
      box-shadow inset 1px 1px 3px #ccc
  @keyframes textMove
    from
      opacity 0
      top -50px
    to
      opacity 1
      top 0
  @-webkit-keyframes textMove /*Safari and Chrome*/
    from
      opacity 0
      top -50px
    to
      opacity 1
      top 0
@media all and (max-width: 500px)
  .work-experience
    font-size 12px
    padding 10px 3px
</style>
