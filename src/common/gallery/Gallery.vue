<!-- <template>
  <div class="container" @click='hideGallery'>
    <div class='wrapper'>
      <swiper :options='swiperOption'>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_r_800x800_93f1a7af.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/1e/1e5eaf5ac11a1dea3.img.jpg_r_800x800_e7892537.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1704/d7/d75e41fc3bf305d8a3.img.jpg_r_800x800_5740f5b4.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/e6/e6c63a841145702a3.img.jpg_r_800x800_e3d697bd.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/b6/b6dcb80ed40dedbfa3.img.jpg_r_800x800_fcce5c48.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/85/850efa63b8e01621a3.img.jpg_r_800x800_a1dc16bf.jpg" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/bc/bc751858d9709ca9a3.img.jpg_r_800x800_c881c996.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/fb/fb601f1e71f9d4aba3.img.jpg_r_800x800_92d85f99.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/d9/d9119bcadf6045f5a3.img.jpg_r_800x800_8628ce0c.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/26/26cfb4d9ad836b52a3.img.jpg_r_800x800_ed8c0a30.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/da/dac7cd5bfa983877a3.img.jpg_r_800x800_7aec58e7.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1711/a7/a753b93561cdda70a3.img.jpg_r_800x800_4a07c763.jpg" class="swiper-img">
        </swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/sight/p0/1704/ff/ff02101c458e7e25a3.img.jpg_r_800x800_836e6c29.jpg" class="swiper-img">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination" id="my-swiper-pagination">
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      swiperOption: {
        observeParents: true,
        observer: true,
        pagination: {
          el: '#my-swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + '&nbsp;' + '/' + '&nbsp;' + total
          }
        }
      }
    }
  },
  methods: {
    hideGallery () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .container
    display:flex
    flex-direction:column
    justify-content:center
    position:fixed
    top:0
    bottom:0
    left:0
    right:0
    background-color:#000
    z-index:99
    .wrapper
      overflow:hidden
      height:0
      width:100%
      padding-bottom:66.5%
      .swiper-img
        width:100%
      .swiper-pagination
        color:#fff
        height:2.5rem
        line-height:2.5rem
        bottom:1.25rem
</style> -->
<template>
  <div class="gallery" @click='hideGallery'>
    <div class="container">
      <swiper :options='swiperOption'>
        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_r_800x800_93f1a7af.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/1e/1e5eaf5ac11a1dea3.img.jpg_r_800x800_e7892537.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1704/d7/d75e41fc3bf305d8a3.img.jpg_r_800x800_5740f5b4.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/e6/e6c63a841145702a3.img.jpg_r_800x800_e3d697bd.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/b6/b6dcb80ed40dedbfa3.img.jpg_r_800x800_fcce5c48.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/85/850efa63b8e01621a3.img.jpg_r_800x800_a1dc16bf.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/bc/bc751858d9709ca9a3.img.jpg_r_800x800_c881c996.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/fb/fb601f1e71f9d4aba3.img.jpg_r_800x800_92d85f99.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/d9/d9119bcadf6045f5a3.img.jpg_r_800x800_8628ce0c.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/26/26cfb4d9ad836b52a3.img.jpg_r_800x800_ed8c0a30.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/da/dac7cd5bfa983877a3.img.jpg_r_800x800_7aec58e7.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1711/a7/a753b93561cdda70a3.img.jpg_r_800x800_4a07c763.jpg" class="swiper-img">
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/1704/ff/ff02101c458e7e25a3.img.jpg_r_800x800_836e6c29.jpg" class="swiper-img">
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination" id="gallery-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        observeParents: true,
        observer: true,
        pagination: {
          el: '#gallery-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + '&nbsp;' + '/' + '&nbsp;' + total
          }
        }
      }
    }
  },
  methods: {
    hideGallery () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang='stylus'>
  .gallery
    position:fixed
    top:0
    left:0
    bottom:0
    right:0
    background-color:#000
    display:flex
    flex-direction:column
    justify-content:center
    z-index:55
    .img-wrapper
      height:6.506667rem
      width:100%
      display:flex
      flex-direction:column
      justify-content:center
      .swiper-img
        width:100%
    .swiper-pagination
      color:#fff
      height:2.5rem
      line-height:2.5rem
      bottom:1.25rem
</style>
