<template>
    <header>
        <span class="nepSchedule-streamMonth">{{ targetDate.startOf('w').format('MMM').toLowerCase() }}</span>
        <span class="nepSchedule-streamDay">{{ targetDate.startOf('w').date() }}</span>
        <span class="nepSchedule-dateSeparator"> - </span>
        <span class="nepSchedule-streamMonth">{{ targetDate.endOf('w').format('MMM').toLowerCase() }}</span>
        <span class="nepSchedule-streamDay">{{ targetDate.endOf('w').date() }}</span>
    </header>
    <main>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { NepScheduleData } from './interfaces/data';

export default defineComponent({
    name: 'NepSchedule',
    data() {
        return {
            todaysDate: this.$dayjs(),
            targetDate: this.$dayjs(),
        } as NepScheduleData
    },
});
</script>