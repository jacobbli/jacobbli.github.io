<template>
  <div class="skillsList__container">
    <skill-item v-for="skill in skills" :key="skill" :skill="skill" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import SkillItem from "./SkillItem.vue";

defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.skillsList__container {
  display: flex;
  flex-direction: row;
  gap: 8px;

  flex-wrap: wrap;
}
</style>
