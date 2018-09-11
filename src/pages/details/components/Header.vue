<template>
  <div>
    <div class="iconfont iconBack" @click='backTo' v-show="!showFixedHeader" ref="reference">&#xe624;</div>
    <div class="fixed-header" v-show="showFixedHeader" :style="opactityStyle"><span class='iconfont icon-back' @click='backTo'>&#xe624;</span>上海迪士尼乐园</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      showFixedHeader: false,
      referenceHeight: 0,
      opactityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    backTo () {
      this.$router.go(-1)
    },
    handleScroll () {
      const Top = document.documentElement.scrollTop
      if (Top > 0) {
        let opacity = Top / this.bannerHeight
        this.opactityStyle.opacity = opacity
        this.showFixedHeader = true
      } else {
        this.showFixedHeader = false
      }
    }
  },
  mounted () {
    this.bannerHeight = this.$refs.reference.clientHeight * 412 / 72
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .iconBack
    position:absolute
    top:0.133334rem
    left:0.133334rem
    width:0.96rem
    height:0.96rem
    border-radius:50%
    background-color:rgba(0,0,0,0.5)
    text-align:center
    line-height:0.96rem
    font-weight:900
    color:#fff
    font-size:0.426667rem
  .fixed-header
    position:fixed
    top:0
    left:0
    right:0
    height:$height-header
    line-height:$height-header
    background-color:$color-background
    font-size:0.426667rem
    color:#fff
    text-align:center
    z-index:66
    .icon-back
      position:absolute
      top:0
      left:0
      width:1.066667rem
      font-size:0.426667rem
      font-weight:900
</style>
