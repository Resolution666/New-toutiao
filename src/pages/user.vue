<template>
    <div class="user">
        <div class="title">
            <img src="../assets/img/headimg.png" alt="">
        </div>
        <ul>
            <li class="user"><div><span>姓名</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
        </ul>
    </div>
</template>


<script>

export default {
    components:{
       
    }
}
</script>

<style lang="scss" scoped>

    .user{
        background:#eeeeee;height:15rem;
        .title{
            width:100%;height:4.5rem;display: flex;justify-content: center;align-items:center;
            background: url(../assets/img/data.jpg) no-repeat;background-size: 100% 4.5rem;
            img{
                width:1.24rem;height:1.24rem;
            }
        }
        ul{
            width:100%;
            
            li{
                div{
                    background:#fff;
                    box-sizing: border-box;padding: 0 .42rem;height:.7rem;
                    span{
                        float: left;
                    }
                    i{
                        float: right;display: block;width:.11rem;height: .7rem;
                        background:url(../assets/img/right.png) no-repeat center;
                        background-size:.11rem .17rem;
                    }
                }
                height:.7rem;width: 100%;background:#fff;border-bottom:.01rem solid #dddddd;font:.27rem/.7rem "";
                &:nth-child(2){
                    margin-top: .24rem;
                }
                &:nth-child(1){
                    margin-top: .24rem;
                }
                &:nth-child(4){
                    margin-top: .24rem;
                }

            }
        }
    }
</style>