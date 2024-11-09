<template>
  <base-card :title="project.label">
    <base-link v-if="project.github != ''" 
      :is-primary-color="false" 
      label="Github repo"
      @click="navigateTo(project.github)" />

    <base-link v-if="project.app != ''" 
      :is-primary-color="false" 
      label="App" 
      @click="navigateTo(project.app)" />

  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import BaseCard from "../BaseCard.vue";
import BaseLink from "../BaseLink.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

function navigateTo(target) {
  window.open(target)
}
</script>

<style lang="scss" scoped>

</style>
