<script setup>
import { defineProps } from "vue";

defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  newTab: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="baseLink">
    <slot name="icon"></slot>
    <a :target="newTab ? '_blank' : '_self'" :href="target">
      <div>{{ label }}</div>
    </a>

  </div>
</template>

<style lang="scss" scoped>
.baseLink {
  display: flex;
  gap: 4px;
  width: fit-content;
  padding: 2px 4px;
  border-radius: 5px;
  align-items: center;

  color: rgb(124, 93, 45);
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;

  a {
    text-decoration: none;
    color: rgb(124, 93, 45);
  }

  &:hover {
    background-color: rgb(124, 93, 45);
    color: white;

    & a {
      color: white;
    }
  }
}
</style>
