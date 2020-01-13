<template>
    <div class="nav" @click="get">
        <h3>{{data.title}}</h3>
        <div class="bottom">
            <div class="b-l">{{data.detail.auth}}&nbsp;&nbsp;&nbsp;&nbsp;<span>评论:{{data.comment}}</span></div>
            <div class="b-r">{{data.time | date}}</div>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        data:{
            type:[Object],
            required:true
        },
        dataName:{
            type:String,
            required:true
        }
    },
    methods:{
        get(){
            // console.log("/detail/"+this.data._id+"?dataName="+this.dataName)
            this.$router.push("/detail/"+this.data._id+"?dataName="+this.dataName)
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        min-height:1.25rem;
        box-sizing: border-box;
        padding: 0 .23rem;
        padding: .23rem;
        
        h3{
            font:.32rem/.48rem "";
            font-weight: 600;
            font-size: .32rem;
            line-height: .48rem;
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            padding-bottom: .24rem;
            margin-top: .16rem;
            .b-l{
                span{margin: .18rem;}
            }
            border-bottom: .01rem solid #dfdfdf;
        }
    }

</style>