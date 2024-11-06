<template>
  <div class="educationList__container">
    <div class="educationList__item" v-for="program in educationHistory" :key="program.title + program.dates">
      <span>{{ program.start_date }} — {{ program.end_date }}</span>
      <span>{{ program.title }}</span>
    </div>
  </div>
</template>

<script setup>

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
