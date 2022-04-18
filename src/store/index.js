import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        currentUser: undefined,
    },
    getters: {},
    mutations: {},
    actions: {
        logIn({ commit }, { userName }) {
            commit('SET_USER')
        },
    },
    modules: {},
})