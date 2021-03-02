import Vue from 'vue'
import App from './App.vue'

// import bootstrap
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import {router} from "./router";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
