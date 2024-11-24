<template>
  <base-gallery>
    <skill-card
      v-for="skill in skills"
      :key="skill.label"
      :skill="skill"
    />
  </base-gallery>
</template>

<script setup>
import { defineProps } from "vue";
import SkillCard from "./SkillCard.vue";
import BaseGallery from "@/components/BaseGallery.vue";

defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>