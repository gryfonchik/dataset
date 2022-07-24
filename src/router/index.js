import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import WorkView from '../views/WorkView.vue'
import MarkView from '../views/MarkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/mark',
      name: 'mark',
      component: MarkView
    },
  ]
})

export default router
