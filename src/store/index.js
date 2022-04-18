//import { map } from 'core-js/core/array'
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
    },
    actions: {
        logIn({ commit, state }, userName) {
            let users = Data.users
            console.log('in actions.logIn', users.filter((user) => user.name === userName)[0])
            commit('SET_USER', users.filter((user) => user.name === userName)[0])
            commit('IS_LOGGEDIN')
            if (state.currentUser.isAdmin) {
                Router.push({ name: 'AdminApp', params: { userName } })
            } else {
                Router.push({ name: 'UserApp', params: { userName } })
            }
        },
        logOut({ commit }) {
            commit('SET_LOG_OUT')
            Router.push({ name: 'LogIn' })
        },
    },
    modules: {},
})