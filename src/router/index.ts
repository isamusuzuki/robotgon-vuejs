import { createRouter, createWebHashHistory } from 'vue-router'
import First from '../pages/First.vue'
import Fourth from '../pages/Fourth.vue'
import Second from '../pages/Second.vue'
import Third from '../pages/Third.vue'

export const routes = [
    { path: '/', redirect: '/first' },
    { path: '/first', name: '1', component: First },
    { path: '/second', name: '2', component: Second },
    { path: '/third', name: '3', component: Third },
    { path: '/fourth', name: '4', component: Fourth },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
