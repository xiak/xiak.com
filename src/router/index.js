import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * Loaded router on demand
 */
export const defaultRoutes = [
  {
    path: '/',
    name: 'MySite',
    component: () => import('@/views/layouts'),
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/components/editor/markdown-x'),
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import('@/components/editor'),
  },
  {
    path: '/bash',
    name: 'Bash',
    component: () => import('@/components/editor/editor'),
  },
];

export default new Router({
  routes: defaultRoutes,
});
