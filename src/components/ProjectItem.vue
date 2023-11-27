<template>
  <div class="projectsItem__container">
    {{ project.label }}
    <ul>
      <li v-for="link in project.links" :key="link">
        <a
          :href="link.url"
          target="_blank"
          :title="link.url"
          :class="colorThemeClass"
          >{{ link.type }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed, inject } from "vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const isDarkMode = inject("isDarkMode");

const colorThemeClass = computed(() =>
  isDarkMode.value ? "projectItem__darkMode" : "projectItem__lightMode"
);
</script>

<style lang="scss" scoped>
ul {
  list-style-position: outside;
  list-style-type: "\2578  ";
  margin: revert;
  padding: revert;

  margin-top: 0px;
}

.projectItem__lightMode {
  color: #258f2e;
}

.projectItem__darkMode {
  color: #e6e6e6;
}
</style>
