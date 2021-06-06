import { createStore } from 'vuex'
import { State, AllLattices } from "./interfaces"
import api from "./api"

export default createStore({
    strict: process.env.NODE_ENV !== 'production',
    state(): State {
        return {
            allLattices: []
        }
    },
    mutations: {
        SET_INFO(state: State, info: AllLattices) {
            state.allLattices = info
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
            return state.allLattices
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
