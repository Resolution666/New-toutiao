<template>
  <div id="app">
    <Header v-show="$root.bHeader"></Header>
    <Loading v-show="$root.bLoading"></Loading>
    <router-view></router-view>
    <Footer v-show="$root.bFooter" />
  </div>
</template>

<script>
import CrossTalk from '../pages/login'
import Header from './header'
import Footer from './footer'
import Nav from '../components/nav'
import Loading from '../components/loading'

export default {
  name:"app",
  data() {
    return {
      
    }
  },
  components:{
    CrossTalk,Footer,Header,Nav,Loading
  },
  mounted() {
    
  },
  methods: {
    
  },
  watch: {
    $route:{
      handler(n,o){
        let path = n.path;
        if(/home/.test(path)){
          console.log(111)
          this.$root.bHeader = true;
          this.$root.bNav = true;
          this.$root.bFooter = true;
        }
        if(/collect|crossTalk|404|user/.test(path)){
          this.$root.bHeader = false;
          this.$root.bNav = false;
          this.$root.bFooter = true;
        }                 
        if(/detail|login|reg/.test(path)){
          this.$root.bHeader = false;
          this.$root.bNav = false;
          this.$root.bFooter = false;
        }
      },
      immediate:true
    }
  },
}
</script>

<style lang="scss" scpoed>

</style>
