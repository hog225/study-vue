import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
//const HelloWorld = () => import('../components/HelloWorld.vue')

Vue.use(Router)

const User = {
  template: '<div>User</div>'
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/Hello',
            component: HelloWorld
        },
        {
            path: '/power',
            redirect: '/Hello'
        },
        {
            path: '/user',
            component: User
        }
    ]
})

export default router;