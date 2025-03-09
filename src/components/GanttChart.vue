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
    backgroundColor: '#66c5cc',
    hoverColor: '#417d81'
  },
  {
    backgroundColor: '#f6cf71',
    hoverColor: '#bb9234'
  },
  {
    backgroundColor: '#f89c74',
    hoverColor: '#f06e36'
  },
  {
    backgroundColor: '#dcb0f2',
    hoverColor: '#c065ee'
  },
  {
    backgroundColor: '#87c55f',
    hoverColor: '#448617'
  },
  {
    backgroundColor: '#9eb9f3',
    hoverColor: '#5385f1'
  },
  {
    backgroundColor: '#fe88b1',
    hoverColor: '#f74885'
  },
  {
    backgroundColor: '#c9db74',
    hoverColor: '#c0db39'
  },
  {
    backgroundColor: '#8be0a4',
    hoverColor: '#44ec77'
  },
  {
    backgroundColor: '#b497e7',
    hoverColor: '#8d5be2'
  }
]


const monthDiff = computed(() => {
  const toDate = isNaN(new Date(props.events[props.events.length - 1].endDate)) ? new Date() : new Date(props.events[props.events.length - 1].endDate)

  const fromDate = new Date(props.events[0].startDate)
  return (
    toDate.getMonth() -
    fromDate.getMonth() +
    12 * (toDate.getFullYear() - fromDate.getFullYear()) +
    1
  )
})

// function getMonthName(monthNumber) {
//   const monthNameMap = {
//     0: 'Jan',
//     1: 'Feb',
//     2: 'Mar',
//     3: 'Apr',
//     4: 'May',
//     5: 'Jun',
//     6: 'Jul',
//     7: 'Aug',
//     8: 'Sep',
//     9: 'Oct',
//     10: 'Nov',
//     11: 'Dec',
//   }
//   const startMonth = new Date(props.events[0].startDate).getMonth()
//   return monthNameMap[(startMonth + monthNumber) % 12]
// }

function getYearLabel(monthNumber) {
  const startYear = new Date(props.events[0].startDate).getFullYear()
  const startMonth = new Date(props.events[0].startDate).getMonth()

  const currentMonthNumber = monthNumber + startMonth
  if (monthNumber == 0) return startYear
  if (currentMonthNumber % 12 == 0) return startYear + (Math.floor(currentMonthNumber / 12))

}

function getBarLength(startDate, endDate) {
  const fromDate = new Date(startDate)
  const toDate = isNaN(new Date(endDate)) ? new Date() : new Date(endDate)
  const daysInMonth = new Date(toDate.getFullYear(), (toDate.getMonth() + 1) % 12, 0).getDate()

  return (
    ((toDate.getMonth() -
      fromDate.getMonth() +
      12 * (toDate.getFullYear() - fromDate.getFullYear()) +
      toDate.getDate() / daysInMonth) /
      monthDiff.value) *
    100
  )
}

function getBarStart(rowStartDate) {
  const fromDate = new Date(props.events[0].startDate)
  const toDate = new Date(rowStartDate)

  const daysInMonth = new Date(toDate.getFullYear(), (toDate.getMonth() + 1) % 12, 0).getDate()
  return (
    ((toDate.getMonth() -
      fromDate.getMonth() +
      12 * (toDate.getFullYear() - fromDate.getFullYear()) +
      (toDate.getDate() - 1) / daysInMonth) /
      monthDiff.value) *
    100
  )
}
</script>

<template>
  <div class="ganttChart__grid">
    <div class="ganttChart__header" :style="{ gridTemplateColumns: `20% repeat(${monthDiff}, 1fr)` }">
      <div class="ganttChart__columnLabel" v-for="month in monthDiff" :key="month">
        {{ getYearLabel(month - 1) }}<br />
        <!-- {{ getMonthName(month - 1) }} -->
      </div>
    </div>
    <div class="ganttChart__chart">
      <div class="ganttChart__row" v-for="(event, index) in events" :key="event.startDate"
        :style="{ gridTemplateColumns: `20% 1fr` }">
        <div>{{ event.title }}</div>
        <gantt-chart-bar 
          :background-color="colorPalette[index % colorPalette.length].backgroundColor"
          :hover-color="colorPalette[index % colorPalette.length].hoverColor" :left-indent="getBarStart(event.startDate)"
          :width="getBarLength(event.startDate, event.endDate)" />
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
  border-bottom: rgb(223, 223, 223) 1px solid;

  &:first-of-type {
    border-top: rgb(223, 223, 223) 1px solid;
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
