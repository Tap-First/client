import Vue from 'vue'
import VueRouter from 'vue-router'
import InGame from '../components/InGame.vue'
import Front from '../views/Front'
import Room from '../components/Room.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front
  },
  {
    path: '/home',
    name: 'Home',
    component: Room
  },
  {
    path: '/ingame',
    name: "InGame",
    component: InGame
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
