<template>
  <div class="personal-information">
    <div v-for="(item, index) in personalInfo" :key="item.label" class="text-line" :style="{ 'animation-delay': index * 0.1 + 's' }">
      <span class="label">{{ item.label }}：</span>
      <span v-if="item.isLink" class="text"><a :href="item.link" target="_blank" class="text-link">{{ item.link }}</a>{{ item.value }}</span>
      <span v-else class="text">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
import personalInfoMixin from '@/components/beautiful/mixins/personalInfoMixin.js'
export default {
  mixins: [personalInfoMixin]
}
</script>

<style lang="stylus" scoped>
.personal-information
  padding 2rem
  font-size 16px
  .text-line
    -webkit-transition .3s
    transition .3s
    padding 8px
    position relative
    z-index 9
    margin-bottom 2px
    -webkit-animation textMove .5s ease 1 both
    animation textMove .5s ease 1 both
    // white-space nowrap
    // overflow hidden
    // text-overflow ellipsis
    animation-delay 0s
    .label
      font-weight 700
    .text
      font-weight 100
      color #5a5a5a
    .text-link
      cursor pointer
      text-decoration none
      color #039BE5
    &:hover
      background #fff
      -webkit-box-shadow 1px 1px 3px #ccc inset
      box-shadow inset 1px 1px 3px #ccc
  @keyframes textMove
    from
      opacity 0
      left 40px
    to
      opacity 1
      left 0px
  @-webkit-keyframes textMove /*Safari and Chrome*/
    from
      opacity 0
      left 40px
    to
      opacity 1
      left 0px
@media all and (max-width: 500px)
  .personal-information
    font-size 12px
    padding 10px 3px
</style>
