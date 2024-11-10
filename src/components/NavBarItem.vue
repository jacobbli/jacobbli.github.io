<template>
  <div class="navItem__container">
    <base-link :is-selected="isSelected" @click="routeTo(target)" :class="isSelectedClass" :label="label"
      :icon="label" />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import BaseLink from "./BaseLink.vue";
import router from "@/router/router";

const props = defineProps({
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
});

const isSelectedClass = computed(() =>
  props.isSelected ? "navItem__isSelected" : ""
);

function routeTo(target) {
  router.push(target)
}

</script>

<style lang="scss" scoped></style>
