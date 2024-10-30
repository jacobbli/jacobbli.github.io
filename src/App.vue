<template>
  <div :class="colorThemeClass">
    <div class="app__content">
      <div @click="toggleColorTheme" class="app__colorThemeToggle" :title="colorThemeIconTip">
        <sun-icon v-if="!isDarkMode" />
        <moon-icon v-else />
      </div>
      <h1 class="app__title">Jacob Li</h1>
      <div class="app__main">
        <side-bar v-if="!isMobile" />
        <the-navigation v-if="isMobile" class="app__contactInfo" />

        <router-view class="app__router" :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, provide, readonly } from "vue";
import SideBar from "./components/SideBar.vue";
import TheNavigation from "./components/TheNavigation.vue";
import SunIcon from "./components/icons/SunIcon.vue";
import MoonIcon from "./components/icons/MoonIcon.vue";

const isMobile = ref(screen.width < 768);
const isDarkMode = ref(true);
const colorThemeClass = computed(() =>
  isDarkMode.value ? "app__darkMode" : "app__lightMode"
);

const colorThemeIconTip = computed(() =>
  isDarkMode.value ? "Turn off dark mode" : "Turn on dark mode"
);

function toggleColorTheme() {
  isDarkMode.value = !isDarkMode.value;
}

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

provide("isDarkMode", readonly(isDarkMode));
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

.app__colorThemeToggle {
  float: right;
  cursor: pointer;
}

.app__lightMode {
  height: 100%;

  a {
    color: #258f2e;
  }

  svg {
    fill: black;
  }
}

.app__darkMode {
  height: 100%;

  background-color: rgb(59, 54, 47);
  color: #e6e6e6;

  a {
    color: #e6e6e6;
  }

  svg {
    fill: white;
  }
}

.app__content {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 24px;
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
