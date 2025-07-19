<template>
    <ol v-if="scores" class="nepSweeper-leaderBoardList">
        <li v-for="(score, index) in scores" :key="index">{{ score.time }} | {{ score.date }}</li>
    </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { NepSweeperScoreObject } from '../interfaces/interfaces';

export default defineComponent({
    name: 'NepDifficultyScores',
    props: {
        difficulty: {
            type: String,
            required: true,
        },
    },
    computed: {
        scores(): NepSweeperScoreObject[] {
            return this.$cookies.get(this.difficulty);
        },
    },
});
</script>
