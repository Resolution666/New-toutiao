import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)


import Home from '../pages/home.vue'
import Collect from '../pages/collect'
import CrossTalk from '../pages/crossTalk'
import NoPage from '../pages/404'
import User from '../pages/user'

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
    routes
})

export default router;




