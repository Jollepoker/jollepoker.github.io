<template>
    <div
        class="nepSchedule-nepPullUpDrawerWrapper"
        :class="{ 'is-open': isOpen }"
    >
        <div
            class="nepSchedule-nepPullUpDrawerHeaderWrapper"
            @click="isOpen = !isOpen"
        >
            <div class="nepSchedule-nepPullUpDrawerArrow">
                <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M6 15l6-6 6 6" />
                </svg>
            </div>
            <div class="nepSchedule-nepPullUpDrawerHeader">
                <img src="/assets/images/twitchemotes/30/nepuPog.webp" />
                <h3>NEPPIE DAKIMAKURA AVAILABLE NOW!!</h3>
            </div>
        </div>
        <div class="nepSchedule-nepPullUpDrawerBody">
            <a href="https://cuddlyoctopus.com/product/neppie-nep/" target="_blank">
                <img src="/assets/images/site/pullUpDrawer/daki.webp" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NepPullUpDrawer',
    data() {
        return {
            isOpen: false,
        }
    }
});
</script>
