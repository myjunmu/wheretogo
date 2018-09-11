<template>
  <div class="ticket">
    <div class="ticket-cate">
      <div class="ticket-cate-title border-bottom">标准-门票</div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园儿童一日票</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">280</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园老人一日票</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">280</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
    </div>
    <div class="ticket-cate">
      <div class="ticket-cate-title border-bottom">必买-餐券</div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园餐券【游园必备】</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">68</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
    </div>

    <div class="ticket-cate">
      <div class="ticket-cate-title border-bottom">特惠两日票</div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园成人两日联票</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">645</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园儿童两日联票</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">450</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园老人两日联票</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">466</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
      <div class="ticket-cate-item border-bottom">
        <div class="ticket-desc">上海迪士尼乐园老人两日联票+行李寄送服务</div>
        <div class="ticket-price"><div class="ticket-price-wrapper"><span class="ticket-main-price">￥<span class="ticket-price-number">720</span></span>起<span class="iconfont iconfont-ticketarrow">&#xe609;</span></div></div>
      </div>
    </div>
  </div>

</template>

<script>
export default{  
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .ticket
    .ticket-cate
      border-top:0.266667rem solid #f5f5f5
      .ticket-cate-title
        height:$height-header
        line-height:$height-header
        font-size:0.426667rem
        padding:0 0.266667rem
        color:rgb(51,51,51)
      .ticket-cate-item
        line-height:$height-header
        padding:0 0.266667rem
        display:flex
        .ticket-desc
          flex:1
          float:left
          font-size:0.373333rem
          margin-right:0.533334rem
          color:rgb(51,51,51)
        .ticket-price
          text-align:center
          float:right
          width:2.4rem
          color:rgb(158,158,158)
          display:flex
          flex-direction:column
          justify-content:center
          .ticket-main-price
            color:rgb(255,152,0)
            font-size:0.32rem
            .ticket-price-number
              font-size:0.533334rem
          .iconfont-ticketarrow
            width:0.533334rem
            height:0.533334rem
            font-size:0.48rem             
</style>
