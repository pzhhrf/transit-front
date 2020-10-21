import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YDUI from 'vue-ydui';
import '@/plugin/axios'
import 'vue-ydui/dist/ydui.rem.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import VueClipboard from 'vue-clipboard2'

import * as filters from '@/filter';

import '@/plugin/toast'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.use(ElementUI, { locale })
Vue.use(YDUI);
Vue.use(router)
Vue.use(VueClipboard)

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
    }
  }
  else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
