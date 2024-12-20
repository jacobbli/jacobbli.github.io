<template>
  <div class="projectsView__container">
    <project-gallery :projects="projects.projects" />

  </div>
</template>

<script setup>
import projects from "../data/projects.json";
import ProjectGallery from "@/components/projects/ProjectGallery.vue";
</script>

<style lang="scss" scoped>
.projectsView__container {
  position: relative;
  top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
