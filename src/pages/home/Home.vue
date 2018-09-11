<template>
  <div>
    <m-header></m-header>
    <m-swiper :swiperList="swiperList"></m-swiper>
    <m-icon :iconList="iconList"></m-icon>
    <m-board :hotList="hotList"></m-board>
    <m-guess :recommendList="recommendList"></m-guess>
    <m-weekend :weekendList="weekendList"></m-weekend>
  </div>
</template>

<script>
import MHeader from './components/Header'
import MSwiper from './components/Swiper'
import MIcon from './components/Icon'
import MBoard from './components/Board'
import MGuess from './components/Guess'
import MWeekend from './components/Weekend'
import axios from 'axios'

export default{
  data () {
    return {
      swiperList: [],
      iconList: [],
      weekendList: [],
      hotList: [],
      recommendList: []
    }
  },
  components: {
    MHeader,
    MSwiper,
    MIcon,
    MBoard,
    MGuess,
    MWeekend
  },
  methods: {
    getIndex () {
      axios.get('https://www.easy-mock.com/mock/5b2613770f6ae915edc0fbfc/example/index.json').then(this.getIndexInfo)
    },
    getIndexInfo (res) {
      res = res.data.data
      this.swiperList = res.swiperList
      this.iconList = res.iconList
      this.weekendList = res.weekendList
      this.hotList = res.hotList
      this.recommendList = res.recommendList
    }
  },
  created () {
    this.getIndex()
  }
}
</script>

<style lang='stylus' scoped>
</style>
