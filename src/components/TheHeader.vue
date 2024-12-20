<template>
  <div class="theHeader__container">
    <div class="theHeader__title">Jacob Li</div>
    <nav-bar />
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";

</script>
<style lang="scss" scoped>
.theHeader__container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .theHeader__title {
    font-size: 32px;
    color: var(--tertiary-color);
    font-family: var(--header-font);
    font-weight: bold;
  }
}

@media only screen and (min-width: 768px) {
  .theHeader__container {
    justify-content: space-between;
  }
}
</style>
