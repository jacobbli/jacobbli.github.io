<template>
  <div class="workHistory__container">
    <base-timeline :events="employmentHistory" />
  </div>
</template>

<script setup>
import BaseTimeline from '../BaseTimeline.vue';


const employmentHistory = [
{
    "start_date": "2024.08",
    "end_date": "Present",
    "title": "Business Development Supervisor",
    "company": "Vincent Medical Manufacturing. Co., Ltd.",
    "location": "China"
  },
  {
    "start_date": "2023.10",
    "end_date": "2024.08",
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

</style>
