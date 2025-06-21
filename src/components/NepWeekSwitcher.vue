<template>
    <span class="nepSchedule-weekSwitcherArrow" @click="minusOneWeek"><</span>
    <span class="nepSchedule-weekSwitcherWeek">Week: {{ targetDate.week() }}</span>
    <span class="nepSchedule-weekSwitcherArrow" @click="plusOneWeek">></span>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NepWeekSwitcher',
    emits: ['changeTargetDate'],
    props: {
        targetDate: {
            type: Dayjs,
            required: true,
        }
    },
    methods: {
        minusOneWeek() {
            this.$emit('changeTargetDate', this.targetDate.subtract(1, 'week'));
        },
        plusOneWeek() {
            this.$emit('changeTargetDate', this.targetDate.add(1, 'week'));
        },
    }
});
</script>