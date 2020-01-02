<template>
    <div class="footer">
        <router-link to="/home" tag="li" active-class="active"  class="navItem">
            <span class="active">首页</span>
        </router-link>
        <router-link to="/collect" tag="li" active-class="active" class="navItem">
            <span>收藏</span>
        </router-link>
        <router-link to="/crossTalk" tag="li" active-class="active" class="navItem">
            <span>段子</span>
        </router-link>
        <router-link to="/user" tag="li" active-class="active" class="navItem">
            <span>我的</span>
        </router-link>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: .0 solid #ddd;
    width: 100%;
    height: .80rem;
    background: #fff;
    display: flex;
    justify-content: center;
    z-index: 200;
    .navItem {
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #777;
      &.active{
            color:#ff6347;
        }
      .navItem-icon {
        font-size: .35rem;
      }
      span {
        font-size: .22rem;
      }
    }
  }


</style>