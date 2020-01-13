<template>
    <div class="user">
        <div class="title">
            <img :src="$baseUrl+data.icon" alt="">
            <div class="logout" @click="out" >注销</div>
        </div>
        <ul>
            <li class="user"><div><span>{{data.nikename}}</span><i></i></div></li>
            <li><div><span>粉丝：{{data.fans}}</span><i></i></div></li>
            <li><div><span>关注：{{data.follow}}</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
            <li><div><span>待解封</span><i></i></div></li>
        </ul>
    </div>
</template>


<script>
import router from '../plugins/router'
import axios from '../plugins/axios'

export default {
    components:{
       
    },
    data() {
        return {
            data:{}
        }
    },
    methods: {
        out(){
            window.localStorage.removeItem("token");
            this.$router.push("/login")
        }
    },
    beforeRouteEnter (to, from, next) {
        // ...
        let token = window.localStorage.getItem("token");
        if(token){
            let params = new URLSearchParams();
            params.append("token",token)
            axios({
                url:"/api/user/",
                data:params,
                method:"post"
            }).then(
                res=>{
                    if(res.data.err == 0){
                        next(a=>{
                            a.data = res.data.data;
                        })
                    }else{
                        next("/login")
                    }
                }
            )
        }else{
            router.push("/login")
        }
    }
}
</script>

<style lang="scss" scoped>

    .user{
        background:#eeeeee;height:15rem;
        .title{
            width:100%;height:4.5rem;display: flex;justify-content: center;align-items:center;flex-direction: column;
            background: url(../assets/img/data.jpg) no-repeat;background-size: 100% 4.5rem;
            img{
                width:1.24rem;height:1.24rem;display:block;border-radius: 50%;
            }
            .logout{
                margin-top: .24rem;color:#eee;
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
                height:.7rem;width: 100%;background:#fff;border-bottom:.01rem solid #dddddd;
                font-size: .27rem;
                line-height: .7rem;
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