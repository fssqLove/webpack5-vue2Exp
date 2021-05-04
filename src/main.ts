import Vue from 'vue'
import App from './app.vue'
import './assets/font/iconfont.css'

import router from './router/index'
import store from './store'

// 引入移动端ui库
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入pc端ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant)
Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')