<template>
    <RouterLink class="nepTwitch-backToSchedule" to="/">Back to schedule</RouterLink>
    <div id="nepTwitch-embed"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/apps/nepTwitch/assets/nepTwitch.css';
import { useScriptTag } from '@vueuse/core';
import { TwitchEmbed } from '@anivire/twitch-embed-ts';
export default defineComponent({
    name: 'NepTwitch',
    props: {
        streamer: {
            type: String,
            required: false,
            default: 'neppienep',
        },
    },
    setup(props) {
        const streamer = !props.streamer || props.streamer === '' ? 'neppienep' : props.streamer;
        useScriptTag('https://embed.twitch.tv/embed/v1.js', () => {
            new TwitchEmbed('nepTwitch-embed', {
                width: '100%',
                height: '100%',
                channel: streamer,
            });
        });
    },
});
</script>
