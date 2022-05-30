import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/home/PageOne.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/page-two',
    name: 'pagetwo',
    component: () => import('../views/pagetwo/PageTwo.vue'),
  },
  {
    path: '/page-three',
    name: 'pagethree',
    component: () => import('../views/pagethree/PageThree.vue'),
  },
  {
    path: '/conclused',
    name: 'conclused',
    component: () => import('../views/concluded/PageConcluded.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
