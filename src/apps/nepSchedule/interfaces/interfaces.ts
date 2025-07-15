import type { Dayjs } from 'dayjs';

export interface NepScheduleData {
    now: Dayjs;
    targetDate: Dayjs;
    liveDate?: Dayjs;
    nepTimezone: string;
    streamsThisWeek: NepScheduleJsonData[];
    preLoadedAssets: HTMLImageElement[];
}

export interface NepStreamData {
    streamUrl: string;
    titleLogoContent?: NepScheduleJsonLayoutData[];
    titleContent?: NepScheduleJsonLayoutData[];
    leftEmotes?: NepScheduleJsonLayoutData[];
    rightEmotes?: NepScheduleJsonLayoutData[];
    comments?: NepScheduleJsonLayoutData[];
    hoverContent?: NepScheduleJsonLayoutData;
    streamTime?: string;
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

export interface NoStreamNepData {
    switchInterval?: number;
    isLeaving: boolean;
    nepImage?: string;
    preloadedImages: HTMLImageElement[];
}
