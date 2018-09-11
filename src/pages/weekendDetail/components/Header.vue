<template>
  <div class="w-header">
    <div>
      <div tag="div" class='iconfont iconBack' @click="backTo">&#xe624;</div>
      {{weekendDetail.cate}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['weekendDetail'],
  methods: {
    backTo () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .w-header
    height:$height-header
    line-height:$height-header
    background-color:$color-background
    font-size:0.426667rem
    color:#fff
    text-align:center
    .iconBack
      position:absolute
      width:1.066667rem
      top:0
      left:0
      font-size:0.373334rem
      font-weight:900
</style>
