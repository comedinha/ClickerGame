// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './store'
import './lang'

Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.http.options = {
  root: 'http://localhost:8088/',
  headers: {
    'x-auth-token': localStorage.getItem('x-auth-token')
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
