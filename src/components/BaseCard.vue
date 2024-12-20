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
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 24px;

  background-color: var(--secondary-color);
  color: var(--primary-color);
  outline: var(--primary-color) solid 2px;
}

@media only screen and (min-width: 768px) {
  .baseCard__container {
    width: 280px;
  }
}
</style>
