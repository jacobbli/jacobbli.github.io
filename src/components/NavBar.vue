<template>
  <div class="navBar__container">
    <nav-bar-item v-for="route in routes" :key="route.label" 
      :target="route.target" 
      :label="route.label"
      :is-selected="currentRoute == route.label"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import NavBarItem from "./NavBarItem.vue";

import { useRoute } from "vue-router";

const route = useRoute();

const currentRoute = computed(() => route.name);

defineProps({
  showContact: {
    type: Boolean,
    default: true,
  },
});

const routes = [
  {
    target: '/',
    label: "Home"
  },
  {
    target: 'projects',
    label: "Projects"
  },
  {
    target: 'resume',
    label: "Resume"
  },
  {
    target: 'contact',
    label: "Contact"
  },
]

</script>

<style lang="scss" scoped>
.navBar__container {
  display: flex;
  gap: 16px;
}
</style>