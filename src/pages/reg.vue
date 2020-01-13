<template>
    <div class="reg">
        <Back></Back>
        <a href="#" class="logo"><img src="../assets/img/logo.png" /></a>
        <p class="p1"><span>头条</span></p>
        <van-cell-group class="list">
        <van-field
            v-model="nikename"
            clearable
            label="昵称"
            placeholder="请输入昵称"
        />
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
        <van-row type="flex" justify="space-around" align="center" class="file">
            <van-col span="12">
                上传一个自己的头像吧
            </van-col>
            <van-col span="6">
                <van-uploader v-model="fileList" :after-read="afterRead" preview-image :max-count="1" />
            </van-col>

        </van-row>
        <van-button text="注册" block type="info" @click.native="reg" ></van-button>
        <div class="dd">已经有账号了?&nbsp;&nbsp;<routerLink tag="a" to="/login"  href="javascript:;" class="zhuce">去登录</routerLink></div>
        </van-cell-group>
        
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
            fileList: [],
            nikename:"",
            file:{}
        }
    },
    methods: {
        reg() {
            let formData = new FormData();
            formData.append("username",this.username)
            formData.append("password",this.password)
            formData.append("nikename",this.nikename)
            formData.append("icon",this.file.file)
            this.$axios({
                url:"/api/reg",
                data:formData,
                method:"post"
            }).then(
                res=>{
                    if(res.data.err == 0){
                        console.log(res.data);
                        this.$router.push("/login");
                    }else{
                        alert(res.data.msg)
                    }
                }
            )
        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            this.file = file;
            console.log(this.file.file)
        }
    },
}
</script>


<style lang="scss" scoped>
    .reg{text-align:center;overflow:hidden;padding:0 .58rem;}
    .reg .logo{display:block;height:1.44rem;width:1.47rem;margin:0 auto;margin-top:1.2rem;}
    .reg .logo img{display:block;height:1.44rem;width:1.47rem;}
    .reg .p1{color:#424242;font-size: .56rem;line-height: 2.01rem;}
    .reg .p1 span{color:#f88302;}
    .reg .dl{margin-top:1.55rem;text-indent:.34rem;font-size:.44rem;width:100%;display:block;height:1.17rem;border:0;border-top:.01rem solid #dcdcdc;background:#32b4ff;border-radius:0.58rem;color:#fff;}
    .reg .dd{margin-top: .2rem;}
    .reg .zhuce{font-size:.28rem;margin-top: .48rem;margin-left: .2rem;color:#32b4ff;}
    .file{margin-top: .24rem;}
</style>