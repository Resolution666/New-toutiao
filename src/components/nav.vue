<template>
<div class="box">
    <div class="nav">
        <ul>
            <li class="active">推荐</li>
            <li>热点</li>
            <li>社会</li>
            <li>娱乐</li>
            <li>科技</li>
            <li>汽车</li>
            <li>体育</li>
            <li>游戏</li>
            <li>财经</li>
            <li>军事</li>
            <li>国际</li>
            <li>时尚</li>
        </ul>
    </div>
</div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .box{width: 100%;overflow: auto;}
    .nav{
        height:.7rem;background:#eeeeee;margin-top: .94rem;
        width:140%;
        ul{
            display: flex;
            justify-content: space-around;
            overflow: auto;
            li{
                font:.3rem/.7rem "";color:#000000;
                &.active{
                      color:#ff6347;
                }
            }
        }
    }

</style>