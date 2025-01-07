<template>
  <base-icon>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" :fill="fill">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  </base-icon>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";
import { defineProps } from "vue";

defineProps({
  fill: {
    type: String,
    default: "",
  },
});
</script>
