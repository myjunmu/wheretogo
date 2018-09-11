<template>
  <div class="m-guess">
    <div class='guess-cate'>
      <span class="iconfont iconfont-heart">&#xe755;</span>猜你喜欢
    </div>
    <router-link tag="div" to='/detail' class="guess-item border-bottom" v-for="(item,index) in recommendList" :key='index'>
      <div class="guess-item-img-wrapper">
        <img :src="item.imgUrl" class="guess-item-img">
      </div>
      <div class="guess-item-info-wrapper">
        <p class="guess-item-title">{{item.title}}</p>
        <p class="guess-item-comment">
          <star :score="item.score"></star>
          <span class="guess-item-comment-count">{{item.ratingCount}}条评论</span>
        </p>
        <div class="guess-item-info-deatil">
          <div class="guess-item-price">
            <span class="guess-item-main-price">￥<span class="guess-item-price-number">{{item.price}}</span></span>起
          </div>
          <div class="guess-item-address">{{item.address}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Star from '@/pages/home/components/star'

export default{
  props: ['recommendList'],
  components: {
    Star
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .border-bottom
    &::before
      border-color:rgba(0,0,0,0.4)
  .m-guess
    border-top:0.266667rem solid #f5f5f5
    .guess-cate
      height:$height-cate
      line-height:$height-cate
      font-size:0.426667rem
      padding-left:0.266667rem
      color:$color-text-normal
      .iconfont-heart
        color:#ff7b46
        font-size:0.426667rem
        margin-right:0.133334rem
    .guess-item
      padding:0.266667rem 0 0.266667rem 0.266667rem
      display:flex
      .guess-item-img-wrapper
        width:2.666667rem
        .guess-item-img
          width:100%
      .guess-item-info-wrapper
        flex:1
        padding-left:0.266667rem
        display:flex
        flex-direction:column
        justify-content:center
        .guess-item-title
          height:0.613334rem
          line-height:0.613334rem
          font-dpr(32px)
          color:$color-text-normal
          margin-top:0.133334rem
          ellipsis()
        .guess-item-comment
          height:0.613334rem
          line-height:0.613334rem
          margin-top:0.133334rem
          .guess-item-comment-count
            padding-left:0.133334rem
        .guess-item-info-deatil
          margin-top:0.133334rem
          height:0.613334rem
          line-height:0.613334rem
          .guess-item-price
            float:left
            font-dpr(24px)
            .guess-item-main-price
              color:$color-price
              .guess-item-price-number
                font-dpr(40px)
          .guess-item-address
            float:right
            width:1.28rem
            padding-right:0.266667rem
            font-dpr(24px)
            ellipsis()
</style>
