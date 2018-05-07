import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.config.productionTip = false

import Home from './components/Home.vue'
import Entries from './components/Entries.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/entries", component: Entries },
]

const router = new VueRouter ({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
