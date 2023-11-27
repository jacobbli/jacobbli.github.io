<template>
  <div class="sideMenu__container">
    <the-navigation />
    <contact-info />
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
}
</style>
