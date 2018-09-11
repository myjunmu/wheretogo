<template>
  <div class="city-list" ref="scrollWrapper">
    <div class="scroll-container" ref="wrapper">
      <div class="city-list-cate">
        <div class="list-title" ref="base">当前城市</div>
        <div class="list-items">
          <div class="list-item-wrapper">
            <div class="list-item">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>

      <div class="city-list-cate">
        <div class="list-title">热门城市</div>
        <div class="list-items">
          <div class="list-item-wrapper" v-for="(hotCity,index) in hotCities" :key="index">
            <div class="list-item" @click="handleCityClick(hotCity.name)">{{hotCity.name}}</div>
          </div>
        </div>
      </div>

      <div class="city-list-cate" v-for="(City,key) in cities" :key="key" :ref="key">
        <div class="list-title">{{key}}</div>
        <div class="city-detail-wrapper">
          <div class="city-detail border-bottom" v-for="(city,number) in City" :key="number">{{city.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default{
  data () {
    return {
      listHeight: [],
      scrollY: -1,
      diff: -1
    }
  },
  props: ['cities', 'hotCities', 'letter'],
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scrollWrapper, {probeType: 3})
      this.scroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    calculateHeight (isRecalcute) {
      this.child = this.$refs.wrapper.children
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < this.child.length; i++) {
        let item = this.child[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
    }
  },
  watch: {
    cities () {
      setTimeout(() => {
        this.calculateHeight()
        this.refresh()
      }, 20)
    },
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    scrollY () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let heightStart = this.listHeight[i]
        let heightEnd = this.listHeight[i + 1]
        if (!heightEnd || (this.scrollY >= heightStart && this.scrollY < heightEnd)) {
          this.currentIndex = i
          this.diff = heightEnd - this.scrollY
          break
        };
      };
      this.$emit('slide', this.currentIndex)
    },
    diff () {
      if (this.currentIndex >= 2) {
        let fixedShift = (this.diff > 0 && this.diff < this.$refs.base.clientHeight) ? this.diff : 0
        if (this.fixedShift === fixedShift) {
          return
        }
        this.fixedShift = fixedShift
        this.$emit('fixedTransform', this.fixedShift)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  @import '~@/assets/styles/mixin.styl'
  .border-topbottom
    &::before
      border-color:#999
    &::after
      border-color:#999
  .border-bottom
    &::before
      border-color:#999
  .city-list
    position:absolute
    top:1.973334rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    .scroll-container
      .city-list-cate
        .list-title
          height:0.8rem
          line-height:0.8rem
          background-color:$color-border
          padding-left:0.266667rem
          font-size:0.426667rem
          color:#000
        .list-items
          padding:0.066667rem 0.533334rem 0.066667rem 0.133334rem
          overflow:hidden
          .list-item-wrapper
            float:left
            width:33.33%
            .list-item
              text-align:center
              margin:0.133334rem
              border:1px solid #ddd
              padding:0.133334rem 0
              border-radius:0.08rem
              font-size:0.373334rem
        .city-detail-wrapper
          .city-detail
            height:0.8rem
            line-height:0.8rem
            margin-left:0.266667rem
            margin-right:0.533334rem
            color:#000
            font-size:0.373334rem
</style>
