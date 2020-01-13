<template>
    <div class="input">
        <input type="text" :placeholder="text" class="id" @input="$emit('input',$event.target.value)" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        text:{
            type:String,
            required:true
        }
    }
}
</script>


<style lang="scss" scoped>
     .id{text-indent:.34rem;font-size:.44rem;width:100%;display:block;height:1.17rem;border:0;box-shadow:0 0 .05rem #dcdcdc;background:#fff;border-radius:.45rem;color:#9e9e9e;margin-top: .24rem;}
</style>