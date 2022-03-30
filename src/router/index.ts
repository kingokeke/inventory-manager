import { createRouter, createWebHistory, Router } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Landing.vue')
  },
  {
    path: '/admin',
    component: () => import('@/layout/AdminPanel.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/Dashboard.vue')
      },
      {
        path: '/sales',
        component: () => import('@/pages/Sales.vue')
      },
      {
        path: '/inventory',
        component: () => import('@/pages/Inventory.vue')
      },
      {
        path: '/reports',
        component: () => import('@/pages/Reports.vue')
      },
      {
        path: '/settings',
        component: () => import('@/pages/Settings.vue')
      },
    ]
  },
];

const router: Router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;