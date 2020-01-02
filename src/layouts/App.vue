<template>
  <div id="app">
    <!-- <Header></Header> -->
    <Back />
    <CrossTalk />
    <!-- <router-view></router-view> -->
    <Footer />
  </div>
</template>

<script>
import CrossTalk from '../pages/crossTalk'
import Header from './header'
import Footer from './footer'
import Back from '../components/back'

export default {
  name:"app",
  data() {
    return {
      
    }
  },
  components:{
    CrossTalk,Footer,Header,Back
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">

</style>
