<template>
  <base-card :title="project.label">
    <a v-if="project.github != ''" :href="project.github">Github repo</a>
    <a v-if="project.app != ''" :href="project.app">App</a>
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import BaseCard from "../BaseCard.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>

</style>
