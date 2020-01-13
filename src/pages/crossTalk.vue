<template>
    <div class="crossTalk">
        <Back></Back>
        <WzCell
        v-for="(item,index) in list" 
        :key="index"
        dataName="crossTalk" 
        :data="item"
        />
    </div>
</template>


<script>
import WzCell from '../components/wz-cell'
import Back from "../components/back"

export default {
    components:{
        Back,WzCell
    },
    data() {
        return {
            list:{}
        }
    },
    mounted(){
        this.$axios({
            url:"/api/crossTalk",
            params:{
                _limit:10
            }
        }).then(
            res => this.list = res.data.data
        )
    }
}
</script>

<style lang="scss" scoped>

    .crossTalk{
        margin-top: .94rem;
    }
</style>