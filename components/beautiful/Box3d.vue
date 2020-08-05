<template>
  <div class="box-3d">
    <div class="box-plane">
      <div class="box-rotate">
        <div class="top face"></div>
        <div class="bottom face"></div>
        <div class="left face"></div>
        <div class="right face"></div>
        <div class="front face"></div>
        <div class="back face"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Box3D'
}
</script>

<style lang="stylus" scoped>
.box-3d
  width 40px
  height 40px
  position fixed
  right 30px
  bottom 10px
  transform scale(1.8) translateY(-20px)  /*scale:缩放*/
  .box-plane
    position relative
    perspective 1000px
    // animation show1 10s linear infinite
    @keyframes show1
      0%{transform: translate(0,0);}
      20%{transform: translate(20px,0);}
      40%{transform: translate(0,-20px);}
      60%{transform: translate(-20px,0);}
      80%{transform: translate(0,20px);}
      100%{transform: translate(0px,0);}
    .box-rotate
      width 40px
      height 40px
      transform-style preserve-3d
      transform-origin 50% 50% 10px
      animation rotate-frame 10s linear infinite
      .face
        width 20px
        height 20px
        position absolute
        background-color #BABABA
        border 1px solid #ffffff
        opacity .5
      .top
        left 20px
        top 0
        transform-origin bottom
        transform rotateX(-90deg)
      .bottom
        left 20px
        bottom -20px
        transform-origin top
        transform rotateX(90deg)
      .left
        left 20px
        top 20px
        transform-origin right
        transform rotateY(90deg)
      .right
        left 20px
        top 20px
        transform-origin left
        transform rotateY(-90deg)
      .front
        left 20px
        top 20px
        transform translateZ(20px)
      .back
        left 20px
        top 20px
        transform translateZ(0)
      @keyframes rotate-frame
        0% { transform: rotateX(0deg) rotateY(0deg); }
        // 10% { transform: rotateX(180deg) rotateY(180deg); }
        // 20% { transform: rotateX(-180deg) rotateY(180deg); }
        // 30% { transform: rotateX(-360deg) rotateY(180deg); }
        // 40% { transform: rotateX(-360deg) rotateY(360deg); }
        50% { transform: rotateX(180deg) rotateY(360deg); }
        // 60% { transform: rotateX(90deg) rotateY(180deg); }
        // 70% { transform: rotateX(0) rotateY(180deg); }
        // 80% { transform: rotateX(90deg) rotateY(90deg); }
        // 90% { transform: rotateX(90deg) rotateY(0); }
        // 100% { transform: rotateX(0) rotateY(0); }
        100% { transform: rotateX(360deg) rotateY(0); }
</style>
