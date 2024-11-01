import {createRouter, createWebHistory} from 'vue-router'
import InstituteView from '@/views/InstituteView.vue';
import PracticeView from '@/views/PracticeView.vue';
import UserView from '@/views/UserView'
import AuthView from '@/views/AuthView.vue'
import UpdateView from '@/views/UpdateView.vue'
import AdminView from '@/views/AdminView.vue'
import CompanyInfoView from "@/views/CompanyInfoView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: InstituteView
    }, {
        path: '/partner',
        name: 'partner',
        component: PracticeView
    },
    {
        path: '/auth',
        name: 'auth',
        component: UserView
    },
    {
        path: '/user',
        name: 'user',
        component: AuthView
    },
    {
        path: '/update',
        name: 'update',
        component: UpdateView
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminView
    },
    {
        path: "/company",
        name: "CompanyInfo",
        component: CompanyInfoView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     console.log(to.name);
//     console.log(from.name);
//     console.log(next.name);
//     const accessToken = localStorage.getItem('accessToken');
//     if (to.name !== 'auth' && from.name !== 'auth') {
//         if (!accessToken) {
//             return next({
//                 name: 'auth',
//             });
//         }
//     }
//     next();
// })
export default router
