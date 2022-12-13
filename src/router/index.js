import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ChatView from '../views/ChatView.vue'
import ChatDetailsView from '../views/ChatDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'login', 
    component: LoginView  
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/chat/:id',
    name: 'chatdetails',
    component: ChatDetailsView
  },
  {
    path: '/',
    redirect: '/login',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
