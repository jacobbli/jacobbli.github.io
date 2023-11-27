<template>
  <div class="sideMenu__container">
    <div class="sideMenu__content">
      <the-navigation class="sideBar__theNavigation" :show-contact="false" />
      <contact-info />
    </div>
  </div>
</template>

<script setup>
import TheNavigation from "./TheNavigation.vue";
import ContactInfo from "./ContactInfo.vue";
</script>
<style lang="scss" scoped>
.sideMenu__container {
  display: flex;
  flex-direction: column;

  .sideMenu__content {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .sideBar__theNavigation {
      display: flex;
      flex-direction: column;

      gap: 8px;
    }
  }
}
</style>
