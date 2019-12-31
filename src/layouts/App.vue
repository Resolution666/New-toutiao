<template>
  <div id="app">
    <Header></Header>
    <Nav />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from '../pages/home'
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
    Home,Footer,Header,Nav
  },
  mounted() {
    
  },
}
</script>

<style lang="scss">

</style>
