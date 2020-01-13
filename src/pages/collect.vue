<template>
    <div class="collect">
        <back :hide="true" />
        <WzCell
         v-for="(item,index) in list"
         :key="index"
         :data="item"
         :dataName="'collect'"
         ></WzCell>
    </div>
</template>


<script>
import WzCell from '../components/wz-cell'
import Back from '../components/back'

export default {
    components:{
        WzCell,Back
    },
    data() {
        return {
            list:[]
        }
    },
    mounted(){
        this.$axios({
            url:"/api/collect",
            params:{
                _limit:10
            }                         
        }).then(
            res => {
                this.list = res.data.data;
            }
        )
    },
    destroyed() {
    },
}
</script>

<style lang="scss" scoped>

    .collect{
        margin-top: .8rem;
    }
</style>