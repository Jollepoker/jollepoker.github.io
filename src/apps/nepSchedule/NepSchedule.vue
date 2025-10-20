<template>
    <div class="nepSchedule-weekWrapper">
        <div class="nepSchedule-currentWeek">
            <span class="nepSchedule-streamDate">{{
                targetDate.startOf('w').format('MMM DD')
            }}</span>
            <span class="nepSchedule-dateSeparator"> - </span>
            <span class="nepSchedule-streamDate">{{ targetDate.endOf('w').format('MMM DD') }}</span>
        </div>
        <NepWeekSwitcher :targetDate="targetDate" @changeTargetDate="changeTargetDate" />
    </div>
    <Transition
        leave-active-class="slit-transition-delay"
    >
        <TransitionGroup
            v-show="streamsThisWeek.length"
            class="nepSchedule-scheduleWrapper"
            tag="div"
            enter-active-class="slit-vertical-enter"
            leave-active-class="slit-vertical-leave"
        >
            <NepStream
                v-for="stream in streamsThisWeek"
                :key="stream.time"
                :now="now"
                :streamData="stream"
            />
        </TransitionGroup>
    </Transition>
    <Transition
        enter-active-class="fade-in"
        leave-active-class="fade-out"
    >
        <NepDisplay
            v-if="streamsThisWeek.length < 3"
            :targetDate="targetDate"
            :showWithStreams="streamsThisWeek.length > 0"
        />
    </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type {
    NepScheduleData,
    NepScheduleJsonLayoutData,
} from '@/apps/nepSchedule/interfaces/interfaces';
import scheduleData from '@/apps/nepSchedule/data/schedule.json';
import NepStream from '@/apps/nepSchedule/components/NepStream.vue';
import NepWeekSwitcher from '@/apps/nepSchedule/components/NepWeekSwitcher.vue';
import NepDisplay from '@/apps/nepSchedule/components/NepDisplay.vue';
import { Dayjs } from 'dayjs';
import '@/apps/nepSchedule/assets/nepSchedule.css';

export default defineComponent({
    name: 'NepSchedule',
    components: {
        NepStream,
        NepWeekSwitcher,
        NepDisplay,
    },
    data() {
        return {
            now: this.$dayjs(),
            targetDate: this.$dayjs(),
            liveDates: new Map<string, Dayjs>(),
            nepTimezone: 'Europe/London',
            streamsThisWeek: [],
            streamersThisWeek: [],
            preLoadedAssets: new Map<string, HTMLImageElement>(),
            appTickInterval: undefined,
            checkIfLiveInterval: undefined,
        } as NepScheduleData;
    },
    watch: {
        now(newValue) {
            if (
                newValue.week() === this.targetDate.week() &&
                newValue.year() === this.targetDate.year()
            ) {
                this.targetDate = newValue;
            }
        },
        liveDates: {
            handler() {
                this.updateLiveStream(this.liveDates);
            },
            deep: true,
        },
        targetDate(newValue, oldValue) {
            if (newValue.week() !== oldValue.week()) {
                this.loadStreamsForTargetDate();
            }
        },
        streamsThisWeek() {
            this.updateLiveStream(this.liveDates);
        },
    },
    beforeMount() {
        this.loadStreamsForTargetDate();
        this.checkIfLiveInterval = setInterval(this.checkIfLive, 120000);
        this.appTickInterval = setInterval(this.appTick, 1000);
        this.checkIfLive();
    },
    unmounted() {
        clearInterval(this.appTickInterval);
        clearInterval(this.checkIfLiveInterval);
    },
    methods: {
        async loadStreamsForTargetDate(): Promise<void> {
            const timeZonedDateStartOfWeek = this.targetDate
                .tz(this.nepTimezone)
                .startOf('w')
                .add(2, 'h');
            const timeZonedDateEndOfWeek = this.targetDate
                .tz(this.nepTimezone)
                .endOf('w')
                .add(2, 'h');
            this.streamsThisWeek = scheduleData.filter((stream) => {
                return this.$dayjs(stream.time).isBetween(
                    timeZonedDateStartOfWeek,
                    timeZonedDateEndOfWeek,
                );
            });
            if (this.now.week === this.targetDate.week && this.now.year === this.targetDate.year) {
                this.streamersThisWeek = [
                    ...new Set<string>(
                        this.streamsThisWeek
                            .map((stream) => stream.streamer)
                            .filter(Boolean) as string[],
                    ),
                ];
                this.streamersThisWeek.push('neppienep');
            } else {
                this.streamersThisWeek = [];
            }
            this.preLoadAssets();
        },
        async preLoadAssets(): Promise<void> {
            const timeZonedDateStartOfWeek = this.targetDate
                .tz(this.nepTimezone)
                .subtract(1, 'w')
                .startOf('w')
                .add(2, 'h');
            const timeZonedDateEndOfWeek = this.targetDate
                .tz(this.nepTimezone)
                .subtract(1, 'w')
                .endOf('w')
                .add(2, 'h');
            const streamsToPreload = scheduleData.filter((stream) => {
                return this.$dayjs(stream.time).isBetween(
                    timeZonedDateStartOfWeek,
                    timeZonedDateEndOfWeek,
                );
            });

            streamsToPreload.forEach((streamConfig) => {
                streamConfig.layout.forEach((layoutConfig: NepScheduleJsonLayoutData) => {
                    if (
                        ['lEmote', 'rEmote', 'titleLogo'].includes(layoutConfig.type) &&
                        layoutConfig.image !== undefined &&
                        !this.preLoadedAssets.has(layoutConfig.image)
                    ) {
                        const img = new Image();
                        img.src = `assets/images/${layoutConfig.type === 'titleLogo' ? 'titleimages' : 'twitchemotes'}/${layoutConfig.image}`;
                        this.preLoadedAssets.set(layoutConfig.image, img);
                    }
                });
            });
        },
        async changeTargetDate(newDate: Dayjs): Promise<void> {
            this.targetDate = newDate;
        },
        async updateLiveStream(newLiveDates: Map<string, Dayjs>): Promise<void> {
            this.streamsThisWeek.map((stream) => {
                stream.liveDate = undefined;
                return stream;
            });

            newLiveDates.forEach((liveDate, streamer) => {
                if (
                    liveDate.week() === this.targetDate.week() &&
                    liveDate.year() === this.targetDate.year()
                ) {
                    // Find stream most likely being the live stream
                    for (let i = this.streamsThisWeek.length - 1; i >= 0; i -= 1) {
                        if (
                            (streamer === 'neppienep' && !this.streamsThisWeek[i].streamer) ||
                            streamer === this.streamsThisWeek[i].streamer
                        ) {
                            const streamTime = this.$dayjs(this.streamsThisWeek[i].time);
                            if (
                                this.targetDate.isBetween(
                                    streamTime.subtract(1, 'h'),
                                    streamTime.add(24, 'h'),
                                ) &&
                                !this.streamsThisWeek[i].canceled
                            ) {
                                this.streamsThisWeek[i].liveDate = liveDate;
                                break;
                            }
                        }
                    }
                }
            });
        },
        async checkIfLive(): Promise<void> {
            this.streamersThisWeek.forEach(async (streamer) => {
                const query = `query {
                    user(login: "${streamer}") {
                        stream {
                            createdAt
                        }
                    }
                }`;

                try {
                    const response = await fetch('https://gql.twitch.tv/gql', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                        },
                        body: JSON.stringify({ query }),
                    });

                    const data = await response.json();
                    if (data.data.user.stream?.createdAt) {
                        this.liveDates.set(streamer, this.$dayjs(data.data.user.stream?.createdAt));
                    } else if (!data.data.user.stream?.createdAt) {
                        this.liveDates.delete(streamer);
                    }
                } catch (error) {
                    console.error('Error checking stream status: ', error);
                }
            });
        },
        async appTick(): Promise<void> {
            this.now = this.$dayjs();
        },
    },
});
</script>
