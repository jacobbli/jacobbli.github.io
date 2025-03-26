<script setup>
import { computed, ref } from 'vue';
import BaseSection from '@/components/base/BaseSection.vue'
import GanttChart from '@/components/GanttChart.vue';
import TheMap from './TheMap.vue';

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
    "endDate": "Present",
    "title": "Business Development Supervisor",
    "organization": "Vincent Medical Manufacturing. Co., Ltd.",
    "location": "China"
  },
]

const selectedJobIndices = ref([])
const selectedJobs = computed(() => {
  if (selectedJobIndices.value.length == 0) return employmentHistory
  return selectedJobIndices.value.map(index => employmentHistory[index])
})
const selectedJobLocation = computed(() => selectedJobs.value.reduce((acc, job) => {
  if (!(acc.includes(job.location.toLowerCase()))) acc.push(job.location.toLowerCase())
  return acc
}, [])
)


function selectJob(index) {
  if (index == undefined) {
    selectedJobIndices.value = []
  } else if (selectedJobIndices.value.length == 1 && selectedJobIndices.value[0] == index) {
    selectedJobIndices.value = []
  } else {
    selectedJobIndices.value = [index]
  }
  console.log(selectedJobIndices.value)
}

function selectJobLocation(location) {
  selectedJobIndices.value = employmentHistory.reduce((acc, job, index) => {
    if (job.location == location) acc.push(index)
    return acc
  }, [])
}
</script>
<template>
  <base-section title="Work History">
    <div class="workHistory__container">
      <div class="workHistory__ganttChart">
        <gantt-chart :events="employmentHistory" :on-click-bar="selectJob" :selected-rows="selectedJobIndices" />
      </div>
      <div class="workHistory__map">
        <the-map :highlighted-regions="selectedJobLocation" :on-click-feature="selectJobLocation" />
      </div>
    </div>
  </base-section>
</template>

<style lang="scss" scoped>
.workHistory__container {
  width: 100%;
  display: grid;
  gap: 2rem;
  grid:
    'gantt-chart'
    'map';
}

.workHistory__ganttChart {
  grid-area: gantt-chart
}

.workHistory__map {
  grid-area: map;
}

.workHistory__pieChart {
  grid-area: pie-chart
}
</style>
