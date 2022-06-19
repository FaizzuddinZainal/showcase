import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
  ]
})

export default router
