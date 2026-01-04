import { createWebHashHistory, createRouter } from 'vue-router';
import NepSchedule from '@/apps/nepSchedule/NepSchedule.vue';
import NepSweeper from '@/apps/nepSweeper/NepSweeper.vue';
import NepTwitch from '@/apps/nepTwitch/NepTwitch.vue';
import DiscordRedirect from '@/apps/discordRedirect/DiscordRedirect.vue';

const routes = [
    { path: '/', name: 'NepSchedule', component: NepSchedule },
    { path: '/nepsweeper', name: 'NepSweeper', component: NepSweeper },
    { path: '/twitch/:streamer?', name: 'NepTwitch', props: true, component: NepTwitch },
    { path: '/discord/:server?', name: 'DiscordRedirect', props: true, component: DiscordRedirect },
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
