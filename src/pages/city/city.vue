<template>
  <div>
    <c-header></c-header>
    <c-search :cities="cities"></c-search>
    <c-list :cities="cities" :hotCities="hotCities" :letter="letter" @slide='handleSlide' @fixedTransform='handleTransform'></c-list>
    <c-alphabet :cities='cities' @change="handleLetterChange" :showIndex="showIndex" @showFixed="handleFixed"></c-alphabet>
    <c-fixed :fixContent="fixContent" :propIndex="propIndex" :shift="shift" :letter="letter"></c-fixed>
  </div>
</template>

<script>
import CHeader from './components/Header.vue'
import CSearch from './components/Search.vue'
import CList from './components/List.vue'
import CAlphabet from './components/Alphabet.vue'
import CFixed from './components/Fixed.vue'
import axios from 'axios'

export default{
  components: {
    CHeader,
    CSearch,
    CList,
    CAlphabet,
    CFixed
  },
  data () {
    return {
      cities: '',
      hotCities: '',
      letter: '',
      showIndex: '',
      propIndex: '',
      fixContent: '',
      portrait: '',
      shift: ''
    }
  },
  methods: {
    getCity () {
      axios.get('https://www.easy-mock.com/mock/5b2613770f6ae915edc0fbfc/example/city.json').then(this.getCityInfo)
    },
    getCityInfo (res) {
      res = res.data.data
      this.cities = res.cities
      this.hotCities = res.hotCities
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    handleSlide (currentIndex) {
      this.propIndex = currentIndex
      this.showIndex = currentIndex < 2 ? 0 : currentIndex - 2
    },
    handleFixed (currentLetter) {
      this.fixContent = currentLetter
    },
    handleTransform (fixedShift) {
      this.shift = fixedShift
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style lang='stylus' scoped>
</style>
