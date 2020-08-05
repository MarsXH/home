<template>
  <div class="skill-label">
    <div class="skill-type d-flex justify-center align-center">
      <div v-for="type in skillType" :key="type.name" class="type mr-3 d-flex justify-center align-center">
        <span class="dot" :style="{ 'background-color': type.color }"></span>
        <span class="text" :style="{ 'color': type.color }">{{ type.name }}</span>
      </div>
    </div>
    <div class="label-box mt-3 d-flex justify-start align-center">
      <div v-for="(item, index) in skillLabel" :key="item.name" class="labels" :style="{ 'animation-delay': index * 0.1 + 's', 'background-color': colorMap[item.level] }">
        <p class="text font-weight-bold">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import skillLabelMixin from '@/components/beautiful/mixins/skillLabelMixin.js'
export default {
  mixins: [skillLabelMixin]
}
</script>

<style lang="stylus" scoped>
.skill-label
  padding 5px 2rem
  font-size 16px
  .skill-type
    .type
      font-size 14px
    .dot
      -webkit-clip-path polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)
      clip-path polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)
      display inline-block
      width 10px
      height 10px
      margin-right 5px
  .label-box
    flex-wrap wrap
    .labels
      -webkit-transition .3s
      transition .3s
      -webkit-animation textMove .5s ease 1 both
      animation textMove .5s ease 1 both
      color #fff
      font-size 16px
      padding 4px 25px
      margin-right 15px
      margin-bottom 15px
      position relative
      display -webkit-box
      display -ms-flexbox
      display flex
      -webkit-box-align center
      -ms-flex-align center
      align-items center
      -webkit-clip-path polygon(0 50%, 10px 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 10px 100%)
      clip-path polygon(0 50%, 10px 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 10px 100%)
      &:hover
        clip-path polygon(0 50%, 10px 0, 100% 0, 100% 50%, 100% 100%, 10px 100%)
      &::before
        content ""
        width 6px
        height 6px
        background #f1f1f1
        position absolute
        left 10px
        top 40%
        -webkit-box-shadow 1px 1px 2px #a1a1a1 inset
        box-shadow inset 1px 1px 2px #a1a1a1
  @keyframes textMove
    from
      opacity 0
      left 50px
    to
      opacity 1
      left 0
  @-webkit-keyframes textMove /*Safari and Chrome*/
    from
      opacity 0
      left 50px
    to
      opacity 1
      left 0
@media all and (max-width: 500px)
  .skill-label
    font-size 12px
    padding 10px 3px
</style>
