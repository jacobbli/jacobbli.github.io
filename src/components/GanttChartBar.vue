<script setup>
import { defineProps, ref } from 'vue'
import BaseToolTip from './base/BaseToolTip.vue'

defineProps({
  backgroundColor: {
    type: String,
    required: true
  },
  hoverColor: {
    type: String,
    required: true
  },
  leftIndent: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  event: {
    type: Object,
    required: true
  }
})

const isToolTipVisible = ref(false)
const toolTipContent = ref(null)

function showToolTip(content) {
  toolTipContent.value = content
  isToolTipVisible.value = true
}

function hideToolTip() {
  isToolTipVisible.value = false
}

function getLongDateString(dateString) {
  const date = new Date(dateString)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const formattedDateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  return isNaN(date) ? dateString : formattedDateString
}
</script>

<template>
  <div class="ganttChartBar" @mouseenter="showToolTip" @mouseleave="hideToolTip">
    <base-tool-tip v-if="isToolTipVisible" class="tooltip">
          {{ getLongDateString(event.startDate) }} - {{ getLongDateString(event.endDate) }}
      </base-tool-tip>
  </div>
</template>

<style scoped lang="scss">
.ganttChartBar {
  position: relative;
  width: v-bind('width + "%"');
  height: 0.80rem;

  top: 0;
  left: v-bind('leftIndent + "%"');

  background-color: v-bind(backgroundColor);
  border-color: v-bind(backgroundColor);
  border-width: 4px;
  border-style: solid;
  transition: border 0.5s;

  &:hover {
    border-color: v-bind(hoverColor);
    border-width: 4px;
    border-style: solid;
  }
}

.tooltip {
  position: absolute;
  width: max-content;
  bottom: 100%;
  right: 0;

  padding: 8px;

  font-size: 14px;

  border: 2px solid rgb(99, 99, 99);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgb(238, 238, 238);
  z-index: 99;

  h3{
    color: rgb(238, 238, 238);
  }
}
</style>
