<template>
  <div class='m-icon'>
    <swiper :options="swiperOption" v-if="showIcons">
      <swiper-slide v-for="(items,index) in pages" :key="index">
        <div class="icons">
          <div class='icon' v-for='(item,key) in items' :key="key ">
            <div class="icon-wrapper">
              <img :src="item.imgUrl" class='icon-img'>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination" id="icon-swiper-pagination" v-show='this.iconList.length>0'></div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '#icon-swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: ['iconList'],
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        };
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.iconList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .m-icon>>>.swiper-pagination
    width:100%
    bottom:0.066667rem
  .m-icon>>>.swiper-pagination-bullet
    width:0.16rem
    height:0.16rem
    margin:0 0.08rem
  .m-icon>>>.swiper-pagination-bullet-active
    background-color:$color-background
  .m-icon
    position:relative
    padding:0.266667rem 0 0.533334rem 0
    height:4.8rem
    .icons
      width:100%
      height:4.8rem
      overflow:hidden
      .icon
        width:25%
        float:left
        height:2.4rem
        overflow:hidden
        .icon-wrapper
          padding-top:0.133334rem
          text-align:center
          .icon-img
            height:1.6rem
          .icon-desc
            line-height:0.533334rem
            margin-top:0.133334rem
            font-dpr(28px)
            color:$color-text-normal
            ellipsis()
</style>
