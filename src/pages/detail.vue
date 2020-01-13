<template>
    <div class="dd">
        <Back></Back>
        <div class="xxx" v-if="base.detail">
            <div class="top">
                <h3 class="title">{{base.title}}</h3>
            </div>
            <div class="center">
                <div class="c-l">
                    <div class="auth_icon"><img :src="$baseUrl+base.detail.auth_icon" alt=""></div>
                    <div class="auth">{{base.detail.auth}}</div>
                </div>
                <div class="c-r">
                    <div class="time">{{base.time | date}}</div>
                    <div class="comment">评论：{{base.comment}}</div>
                </div>
            </div>
            <div class="content" v-html="base.detail.content"></div>
        </div>
    </div>
</template>


<script>
import Back from '../components/back'
import { DETAIl } from "../store/types";
import { mapState } from "vuex";
export default {
    name:"detail",
    components:{
        Back
    },
    data() {
        return {
            // base:{}
        }
    },
    mounted() {
        this.$store.dispatch(DETAIl,{_id:this.$route.params._id,dataName:this.$route.query.dataName})
        // this.$axios({
        //     url:"/api/"+this.$route.query.dataName+"/"+this.$route.params._id
        // }).then(
        //     res=>{
        //         this.base = res.data.data;
        //     }
        // )

    },
    computed: mapState({
        base:state=>state.detail
    }),
    updated() {
        let aImg = document.querySelectorAll("#article_content img")
        let content = document.querySelector("#article_content")
        let ap = document.querySelectorAll("#article_content p")
        aImg.forEach((item)=>{
            item.style.width = '100%';
            item.style.height = '100%';
            item.style.margin = "0 auto";
            item.style.marginTop = ".24rem";
            item.style.marginBottom = ".24rem";
        })
        ap.forEach((item)=>{
        })
    }
}
</script>

<style lang="scss" scoped>
    .dd{
        overflow: hidden;
        .top{
            margin-top: 1.4rem;padding: 0 .24rem;box-sizing:border-box;
            h3{
                font-size: .48rem;
                line-height: .62rem;
            }
        }
        .center{
            display: flex;justify-content: space-between;align-items: center;margin-top: .4rem;padding: 0 .24rem;box-sizing:border-box;
            .c-l{
                display: flex;align-items: center;
                .auth_icon{
                    height:.36rem;width:.36rem;border-radius: 50%;display: flex;align-items: center;
                    img{
                        height:.36rem;width:.36rem;display: block;border-radius: 50%;
                    }
                }
                .auth{
                    font-size: .28rem;
                    color: #222;
                    font-weight: 700;
                    margin-left: .2rem;
                }
            }
            .c-r{
                display: flex;
                .time{
                    margin-right: .2rem;
                }
            }
        }
        .content{
            margin-top: .24rem;
            font:.36rem/1.76 "";
            font-size: .36rem;
            line-height: 1.76;
            text-indent: 2em;
            padding: 0 .2rem ;
            box-sizing: border-box;
            word-wrap: break-word;
            color: #222;
            text-align: justify;
            list-style-position: inside;
            list-style-type: square;
            text-indent:0;
        }
    }
    
</style>