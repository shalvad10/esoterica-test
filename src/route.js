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