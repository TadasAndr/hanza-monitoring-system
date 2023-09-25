import { createRouter, createWebHistory } from 'vue-router'
import HelloPage from './pages/HelloPage.vue'
import DashboardPage from './pages/DashboardPage.vue'

const routes = [
  { path: '/', component: HelloPage },
  { path: '/dashboard/:name', component: DashboardPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router