<template>
  <div class="app__header">
    <the-header :is-mobile="isMobile" />
  </div>
  <div class="app__router">
    <router-view :key="$route.fullPath"></router-view>
  </div>
  <div v-if="isMobile">
    <contact-details-toggle @click="toggleModal" :is-visible="isModalVisible" class="app__contactDetailsToggle" />
    <contact-details-modal v-if="isModalVisible" class="app__contactDetailsModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TheHeader from "./components/TheHeader.vue";
import ContactDetailsToggle from "./components/contactDetails/ContactDetailsToggle.vue";
import ContactDetailsModal from './components/contactDetails/ContactDetailsModal.vue';

const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});


const isModalVisible = ref(false)

function toggleModal() {
  isModalVisible.value = !isModalVisible.value
}
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

.app__contactDetailsToggle {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.app__contactDetailsModal {
  position: fixed;
  right: 60px;
  bottom: 60px;

  filter: drop-shadow(0px 0px 4px rgb(0, 0, 0));
}

@media only screen and (min-width: 768px) {
  #app {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 25% 1fr;
    padding: 0;

    overflow: hidden;

    .app__header {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 40px;
    }

    .app__router {
      height: 100%;
      width: 100%;

      padding: 40px 20px 20px 20px;

      overflow: auto;
    }
  }
}
</style>
