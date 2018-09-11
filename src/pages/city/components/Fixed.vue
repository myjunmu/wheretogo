<template>
  <div class="fixed-item" v-show="showFixedContent">
    <div class="fixed-wrapper" ref="fixedItem">{{this.fixText}}</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      fixText: ''
    }
  },
  props: ['fixContent', 'propIndex', 'shift', 'letter'],
  computed: {
    showFixedContent () {
      if (this.propIndex >= 2) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    shift () {
      if (this.$refs.fixedItem) {
        if (this.shift === 0) {
          this.$refs.fixedItem.style.transform = `translate3d(0,0,0)`
        } else {
          this.$refs.fixedItem.style.transform = `translate3d(0,${this.shift - this.$refs.fixedItem.clientHeight}px,0)`
        }
      }
    },
    fixContent () {
      this.fixText = this.fixContent
    },
    letter () {
      this.fixText = this.letter
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/variable.styl'
  .fixed-item
    position:absolute
    width:100%
    top:1.973334rem
    left:0
    overflow:hidden
    height:0.8rem
    background-color:color-border
    .fixed-wrapper
      height:0.8rem
      line-height:0.8rem
      background-color:$color-border
      font-size:0.426667rem
      color:#000
      padding-left:0.266667rem
</style>
