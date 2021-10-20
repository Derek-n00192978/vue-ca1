import Vue from 'vue'
import App from './App.vue'
import router from './router'

//08/10/2021
<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
=======
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
>>>>>>> 35da7f8c08d140288b89c376b42e38eed80ac293
Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
