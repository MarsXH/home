<template>
  <div class="project-experience">
    <el-timeline>
      <el-timeline-item v-for="(item, index) in project" :key="item.projectName + index" :timestamp="item.projectTime" placement="top" class="project-item">
        <el-card>
          <h3 class="project-title">{{ item.projectName }}</h3>
          <p class="project-tag my-2" v-html="item.projectEnvironment"></p>
          <p v-html="item.projectDetail"></p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import projectExperienceMixin from '@/components/beautiful/mixins/projectExperienceMixin.js'
export default {
  mixins: [projectExperienceMixin]
}
</script>

<style lang="stylus" scoped>
.project-experience
  padding 2rem
  font-size 16px
  // height 100vh
  position absolute
  top 45px
  bottom 0
  overflow-y scroll
  .project-item
    -webkit-animation textMove .5s ease 1 both
    animation textMove .5s ease 1 both
    .project-title
      font-weight 900
      font-size 20px
      border-bottom 1px solid #eee
    .project-tag
      font-weight 600
      font-size 16px
  @keyframes textMove
    from
      opacity 0
      left 150px
    to
      opacity 1
      left 0
  @-webkit-keyframes textMove /*Safari and Chrome*/
    from
      opacity 0
      left 150px
    to
      opacity 1
      left 0
</style>
