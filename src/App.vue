<template>
  <div class="app__header">
    <the-header />
  </div>
  <div class="app__main">
    <router-view class="app__router" :key="$route.fullPath"></router-view>
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Zen+Kurenaido&family=Varela+Round&family=Ubuntu");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #def2e8;
}

#app {
  height: 100%;
  width: 90%;
  margin: 0 auto;

  font-family: "Varela Round", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.app__main {
  display: flex;
  flex-direction: row;
  gap: 120px;
  padding-bottom: 40px;
}

.app__header {
  padding-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #def2e8;
}

</style>
