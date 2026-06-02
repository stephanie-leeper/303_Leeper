import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PurchaseHistory from '../views/PurchaseHistory.vue';
import GiftCards from '../views/GiftCards.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/history', name: 'PurchaseHistory', component: PurchaseHistory },
  { path: '/gift-cards', name: 'GiftCards', component: GiftCards },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
