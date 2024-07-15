import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import SkaphsAppVue from './components/pages/SkaphsApp.vue';
import CabinetAppVue from './components/pages/CabinetApp.vue';
import DefaultApp from './components/pages/DefaultApp.vue';
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
    linkExactActiveClass: 'active',
})
export default router

