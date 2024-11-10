<template>
  <div class="baseCard__container">
    <h3>{{ title }}</h3>
    <div class="baseCard__content">
      <slot></slot>
    </div>
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
  padding: 16px;
  border-radius: 24px;

  background-color: #2C734F;
  color: #DFF2E9;
}
</style>
