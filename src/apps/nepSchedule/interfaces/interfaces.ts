import type { Dayjs } from 'dayjs';
import type { Ref } from 'vue';

export interface NepScheduleData {
    now: Dayjs;
    targetDate: Dayjs;
    liveDates: Map<string, Dayjs>;
    nepTimezone: string;
    streamsThisWeek: NepScheduleJsonData[];
    streamersThisWeek: string[];
    preLoadedAssets: Map<string, HTMLImageElement>;
    appTickInterval?: number;
    checkIfLiveInterval?: number;
    windowWidth: Ref;
    windowHeight: Ref;
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
    discordKb?: boolean;
    canceled?: boolean;
    hideDate?: boolean;
    glitter?: boolean;
    streamer?: string;
    noLink?: boolean;
    noLive?: boolean;
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

export interface NepDisplayData {
    switchInterval?: number;
    isLeaving: boolean;
    nepImage?: string;
    preloadedImages: HTMLImageElement[];
}
