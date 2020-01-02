<template>
  <div id="app">
    <!-- <Header></Header>
    <Nav /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import CrossTalk from '../pages/crossTalk'
import Header from './header'
import Footer from './footer'
import Nav from '../components/nav'

export default {
  name:"app",
  data() {
    return {
      
    }
  },
  components:{
    CrossTalk,Footer,Header,Nav
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">

</style>
