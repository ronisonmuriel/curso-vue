import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        quantidade: 2,
        preco: 19.99
    },
    mutations: {
        setQauntidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco  = payload
        }
    }
}