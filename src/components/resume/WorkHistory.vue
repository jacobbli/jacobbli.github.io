<template>
  <div class="workHistory__container">
    <div class="workHistory__item" v-for="job in employmentHistory" :key="job.title + job.dates">
      <span class="workHistory__dates">{{ job.start_date }} — {{ job.end_date }}</span>
      <span>{{ job.title }}</span>
    </div>
  </div>
</template>

<script setup>

const employmentHistory = [
  {
    "start_date": "2023.10",
    "end_date": "Present",
    "title": "Sr Service Desk Analyst",
    "company": "Government of British Columbia",
    "location": "Canada"
  },
  {
    "start_date": "2023.03",
    "end_date": "2023.05",
    "title": "Technical Support Engineer",
    "company": "Shanghai Wicresoft Co., Ltd",
    "location": "Shanghai"
  },
  {
    "start_date": "2022.05",
    "end_date": "2023.01",
    "title": "Analyst Business Insights",
    "company": "Evo Car Share",
    "location": "Canada"
  },
  {
    "start_date": "2021.11",
    "end_date": "2022.05",
    "title": "Junior Frontend Developer",
    "company": "TrafficDriven Technologies Inc.",
    "location": "Canada"
  },
  {
    "start_date": "2020.01",
    "end_date": "2021.03",
    "title": "Software Developer",
    "company": "FCOM Services Co., Ltd.",
    "location": "Canada"
  },
  {
    "start_date": "2015.04",
    "end_date": "2020.01",
    "title": "Member Service Agent",
    "company": "Evo Car Share",
    "location": "Canada"
  }
]

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
