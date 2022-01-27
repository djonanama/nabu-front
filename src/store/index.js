import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";
import auth from "./auth.module";
import article from "./article.module";
import profile from "./profile.module";
import affairs from "./affairs.module";
import search from "./search.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile,
    affairs,
    search
  }
});
