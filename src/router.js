import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import GameView from './views/GameView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:id',
    name: 'GameView',
    component: GameView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
