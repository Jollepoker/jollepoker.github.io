<template>
    <fieldset class="nepSchedule-liveBox">
        <legend v-if="streamData.liveDate && !streamData.noLive" class="nepSchedule-live">LIVE</legend>
        <span class="nepSchedule-liveBoxContent">{{ boxText }}</span>
    </fieldset>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, type PropType } from 'vue';
import type { NepScheduleJsonData } from '@/apps/nepSchedule/interfaces/interfaces';

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
            let boxText = this.streamData.noLive ? 'LIVE?' : 'SOON';
            const streamTime = this.$dayjs(this.streamData.time);

            if (this.$dayjs.isDayjs(this.streamData.liveDate)) {
                boxText = this.$dayjs
                    .duration(this.now.diff(this.streamData.liveDate))
                    .format('HH:mm:ss');
            } else if (this.$dayjs().isBefore(streamTime)) {
                boxText = this.$dayjs.duration(streamTime.diff(this.now)).format('HH:mm:ss');
            }

            return boxText;
        },
    },
});
</script>
