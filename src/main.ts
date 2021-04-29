import Vue from 'vue'
import App from './app.vue'
import './assets/font/iconfont.css'

import router from './router/index'


new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')