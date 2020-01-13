<template>
    <div class="home">
        <WzCell v-for="(item,index) in $store.state.home" 
        :key="index"
        :data="item"
        :dataName="'home'"
        ></WzCell>
    </div>
</template>


<script>
import WzCell from '../components/wz-cell'
import { HOME } from "../store/types";
import vuex from "vuex"
export default {
    components:{
        WzCell
    },
    data() {
        return {
            list:[]
        }
    },
    mounted(){
        this.$store.dispatch(HOME)
        // this.$axios({
        //     url:"/api/home",
        //     params:{
        //         _limit:10
        //     }
        // }).then(
        //     res=> {
        //         this.list = res.data.data;
        //     }
        // )
    },
    computed: {}

}
</script>

<style lang="scss" scoped>
    .home{
        margin-top: .94rem;
    }
</style>