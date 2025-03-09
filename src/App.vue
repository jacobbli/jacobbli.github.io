<script setup>
import { ref, onMounted } from "vue";
import TheGrid from "./components/TheGrid.vue";
const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

</script>

<template>
  <the-grid />
</template>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  font-weight: Bold;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Roboto"), url("@/assets/Roboto-VariableFont_wdth,wght.ttf") format("woff2");
}
@font-face {
  font-family: "Open Sans";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Open Sans"), url("@/assets/OpenSans-VariableFont_wdth,wght.ttf") format("woff2");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2C734F;
  --secondary-color: #def2e8;

  --highlight-color: #8bc7a9;

  --header-font: "Roboto", sans-serif;
  --regular-font: "Open Sans", sans-serif;
}

h1,
h2,
h3 {
  font-family: var(--header-font)
}

html,
body {
  min-height: 100vh;
  background-color: #def2e8;

}

#app {
  height: 100%;
  margin: 0 auto;
  padding: 32px;

  font-family: var(--regular-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
