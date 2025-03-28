<script setup>
import { defineProps } from 'vue';
import { getShortDate } from '@/helper/date';

defineProps({
  job: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="workHistoryListItem__container">
    <!-- <div class="workHistoryListItem__top"> -->

    <div class="workHistoryListItem__title">
      <h3>{{ job.title }}</h3>
    </div>
    <!-- </div> -->
    <div class="workHistoryListItem__details">
      <p>{{ job.organization }}</p>
      <div class="workHistoryListItem__date">
        <p>{{ getShortDate(job.startDate) }} - {{ getShortDate(job.endDate) }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.workHistoryListItem__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 1.5rem;
}

.workHistoryListItem__details {
  font-size: 0.9rem;
  font-style: italic;

}
</style>
