<template>
    <div class="duanzi">
        <div class="box">
            <div class="top">
                <div class="img"><img src="../assets/img/headimg.png" alt=""></div>
                <h3>作者</h3>
            </div>
            <div class="content">
                一道简单的问题却让七尺男儿掩面哭泣，每个人都是城市漂泊的孤儿，过年回家去听听家乡渐渐远去的吆喝声吧
            </div>
            <div class="comment">
                <div class="zan">赞11</div>
                <div class="cai">踩11</div>
                <div class="ping">评论11</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
    
}
</script>
<style lang="scss" scoped>
    .duanzi{
        background: #fff;box-sizing:border-box;padding: .2rem .2rem ;margin:0 auto;
        .box{
            min-height:2rem;width:100%;border:.01rem solid #eee;
            border-radius: .05rem;padding: .2rem .2rem ;box-sizing:border-box;
            .top{
                display: flex;
                .img{
                    height:1.02rem;width:1.02rem;border-radius:50%;
                    img{
                        display: block;height:1.02rem;width:1.02rem;
                    }
                }
                h3{
                    font-size:.38rem;line-height: 1.02rem;
                }
            }
            .content{
                margin-top: .2rem;font:400 .38rem/.38rem "";text-indent:2em;
            }
            .comment{
                overflow: hidden;margin-top: .2rem;
                div{
                    float: left;
                    &.cai{
                        margin-left: .06rem;
                    }
                }
            }
        }
    }
</style>