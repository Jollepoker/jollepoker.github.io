<template>
    <div class="nepSchedule-liveBox">{{ boxText }}</div>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, type PropType } from 'vue';
import type { NepScheduleJsonData } from '@/apps/nepSchedule/interfaces/data';

export default defineComponent({
    name: 'NepStreamCountdown',
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
    computed: {
        boxText(): string {
            let boxText = 'SOON';
            const streamTime = this.$dayjs(this.streamData.time);

            if (this.$dayjs.isDayjs(this.streamData.liveDate)) {
                boxText = this.$dayjs
                    .duration(this.streamData.liveDate.diff(this.now))
                    .format('HH:mm:ss');
            } else if (this.$dayjs().isBefore(streamTime)) {
                boxText = this.$dayjs.duration(streamTime.diff(this.now)).format('HH:mm:ss');
            }

            return boxText;
        },
    },
});
</script>
