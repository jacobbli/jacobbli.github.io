<template>
  <div class="navBar__container">
    <base-nav-menu class="navBar__content" :options="routes" />
  </div>
</template>

<script setup>
import BaseNavMenu from "./BaseNavMenu.vue";

const routes = [
  {
    target: '/home',
    label: "Home"
  },
  {
    target: '/projects',
    label: "Projects"
  },
  {
    target: '/resume/skills',
    label: "Resume"
  },
  {
    target: '/contact',
    label: "Contact"
  },
]

</script>

<style lang="scss" scoped>
.navBar__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
}

@media only screen and (min-width: 768px) {
  .navBar__content {
    gap: 16px;
  }
}
</style>