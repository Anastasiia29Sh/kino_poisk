import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/MainPage.vue'
import FilmIdPage from '@/pages/FilmIdPage.vue'
import BookmarksEstimates from '@/pages/BookmarksEstimates.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/film/:id',
    name: 'film',
    component: FilmIdPage
  },
  {
    path: '/BookmarksEstimates',
    name: 'BookmarksEstimates',
    component: BookmarksEstimates
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
