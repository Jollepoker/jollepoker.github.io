import { createWebHistory, createRouter } from 'vue-router';
import NepSchedule from '@/apps/nepSchedule/NepSchedule.vue';
import NepSweeper from '@/apps/nepSweeper/NepSweeper.vue';

const routes = [
    { path: '/', name: 'NepSchedule', component: NepSchedule },
    { path: '/nepsweeper', name: 'NepSweeper', component: NepSweeper },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
