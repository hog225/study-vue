import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('../components/HelloWorld.vue')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/Hello/:Qstring1/Hello',
            component: HelloWorld
        }
    ]
})

export default router;