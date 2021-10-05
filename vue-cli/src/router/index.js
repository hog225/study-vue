import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import ToDoHeader from '../components/TodoHeader.vue'
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
            name: "hello",
            component: HelloWorld,
            children: [
                {
                    path: 'todoHeader',
                    name: 'todoheader',
                    component: ToDoHeader
                }
            ]
        },
        {
            path: '/power',
            redirect: '/Hello',
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})

//navigation guard
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
})

export default router;