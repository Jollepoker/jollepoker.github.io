<template>
    <div class="nepSchedule-weekSwitcherWrapper">
        <span class="nepSchedule-weekSwitcherArrow" @click="minusOneWeek">&lt;</span>
        <span class="nepSchedule-weekSwitcherWeek"
            >Week: {{ targetDate.week() }}, {{ targetDate.endOf('w').year() }}</span
        >
        <span
            class="nepSchedule-weekSwitcherArrow"
            :style="{ visibility: isThisWeek ? 'hidden' : 'visible' }"
            @click="plusOneWeek"
        >
            &gt;
        </span>
    </div>
    <div class="nepSchedule-weekSwitcherTodayWrapper">
        <span
            class="nepSchedule-weekSwitcherToday"
            :style="{ visibility: isThisWeek ? 'hidden' : 'visible' }"
            @click="goToToday"
            >Today</span
        >
    </div>
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
        },
    },
    computed: {
        canPlusOneWeek(): boolean {
            return this.targetDate.add(1, 'week').isBefore(this.$dayjs());
        },
        isThisWeek(): boolean {
            return (
                this.targetDate.week() === this.$dayjs().week() &&
                this.targetDate.year() === this.$dayjs().year()
            );
        },
    },
    methods: {
        async minusOneWeek(): Promise<void> {
            this.$emit('changeTargetDate', this.targetDate.subtract(1, 'week'));
        },
        async plusOneWeek(): Promise<void> {
            if (this.targetDate.add(1, 'week').isBefore(this.$dayjs())) {
                this.$emit('changeTargetDate', this.targetDate.add(1, 'week'));
            }
        },
        async goToToday(): Promise<void> {
            this.$emit('changeTargetDate', this.$dayjs());
        },
    },
});
</script>
