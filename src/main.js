// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import{AlertPlugin} from 'vux';
import store from './store/index';
import '@/assets/css/common.css'

Vue.config.productionTip = false
Vue.use(AlertPlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
