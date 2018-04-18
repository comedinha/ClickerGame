// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSessionStorage from 'vue-sessionstorage'

Vue.config.productionTip = false
Vue.use(VueSessionStorage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  localStorage,
  router,
  components: { App },
  template: '<App/>'
})
