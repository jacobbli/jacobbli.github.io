<script setup>
import { defineProps } from 'vue';
import { getShortDate } from '@/helper/date';

defineProps({
  education: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="educationItem__container">
    <img :src="education.image" />
    <div class="educationItem__content">
      <h3>{{ education.degree }}</h3>
      <div class="educationItem__details">
        <p>{{ education.school }}</p>
        <p>{{ getShortDate(education.startDate) }} - {{ getShortDate(education.endDate) }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.educationItem__container {
  display: grid;
  grid-template-columns: 10% 1fr;
  gap: 1.5rem;

  img {
    border: 1px solid var(--primary-grey-80);
  }

  .educationItem__content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .educationItem__details {
      font-size: 0.9rem;
      font-style: italic;
    }
  }
}
</style>
