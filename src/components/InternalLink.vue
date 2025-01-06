<template>
  <RouterLink class="internalLink__container" :to="target">
    <base-link  :icon="label" :is-primary-color="isPrimaryColor" :is-selected="isSelected">
      <div>{{ label }}</div>
    </base-link>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";
import BaseLink from "./BaseLink.vue";

defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  isPrimaryColor: {
    type: Boolean,
    default: true,
  }
});

</script>

<style lang="scss" scoped>
.internalLink__container {
  text-decoration: none;
}
</style>
