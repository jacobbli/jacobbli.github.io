<template>
  <div class="projectsList__container">
    <project-item
      v-for="project in projects"
      :key="project.label"
      :project="project"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProjectItem from "./ProjectItem.vue";

defineProps({
  projects: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.projectsList__container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
