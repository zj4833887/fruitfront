import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'u-reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);

Vue.prototype.axios = axios
new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
