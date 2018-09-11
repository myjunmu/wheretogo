<template>
  <div class="m-board">
    <div class="board-cate" ref="reference">
      <span class="iconfont iconfont-fire">&#xe6a0;</span>本周热门榜单
    </div>
    <div class="board-wrapper" ref="scrollWrapper">
      <div class="board-content" ref="scrollContentWrapper">
        <div class='board-item-wrapper' v-for="(item,index) in hotList" :key="index">
          <img :src="item.imgUrl" class="board-img">
          <p class='board-item-title'>{{item.desc}}</p>
          <p class='board-item-price'><span class='main-price'>￥{{item.price}}</span>起</p>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default{
  props: ['hotList'],
  mounted () {
    setTimeout(() => {
      this.setWidth()
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        scrollX: true
      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    setWidth () {
      let count = this.hotList.length
      let newHeight = this.$refs.reference.clientHeight
      let perWidth = 2.3 * newHeight
      let totalWidth = count * perWidth
      this.$refs.scrollContentWrapper.style.width = totalWidth + 'px'
    }
  },
  watch: {
    hotList () {
      this.setWidth()
      this.refresh()
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .m-board
    border-top:0.266667rem solid #f5f5f5
    height:4.933334rem
    .board-cate
      height:$height-cate
      line-height:$height-cate
      font-dpr(32px)
      .iconfont-fire
        font-size:0.426667rem
        padding:0 0.066667rem 0 0.266667rem
        color:#ff7b46
    .board-wrapper
      width:100%
      overflow:hidden
      hieght:3.84rem
      .board-content
        .board-item-wrapper
          width:2.666667rem
          height:3.84rem
          padding-left:0.266667rem
          float:left
          .board-img
            width:100%
          .board-item-title
            height:0.426667rem
            line-height:0.426667rem
            font-dpr(24px)
            margin-top:0.16rem
            text-align:center
            ellipsis()
          .board-item-price
            text-align:center
            height:0.426667rem
            line-height:0.426667rem
            font-dpr(24px)
            .main-price
              color:#ff8300
 </style>
