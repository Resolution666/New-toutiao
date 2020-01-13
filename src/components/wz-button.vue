<template>
    <div class="button">
        <input type="button" :value="value" class="dl" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        value:{
            type:String,
            default:"按钮"
        }
    }
    
}
</script>


<style lang="scss" scoped>
    .dl{margin-top:1.55rem;text-indent:.34rem;font-size:.44rem;width:100%;display:block;height:1.17rem;border:0;border-top:.01rem solid #dcdcdc;background:#32b4ff;border-radius:0.58rem;color:#fff;}
</style>