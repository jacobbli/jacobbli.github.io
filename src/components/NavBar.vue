<template>
  <div class="navBar__container">
    <router-item :target="'/'" :is-selected="currentRoute == 'Home'">
      <home-icon />Home
    </router-item>
    <router-item :target="'projects'" :is-selected="currentRoute == 'Projects'">
      <lightbulb-icon />Projects
    </router-item>
    <router-item :target="'resume'" :is-selected="currentRoute == 'Resume'">
      <cv-icon />Resume
    </router-item>
    <router-item
      v-if="showContact"
      target="contact"
      :is-selected="currentRoute == 'ContactDetails'"
    >
      <contact-icon />Contact
    </router-item>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
// import LightbulbIcon from "./icons/LightbulbIcon.vue";
// import ProjectIcon from "./icons/ProjectIcon.vue";
import CvIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import RouterItem from "./RouterItem.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import LightbulbIcon from "./icons/LightbulbIcon.vue";

import { useRoute } from "vue-router";

const route = useRoute();

const currentRoute = computed(() => route.name);

defineProps({
  showContact: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.navBar__container {
  display: flex;
  gap: 16px;
}
</style>