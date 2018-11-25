import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/components/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: auth
    }
  ]
})
