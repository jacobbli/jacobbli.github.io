<template>
  <div class="skillCategory__container">
    {{ skillCategory.label }}:
    <skills-list :skills="skillCategory.items" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SkillsList from "@/components/SkillsList.vue";

defineProps({
  skillCategory: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.skillCategory__container {
  display: flex;
  flex-direction: column;

  row-gap: 8px;
}
</style>
