<script setup>
import GanttChart from '@/components/GanttChart.vue';
const educationHistory = [
  {
    "startDate": "2018-09-4",
    "endDate": "2021-09-13",
    "degree": "Bachelor of Science - Computer Science",
    "school": "Simon Fraser University",
    "location": "Canada",
  },
  {
    "startDate": "2011-09-06",
    "endDate": "2016-09-12",
    "degree": "Bachelor of Business Administration",
    "school": "Simon Fraser University",
    "location": "Canada",
  }
]
</script>
<template>
  <div class="educationList__container">
    <gantt-chart :events="educationHistory.reverse()" />
  </div>
</template>

