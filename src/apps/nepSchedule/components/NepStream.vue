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
            <template v-for="(element, index) in streamData.layout" :key="index">
                <h4
                    v-if="element.type === 'title'"
                    class="nepSchedule-streamTitle"
                    v-html="getTitleText(element)"
                ></h4>
                <img
                    v-if="element.type === 'titleLogo'"
                    class="nepSchedule-streamTitleImage"
                    :src="getImageSrc('titleimages', element.image ?? '')"
                    :style="getTitleLogoStyle(element)"
                />
                <div
                    v-if="element.type === 'titleLogoText'"
                    class="nepSchedule-streamTitleImageText"
                >
                    <img
                        class="nepSchedule-streamTitleImageText-image"
                        :src="getImageSrc('titleimages', element.image ?? '')"
                    />
                    <h4 class="nepSchedule-streamTitleImageText-text">{{ element.text }}</h4>
                </div>
                <img
                    v-if="['lEmote', 'rEmote'].includes(element.type)"
                    :class="{
                        'nepSchedule-emote-left': element.type === 'lEmote',
                        'nepSchedule-emote-right': element.type === 'rEmote',
                        'nepSchedule-wideEmote': element.wide,
                        'nepSchedule-bigEmote': element.big,
                        'nepSchedule-reverse': element.reverse,
                    }"
                    :src="getImageSrc('twitchemotes', element.image ?? '')"
                />
                <div
                    v-if="element.type === 'comment'"
                    class="nepSchedule-streamComment"
                    v-html="element.text"
                ></div>
                <div
                    v-if="element.type === 'hover'"
                    class="nepSchedule-streamHover"
                    v-html="element.text"
                ></div>
            </template>
            <div v-if="!streamData.hideDate" class="nepSchedule-streamTime">
                {{ streamTime }}
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
        } as NepStreamData;
    },
    computed: {
        streamTime(): string {
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
    },
});
</script>
