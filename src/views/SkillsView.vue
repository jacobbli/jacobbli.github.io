<template>
  <div class="skillsView__container">
    <skill-category
      v-for="skillCategory in skills.skills"
      :key="skillCategory.label"
      :skillCategory="skillCategory"
    />
  </div>
</template>

<script setup>
import skills from "../data/skills.json";
import SkillCategory from "@/components/SkillCategory.vue";
</script>

<style lang="scss" scoped>
.skillsView__container {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
</style>
