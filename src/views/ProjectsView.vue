<template>
  <div class="projectsView__container">
    <projects-list :projects="projects.projects" />
  </div>
</template>

<script setup>
import projects from "../data/projects.json";
import ProjectsList from "@/components/ProjectsList.vue";
</script>
