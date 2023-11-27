<template>
  <div class="workHistory__container">
    <div
      class="workHistory__item"
      v-for="job in workHistory"
      :key="job.title + job.dates"
    >
      <span class="workHistory__dates"
        >{{ job.start_date }} — {{ job.end_date }}</span
      >
      <span>{{ job.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  workHistory: Array,
});
</script>

<style lang="scss" scoped>
.workHistory__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .workHistory__item {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 768px) {
  .workHistory__container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .workHistory__item {
      display: grid;
      grid-template-columns: 250px 1fr;
      row-gap: 28px;
    }
  }
}
</style>
