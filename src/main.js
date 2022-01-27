import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mdbvue from "mdbvue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./registerServiceWorker";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
DatePicker.install(Vue);
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  mdbvue,
  render: h => h(App)
}).$mount("#app");
