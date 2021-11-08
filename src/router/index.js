import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BuyPlans from '@/views/BuyPlans.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
  },
  {
    path: '/buyPlans/:type',
    name:'BuyPlans',
    component: BuyPlans,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
