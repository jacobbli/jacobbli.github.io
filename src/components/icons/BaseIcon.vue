<template>
  <div class="icon__main">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  fill: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.icon__main {
  display: flex;
  width: 20px;
}

</style>
