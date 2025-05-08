<script setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="baseSection__container">
    <h2>{{ title }}</h2>
    <div class="baseSection__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.baseSection__container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>