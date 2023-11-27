<template>
  <base-badge :color="skill.color">{{ skill.label }}</base-badge>
</template>

<script setup>
import { defineProps } from "vue";
import BaseBadge from "./BaseBadge.vue";

defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>
