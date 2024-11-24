<template>
  <div class="navItem__container">
    <base-link @click="routeTo(target)" 
      :label="label"
      :icon="label"
      :is-primary-color="isPrimaryColor"
      :is-selected="isSelected" 
      />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import BaseLink from "./BaseLink.vue";
import router from "@/router/router";

defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  isPrimaryColor: {
    type: Boolean,
    default: true,
  }
});

function routeTo(target) {
  router.push(target)
}

</script>

<style lang="scss" scoped></style>
