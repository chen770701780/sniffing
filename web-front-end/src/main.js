import Vue from "vue";
import App from "./App";
import router from "./router/";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BlackDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
