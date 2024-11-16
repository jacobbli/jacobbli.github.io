<template>
  <div class="educationList__container">
    <base-timeline :events="educationHistory" />
  </div>
</template>

<script setup>
import BaseTimeline from '../BaseTimeline.vue';
const educationHistory = [
  {
    "start_date": "2018.09",
    "end_date": "2021.09",
    "title": "Bachelor of Science - Computer Science",
    "school": "Simon Fraser University",
    "location": "Canada",
  },
  {
    "start_date": "2011.09",
    "end_date": "2016.09",
    "title": "Bachelor of Business Administration",
    "school": "Simon Fraser University",
    "location": "Canada",
  }
]
</script>

<style lang="scss" scoped>

</style>
