<!-- <template>
  <div>
    <div class='banner' @click="handleShowGallery">
      <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" class='banner-img'>
      <div class='img-count'><span class='iconfont smallPicture'>&#xe631;</span>15</div>
      <div class="desc">上海迪士尼乐园</div>
    </div>
    <common-gallery v-show="showGallery" @close="handleGalleryHide"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
export default{
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleShowGallery () {
      this.showGallery = true
    },
    handleGalleryHide () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    color:#fff
    .banner-img
      width:100%
    .img-count
      position:absolute
      left:0.266667rem
      bottom:1.146667rem
      width:1.146667rem
      height:0.533334rem
      line-height:0.533334rem
      border-radius:0.266667rem
      font-size:24px
      background-color:rgba(0,0,0,0.5)
      text-align:center
      .smallPicture
        margin:0 0.133334rem
        font-size:24px
    .desc
      position:absolute
      line-height:0.533334rem
      left:0.266667rem
      bottom:0.48rem
      font-size:36px
</style> -->
<template>
  <div>
    <div class="banner">
      <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" class="banner-img" @click="handleGallery">
      <p class="img-count"><span class="iconfont iconfont-img">&#xe631;</span>15</p>
      <p class="img-desc">上海迪士尼乐园</p>
    </div>
    <common-gallery v-show="showGallery" @close="handelclose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'

export default{
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleGallery () {
      this.showGallery = true
    },
    handelclose () {
      this.showGallery = false
    }
  }
}
</script>

<style scoped lang='stylus'>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .img-count
      position:absolute
      left:0.266667rem
      bottom:1.066667rem
      color:#000
      height:0.4rem
      line-height:0.4rem
      width:1.6rem
      color:#fff
      background-color:rgba(0,0,0,0.5)
      border-radius:0.266667rem
      text-align:center
      .iconfont-img
        font-size:0.32rem
        padding-right:0.133334rem
    .img-desc
      position:absolute
      bottom:0.266667rem
      left:0.266667rem
      height:0.533334rem
      line-height:0.533334rem
      color:#fff
      font-size:0.48rem
</style>
