<template>
    <div class="home">
        <WzCell v-for="(n) in 10" :key="n" ></WzCell>
    </div>
</template>


<script>
import WzCell from '../components/wz-cell'
export default {
    components:{
        WzCell
    }
}
</script>

<style lang="scss" scoped>
    .home{
        margin-top: 1.88rem;
    }
</style>