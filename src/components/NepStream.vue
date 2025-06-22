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
                <h4 v-if="element.type === 'title'" class="nepSchedule-streamTitle">
                    {{ getTitleText(element) }}
                </h4>
                <img
                    v-if="element.type === 'titleLogo'"
                    class="nepSchedule-streamTitleImage"
                    :src="getImageSrc('titleimages', element.image)"
                    :style="getTitleLogoStyle(element)"
                />
                <div
                    v-if="element.type === 'titleLogoText'"
                    class="nepSchedule-streamTitleImageText"
                >
                    <img
                        class="nepSchedule-streamTitleImageText-image"
                        :src="getImageSrc('titleimages', element.image)"
                    />
                    <h4 class="nepSchedule-streamTitleImageText-text">{{ element.text }}</h4>
                </div>
                <img
                    v-if="element.type in ['lEmote', 'rEmote']"
                    :class="{
                        'nepSchedule-emote-left': element.type === 'lEmote',
                        'nepSchedule-emote-right': element.type === 'rEmote',
                        'nepSchedule-wideEmote': element.wide,
                        'nepSchedule-bigEmote': element.big,
                        'nepSchedule-reverse': element.reverse,
                    }"
                    :src="getImageSrc('twitchemotes', element.image)"
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type {
    NepScheduleJsonData,
    NepScheduleJsonLayoutData,
    TitleLogoStyling,
} from '@/interfaces/data';

export default defineComponent({
    name: 'NepStream',
    props: {
        streamData: {
            type: {} as NepScheduleJsonData,
            required: true,
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
            return `../assets/images/${location}/${imageName}`;
        },
        getTitleLogoStyle(element: NepScheduleJsonLayoutData): TitleLogoStyling {
            const styling = {} as TitleLogoStyling;
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
