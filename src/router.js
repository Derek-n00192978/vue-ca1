//Page set up 14-10-2021
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Indepth from '@/pages/Indepth'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/indepth',
            name: 'indepth',
            component: Indepth,
        },
        {
            path : '/user/:id',
            name: 'user',
            component: User,
        },
        
    ] 
})