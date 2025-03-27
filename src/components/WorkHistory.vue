<script setup>
import { computed, onMounted, ref } from 'vue';
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

const selectableJobLocations = computed(() =>
  employmentHistory.reduce((acc, job) => {
    if (!(acc.includes(job.location.toLowerCase()))) acc.push(job.location.toLowerCase())
    return acc
  }, [])
)


function selectJob(index) {
  if (index == undefined) {
    selectedJobIndices.value = [...Array(employmentHistory.length).keys()];
  } else if (selectedJobIndices.value.length == 1 && selectedJobIndices.value[0] == index) {
    selectedJobIndices.value = [...Array(employmentHistory.length).keys()];
  } else {
    selectedJobIndices.value = [index]
  }
}

function selectJobLocation(location) {
  selectedJobIndices.value = employmentHistory.reduce((acc, job, index) => {
    if (job.location == location) acc.push(index)
    return acc
  }, [])
}

onMounted(() => {
  selectedJobIndices.value = [...Array(employmentHistory.length).keys()];
})
</script>
<template>
  <div class="workHistory__container">
    <div class="workHistory__ganttChart">
      <gantt-chart :events="employmentHistory" :on-click-bar="selectJob" :selected-rows="selectedJobIndices" />
      <span>(Click on the bars to interact with the chart!)</span>

    </div>
    <div class="workHistory__mapContainer">
      <div class="workHistory__mapTitle">
        <h3>Where I've worked</h3>
        <span>(Click on the countries to interact with the map!)</span>
      </div>
      <div class="workHistory__map">
        <the-map :selectable-features="selectableJobLocations" :selected-features="selectedJobLocation"
          :on-click-feature="selectJobLocation" />
      </div>
    </div>
  </div>
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

.workHistory__mapContainer {
  display: flex;
  flex-direction: column;
}

.workHistory__mapTitle {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: baseline;
}

span {
  font-style: italic;
  font-size: 0.8rem;
  color: var(--primary-grey-40)
}

.workHistory__map {
  grid-area: map;
  border: 1px solid var(--primary-grey-80);
  border-radius: 4px;
}

.workHistory__pieChart {
  grid-area: pie-chart
}
</style>
