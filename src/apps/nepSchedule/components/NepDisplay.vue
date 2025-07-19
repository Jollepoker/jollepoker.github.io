<template>
    <div class="nepSchedule-nepDisplayWrapper" :class="{ withStreams: showWithStreams }">
        <div v-if="!showWithStreams" class="nepSchedule-noStreamsMessageWrapper">
            <span class="nepSchedule-noStreamsMessage">{{ noStreamsMessage }}</span>
        </div>
        <div class="nepSchedule-nepDisplayNep">
            <img :class="{ 'nepSchedule-leaving': isLeaving }" :src="nepImage" :key="nepImage" />
        </div>
        <div class="nepSchedule-nepDisplayTable"></div>
    </div>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
import type { NepDisplayData } from '@/apps/nepSchedule/interfaces/interfaces';

export default defineComponent({
    name: 'NepDisplay',
    props: {
        targetDate: {
            type: Dayjs,
            required: true,
        },
        showWithStreams: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            switchInterval: undefined,
            isLeaving: false,
            nepImage: undefined,
            preloadedImages: [],
        } as NepDisplayData;
    },
    computed: {
        noStreamsMessage(): string {
            return this.targetDate.week() === this.$dayjs().week() &&
                this.targetDate.year() === this.$dayjs().year()
                ? 'No schedule added for this week yet!'
                : 'No schedule was recorded for this week';
        },
    },
    beforeMount() {
        this.randomizeNepImg();
        this.preloadImages();
    },
    mounted() {
        this.switchInterval = setInterval(this.animateNep, 8000);
    },
    unmounted() {
        clearInterval(this.switchInterval);
    },
    methods: {
        async animateNep(): Promise<void> {
            this.isLeaving = true;
            setTimeout(() => {
                this.randomizeNepImg();
                setTimeout(() => {
                    this.isLeaving = false;
                }, 100);
            }, 1500);
        },
        async randomizeNepImg(): Promise<void> {
            let newImage = this.nepImage;
            while (newImage === this.nepImage) {
                newImage = `assets/images/site/nep${Math.floor(Math.random() * 9) + 1}.webp`;
            }
            this.nepImage = newImage;
        },
        async preloadImages(): Promise<void> {
            for (let i = 1; i < 10; i++) {
                const img = new Image();
                img.src = `assets/images/site/nep${i}.webp`;
                this.preloadedImages[i - 1] = img;
            }
        },
    },
});
</script>
