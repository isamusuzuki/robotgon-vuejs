import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../pages/First.vue'
import Second from '../pages/Second.vue'

export const routes = [
    { path: '/', redirect: '/first'},
    { path: '/first', component: First },
    { path: '/second', component: Second },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
