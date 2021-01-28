import {
    createRouter,
    createWebHistory
} from 'vue-router'

import LandingPage from './views/LandingPage.vue'
import Summary from './views/Summary.vue'
import Search from './views/Search.vue'
import Lattice from './views/Lattice.vue'

export default createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            name: "root",
            path: '/',
            component: Search
        },
        {
            name: "search",
            path: '/:namespace',
            component: Search
        },
        {
            name: "lattice",
            path: '/:namespace/:name',
            component: Lattice
        },
        {
            name: "summary",
            path: '/:namespace/:name/:simulation',
            component: Summary
        },
        {
            name: "home",
            path: '/home',
            component: LandingPage
        },

    ],
    scrollBehavior(to) {
        if (to.hash) {
            // TODO: workaround
            const element = document.getElementById(to.hash.replace(/#/, ''))
            if (element != null) {
                element.scrollIntoView({ behavior: 'smooth' })
            }

            //NOTE: This doesn't work 
            // (see https://stackoverflow.com/a/64654535/10577354)
            return { selector: to.hash, behavior: "smooth" }
        } else {
            return { x: 0, y: 0 }
        }
    }
});