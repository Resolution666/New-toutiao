<template>
    <div class="footer">
        <li  class="navItem">
            <span class="active">首页</span>
        </li>
        <li  class="navItem">
            <span>收藏</span>
        </li>
        <li  class="navItem">
            <span>段子</span>
        </li>
        <li  class="navItem">
            <span>我的</span>
        </li>
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
      .navItem-icon {
        font-size: .35rem;
      }
      span {
        font-size: .22rem;
        &.active{
            color:#ff6347;
        }
      }
    }
  }


</style>