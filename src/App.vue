<template>
  <div class="app__header">
    <the-header />
  </div>
  <router-view class="app__router" :key="$route.fullPath"></router-view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TheHeader from "./components/TheHeader.vue";

const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&family=Ubuntu");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2C734F;
  --secondary-color: #def2e8;
  --tertiary-color: #9D5E56;

  --header-font: "Varela Round", sans-serif;
  --regular-font: "Ubuntu", sans-serif;
}

h1,
h2,
h3 {
  font-family: var(--header-font)
}

html,
body {
  height: 100%;
  background-color: var(--secondary-color)
}

#app {
  height: 100%;
  margin: 0 auto;

  font-family: var(--regular-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__header {
  padding: 0 48px;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--secondary-color);
}

.app__router {
  height: calc(100vh - 120px);
  padding: 40px 48px 20px 48px;
}

</style>
