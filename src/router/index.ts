// createWebHistory allows using HTML5 history API to do routing instead of page loads
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ChatView from "../views/ChatView.vue"

// define routes
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/chat',
        component: ChatView
    }
];

// export router object so main.ts can use it
export const router  = createRouter({
    history: createWebHistory(),
    routes,
})