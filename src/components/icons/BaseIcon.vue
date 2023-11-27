<template>
  <div class="icon__main" :class="colorThemeClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, computed, inject } from "vue";

defineProps({
  colorProp: {
    type: String,
    default: "",
  },
});

const isDarkMode = inject("isDarkMode");

const colorThemeClass = computed(() =>
  isDarkMode.value ? "baseIcon__darkMode" : "baseIcon__lightMode"
);
</script>

<style lang="scss" scoped>
.icon__main {
  display: flex;
  width: 20px;
  fill: v-bind(colorProp);
}

.baseIcon__lightMode {
  fill: black;
}

.baseIcon__darkMode {
  fill: #e6e6e6;
}
</style>
