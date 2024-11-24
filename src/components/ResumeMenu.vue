<template>
  <div class="resumeMenu__container">
    <base-nav-menu class="resumeView__menu" 
      :options="options" 
      :is-primary-color="false"
    />
  </div>
</template>

<script setup>
import BaseNavMenu from "@/components/BaseNavMenu.vue";

const options = [
  {
    target: '/resume/skills',
    label: "Skills"
  },
  {
    target: '/resume/employment',
    label: "Employment"
  },
  {
    target: '/resume/education',
    label: "Education"
  },
]

</script>
<style lang="scss" scoped>
  .resumeView__menu {
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    gap: 8px;
    padding: 4px;
    filter: drop-shadow(0px 0px 2px gray);
  }
</style>
