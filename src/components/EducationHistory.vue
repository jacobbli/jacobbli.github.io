<script setup>
import GanttChart from '@/components/GanttChart.vue';
const educationHistory = [
  {
    "startDate": "2018-09-4",
    "endDate": "2021-09-13",
    "title": "Bachelor of Science - Computer Science",
    "organization": "Simon Fraser University",
    "location": "Canada",
  },
  {
    "startDate": "2011-09-06",
    "endDate": "2016-09-12",
    "title": "Bachelor of Business Administration",
    "organization": "Simon Fraser University",
    "location": "Canada",
  }
]
</script>
<template>
  <div class="educationList__container">
    <gantt-chart :events="educationHistory.reverse()" />
  </div>
</template>

