import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Blog from '@/views/Blog.vue'
import Careers from '@/views/Careers.vue'
import ITStrategyConsulting from '@/views/ITStrategyConsulting.vue'
import SoftwareDevelopmentVue from '@/views/SoftwareDevelopment.vue'
import CloudManagement from '@/views/CloudManagement'
import DataAnalytics from '@/views/DataAnalytics'
import CyberSecurityVue from '@/views/CyberSecurity.vue'
import ITInfrastructure from '@/views/ITInfrastructure'

Vue.use(VueRouter)

const routes = [
    {
        alias: '/',
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/Careers',
        name: 'Careers',
        component: Careers,
    },
    {
        path: '/it-strategy-consulting',
        name: 'ITStrategyConsulting',
        component: ITStrategyConsulting,
    },
    {
        path: '/software-development',
        name: 'SoftwareDevelopmentVue',
        component: SoftwareDevelopmentVue,
    },
    {
        path: '/cloud-management',
        name: 'CloudManagement',
        component: CloudManagement,
    },
    {
        path: '/data-analytics',
        name: 'DataAnalytics',
        component: DataAnalytics,
    },
    {
        path: '/cyber-security',
        name: 'CyberSecurityVue',
        component: CyberSecurityVue,
    },
    {
        path: '/it-infrastructure',
        name: 'ITInfrastructure',
        component: ITInfrastructure,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                selector: to.hash,
            }
        } else {
            return {
                x: 0,
                y: 0,
            }
        }
    },
})

router.beforeEach((to, from, next) => {
    document.title = `${to.name} — ShiftMinds Technology Solutions`
    next()
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router
