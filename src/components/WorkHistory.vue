<script setup>
import GanttChart from '@/components/GanttChart.vue';

const employmentHistory = [
  {
    "startDate": "2024-08-26",
    "endDate": "Present",
    "title": "Business Development Supervisor",
    "organization": "Vincent Medical Manufacturing. Co., Ltd.",
    "location": "China"
  },
  {
    "startDate": "2023-10-23",
    "endDate": "2024-08-08",
    "title": "Sr Service Desk Analyst",
    "organization": "Government of British Columbia",
    "location": "Canada"
  },
  {
    "startDate": "2023-03-20",
    "endDate": "2023-05-18",
    "title": "Technical Support Engineer",
    "organization": "Shanghai Wicresoft Co., Ltd",
    "location": "Shanghai"
  },
  {
    "startDate": "2022-05-11",
    "endDate": "2023-01-06",
    "title": "Analyst Business Insights",
    "organization": "Evo Car Share",
    "location": "Canada"
  },
  {
    "startDate": "2021-11-29",
    "endDate": "2022-05-06",
    "title": "Junior Frontend Developer",
    "organization": "TrafficDriven Technologies Inc.",
    "location": "Canada"
  },
  {
    "startDate": "2020-01-28",
    "endDate": "2021-03-31",
    "title": "Software Developer",
    "organization": "FCOM Services Co., Ltd.",
    "location": "Canada"
  },
  {
    "startDate": "2015-04-02",
    "endDate": "2020-01-25",
    "title": "Member Service Agent",
    "organization": "Evo Car Share",
    "location": "Canada"
  }
]

</script>
<template>
  <div class="workHistory__container">
    <gantt-chart :events="employmentHistory.reverse()" />
  </div>
</template>

<style lang="scss" scoped></style>
