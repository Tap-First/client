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
    component: InGame,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
