<script setup>
import { defineProps } from 'vue'

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
  }
})

</script>

<template>
  <div class="ganttChartBar">
  </div>
</template>

<style scoped lang="scss">
.ganttChartBar {
  position: relative;
  width: v-bind('width + "%"');
  height: 16px;

  top: 0;
  left: v-bind('leftIndent + "%"');

  background-color: v-bind(backgroundColor);
  border-radius: 4px;
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
</style>
