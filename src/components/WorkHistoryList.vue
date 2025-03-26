<script setup>
import BaseCard from './base/BaseCard.vue';
import BaseSection from './base/BaseSection.vue';
import { getShortDate } from '@/helper/date';

const employmentHistory = [
  {
    "startDate": "2015-04-02",
    "endDate": "2020-01-25",
    "title": "Member Service Agent",
    "organization": "Evo Car Share",
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
    "startDate": "2021-11-29",
    "endDate": "2022-05-06",
    "title": "Junior Frontend Developer",
    "organization": "TrafficDriven Technologies Inc.",
    "location": "Canada"
  },
  {
    "startDate": "2022-05-11",
    "endDate": "2023-01-06",
    "title": "Analyst Business Insights",
    "organization": "Evo Car Share",
    "location": "Canada"
  },
  {
    "startDate": "2023-03-20",
    "endDate": "2023-05-18",
    "title": "Technical Support Engineer",
    "organization": "Shanghai Wicresoft Co., Ltd",
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
    "startDate": "2024-08-26",
    "endDate": "2025-05-26",
    "title": "Business Development Supervisor",
    "organization": "Vincent Medical Manufacturing. Co., Ltd.",
    "location": "China"
  },
]


</script>
<template>
  <base-section title="Work History">
    <div class="workHistory__content">
      <base-card v-for="job in employmentHistory" :key="job.startDate">
        <template #content>
          <h3>{{ job.title }}</h3>
          <div class="workHistory__details">
            <p>{{ job.organization }}</p>
            <p>{{ getShortDate(job.startDate) }} - {{ getShortDate(job.endDate) }}</p>
          </div>
        </template>
      </base-card>
    </div>
  </base-section>
</template>

<style lang="scss" scoped>
.workHistory__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .workHistory__details {
    font-size: 0.9rem;
    font-style: italic;
  }
}
</style>
