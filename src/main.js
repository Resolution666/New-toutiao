import Vue from 'vue'
import App from './layouts/App.vue'
import VueRouter from 'vue-router';

import './assets/js/font'
import './assets/css/base.css'

Vue.config.productionTip = false


Vue.use(VueRouter);


new Vue({
  render: h => h(App),
}).$mount('#app')
