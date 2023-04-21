import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import TestView from '../views/TestView.vue'
import Result from '../components/Result.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test',
      component: TestView,
      meta: {
        title: 'Тест: Из какой ты вселенной?',
        metaTags: [
          {
            name: 'description',
            content: 'Тест: Из какой ты вселенной?'
          },
          {
            property: 'og:title',
            content: 'Тест: Из какой ты вселенной?'
          },
          {
            property: 'og:description',
            content: 'Пройди этот тест, чтобы узнать, из какой вселенной ты родом.'
          },
          {
            property: 'og:site_name',
            content: 'Твоя Вселенная'
          },
          {
            property: 'og:image',
            content: ''
          },
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView
    },
    {
      path: '/result/:title',
      name: 'result',
      component: Result,
      meta: {
        title: '',
        metaTags: [
          {
            name: 'description',
            content: 'Тест: Из какой ты вселенной?'
          },
          {
            property: 'og:title',
            content: 'Тест: Из какой ты вселенной?'
          },
          {
            property: 'og:description',
            content: 'Пройди этот тест, чтобы узнать, из какой вселенной ты родом.'
          },
          {
            property: 'og:site_name',
            content: 'Твоя Вселенная'
          },
          {
            property: 'og:image',
            content: ''
          },
        ]
      }
    }
  ]
})

export default router
