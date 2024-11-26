<template>
  <div class="baseTimeline__container">
    <div v-for="(event, index) in events" :key="event.title + event.dates">
      <base-timeline-item :event="event" :is-first="index == 0" :is-last="index == events.length - 1" />

      <div v-if="index != events.length - 1" class="baseTimeline__gap">
        <div></div>
        <div class="baseTimeline__gapDecoration"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseTimelineItem from './BaseTimelineItem.vue';

defineProps({
  events: {
    type: Array,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.baseTimeline__gap {
  display: grid;
  grid-template-columns: 45% auto 45%;
  column-gap: 12px;
}

.baseTimeline__gapDecoration {
  background-color: var(--primary-color);
  width: 4px;
  height: 32px;

  position: relative;
  left: 3px;
}
</style>