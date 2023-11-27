<template>
  <div class="theNavigation__container">
    <router-item :target="'skills'" :is-selected="currentRoute == 'Skills'">
      <lightbulb-icon />Skills
    </router-item>
    <router-item :target="'projects'" :is-selected="currentRoute == 'Projects'">
      <project-icon />Projects
    </router-item>
    <router-item :target="'cv'" :is-selected="currentRoute == 'Cv'">
      <cv-icon />CV
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
import LightbulbIcon from "./icons/LightbulbIcon.vue";
import ProjectIcon from "./icons/ProjectIcon.vue";
import CvIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import RouterItem from "./RouterItem.vue";

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
