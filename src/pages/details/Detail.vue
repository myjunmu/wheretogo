<template>
  <div>
    <banner></banner>
    <d-header></d-header>
    <d-ticket></d-ticket>
    <d-comment></d-comment>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DHeader from './components/Header'
import DTicket from './components/Ticket'
import DComment from './components/Comment'

export default{
  components: {
    Banner,
    DHeader,
    DTicket,
    DComment
  }
}
</script>

<style lang='stylus' scoped>
</style>
