import {
    createRouter,
    createWebHistory
} from 'vue-router'

import LandingPage from './views/LandingPage.vue'
import Summary from './views/Summary.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/elegant/:name',
            component: Summary
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