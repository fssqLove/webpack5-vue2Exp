import {RouteConfig} from 'vue-router'

const pcRoutes:RouteConfig[] = [
    {
        path:'/',
        name:'p-Home',
        component:()=>import( /* webpackChunkName: 'p-home', webpackPrefetch: true */ '@/views/pc/home/Home.vue')
    },
    {
        path:'/pc/about',
        name:'p-About',
        component:()=>import( /* webpackChunkName: 'p-about', webpackPrefetch: true */ '@/views/pc/about/About.vue')
    }
]

export default pcRoutes