import '@/assets/main.css';

import { createApp } from 'vue';
import dayjs from 'dayjs';
import NepApp from '@/apps/NepApp.vue';
import router from '@/router/NepRouter';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import locale from 'dayjs/locale/en-gb';
import VueCookies from 'vue-cookies';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.locale(locale);

const app = createApp(NepApp).use(router).use(VueCookies, { expires: '399d', path: '/' });
app.config.globalProperties.$dayjs = dayjs;

declare module 'vue' {
    interface ComponentCustomProperties {
        $dayjs: typeof dayjs;
    }
}

app.mount('#nepApp');
