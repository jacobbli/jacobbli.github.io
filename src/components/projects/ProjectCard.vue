<template>
  <base-card :title="project.label">
    <div class="projectCard__content">
      <base-link v-if="project.github != ''" :is-primary-color="true" label="Github repo" icon="Github"
        @click="navigateTo(project.github)" />

      <base-link v-if="project.app != ''" :is-primary-color="true" label="App" icon="App"
        @click="navigateTo(project.app)" />

    </div>
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
.projectCard__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
