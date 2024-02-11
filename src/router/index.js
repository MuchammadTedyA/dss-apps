import { createRouter, createWebHistory } from "vue-router";
import Security from "@/assets/js/security";

import HomePage from '../views/HomePage.vue'
import ApisMenu from '../views/ApisMenu.vue'
import DocsMenu from '../views/DocsMenu.vue'
import LoginPage from '../views/LoginPage.vue'

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
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
]

const router = createRouter({history:createWebHistory(), routes})
router.beforeEach(() => {
    Security.checkToken();
})

export default router