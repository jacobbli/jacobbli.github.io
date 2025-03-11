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
  <div class="ganttChart__grid">
    <div class="ganttChart__header" :style="{ gridTemplateColumns: `20% repeat(${yearDiff}, 1fr)` }">
      <div class="ganttChart__columnLabel" v-for="year in yearDiff" :key="year">
        {{ getYearLabel(year - 1) }}<br />
        <!-- {{ getMonthName(month - 1) }} -->
      </div>
    </div>
    <div class="ganttChart__chart">
      <div class="ganttChart__row" v-for="(event, index) in events" :key="event.startDate"
        :style="{ gridTemplateColumns: `20% 1fr` }">
        <div>{{ event.title }}</div>
        <gantt-chart-bar :background-color="colorPalette[index % colorPalette.length].backgroundColor"
          :hover-color="colorPalette[index % colorPalette.length].hoverColor"
          :left-indent="getBarStart(event.startDate)" :width="getBarLength(event.startDate, event.endDate)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ganttChart__grid {
  width: 100%;
}

.ganttChart__header {
  width: 100%;
  padding: 16px 0;
  display: grid;
}

.ganttChart__columnLabel {
  &:first-of-type {
    grid-column-start: 2
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
}

.ganttChart__columnDivider {
  position: relative;
  height: 100%;
  top: 0;
  display: grid;

  .ganttChart__column {
    border-right: 1px solid rgb(189, 189, 189);
  }
}
</style>
