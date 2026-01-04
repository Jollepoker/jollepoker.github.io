<template>
    <div
        class="nepSchedule-streamWrapper"
        :class="{
            'nepSchedule-streamWrapper-glitter': streamData.glitter,
            'nepSchedule-streamWrapper-canceled': streamData.canceled,
        }"
    >
        <div
            class="nepSchedule-stream"
            :class="{
                'nepSchedule-live': streamData.liveDate,
                'nepSchedule-canceled': streamData.canceled,
            }"
        >
            <div class="nepSchedule-streamHeaderWrapper">
                <h3 class="nepSchedule-streamDay">{{ getStreamDay() }}</h3>
                <img v-if="streamData.discord" src="/assets/images/site/discordlogo.webp" />
                <img v-else-if="streamData.discordKb" src="/assets/images/site/discordlogokatabasis.webp" />
                <NepStreamCountdown
                    v-else-if="
                        (soonLive || streamData.liveDate) &&
                        ((streamData.liveDate && streamData.hideDate) || !streamData.hideDate) &&
                        !streamData.canceled
                    "
                    :now="now"
                    :streamData="streamData"
                />
                <div v-if="streamTime" class="nepSchedule-streamTime">
                    {{ streamTime }}
                </div>
            </div>
            <div
                class="nepSchedule-streamContentWrapper"
                :class="{ 'nepSchedule-canceled': streamData.canceled }"
            >
                <div class="nepSchedule-streamContentHeader">
                    <template v-for="titleLogo in titleLogoContent" :key="titleLogo.image">
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
                    <template v-for="emote in leftEmotes" :key="emote.image">
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
                    <template v-for="emote in rightEmotes" :key="emote.image">
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
            <RouterLink
                v-if="
                    (soonLive || streamData.liveDate) &&
                    !streamData.discord &&
                    !streamData.discordKb &&
                    !streamData.canceled &&
                    !streamData.noLink
                "
                :to="`/twitch/${streamData.streamer ? streamData.streamer : 'neppienep'}`"
            ></RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, type CSSProperties, type PropType } from 'vue';
import NepStreamCountdown from '@/apps/nepSchedule/components/NepStreamCountdown.vue';
import type {
    NepScheduleJsonData,
    NepScheduleJsonLayoutData,
    NepStreamData,
} from '@/apps/nepSchedule/interfaces/interfaces';
// Find a way to add youtube support
export default defineComponent({
    name: 'NepStream',
    components: {
        NepStreamCountdown,
    },
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
            titleLogoContent: undefined,
            titleContent: undefined,
            leftEmotes: undefined,
            rightEmotes: undefined,
            comments: undefined,
            hoverContent: undefined,
            streamTime: undefined,
        } as NepStreamData;
    },
    computed: {
        soonLive(): boolean {
            if (this.streamData.hideDate || this.streamData.liveDate) {
                return false;
            }

            const streamTime = this.$dayjs(this.streamData.time);

            return this.now.isBetween(streamTime.subtract(1, 'd'), streamTime.add(1, 'h'));
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
        async loadContent(): Promise<void> {
            this.titleLogoContent = this.streamData.layout.filter(
                ({ type }) => type === 'titleLogo',
            );
            this.titleContent = this.streamData.layout.filter(({ type }) => type === 'title');
            this.leftEmotes = this.streamData.layout.filter(({ type }) => type === 'lEmote');
            this.rightEmotes = this.streamData.layout.filter(({ type }) => type === 'rEmote');
            this.comments = this.streamData.layout.filter(({ type }) => type === 'comment');
            this.hoverContent = this.streamData.layout.find(({ type }) => type === 'hover');
            this.streamTime = this.streamData.hideDate
                ? undefined
                : this.$dayjs(this.streamData.time).format('HH:mm');
        },
        getStreamDay(): string {
            return this.$dayjs(this.streamData.time).format('ddd');
        },
    },
});
</script>
