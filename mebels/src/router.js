import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import SkaphsAppVue from './views/SkaphsApp.vue';
import CabinetAppVue from './views/CabinetApp.vue';
import DefaultApp from './views/DefaultApp.vue';
import DetailCard from './components/card/DetailCard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: DefaultApp},
        {path: '/stelashe', component: SkaphsAppVue},
        {path: '/cabinets', component: CabinetAppVue},
        {path: '/cabinets/:pk', component: DetailCard, name: 'detail'}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
})
export default router

