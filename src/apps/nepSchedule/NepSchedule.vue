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
    <div v-if="streamsThisWeek.length" class="nepSchedule-scheduleWrapper">
        <NepStream
            v-for="stream in streamsThisWeek"
            :key="stream.time"
            :now="now"
            :streamData="stream"
        />
    </div>
    <NepNoStreams v-else :targetDate="targetDate" />
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
import NepNoStreams from '@/apps/nepSchedule/components/NepNoStreams.vue';
import { Dayjs } from 'dayjs';
import '@/apps/nepSchedule/assets/nepSchedule.css';

export default defineComponent({
    name: 'NepSchedule',
    components: {
        NepStream,
        NepWeekSwitcher,
        NepNoStreams,
    },
    data() {
        return {
            now: this.$dayjs(),
            targetDate: this.$dayjs(),
            liveDate: undefined,
            nepTimezone: 'Europe/London',
            streamsThisWeek: [],
            preLoadedAssets: new Map<string, HTMLImageElement>(),
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
        liveDate(newValue) {
            this.updateLiveStream(newValue);
        },
        targetDate(newValue, oldValue) {
            if (newValue.week() !== oldValue.week()) {
                this.loadStreamsForTargetDate();
            }
        },
        streamsThisWeek() {
            this.updateLiveStream(this.liveDate);
        },
    },
    beforeMount() {
        this.loadStreamsForTargetDate();
        setInterval(this.checkIfLive, 120000);
        setInterval(this.appTick, 1000);
        this.checkIfLive();
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
                        img.src = `assets/images/${layoutConfig.type === 'titleLogo' ? 'titleImages' : 'twitchemotes'}/${layoutConfig.image}`;
                        this.preLoadedAssets.set(layoutConfig.image, img);
                    }
                });
            });
        },
        async changeTargetDate(newDate: Dayjs): Promise<void> {
            this.targetDate = newDate;
        },
        async updateLiveStream(newLiveDate: Dayjs | undefined): Promise<void> {
            this.streamsThisWeek.map((stream) => {
                stream.liveDate = undefined;
                return stream;
            });

            if (
                this.$dayjs.isDayjs(newLiveDate) &&
                newLiveDate.week() === this.targetDate.week() &&
                newLiveDate.year() === this.targetDate.year()
            ) {
                // Find stream most likely being the live stream
                for (let i = this.streamsThisWeek.length - 1; i >= 0; i -= 1) {
                    const streamTime = this.$dayjs(this.streamsThisWeek[i].time);
                    if (
                        this.targetDate.isBetween(
                            streamTime.subtract(1, 'h'),
                            streamTime.add(24, 'h'),
                        ) &&
                        !this.streamsThisWeek[i].canceled
                    ) {
                        this.streamsThisWeek[i].liveDate = newLiveDate;
                        break;
                    }
                }
            }
        },
        async checkIfLive(): Promise<void> {
            const query = `query {
                user(login: "neppienep") {
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
                if (data.data.user.stream?.createdAt && !this.liveDate) {
                    this.liveDate = this.$dayjs(data.data.user.stream?.createdAt);
                } else if (!data.data.user.stream?.createdAt) {
                    this.liveDate = undefined;
                }
            } catch (error) {
                console.error('Error checking stream status: ', error);
            }
        },
        async appTick(): Promise<void> {
            this.now = this.$dayjs();
        },
    },
});
</script>
