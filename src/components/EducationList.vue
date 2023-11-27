<template>
  <div class="educationList__container">
    <div
      class="educationList__item"
      v-for="program in educationList"
      :key="program.title + program.dates"
    >
      <span>{{ program.start_date }} — {{ program.end_date }}</span>
      <span>{{ program.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  educationList: Array,
});
</script>

<style lang="scss" scoped>
.educationList__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .educationList__item {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 768px) {
  .educationList__container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .educationList__item {
      display: grid;
      grid-template-columns: 250px 1fr;
      row-gap: 28px;
    }
  }
}
</style>
