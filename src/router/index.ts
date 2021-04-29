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
        component:()=>import(/* webpackChunkName: "about" */ '../views/about/About.vue')
    }
]


const router = new VueRouter({
    routes,
})


export default router