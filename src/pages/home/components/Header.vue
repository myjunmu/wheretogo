<template>
  <div class="m-header">
    <div class="left"><span class="iconfont iconfont-back">&#xe624;</span></div>
    <div class="middle"><span class="iconfont iconfont-mirror">&#xe6e4;</span>输入城市/景点/游玩主题</div>
    <router-link tag="div" to="/city" class="right">{{this.$store.state.city}}&nbsp;<span class="iconfont iconfont-downarrow">&#xe615;</span></router-link>
  </div>
</template>

<script>
export default{
}
</script>

<style scoped lang='stylus'>
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .m-header
    height:$height-header
    line-height:$height-header
    background-color:$color-background
    text-align:center
    display:flex
    .left
      width:1.066667rem
      .iconfont-back
        color:#fff
        font-size:0.426667rem
        font-weight:700
    .middle
      flex:1
      color:$color-text-light
      margin:0.186667rem 0
      height:0.8rem
      line-height:0.8rem
      background-color:#fff
      border-radius: 0.08rem
      font-size:0.426667rem
      .iconfont-mirror
        font-size:0.426667rem
    .right
      width:1.706667rem
      color:#fff
      font-size:0.426667rem
      ellipsis()
      .iconfont-downarrow
        font-size:0.32rem
</style>
