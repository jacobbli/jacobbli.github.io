<template>
  <div class="theHeader__container">
    <h1 class="theHeader__title">Jacob Li</h1>
    <nav-bar :show-contact="false" />
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
// import ContactInfo from "./ContactInfo.vue";
</script>
<style lang="scss" scoped>
.theHeader__container {
  height: 80px;
  display: flex;
  align-items: last baseline;
  justify-content: space-between;

  margin: 0 0 48px 0;

  .theHeader__title {
    font-size: 36px;
    font-family: "Varela Round", sans-serif;
  }
}
</style>
