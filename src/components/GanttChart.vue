<script setup>
import { computed, defineProps } from 'vue'
import GanttChartBar from '@/components/GanttChartBar.vue'

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

const colorPalette = [
  {
    backgroundColor: '#957057',
    hoverColor: '#614939'
  },
  {
    backgroundColor: '#3BA7EA',
    hoverColor: '#2E85B8'
  },
  {
    backgroundColor: '#EAB63B',
    hoverColor: '#B88E2E'
  },
  {
    backgroundColor: '#EA823B',
    hoverColor: '#B8652E'
  },
  {
    backgroundColor: '#577D95',
    hoverColor: '#314654'
  }
]

const firstDate = computed(() => new Date(new Date(props.events[0].startDate)))
const lastDate = computed(() => isNaN(new Date(props.events[props.events.length - 1].endDate)) ? new Date() : new Date(props.events[props.events.length - 1].endDate))

const yearDiff = computed(() => (lastDate.value.getFullYear() - firstDate.value.getFullYear()) + 1)


function getYearLabel(index) {
  const firstYear = firstDate.value.getFullYear()
  return firstYear + index
}

function getBarLength(startDate, endDate) {
  const fromDate = new Date(startDate)
  const toDate = isNaN(new Date(endDate)) ? new Date() : new Date(endDate)

  const daysInToMonth = new Date(toDate.getFullYear(), (toDate.getMonth() + 1) % 12, 0).getDate()
  const daysInFromMonth = new Date(fromDate.getFullYear(), (fromDate.getMonth() + 1) % 12, 0).getDate()

  return (toDate.getMonth() -
    fromDate.getMonth() +
    12 * (toDate.getFullYear() - fromDate.getFullYear()) - ((fromDate.getDate() - 1) / daysInFromMonth) + (toDate.getDate() / daysInToMonth)) / 12 / yearDiff.value * 100
}

function getBarStart(rowStartDate) {
  const fromDate = new Date(firstDate.value.getFullYear(), 0, 1);
  const toDate = new Date(rowStartDate)

  const daysInMonth = new Date(toDate.getFullYear(), (toDate.getMonth() + 1) % 12, 0).getDate()

  return (toDate.getMonth() -
    fromDate.getMonth() +
    12 * (toDate.getFullYear() - fromDate.getFullYear()) + (toDate.getDate()) / daysInMonth) / 12 / yearDiff.value * 100
}
</script>

<template>
  <div class="ganttChart__container">
    <div class="ganttChart__grid">
      <div class="ganttChart__header" :style="{ gridTemplateColumns: `224px repeat(${yearDiff}, 5rem)` }">
        <div class="ganttChart__columnLabel" v-for="year in yearDiff" :key="year">
          {{ getYearLabel(year - 1) }}<br />
        </div>
      </div>
      <div class="ganttChart__chart">
        <div class="ganttChart__row" v-for="(event, index) in events" :key="event.startDate"
          :style="{ gridTemplateColumns: `224px 1fr` }">
          <div class="ganttChart__rowLabel">{{ event.title }}</div>
          <gantt-chart-bar :background-color="colorPalette[index % colorPalette.length].backgroundColor"
            :hover-color="colorPalette[index % colorPalette.length].hoverColor"
            :left-indent="getBarStart(event.startDate)" :width="getBarLength(event.startDate, event.endDate)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ganttChart__container {
  width: 100%;
  overflow: auto;
}

.ganttChart__grid {
  width: fit-content;
}

.ganttChart__header {
  width: fit-content;
  padding: 16px 24px 16px 0;
  display: grid;
}

.ganttChart__columnLabel {
  &:first-of-type {
    grid-column-start: 2;

  }
}

.ganttChart__chart {
  display: grid;
}

.ganttChart__row {
  display: grid;
  align-items: center;
  padding: 8px 0;
  border-bottom: var(--button-background-colour) 1px solid;

  &:first-of-type {
    border-top: var(--button-background-colour) 1px solid;
  }

  .ganttChart__rowLabel {
    padding-right: 20px;
  }
}
</style>
