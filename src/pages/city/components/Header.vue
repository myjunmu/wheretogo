<template>
  <div class='city-header'>
    <router-link tag='div' to='/'>
      <span class='iconfont icon-back'>&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default{
}
</script>

<style lang='stylus' scoped>
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .city-header
    height:$height-header
    line-height:$height-header
    background-color:$color-background
    text-align:center
    color:#fff
    font-size:0.426667rem
    .icon-back
      position:absolute
      top:0
      left:0
      width:80px
      font-size:0.426667rem
</style>
