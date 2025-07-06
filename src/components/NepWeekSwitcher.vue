<template>
    <div class="nepSchedule-weekSwitcherWrapper">
        <span class="nepSchedule-weekSwitcherArrow" @click="minusOneWeek">&lt;</span>
        <span class="nepSchedule-weekSwitcherWeek">Week: {{ targetDate.week() }}</span>
        <span v-if="canPlusOneWeek" class="nepSchedule-weekSwitcherArrow" @click="plusOneWeek">
            &gt;
        </span>
        <span v-if="!isThisWeek" class="nepSchedule-weekSwitcherToday" @click="goToToday">
            Today
        </span>
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
            return !this.targetDate.add(1, 'week').isAfter(this.$dayjs());
        },
        isThisWeek(): boolean {
            return this.targetDate.week() === this.$dayjs().week();
        },
    },
    methods: {
        minusOneWeek(): void {
            this.$emit('changeTargetDate', this.targetDate.subtract(1, 'week'));
        },
        plusOneWeek(): void {
            if (this.targetDate.add(1, 'week').isBefore(this.$dayjs())) {
                this.$emit('changeTargetDate', this.targetDate.add(1, 'week'));
            }
        },
        goToToday(): void {
            this.$emit('changeTargetDate', this.$dayjs());
        },
    },
});
</script>
