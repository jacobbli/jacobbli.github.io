<script setup>
import { computed, defineProps, ref } from 'vue'
import BaseToolTip from './base/BaseToolTip.vue'
import { getLongDateString } from '@/helper/date'

const props = defineProps({
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
  },
  onClickBar: {
    type: Function,
    default: () => { }
  },
  isNotSelected: {
    type: Boolean,
    default: false
  }
})

const isToolTipVisible = ref(false)
const toolTipContent = ref(null)

const colorClass = computed(() => {
  if (props.width < 5) return 'color-1'
  if (props.width < 10) return 'color-2'
  if (props.width < 15) return 'color-3'
  if (props.width < 25) return 'color-4'
  return 'color-5'
})

const notSelectedClass = computed(() => props.isNotSelected ? 'not-selected' : '')

function showToolTip(content) {
  toolTipContent.value = content
  isToolTipVisible.value = true
}

function hideToolTip() {
  isToolTipVisible.value = false
}

</script>

<template>
  <div class="ganttChartBar" @mouseenter="showToolTip" @mouseleave="hideToolTip" @click="onClickBar"
    :class="[colorClass, notSelectedClass]">
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

  transition: opacity 0.4s;

  &:hover {
    cursor: pointer;
  }

}


.tooltip {
  position: absolute;
  width: max-content;
  bottom: 100%;
  right: 0;

  padding: 4px;

  font-size: 0.8rem;

  border: 2px solid rgb(99, 99, 99);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgb(238, 238, 238);
  z-index: 99;
}

.color-1 {
  background-color: var(--primary-color-30)
}

.color-2 {
  background-color: var(--primary-color-40)
}

.color-3 {
  background-color: var(--primary-color-50)
}

.color-4 {
  background-color: var(--primary-color-60)
}

.color-5 {
  background-color: var(--primary-color-70)
}

.not-selected {
  opacity: 20%
}
</style>
