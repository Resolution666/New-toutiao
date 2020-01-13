import Vue from 'vue'
import App from './layouts/App.vue'

//计算字体大小 
import './assets/js/font'

// 基础样式
import './assets/css/base.css'

// 引入路由
import router from './plugins/router'

// 引入 axios
import './plugins/axios'

// 引入基础路径 
import './config/beseUrl'

// 引入过滤器
import filters from './filters'

Object.keys(filters).map(key=>Vue.filter(key,filters[key]))

// 引入normalize
import './assets/css/normalize.css'

import { Field } from 'vant';
import { Uploader } from 'vant';
import { Cell,CellGroup,Row,Col } from 'vant';
import { Button } from 'vant';

// 引入vuex 
import store from "./plugins/vuex"


Vue.use(Button);

Vue.use(Cell).use(CellGroup);
Vue.use(Row).use(Col);

Vue.use(Field);
Vue.use(Uploader);



Vue.config.productionTip = false;


let vm = new Vue({
  render: h => h(App),
  data:{
    bFooter:false,
    bHeader:true,
    bBack:false,
    bLoading:false
  },
  router,store
}).$mount('#app')

export default vm;
