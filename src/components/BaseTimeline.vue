<template>
    <div class="baseTree__Container">
      <work-history-item v-for="job in normalizedEvents" :key="job.title + job.dates" :experience="job" :padding="`${job.padding}px`"/>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, defineProps } from 'vue';
  import WorkHistoryItem from './resume/WorkHistoryItem.vue';
  
  const props = defineProps({
    events: {
        type: Object,
        required: true
    }
  })
  const normalizedEvents = ref(null)
  
  onMounted(() => {
    const maxStartDate = parseInt(props.events[0].start_date.replace('.', ''))
    const minStartDate = parseInt(props.events[props.events.length - 1].start_date.replace('.', ''))
    const normalizationRange = maxStartDate - minStartDate
  
    normalizedEvents.value = props.events.toReversed().map(event => {
      if (event.end_date == 'Present')
        return {
          ...event,
          padding: 0
        }
  
      const startDate = parseInt(event.start_date.replace('.', ''))
      const endDate = parseInt(event.end_date.replace('.', ''))
      return {
        ...event,
        padding: (endDate - startDate) / normalizationRange * 600
      }
    })
  })
  
  </script>
  
  <style lang="scss" scoped>
  .baseTree__Container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  @media only screen and (min-width: 768px) {
    .baseTree__Container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  </style>
  