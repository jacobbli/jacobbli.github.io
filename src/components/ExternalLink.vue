<template>
  <a class="externalLink__container" :href="url" target="_blank">
    <base-link :icon="icon" :is-primary-color="isPrimaryColor">
      <div>{{ label }}</div>
    </base-link>
  </a>
</template>

<script setup>
import { defineProps } from "vue";
import BaseLink from "./BaseLink.vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isPrimaryColor: {
    type: Boolean,
    default: true,
  },
  url: {
    type: String,
    required: true
  }
});

</script>

<style lang="scss" scoped>
.externalLink__container {
  text-decoration: none;
}
</style>