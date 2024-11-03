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
import { defineProps } from "vue";

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

</script>

<style lang="scss" scoped>
.baseListItem__container {
  display: flex;

  gap: 8px;
}

</style>
