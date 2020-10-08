import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YDUI from 'vue-ydui';
import '@/plugin/axios'

Vue.use(YDUI);
Vue.use(router)
Vue.config.productionTip = false

//permission
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem('accessToken')) {
      if (sessionStorage.getItem('oldUrl')) {
        var oldUrl = sessionStorage.getItem('oldUrl');
        sessionStorage.removeItem('oldUrl');
        window.location.href = oldUrl;
      }
      else {
        next();
      }
    }
    else {
      sessionStorage.setItem('oldUrl', window.location.href);
      window.location.href = Common.myUrl + 'login';
    }
  }
  else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
