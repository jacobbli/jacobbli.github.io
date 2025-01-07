<template>
  <base-card :title="project.label">
    <div class="projectCard__content">
      <external-link v-if="project.github != ''" :is-primary-color="true" label="Github repo" icon="Github"
        :url="project.github" />

      <external-link v-if="project.app != ''" :is-primary-color="true" label="App" icon="App"
      :url="project.app" />

    </div>
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import BaseCard from "../BaseCard.vue";
import ExternalLink from "../ExternalLink.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.projectCard__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
