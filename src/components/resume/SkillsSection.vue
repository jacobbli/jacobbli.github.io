<template>
  <skills-gallery :skills="skills.skills" />
</template>

<script setup>
import skills from "../../data/skills.json";
import SkillsGallery from "./skills/SkillsGallery.vue";

</script>