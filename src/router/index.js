import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import ApisMenu from '../views/ApisMenu.vue'
import DocsMenu from '../views/DocsMenu.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/apis',
        name: 'Apis',
        component: ApisMenu,
    },
    {
        path: '/docs',
        name: 'Docs',
        component: DocsMenu,
    },
]

const router = createRouter({history:createWebHistory(), routes})
router.beforeEach(() => {
    // to and from are both route objects. must call `next`.
})

export default router