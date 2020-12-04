import {
    createRouter,
    createWebHistory
} from 'vue-router'

import LandingPage from './views/LandingPage.vue'
import SummaryElegant from './views/SummaryElegant.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/elegant/:name',
            component: SummaryElegant
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