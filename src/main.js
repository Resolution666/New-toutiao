import Vue from 'vue'
import App from './layouts/App.vue'

import './assets/js/font'
import './assets/css/base.css'
import router from './plugins/router'


Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
