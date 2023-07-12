import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import LoginView from '@/pages/LoginView.vue'
import SignupView from '@/pages/SignupView.vue'
import Dashboard from '@/pages/DashboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta : {
        title : 'Masuk'
      }
    },
    {
      path : "/signup",
      name : "signup",
      component : SignupView,
      meta : {
        title : 'Gabung'
      }
    },
    {
      path : "/Dashboard",
      name : "dashboard",
      component : Dashboard,
      meta : {
        title : 'Gabung'
      }
    }
  ]
})

export default router
