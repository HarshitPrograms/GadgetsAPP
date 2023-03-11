import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cart from '../views/cart.vue'
import AboutView from '../views/AboutView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
  path:'/cart',
  name: 'Cart',
  component: cart
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
