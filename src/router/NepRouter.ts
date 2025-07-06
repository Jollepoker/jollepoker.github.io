import { createMemoryHistory, createRouter } from 'vue-router';
import NepSchedule from '@/apps/nepSchedule/NepSchedule.vue';

const routes = [{ path: '/', name: 'NepSchedule', component: NepSchedule }];

const router = createRouter({ history: createMemoryHistory(), routes });

export default router;
