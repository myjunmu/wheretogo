<template>
  <div>
    <div class='search'>
      <input type="text" name="city" placeholder="输入城市名或拼音" class='search-input' v-model="keyWords">
    </div>
    <div class='search-content' ref="scrollWrapper" v-show="keyWords">
      <ul>
        <li class='search-content-item border-bottom' v-for="(item,key) in this.searchList" :key="key">{{item.name}}</li>
        <li class="search-content-item border-bottom" v-show="showNotMatch">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default{
  props: ['cities'],
  data () {
    return {
      keyWords: '',
      searchList: [],
      timer: null
    }
  },
  computed: {
    showNotMatch () {
      return !this.searchList.length
    }
  },
  watch: {
    keyWords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWords) {
        this.searchList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWords.toLowerCase()) > -1 || value.name.indexOf(this.keyWords.toLowerCase()) > -1) {
              result.push(value)
            }
          })
        }
        this.searchList = result
      }, 100)
    }
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.scrollWrapper)
    }, 20)
  }

}
</script>

<style  lang= 'stylus' scoped>
  @import '~@/assets/styles/variable.styl'
  .border-bottom
    &:before
      border-color:rgba(0,0,0,0.9)
  .search
    height:0.8rem
    background-color:$color-background
    padding:0 0.266667rem
    .search-input
      box-sizing:border-box
      text-align:center
      padding:0 0.266667rem
      width:100%
      height:0.64rem
      border-radius:0.08rem
      font-size:0.373334rem
      &::placeholder
        color:#666
        font-size:0.373334rem
  .search-content
    position:absolute
    top:1.973334rem
    left:0
    right:0
    bottom:0
    background-color:$color-border
    z-index:99
    overflow:hidden
    .search-content-item
      height:0.8rem
      line-height:0.8rem
      padding:0 0.266667rem
      font-size:0.373334rem
      color:#000
      background-color:#fff
</style>
