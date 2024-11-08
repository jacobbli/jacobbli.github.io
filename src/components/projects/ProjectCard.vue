<template>
  <base-card :title="project.label">
    <a v-if="project.github != ''" :href="project.github" target="_blank">
          <base-link :is-primary-color="false">
            Github repo
          </base-link>
        </a>

        <a v-if="project.app != ''" :href="project.app" target="_blank">
          <base-link :is-primary-color="false">
            App
          </base-link>
        </a>
    <!-- <a v-if="project.github != ''" :href="project.github">Github repo</a>
    <a v-if="project.app != ''" :href="project.app">App</a> -->
  </base-card>
</template>

<script setup>
import { defineProps } from "vue";
import BaseCard from "../BaseCard.vue";
import BaseLink from "../BaseLink.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

</style>
