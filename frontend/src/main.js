// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import Vuescript2 from 'vue-script2'
import VueCkeditor from 'vue-ckeditor2'

import { Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App'
import router from './router'
import store from './store'
import './lang'

Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.use(Vuetify)
Vue.use(Vuescript2)
Vue.use(VueCkeditor)

Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.http.options = {
  headers: {
    'x-auth-token': store.getters.authToken
  }
}

if (window.location.hostname === 'localhost') {
  Vue.http.options.root = 'http://localhost:8088/'
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
