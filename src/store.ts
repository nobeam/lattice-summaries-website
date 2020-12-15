import { createStore } from 'vuex'
import { State, Info } from "./interfaces"
import api from "./api"
import { stat } from 'fs'

export default createStore({
    strict: process.env.NODE_ENV !== 'production',
    state(): State {
        return {
            info: { lattices: [] }
        }
    },
    mutations: {
        SET_INFO(state: State, info: Info) {
            state.info = info
        }
    },
    actions: {
        async getInfo({ commit }) {
            const response = await api.getInfo()
            commit("SET_INFO", response.data)
        }
    },
    getters: {
        allLattices(state: State) {
            return state.info.lattices
        },
        allNamespaces(state: State, getters) {
            const allNamespaces = { all: { name: "all", lattices: getters.allLattices } };
            for (const lattice of getters.allLattices) {
                const namespace = allNamespaces[lattice.namespace]
                if (namespace === undefined) {
                    allNamespaces[lattice.namespace] = { name: lattice.namespace, lattices: [lattice] }
                } else {
                    namespace["lattices"].push(lattice)
                }
            }
            return allNamespaces
        },
        // TODO: allMachines
    }
})
