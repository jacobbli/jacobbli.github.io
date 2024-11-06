<template>
  <the-header />
  <div class="app__main">
    <!-- <side-bar v-if="!isMobile" /> -->
    <!-- <the-navigation v-if="isMobile" class="app__contactInfo" /> -->
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Zen+Kurenaido&family=Varela+Round&family=Ubuntu");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  width: 90%;
  margin: 0 auto;

  font-family: "Varela Round", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: #258f2e;
  }
}



@media only screen and (min-width: 768px) {

  .app__main {
    height: calc(100% - 128px);
    display: flex;
    flex-direction: row;
    gap: 120px;
  }

  .app__router {
    padding-top: 40px;
  }
}
</style>
