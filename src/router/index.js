import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/gender',
    name: 'Gender',
    component: () => import('../views/Gender.vue')
  }
  ,
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  }
  ,
  {
    path: '/discharge',
    name: 'Discharge',
    component: () => import('../views/Discharge.vue')
  }
  ,
  {
    path: '/dead',
    name: 'Dead',
    component: () => import('../views/Dead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
