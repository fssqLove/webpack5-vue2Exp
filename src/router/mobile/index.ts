import {RouteConfig} from 'vue-router'

const mobileRoutes:RouteConfig[] = [
    {
        path:'/',
        name:'m-Home',
        component:()=>import( /* webpackChunkName: 'm-home', webpackPrefetch: true */ '@/views/mobile/home/Home.vue')
    },
    {
        path:'/m/about',
        name:'m-About',
        component:()=>import( /* webpackChunkName: 'm-about', webpackPrefetch: true */ '@/views/mobile/about/About.vue')
    }
]

export default mobileRoutes