// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import './assets/style/reset.css'

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    isLogin: false,
    username: null,
    head_url: null,
  },
  mutations: {
    login(state, userInfo) {
      state.isLogin = true;
      state.username = userInfo.username;
      state.head_url = userInfo.head_url;
    },
    quit(state) {
      state.isLogin = false;
      state.username = null;
    }
  }

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
