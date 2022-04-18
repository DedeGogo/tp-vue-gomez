import Vue from 'vue'
import VueRouter from 'vue-router'
// Loggeout Views
import LogIn from '../views/LogIn.vue'
// Logged in
import LoggedIn from '../views/LoggedIn.vue'
// as user
import UserApp from '../views/user/UserApp.vue'
// as admin
import AdminApp from '../views/admin/AdminApp.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LogIn',
        component: LogIn,
    },
    {
        path: '/:userName', //this page contains the template (navbar, footer and side drawer)
        name: 'LoggedIn',
        component: LoggedIn,
        // meta: { requiresAuth: true },
        children: [{
                path: '/user',
                name: 'UserApp',
                component: UserApp,
            },
            {
                path: '/admin',
                name: 'AdminApp',
                component: AdminApp,
            },
        ],
    },
    // {
    //     path: '*',
    //     redirect: '/',
    // },
]

const router = new VueRouter({
    mode: 'history',
    //   base: process.env.BASE_URL,
    routes,
})

export default router