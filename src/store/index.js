import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../../public/data.json'
import Router from '../router'
// Je n'ai pas trouvé de forme d'importer un fichier statique avec fetch, donc j'ai fait un import

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        currentUser: undefined,
        theme: 'default',
    },
    getters: {},
    mutations: {
        SET_USER(state, user) {
            if (user.name) {
                Vue.set(state, 'currentUser', user)
                    // state.currentUser = user
            } else {
                console.log('user empty')
            }
        },
        IS_LOGGEDIN(state) {
            if (!state.isLoggedIn) {
                Vue.set(state, 'isLoggedIn', true)
                    //  state.isLoggedIn = true
            } else {
                console.log('user is already loggedin')
            }
        },
        SET_LOG_OUT: (state) => {
            Vue.set(state, 'currentUser', undefined)
            Vue.set(state, 'isLoggedIn', false)
        },
        SET_THEME(state, newTheme) {
            Vue.set(state, 'theme', newTheme)
        },
    },
    actions: {
        changeTheme({ commit }, newTheme) {
            commit('SET_THEME', newTheme)
        },
        logIn({ commit, state }, userName) {
            let users = Data.users
            commit('SET_USER', users.filter((user) => user.name === userName)[0])
            commit('IS_LOGGEDIN')
            if (state.currentUser.isAdmin) {
                Router.push({ name: 'AdminApp', params: { userName } })
                commit('SET_THEME', 'AdminTheme') // could be optimized by putting in a beforeEach
            } else {
                Router.push({ name: 'UserApp', params: { userName } })
                commit('SET_THEME', 'UserTheme')
            }
        },
        logOut({ commit }) {
            commit('SET_LOG_OUT')
            Router.push({ name: 'LogIn' })
        },
    },
    modules: {},
})