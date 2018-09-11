<template>
  <span class='m-star'>
    <span class="star-item" v-for="(item,index) in starItems" :key="index" :class="item"></span>
  </span>
</template>

<script>
const LENGTH = 5
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

export default{
  props: ['score'],
  computed: {
    starItems () {
      const result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDmical = (score % 1 !== 0)
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLASS_ON)
      };
      if (hasDmical) {
        result.push(CLASS_HALF)
      };
      while (result.length < LENGTH) {
        result.push(CLASS_OFF)
      };
      return result
    }
  }
}
</script>

<style scoped lang="stylus">
  .star-item
    display:inline-block
    width:0.32rem
    height:0.32rem
    background-size:100% 100%
    &.on
      background-image:url("~@/common/star/img/star_on.png")
    &.half
      background-image:url("~@/common/star/img/star_half.png")
    &.off
      background-image:url("~@/common/star/img/star_off.png")
</style>
