<template>
  <div class="baseTimeline__Container">
    <div class="baseTimeline_content" v-for="(event, index) in events" :key="event.title + event.dates">
      <base-timeline-item :event="event" :is-first="index == 0" :is-last="index == events.length - 1" />

      <div v-if="index != events.length - 1" class="baseTimeline_gap"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseTimelineItem from './BaseTimelineItem.vue';

defineProps({
  events: {
    type: [],
    required: true
  }
})

</script>

<style lang="scss" scoped>
.baseTimeline__Container {
  display: flex;
  flex-direction: column;
}

.baseTimeline_gap {
  background-color: var(--primary-color);
  width: 4px;
  height: 20px;

  position: relative;
  left: 3px;
}
</style>