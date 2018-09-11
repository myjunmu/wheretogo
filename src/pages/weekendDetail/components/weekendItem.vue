<template>
  <div>
    <div class='weekend-item' v-for='(item,key) in weekendDetail.img' :key="key">
      <img v-lazy="item.imgUrl" class="weekend-item-img">
      <div class="weekend-item-info">
        <p class='weekend-item-title'>
          <span class="weekend-item-name">{{item.title}}</span>
          <span class="weekend-item-price"><span class="main-price">￥<span class="price-number">{{item.price}}</span></span>起</span>
        </p>
        <p class="weekend-item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['weekendDetail']
}
</script>

<style scoped lang='stylus'>
  @import '~@/assets/styles/mixin.styl'
  .weekend-item
    .weekend-item-img
      width:100%
    .weekend-item-info
      padding:0.266667rem
      .weekend-item-title
        height:0.666667rem
        line-height:0.666667rem
        font-dpr(36px)
        .weekend-item-name
          float:left
        .weekend-item-price
          float:right
          font-dpr(24px)
          .main-price
            color:#ff8300
            .price-number
              font-dpr(36px)
              font-weight:600
      .weekend-item-desc
        height:0.533334rem
        line-height:0.533334rem
        font-dpr(28px)
        ellipsis()
    &:not(:last-of-type)
      border-bottom:0.266667rem solid #f5f5f5
</style>
