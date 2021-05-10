import Vue from 'vue'
import Vuex from 'vuex'
import {authService} from "../services/auth/auth-services";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isAuthenticated: !!localStorage.getItem('token'),
        token: '',
        isLoading: false,
    },
    mutations: {
        setIsLoading(state, status) {
            state.isLoading = status
        },
        loginUser(state, payload) {
            state.token = payload
            localStorage.setItem("token", payload)
            state.isAuthenticated = true
            this.state.isLoading = false
        },
        logOutUser(state) {
            state.token = ''
            state.isAuthenticated = false
            localStorage.removeItem('token')
        }
    },
    actions: {
          login({commit}, payload) {
            commit('setIsLoading', true)
               return  authService.loginUser(payload)
                .then(response => {
                    commit('loginUser', response.data.auth_token)
                    commit('setIsLoading', false)
                    return response
                })
                .catch(error => {
                    commit('setIsLoading', false)
                    return error.response.data.non_field_errors[0]
                })
        },
        logout({commit}) {
            commit('logOutUser')
        }
    }
})