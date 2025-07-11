<template>
    <div
        class="nepSchedule-streamWrapper"
        :class="{
            'nepSchedule-streamWrapper-discord': streamData.discord,
            'nepSchedule-streamWrapper-glitter': streamData.glitter,
            'nepSchedule-streamWrapper-canceled': streamData.canceled,
        }"
    >
        <div class="nepSchedule-stream">
            <div class="nepSchedule-streamHeaderWrapper">
                <h3 class="nepSchedule-streamDay">{{ streamDay }}</h3>
                <div class="nepSchedule-streamTime">
                    {{ streamTime }}
                </div>
            </div>
            <div class="nepSchedule-streamContentWrapper">
                <div class="nepSchedule-streamContentHeader">
                    <template v-for="(titleLogo, index) in titleLogoContent" :key="index">
                        <img
                            class="nepSchedule-streamTitleImage"
                            :src="getImageSrc('titleimages', titleLogo.image ?? '')"
                            :style="getTitleLogoStyle(titleLogo)"
                        />
                    </template>
                    <template v-for="(title, index) in titleContent" :key="index">
                        <h4
                            v-if="title"
                            class="nepSchedule-streamTitle"
                            v-html="getTitleText(title)"
                        ></h4>
                    </template>
                </div>
                <div class="nepSchedule-streamContentSection">
                    <template v-for="(emote, index) in leftEmotes" :key="index">
                        <img
                            class="nepSchedule-emote-left"
                            :class="{
                                'nepSchedule-wideEmote': emote.wide,
                                'nepSchedule-bigEmote': emote.big,
                                'nepSchedule-reverse': emote.reverse,
                            }"
                            :src="getImageSrc('twitchemotes', emote.image ?? '')"
                        />
                    </template>
                    <template v-for="(comment, index) in comments" :key="index">
                        <div class="nepSchedule-streamComment" v-html="comment.text"></div>
                    </template>
                    <template v-for="(emote, index) in rightEmotes" :key="index">
                        <img
                            class="nepSchedule-emote-right"
                            :class="{
                                'nepSchedule-wideEmote': emote.wide,
                                'nepSchedule-bigEmote': emote.big,
                                'nepSchedule-reverse': emote.reverse,
                            }"
                            :src="getImageSrc('twitchemotes', emote.image ?? '')"
                        />
                    </template>
                </div>
                <div
                    v-if="hoverContent"
                    class="nepSchedule-streamHover"
                    v-html="hoverContent.text"
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, type CSSProperties, type PropType } from 'vue';
import type {
    NepScheduleJsonData,
    NepScheduleJsonLayoutData,
    NepStreamData,
} from '@/apps/nepSchedule/interfaces/data';

export default defineComponent({
    name: 'NepStream',
    props: {
        now: {
            type: Dayjs,
            required: true,
        },
        streamData: {
            type: {} as PropType<NepScheduleJsonData>,
            required: true,
        },
    },
    data() {
        return {
            streamUrl: 'https://twitch.tv/neppienep',
            titleLogoContent: undefined,
            titleContent: undefined,
            leftEmotes: undefined,
            rightEmotes: undefined,
            comments: undefined,
            hoverContent: undefined,
        } as NepStreamData;
    },
    computed: {
        streamTime(): string {
            if (this.streamData.hideDate) {
                return '';
            }
            let timeString = '';
            const streamTime = this.$dayjs(this.streamData.time);

            if (this.streamData.canceled) {
                timeString = streamTime.format('HH:mm');
            } else if (this.$dayjs.isDayjs(this.streamData.liveDate)) {
                timeString = `<a href=${this.streamUrl}>${this.$dayjs.duration(this.streamData.liveDate.diff(this.now)).format('HH:mm:ss')}</a>`;
            } else if (Math.abs(streamTime.diff(this.now, 'd')) > 0) {
                timeString = streamTime.format('HH:mm');
            } else if (this.now.isBefore(streamTime)) {
                timeString = `${this.$dayjs.duration(streamTime.diff(this.now)).format('HH:mm:ss')} (${streamTime.format('HH:mm')})`;
            } else if (this.now.isAfter(streamTime) && this.now.isBefore(streamTime.add(1, 'h'))) {
                timeString = `<a href=${this.streamUrl}>[any minute now...]</a>`;
            } else {
                timeString = streamTime.format('HH:mm');
            }

            return timeString;
        },
        streamDay(): string {
            return this.$dayjs(this.streamData.time).format('ddd');
        },
    },
    beforeMount() {
        this.loadContent();
    },
    methods: {
        getTitleText(element: NepScheduleJsonLayoutData): string {
            let output = '';
            if (element.effect) {
                const characters = element.text?.split('');
                characters?.forEach((letter) => {
                    if (letter !== ' ') {
                        output += '<span class="' + element.effect + '">' + letter + '</span>';
                    }
                });
            }
            return (output || element.text) ?? '';
        },
        getImageSrc(location: string, imageName: string): string {
            return `/assets/images/${location}/${imageName}`;
        },
        getTitleLogoStyle(element: NepScheduleJsonLayoutData): CSSProperties {
            const styling = {} as CSSProperties;
            if (element.filter) {
                styling.filter = element.filter;
            }
            if (element.alignSelf) {
                styling.alignSelf = element.alignSelf;
            }
            return styling;
        },
        loadContent() {
            this.titleLogoContent = this.streamData.layout.filter(
                ({ type }) => type === 'titleLogo',
            );
            this.titleContent = this.streamData.layout.filter(({ type }) => type === 'title');
            this.leftEmotes = this.streamData.layout.filter(({ type }) => type === 'lEmote');
            this.rightEmotes = this.streamData.layout.filter(({ type }) => type === 'rEmote');
            this.comments = this.streamData.layout.filter(({ type }) => type === 'comment');
            this.hoverContent = this.streamData.layout.find(({ type }) => type === 'hover');
        },
    },
});
</script>
