import Vue from 'vue'
import VueRouter,{RouteConfig} from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:()=>import( /* webpackChunkName: 'about', webpackPrefetch: true */ '../views/about/About.vue')
    },
    {
        path: `/404`,
        name: '404',
        component:()=>import( /* webpackChunkName: 'error', webpackPrefetch: true */ '../views/error/404.vue')
    },
    { path: '*', redirect: '/404',}
]


const router = new VueRouter({
    routes,
    mode:"history"
})


export default router