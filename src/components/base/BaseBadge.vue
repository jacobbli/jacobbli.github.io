<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  color: String,
});

const borderStyle = computed(() =>
  props.color
    ? `border: 1pt ${props.color} solid; background-color: ${props.color}7e;`
    : `border: 1pt gray solid; background-color: #ffffff1e;`
);
</script>
<template>
  <div class="baseBadge__container" :style="borderStyle">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.baseBadge__container {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  border-radius: 4pt;
  padding: 4px 8px;
}
</style>
