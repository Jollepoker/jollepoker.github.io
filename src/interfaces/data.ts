import type { Dayjs } from 'dayjs';

export interface NepScheduleData {
    targetDate: Dayjs;
}

export interface NepStreamData {}

export interface NepWeekSwitcher {
    targetDate: Dayjs;
}

export interface NepScheduleJsonData {
    time: string;
    discord?: boolean;
    canceled?: boolean;
    hideDate?: boolean;
    glitter?: boolean;
    layout: NepScheduleJsonLayoutData[];
}

export interface NepScheduleJsonLayoutData {
    type: string;
    text?: string;
    image?: string;
    wide?: boolean;
    big?: boolean;
}
