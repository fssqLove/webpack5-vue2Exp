import Vue from 'vue'
import App from './app.vue'
import './assets/font/iconfont.css'

import router from './router/index'
import store from './store'

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')