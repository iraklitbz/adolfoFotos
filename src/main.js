import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './firebase';
import App from './App.vue';
import VueFire from "vuefire";


Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

