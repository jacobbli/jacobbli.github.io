<template>
  <div class="theHeader__container" :class="headerAlignmentClass">
    <h1 v-if="!isHome" class="theHeader__title">Jacob Li</h1>
    <nav-bar />
  </div>
</template>

<script setup>
import { computed } from "vue";
import NavBar from "./NavBar.vue";
import router from "@/router/router";

const isHome = computed(() => router.currentRoute.value.name == 'Home')
const headerAlignmentClass= computed(() => !isHome.value ? "theHeader__spaceBetween" : "")

</script>
<style lang="scss" scoped>
.theHeader__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  .theHeader__title {
    font-size: 48px;
    color: var(--tertiary-color);
  }
}

@media only screen and (min-width: 768px) {
  .theHeader__container {
    justify-content: end;
  }

  .theHeader__spaceBetween {
    justify-content: space-between;
  }
}
</style>
