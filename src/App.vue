<template>
  <div class="app__content">
    <h1 class="app__title">Jacob Li</h1>
    <div class="app__main">
      <side-bar v-if="!isMobile" />
      <the-navigation v-if="isMobile" class="app__contactInfo" />

      <router-view class="app__router" :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SideBar from "./components/SideBar.vue";
import TheNavigation from "./components/TheNavigation.vue";

const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

</script>

<style>
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
  font-family: Courier, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

.app__content {
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 24px;

  a {
    color: #258f2e;
  }

  svg {
    fill: black;
  }
}

.app__title {
  font-size: 36px;
}

@media only screen and (min-width: 768px) {
  #app {
    height: 100%;
    overflow-y: hidden;
  }

  .app__content {
    width: 70%;
    padding-top: 25px;
  }

  .app__main {
    max-height: 500px;
    padding-top: 50px;
    display: flex;
    gap: 120px;
  }

  .app__router {
    overflow-y: auto;
  }
}
</style>
