import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)


import Home from '../pages/home.vue'
import Collect from '../pages/collect'
import CrossTalk from '../pages/crossTalk'
import NoPage from '../pages/404'
import User from '../pages/user'
import Login from '../pages/login'
import Reg from '../pages/reg'
import Detail from '../pages/detail'

let routes = [
    {
        path:'/home',
        name:'name',
        component:Home
    },
    {
        path:"/collect",
        name:"collect",
        component:Collect   
    },
    {
        path:'/crosstalk',
        name:"crosstalk",
        component:CrossTalk
    },
    {
        path:'/user',
        name:"User",
        component:User
    },
    {
        path:'/reg',
        name:"Reg",
        component:Reg
    },
    {
        path:'/login',
        name:"Login",
        component:Login
    },
    {
        path:'/detail/:_id',
        name:"Detail",
        component:Detail
    },
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"*",
        component:NoPage
    }
]

let router = new VueRouter({
    mode:"history",
    routes,
})

export default router;



