<template>
  <div class="resumeView__container">
    <resume-menu class="resumeView__menu" />
    <router-view />
  </div>
</template>

<script setup>
import ResumeMenu from '@/components/ResumeMenu.vue';

</script>

<style lang="scss" scoped>
.resumeView__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  overflow: auto;

  .resumeView__menu {
    position: sticky;
    top: 0;
    z-index: 99;
  }
}
</style>
