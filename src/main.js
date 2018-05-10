import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'vue-awesome/icons'

Vue.config.productionTip = false

import Home from './components/Home.vue'
import Entries from './components/Entries.vue'
import Audits from './components/Audits.vue'
import Devices from './components/Devices.vue'
import Reports from './components/Reports.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/entries", component: Entries },
  { path: "/audits", component: Audits },
  { path: "/devices", component: Devices },
  { path: "/reports", component: Reports },
  { path: "/settings", component: Settings },
]

const router = new VueRouter ({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
