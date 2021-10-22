import { createRouter, createWebHashHistory } from 'vue-router'
import Apple from '../pages/Apple.vue'
import Bacon from '../pages/Bacon.vue'


export const routes = [
    { path: '/', redirect: '/apple' },
    { path: '/apple', name: '1', component: Apple },
    { path: '/bacon', name: '2', component: Bacon },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
