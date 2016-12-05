import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)

// 3. Create the router
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    component: resolve => require(['./components/LogTime.vue'], resolve)
  }]
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
