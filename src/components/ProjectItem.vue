<template>
  <div class="projectsItem__container">
    {{ project.label }}
    <ul>
      <li v-for="link in project.links" :key="link">
        <a :href="link.url" target="_blank" :title="link.url">{{
          link.type
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style-position: outside;
  list-style-type: "\2578  ";
  margin: revert;
  padding: revert;

  margin-top: 0px;
}
</style>
