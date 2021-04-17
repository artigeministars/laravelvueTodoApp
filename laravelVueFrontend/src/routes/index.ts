import {Router, createRouter, createWebHashHistory} from 'vue-router'
import {routes} from './route';

export const router : Router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})