<template>
  <skills-gallery :skills="skills.skills" />
</template>

<script setup>
import skills from "../../data/skills.json";
import SkillsGallery from "./skills/SkillsGallery.vue";

</script>

<style lang="scss" scoped>
.resumeView__container {
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>
