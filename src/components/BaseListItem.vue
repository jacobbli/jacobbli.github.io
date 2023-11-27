<template>
  <div class="baseListItem__container">
    <slot name="icon"></slot>
    <slot name="label"></slot>
    <a
      v-if="url.length > 0"
      :href="url"
      target="_blank"
      :title="title"
      :class="colorThemeClass"
    >
      {{ content }}
    </a>

    <span v-else>{{ content }}</span>
  </div>
</template>

<script setup>
import { defineProps, inject, computed } from "vue";

defineProps({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
});

const isDarkMode = inject("isDarkMode");

const colorThemeClass = computed(() =>
  isDarkMode.value ? "baseListItem__darkMode" : "baseListItem__lightMode"
);
</script>

<style lang="scss" scoped>
.baseListItem__container {
  display: flex;

  gap: 8px;
}

.baseListItem__lightMode {
  color: #258f2e;
}

.baseListItem__darkMode {
  color: #e6e6e6;
}
</style>
