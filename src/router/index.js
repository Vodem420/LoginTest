import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import TodoPage from '../views/TodoPage.vue'
import Page404 from '../views/Page-error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoPage,
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: '404',
    component: Page404

  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!localStorage.name){
      next({path: '/'})
    }
   }
  if(to.name == 'login' && localStorage.name){
    next({path: '/todo'})
  }
  next()
})

export default router
