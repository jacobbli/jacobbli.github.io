<script setup>
import { computed, defineProps } from 'vue'
import GanttChartBar from '@/components/GanttChartBar.vue'

const props = defineProps({
  events: {
    type: Array,
    required: true
  },
  onClickBar: {
    type: Function,
    default: () => { }
  },
  selectedRows: {
    type: Array,
    default: Array
  }
})


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
  <div class="ganttChart__container" >
    <div class="ganttChart__grid">
      <div class="ganttChart__header" :style="{ gridTemplateColumns: `20% repeat(${yearDiff}, 1fr)` }">
        <div class="ganttChart__columnLabel" v-for="year in yearDiff" :key="year">
          {{ getYearLabel(year - 1) }}<br />
        </div>
      </div>
      <div class="ganttChart__chart">
        <div class="ganttChart__row" v-for="(event, index) in events" :key="event.startDate"
          :style="{ gridTemplateColumns: `20% 1fr` }">
          <div class="ganttChart__rowLabel">
            <div :title="event.title || event.degree">{{ event.title || event.degree }}</div>
            <!-- <div class="ganttChart__organizationLabel">{{ event.organization || event.school }}</div> -->
          </div>
          <gantt-chart-bar :event="event" :on-click-bar="() => onClickBar(index)"
            :is-not-selected="selectedRows.length > 0 && !selectedRows.includes(index)"
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

  font-size: 0.675rem;
}

.ganttChart__grid {
  min-width: fit-content;
}

.ganttChart__header {
  width: 100%;
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
  padding: 4px 0;

  &:first-of-type {
    border-top: var(--tinted-accent-colour) 1px solid;
  }

  &:last-of-type {
    border-bottom: var(--tinted-accent-colour) 1px solid;

  }

  .ganttChart__rowLabel {
    padding-right: 20px;


    div {
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;
    }

    .ganttChart__organizationLabel {
      font-style: italic;
      font-size: 12px;
    }
  }
}
</style>
