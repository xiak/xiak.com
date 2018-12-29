import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from '@/views/layouts';
import Editor from '@/components/editor/markdown-x';
import Markdown from '@/components/editor';

Vue.use(Router);

export const defaultRoutes = [
  {
    path: '/',
    name: 'MySite',
    component: DefaultLayout,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: Markdown,
  },
];

export default new Router({
  routes: defaultRoutes,
});
