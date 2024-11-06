<template>
  <base-gallery>
    <project-card
      v-for="project in projects"
      :key="project.label"
      :project="project"
    />
  </base-gallery>
</template>

<script setup>
import { defineProps } from "vue";
import ProjectCard from "./ProjectCard.vue";
import BaseGallery from "../BaseGallery.vue";

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
  gap: 16px;
  justify-content: space-evenly;
}
</style>
