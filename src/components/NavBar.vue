<template>
  <div class="navBar__container">
    <base-nav-menu class="navBar__content" :options="routes" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BaseNavMenu from "./BaseNavMenu.vue";

import { getRoutes } from "@/api/api";

const routes = ref([])

onMounted(async() => {
  routes.value = await getRoutes()
})

</script>

<style lang="scss" scoped>
.navBar__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (min-width: 768px) {
  .navBar__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>