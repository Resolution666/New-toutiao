<template>
    <div class="crossTalk">
        <DuanZi v-for="n in 10" :key="n" />
    </div>
</template>


<script>
import DuanZi from '../components/duanzi'

export default {
    components:{
        DuanZi
    }
}
</script>

<style lang="scss" scoped>

    .crossTalk{
        margin-top: .94rem;
    }
</style>