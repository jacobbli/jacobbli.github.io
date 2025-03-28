<script setup>
import { defineProps } from 'vue';
import BaseLink from "@/components/base/BaseLink.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import WebAssetIcon from "@/components/icons/WebAssetIcon.vue";

defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="projectItem__container">
    <img :src="project.image">
    <div class="projectItem__content">
      <h3>{{ project.label }}</h3>
      <div class="projectItem__details">
        <p>{{ project.description }}</p>
        <div class="projectItem__links">
          <base-link v-if="project.github != ''" label="Github repo" icon="Github" :target="project.github">
            <template #icon><github-icon /></template>
          </base-link>
          <base-link v-if="project.app != ''" label="App" icon="App" :target="project.app">
            <template #icon><web-asset-icon /></template>
          </base-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectItem__container {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 2rem;

  img {
    width: 100%;
    border: 1px solid var(--primary-grey-80);
    border-radius: 8px;
    aspect-ratio: 1 / 1;
  }

  .projectItem__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .projectItem__details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      font-size: 0.9rem;
      font-style: italic;
    }
  }
}
</style>
