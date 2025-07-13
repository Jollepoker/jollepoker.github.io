<template>
    <div class="nepSchedule-weekWrapper">
        <div class="nepSchedule-currentWeek">
            <span class="nepSchedule-streamMonth">{{ targetDate.startOf('w').format('MMM') }}</span>
            <span class="nepSchedule-streamDay">{{ targetDate.startOf('w').date() }}</span>
            <span class="nepSchedule-dateSeparator"> - </span>
            <span class="nepSchedule-streamMonth">{{ targetDate.endOf('w').format('MMM') }}</span>
            <span class="nepSchedule-streamDay">{{ targetDate.endOf('w').date() }}</span>
        </div>
        <NepWeekSwitcher :targetDate="targetDate" @changeTargetDate="changeTargetDate" />
    </div>
    <div class="nepSchedule-scheduleWrapper">
        <NepStream
            v-for="(stream, index) in streamsThisWeek"
            :key="index"
            :now="now"
            :streamData="stream"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { NepScheduleData, NepScheduleJsonData } from '@/apps/nepSchedule/interfaces/data';
import scheduleData from '@/apps/nepSchedule/data/schedule.json';
import NepStream from '@/apps/nepSchedule/components/NepStream.vue';
import NepWeekSwitcher from '@/apps/nepSchedule/components/NepWeekSwitcher.vue';
import { Dayjs } from 'dayjs';
import '@/apps/nepSchedule/assets/nepSchedule.css';

export default defineComponent({
    name: 'NepSchedule',
    components: {
        NepStream,
        NepWeekSwitcher,
    },
    data() {
        return {
            now: this.$dayjs(),
            targetDate: this.$dayjs(),
            liveDate: undefined,
            nepTimezone: 'Europe/London',
            streamsThisWeek: [],
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
                this.streamsThisWeek = this.getStreamsForTargetDate();
            }
        },
        streamsThisWeek() {
            this.updateLiveStream(this.liveDate);
        },
    },
    beforeMount() {
        this.streamsThisWeek = this.getStreamsForTargetDate();
        setInterval(this.checkIfLive, 120000);
        setInterval(this.appTick, 1000);
        this.checkIfLive();
    },
    methods: {
        getStreamsForTargetDate(): NepScheduleJsonData[] {
            return scheduleData.filter((stream) => {
                return this.$dayjs(stream.time)
                    .tz(this.nepTimezone)
                    .isBetween(
                        this.targetDate.tz(this.nepTimezone).startOf('w').add(2, 'h'),
                        this.targetDate.tz(this.nepTimezone).endOf('w').add(2, 'h'),
                    );
            });
        },
        changeTargetDate(newDate: Dayjs): void {
            this.targetDate = newDate;
        },
        updateLiveStream(newLiveDate: Dayjs | undefined): void {
            this.streamsThisWeek.map((stream) => {
                stream.liveDate = undefined;
                return stream;
            });

            if (this.$dayjs.isDayjs(newLiveDate) && newLiveDate.week() === this.targetDate.week()) {
                for (let i = this.streamsThisWeek.length - 1; i >= 0; i -= 1) {
                    if (newLiveDate.isAfter(this.streamsThisWeek[i].time)) {
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
                if (data.data.user.stream?.createdAt && this.liveDate) {
                    this.liveDate = this.$dayjs(data.data.user.stream?.createdAt);
                } else if (!data.data.user.stream?.createdAt) {
                    this.liveDate = undefined;
                }
            } catch (error) {
                console.error('Error checking stream status: ', error);
            }
        },
        appTick(): void {
            this.now = this.$dayjs();
        },
    },
});
</script>
