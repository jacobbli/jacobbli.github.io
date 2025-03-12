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
  --accent-colour: hsl(94, 10%, 36%);
  --tinted-accent-colour: hsl(94, 10%, 75%);

  --background-colour: hsl(94, 10%, 86%);
  --text-colour: hsl(203, 7%, 24%);
  --heading-colour: #393e41;

  --button-background-colour: var(--text-colour);
  --button-text-colour: hsl(94, 10%, 76%);
  --button-hover-background-colour: hsl(203, 7%, 44%);
  --button-hover-text-colour: hsl(94, 10%, 76%);

  --link-colour: hsl(31, 78%, 34%);
  --link-hover-text-colour: var(--background-colour);
  --link-hover-background-colour: hsl(31, 78%, 34%);

  --heading-font: "Roboto", sans-serif;
  --regular-font: "Open Sans", sans-serif;
}

h1,
h2,
h3 {
  color: var(--heading-colour);
  font-family: var(--heading-font)
}

html,
body {
  min-height: 100vh;
  background-color:hsl(52, 20%, 95%);
}

#app {
  height: 100%;
  margin: 0 auto;
  padding: 32px;

  color: var(--text-colour);
  font-family: var(--regular-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
