<script setup>
import { defineProps } from "vue";
import BaseLink from "@/components/base/BaseLink.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import WebAssetIcon from "@/components/icons/WebAssetIcon.vue";
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="projectItem__image">
    <img :src="project.image">
  </div>
  <div class="projectItem__content">
    <div class="projectItem__text">
      <h3>{{ project.label }}</h3>
      <p>{{ project.description }}</p>
    </div>
    <div class="projectItem__links">
      <base-link v-if="project.github != ''" label="Github repo" icon="Github" :target="project.github">
        <template #icon><github-icon /></template>
      </base-link>
      <base-link v-if="project.app != ''" label="App" icon="App" :target="project.app">
        <template #icon><web-asset-icon /></template>
      </base-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectItem__links {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.projectItem__image {
  display: flex;
  justify-content: center;
  margin: 24px 0;


  img {
    width: 50%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 4 / 3;
    border: 1px solid rgb(221, 221, 221);

    align-self: center;
  }
}

.projectItem__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.projectItem__text{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
