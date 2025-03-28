<script setup>
import EducationItem from './EducationItem.vue';

const educationHistory = [
  {
    "startDate": "2018-09-4",
    "endDate": "2021-09-13",
    "degree": "Bachelor of Science - Computer Science",
    "school": "Simon Fraser University",
    "location": "Canada",
    "image": "./assets/sfu-logo.svg",

  },
  {
    "startDate": "2011-09-06",
    "endDate": "2016-09-12",
    "degree": "Bachelor of Business Administration",
    "school": "Simon Fraser University",
    "location": "Canada",
    "image": "./assets/sfu-logo.svg",
  }
]

</script>
<template>
  <div class="educationHistory__content">
    <education-item v-for="education in educationHistory" :key="education.degree" :education="education" />
  </div>
</template>

<style lang="scss" scoped>
  .educationHistory__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>