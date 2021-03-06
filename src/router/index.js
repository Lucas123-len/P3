import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import FrutasCrud from '../components/FrutasCrud'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/frutas',
    component: FrutasCrud
    
  },
  {
    path: '/sobre',
    component: About
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
