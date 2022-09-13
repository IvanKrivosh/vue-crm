import { createRouter, createWebHistory } from 'vue-router';

const ROOT_PATH = '/';
const routes = [
  {
    path: ROOT_PATH,
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'MainLayout' },
  },
  {
    path: `${ROOT_PATH}about`,
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: () => ROOT_PATH,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
