import { createRouter, createWebHistory } from 'vue-router';
import GameGrid from './components/GameGrid.vue'
import Registration from './components/Registration.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: GameGrid,
  },
  {
    path: '/slots',
    name: 'Slots',
    component: GameGrid,
  },
  {
    path: '/games',
    name: 'Games',
    component: null,
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: null,
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: null,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: null,
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;