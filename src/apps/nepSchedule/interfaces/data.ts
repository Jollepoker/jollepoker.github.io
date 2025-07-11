import type { Dayjs } from 'dayjs';

export interface NepScheduleData {
    now: Dayjs;
    targetDate: Dayjs;
    liveDate?: Dayjs;
    streamsThisWeek: NepScheduleJsonData[];
}

export interface NepStreamData {
    streamUrl: string;
    titleLogoContent?: NepScheduleJsonLayoutData;
    titleContent?: NepScheduleJsonLayoutData;
    leftEmotes?: NepScheduleJsonLayoutData[];
    rightEmotes?: NepScheduleJsonLayoutData[];
    comments?: NepScheduleJsonLayoutData[];
    hoverContent?: NepScheduleJsonLayoutData;
}

export interface NepWeekSwitcher {
    targetDate: Dayjs;
}

export interface NepScheduleJsonData {
    time: string;
    liveDate?: Dayjs;
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
