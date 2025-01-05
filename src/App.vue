<template>
  <div class="app__header">
    <the-header />
  </div>
  <div class="app__router">
    <router-view :key="$route.fullPath"></router-view>
  </div>
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

  --primary-font-color: #2C734F;
  --secondary-font-color: #def2e8;
  --highlight-color: #8C6039;

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
  background-color: white
}

#app {
  height: 100%;
  margin: 0 auto;
  padding: 0 8px;

  font-family: var(--regular-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__header {
  height: 120px;
  width: 100%;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 2;

  background-color: white;
}

@media only screen and (min-width: 768px) {
  #app {
    padding: 0 48px;
  }
}
</style>
