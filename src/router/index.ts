import Vue from 'vue'
import VueRouter,{RouteConfig} from 'vue-router'
import mobileRoutes from './mobile/index'
import pcRoutes from './ps/index'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
    {
        path:'/',
        redirect: '/pc/'
    },
    {
        path:'/pc',
        component:()=>import(/* webpackChunkName: 'pc', webpackPrefetch: true */ '@/views/pc/index.vue'),
        children:[
            ...pcRoutes
        ]
    },
    {
        path:'/m',
        component:()=>import(/* webpackChunkName: 'mobile', webpackPrefetch: true */ '@/views/mobile/index.vue'),
        children:[
            ...mobileRoutes,
        ]
    },
    {
        path: `/404`,
        name: '404',
        component:()=>import( /* webpackChunkName: 'error', webpackPrefetch: true */ '@/views/error/404.vue')
    },
    { path: '*', redirect: '/404',}
]

const router = new VueRouter({
    routes,
    mode:"history"
})


export default router