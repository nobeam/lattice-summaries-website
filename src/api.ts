import axios from 'axios'
import { Lattice } from './interfaces'

const apiBase = axios.create({ baseURL: import.meta.env.VITE_DATA_URL });

export default {
    async getInfo() {
        return apiBase.get(`/index.json`)
    },
    async getLatticeInfo(lattice: Lattice) {
        return apiBase.get(`/${lattice.namespace}/${lattice.name}/info.json`)
    },
    async getSimulationResults(lattice: Lattice, simulation: string) {
        return apiBase.get(`/${lattice.namespace}/${lattice.name}/{this.simulation}/twiss_tables.json`)
    },
}
