<template>
  <div class="theHeader__container">
    <div class="theHeader__title">Hi! I'm <span class="theHeader__name">Jacob.</span></div>
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
    font-size: 28px;
    color: var(--primary-font-color);
    font-family: var(--header-font);
    font-weight: bold;
  }

  .theHeader__name {
    background-color: var(--secondary-color);
    color: var(--highlight-color);
    font-weight: bold;
    font-size: 36px;

    border-radius: 10px;
    padding: 4px 8px;

    filter: drop-shadow(0px 0px 2px #8bc7a9);
  }
}

@media only screen and (min-width: 768px) {
  .theHeader__container {
    justify-content: space-between;
  }
}
</style>
