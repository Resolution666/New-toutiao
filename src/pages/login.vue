<template>
    <div class="login">
        <Back></Back>
        <a href="#" class="logo"><img src="../assets/img/logo.png" /></a>
        <p class="p1">使用头条账号登录<span>头条</span></p>
        <van-cell-group class="list">
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
        <van-button text="登录" block type="info" @click.native="login" ></van-button>
        <div class="dd">没有账号吗快去注册吧！&nbsp;&nbsp;<routerLink tag="a" to="/reg"  href="javascript:;" class="zhuce">注册</routerLink></div>
    </div>
</template>

<script>
import WzInput from '../components/wz-input'
import WzButton from '../components/wz-button'
import Back from "../components/back"
export default {
    components:{
        WzInput,WzButton,Back
    },
    data() {
        return {
            username:"",
            password:"",            
        }
    },
    methods: {
        login(){
            let params = new URLSearchParams();
            params.append("username",this.username)
            params.append("password",this.password)
            this.$axios({
                url:"/api/login",
                data:params,
                method:"post"
            }).then(
                res => {
                    window.localStorage.setItem("token",res.data.token)
                    this.$router.push("/user")
                }
            )
        }
    }
}
</script>


<style lang="scss" scoped>
    .login{text-align:center;height:100%;overflow:hidden;padding:0 .58rem;padding-bottom:5.58rem;}
    .login .logo{display:block;height:1.44rem;width:1.47rem;margin:0 auto;margin-top:1.2rem;}
    .login .logo img{display:block;height:1.44rem;width:1.47rem;}
    .login .p1{color:#424242;font-size: .56rem;line-height: 2.01rem;}
    .login .p1 span{color:#f88302;}
    .login .dd{margin-top: .2rem;}
    .login .zhuce{font-size:.28rem;margin-top: .48rem;margin-left: .2rem;color:#32b4ff;}
</style>