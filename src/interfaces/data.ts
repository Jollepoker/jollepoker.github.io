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
    effect?: string;
    filter?: string;
    alignSelf?: string;
    text?: string;
    image?: string;
    wide?: boolean;
    big?: boolean;
    reverse?: boolean;
}

export interface TitleLogoStyling {
    filter?: string;
    alignSelf?: string;
}
