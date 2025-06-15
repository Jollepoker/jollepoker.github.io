import './assets/main.css'

import { createApp } from 'vue'
import NepSchedule from './NepSchedule.vue'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import locale from 'dayjs/locale/en-gb';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(locale);

const app = createApp(NepSchedule);
app.config.globalProperties.$dayjs = dayjs;

declare module 'vue' {
    interface ComponentCustomProperties {
        $dayjs: typeof dayjs
    }
}

app.mount('#nepSchedule');
