<template>
  <div class="baseCard__container">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: ""
  },
});
</script>

<style lang="scss" scoped>
.baseCard__container {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 10px;
}

</style>
