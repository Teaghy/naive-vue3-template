const BasicLayout = () => import('@/layout/default-layout.vue');

export const basicRoutes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: BasicLayout,
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          locale: 'menu.dashboard.workplace',
          requiresAuth: true,
          roles: ['*'],
        },
      },
    ],
  },
];
