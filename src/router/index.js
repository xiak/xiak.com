import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from '@/views/layouts';

Vue.use(Router);

export const defaultRoutes = [
  {
    path: '/',
    name: 'MySite',
    component: DefaultLayout,
  },
];

export default new Router({
  routes: defaultRoutes,
});
