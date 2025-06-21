<template>
    <div class="nepSchedule-WeekSwitcherWrapper">
        <span class="nepSchedule-weekSwitcherArrow" @click="minusOneWeek"><</span>
        <span class="nepSchedule-weekSwitcherWeek">Week: {{ targetDate.week() }}</span>
        <span
            class="nepSchedule-weekSwitcherArrow"
            :class="{ 'nepSchedule-weekSwitcherArrow-disabled': canPlusOneWeek }"
            @click="plusOneWeek"
        >
            >
        </span>
    </div>
</template>

<script lang="ts">
import dayjs, { Dayjs } from 'dayjs';
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
    computed: {
        canPlusOneWeek(): boolean {
            return this.targetDate.add(1, 'week').isAfter(dayjs());
        }
    },
    methods: {
        minusOneWeek(): void {
            this.$emit('changeTargetDate', this.targetDate.subtract(1, 'week'));
        },
        plusOneWeek(): void {
            if (this.targetDate.add(1, 'week').isBefore(dayjs())) {
                this.$emit('changeTargetDate', this.targetDate.add(1, 'week'));
            }
        },
    }
});
</script>