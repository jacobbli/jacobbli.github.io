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
  <div class="ganttChartBar"  @mouseenter="showToolTip" @mouseleave="hideToolTip" @click="onClickBar"
    :class="[colorClass, notSelectedClass]">
    <base-tool-tip v-if="isToolTipVisible" class="tooltip">
      <p>{{ getLongDateString(event.startDate) }} - {{ getLongDateString(event.endDate) }}</p>
      <p>{{ event.organization || event.school }}</p>
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
}

.color-1 {
  background-color: var(--primary-colour-30)
}

.color-2 {
  background-color: var(--primary-colour-40)
}

.color-3 {
  background-color: var(--primary-colour-50)
}

.color-4 {
  background-color: var(--primary-colour-60)
}

.color-5 {
  background-color: var(--primary-colour-70)
}

.not-selected {
  opacity: 20%
}
</style>
