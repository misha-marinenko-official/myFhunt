// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './assets/theme.scss'
import 'material-icons'
import 'axios'
Vue.use(VueMaterial)

Vue.use(VueLocalStorage)
Vue.config.productionTip = false
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  methods: {
    get: function (url, seckey, ident) {
      let resp;
      axios
        .get("http://marinenko.rf.gd/api.php?api_token="+ident+"&api_secret"+seckey+"&url"+url)
        .then(response => (resp = response));
      return resp;
    }
  },
  template: '<App/>'
})
