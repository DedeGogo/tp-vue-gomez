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
        path: '/', //this page contains the template (navbar, footer and side drawer) (TODO)
        name: 'LoggedIn',
        component: LoggedIn,
        meta: { requiresAuth: true },
        children: [{
                path: ':userName/user',
                name: 'UserApp',
                component: UserApp,
            },
            {
                path: ':userName/admin',
                name: 'AdminApp',
                component: AdminApp,
                meta: { requiresAdmin: true },
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

router.beforeEach((to, from, next) => {
        if (to.matched.some((route) => route.meta.requiresAuth)) {
            try {
                // necessary: in case of reload, or to check if token is still valid
                this.$store.state.isLoggedIn

                next()
            } catch (err) {
                // next({ name: 'LogIn' })
            }
        }
        if (to.matched.some((route) => route.meta.requiresAdmin)) {
            try {
                this.$store.state.currentUser.isAdmin
                next()
            } catch (err) {
                //      next({ name: 'UserApp', params: { userName: this.$store.state.currentUser.name } })
            }
        }

        next()
            // `to` and `from` are both route objects
    })
    // before.each if this.$state.isLoggedIn false, redirect to LogIn
    // if isAdmin false redirect to /user

export default router