<template>
  <base-card :title="skill.label">
    <div class="skillCard__technologies">
      <base-badge v-for="technology in skill.technologies" :key="technology.label" :color="technology.color">{{ technology.label }}</base-badge>
    </div>
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseBadge from "@/components/BaseBadge.vue";

defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.skillCard__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
