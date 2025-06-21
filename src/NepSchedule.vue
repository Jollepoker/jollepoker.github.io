<template>
    <NepHeader />
    <main>
        <span class="nepSchedule-streamMonth">{{ targetDate.startOf('w').format('MMM').toLowerCase() }}</span>
        <span class="nepSchedule-streamDay">{{ targetDate.startOf('w').date() }}</span>
        <span class="nepSchedule-dateSeparator"> - </span>
        <span class="nepSchedule-streamMonth">{{ targetDate.endOf('w').format('MMM').toLowerCase() }}</span>
        <span class="nepSchedule-streamDay">{{ targetDate.endOf('w').date() }}</span>
        <div class="nepSchedule-scheduleWrapper">
            <NepWeekSwitcher
                :targetDate="targetDate"
                @changeTargetDate="changeTargetDate"
            />
            <NepStream
                v-for="stream in getStreamsForTargetDate()"
                :streamData="stream"
            />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { NepScheduleData, NepScheduleJsonData } from './interfaces/data';
import scheduleData from './data/schedule.json';
import NepHeader from './components/NepHeader.vue';
import NepStream from './components/NepStream.vue';
import NepWeekSwitcher from './components/NepWeekSwitcher.vue';
import type { Dayjs } from 'dayjs';

export default defineComponent({
    name: 'NepSchedule',
    components: {
        NepHeader,
        NepStream,
        NepWeekSwitcher,
    },
    data() {
        return {
            targetDate: this.$dayjs(),
        } as NepScheduleData
    },
    methods: {
        getStreamsForTargetDate(): NepScheduleJsonData[] {
            return scheduleData.filter(stream => {
                return this.targetDate.startOf('w').isBefore(stream.time) && this.targetDate.endOf('w').isAfter(stream.time);
            });
        },
        changeTargetDate(newDate: Dayjs): void {
            this.targetDate = newDate;
        }
    }
});
</script>