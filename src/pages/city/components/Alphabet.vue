<template>
  <div class="alphabet" ref="alphabet" v-show="showAlphabet">
    <div class="letter" v-for="(letter,index) in letters" :key="index" @click="handleClick"
    @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="letter" :class="{'current':currentLetter===letter}">{{letter}}</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      touchStatus: false,
      startY: 0,
      base: 0,
      headerHeight: 0,
      timer: null,
      currentLetter: 'A',
      showAlphabet: true
    }
  },
  props: ['cities', 'showIndex'],
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      };
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerHTML)
      this.currentLetter = e.target.innerHTML
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        };
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - this.headerHeight
          const index = Math.floor((touchY - this.startY) / this.base)
          if (index >= 0 && index < this.letters.length) {
            this.currentLetter = this.letters[index]
            this.$emit('change', this.letters[index])
          };
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    hanldleShow () {
      if (window.orientation === 0 || window.orientation === 180) {
        this.showAlphabet = true
      } else {
        this.showAlphabet = false
      }
    }
  },
  updated () {
    if (this.$refs['A']) {
      this.base = this.$refs['A'][0].clientWidth
      this.headerHeight = 3.7 * this.base
      this.startY = this.$refs['A'][0].offsetTop
    }
  },
  activated () {
    window.addEventListener('resize', this.hanldleShow)
  },
  deactivated () {
    window.removeEventListener('resize', this.hanldleShow)
  },
  watch: {
    showIndex () {
      this.currentLetter = this.letters[this.showIndex]
      this.$emit('showFixed', this.currentLetter)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .alphabet
    position:absolute
    top:1.973334rem
    right:0
    bottom:0
    display:flex
    flex-direction:column
    justify-content:center
    width:0.533334rem
    z-index:3
    overflow:hidden
    .letter
      text-align:center
      font-size:0.373334rem
      width:0.533334rem
      height:0.533334rem
      line-height:0.533334rem
      &.current
        color:$color-background
</style>
