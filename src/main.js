import Vue from 'vue'
import App from './App.vue'
import router from './router'


//08/10/2021
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//21/10/2021 MASONARY
import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)
Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
