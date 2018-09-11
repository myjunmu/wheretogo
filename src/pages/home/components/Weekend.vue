<template>
  <div class="m-weekend">
    <div class="weekend-cate">周末去哪儿</div>
    <router-link tag="div" :to="'/weekendDetail/'+item.id " class="weekend-item" v-for="(item,key) in weekendList" :key="key">
      <img v-lazy="item.imgUrl" class="weekend-item-img">
      <div class="weekend-item-info">
        <p class="weekend-item-title">{{item.title}}</p>
        <p class="weekend-item-desc">{{item.desc}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  props: ['weekendList']
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .weekend-cate
    height:1.066667rem
    line-height:1.066667rem
    background-color:$color-border
    font-size:0.373334rem
    color:$color-text-normal
    padding-left:0.266667rem
  .weekend-item
    .weekend-item-img
      width:100%
    .weekend-item-info
      padding:0.266667rem
      .weekend-item-title
        height:0.64rem
        line-height:0.64rem
        font-dpr(28px)
        color:$color-text-normal
        ellipsis()
      .weekend-item-desc
        height:0.64rem
        line-height:0.64rem
        font-dpr(24px)
        color:$color-text-lighter
        ellipsis()
    &:not(:last-of-type)
      border-bottom:0.133334rem solid #f5f5f5
</style>
