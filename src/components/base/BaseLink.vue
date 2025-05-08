<script setup>
import { defineProps } from "vue";

defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  newTab: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
    <a class="baseLink" :target="newTab ? '_blank' : '_self'" :href="target" :title="target">
      <slot name="icon"></slot>
      <div v-if="label.length > 0">{{ label }}</div>
    </a>
</template>

<style lang="scss" scoped>
.baseLink {
  display: flex;
  gap: 4px;
  width: fit-content;
  padding: 2px 4px;
  border-radius: 5px;
  align-items: center;

  color: var(--link-colour);
  transition: background-color 0.5s, color 0.5s;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: var(--link-hover-background-colour);
    color: var(--link-hover-text-colour);

    & a {
      color: var(--link-hover-text-colour);
    }
  }
}
</style>
