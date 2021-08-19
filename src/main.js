import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from './components/Welcome.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/NotFound.vue';
import App from './App.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    
    { path: '/', component: Welcome },
    { path: '/dashboard', component: Dashboard },
    { path: '/*', component: NotFound }
  ]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');