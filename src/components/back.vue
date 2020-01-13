<template>
<div class="back">
    <i @click="back"></i>
    <div class="back_title" v-show="hide">
        <span>默认收藏</span>
        <span>本地收藏</span>
    </div>
</div>
</template>



<script>
export default {
    props:{
        hide:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .back{
        height:.92rem;border-bottom:.02rem solid #dddddd;background:#fff;
        display: flex;align-items:center;position:fixed;left:0;top:0;width:100%;
        i{
            display: inline-block;height:.54rem;width:.37rem;background:url(../assets/img/back.png) no-repeat;background-size: .37rem .54rem;
        }
        .back_title{
            height:100%;display:flex;align-items:center;
            span{font-size:.34rem;color:#2c3e50;margin-left: .2rem;}
            margin:auto;
        }
    }


</style>