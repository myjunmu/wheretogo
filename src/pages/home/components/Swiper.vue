<template>
  <div class="m-swiper">
    <swiper :options='swiperOption' v-if="showSwiper">
      <swiper-slide v-for="(item,key) in swiperList" :key="key"><img :src="item.imgUrl" class="swiper-img"></swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination" id="home-swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  props: ['swiperList'],
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '#home-swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .m-swiper>>>.swiper-pagination-bullet
    width:0.16rem
    height:0.16rem
  .m-swiper
    width:100%
    height:0
    padding-bottom:26.67%
    background-color:#eee
    overflow:hidden
    .swiper-img
      width:100%
</style>
