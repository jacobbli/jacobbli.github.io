<template>
  <div class="theHeader__container">
    <h1 class="theHeader__title">Jacob Li</h1>
    <nav-bar :show-contact="false" />
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";

</script>
<style lang="scss" scoped>
.theHeader__container {
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: last baseline;
  justify-content: space-between;

  .theHeader__title {
    font-size: 48px;
    color: var(--tertiary-color);
  }
}
</style>
