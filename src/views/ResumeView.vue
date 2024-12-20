<template>
  <div class="resumeView__container">
    <resume-menu class="resumeView__menu" />
    <div class="resumeView__content">
      <router-view />
    </div>
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

  position: relative;
}

.resumeView__menu {
  position: sticky;
  top: 140px;
  z-index: 1;
}

.resumeView__content {
  position: relative;
  top: 32px;
  padding-bottom: 24px;
}

</style>
