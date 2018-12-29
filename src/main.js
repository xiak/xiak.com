import Vue from 'vue';
import { Button, Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/global.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Icon);
Vue.use(Button);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
