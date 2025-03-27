<script setup>
import BaseCard from './base/BaseCard.vue';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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

function getShortDate(date) {
  const thisDate = new Date(date)
  return `${MONTH_NAMES[thisDate.getMonth()]} ${thisDate.getFullYear()}`
}
</script>
<template>
  <div class="educationHistory__content">
    <base-card v-for="education in educationHistory" :key="education.degree" :has-image="true">
    <template #image>
      <img :src="education.image" />
    </template>
      <template #content>
        <h3>{{ education.degree }}</h3>
        <div class="educationHistory__details">
          <p>{{ education.school }}</p>
          <p>{{ getShortDate(education.startDate) }} - {{ getShortDate(education.endDate) }}</p>
        </div>
      </template>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
.educationHistory__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .educationHistory__details {
    font-size: 0.9rem;
    font-style: italic;
  }
}

img {
  width: 70%;
  object-fit: contain;
  object-position: top;
  border: 1px solid var(--primary-grey-80);
}
</style>
