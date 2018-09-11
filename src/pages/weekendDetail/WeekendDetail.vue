<template>
  <div>
    <w-header :weekendDetail="weekendDetail"></w-header>
    <weekend-item :weekendDetail="weekendDetail"></weekend-item>
  </div>
</template>

<script>
import WHeader from './components/Header'
import WeekendItem from './components/WeekendItem'
import axios from 'axios'

export default{
  name: 'weekendDetail',
  data () {
    return {
      weekendDetail: {}
    }
  },
  components: {
    WHeader,
    WeekendItem
  },
  methods: {
    getWeekendDetail () {
      axios.get('https://www.easy-mock.com/mock/5b2613770f6ae915edc0fbfc/example/weekenddetail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handGetData)
    },
    handGetData (res) {
      this.weekendDetail = res.data.data.id
    }
  },
  mounted () {
    this.getWeekendDetail()
  }
}
</script>

<style scoped>
</style>
