<script setup>
import { ref, onMounted } from "vue";
import TheHeader from '@/components/TheHeader.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import WorkHistoryList from "./components/WorkHistoryList.vue";
import ContactDetails from '@/components/ContactDetails.vue';
import EducationHistory from '@/components/EducationHistory.vue';
import ProjectList from "./components/ProjectList.vue";
import BaseDivider from "./components/base/BaseDivider.vue";
import BaseSection from "./components/base/BaseSection.vue";

const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

</script>

<template>
  <header>
    <the-header />
    <div class="app__contactDetails">
      <!-- <h2>Let's connect!</h2> -->
      <contact-details />
    </div>
  </header>
  <div class="app__verticalDivider">
    <base-divider :is-vertical="true" />
  </div>
  <main>
    <base-section title="Projects">
      <project-list />
    </base-section>
    <base-divider />
    <base-section title="Work Experience">
      <work-history-list v-if="isMobile" />
      <work-history v-else />
    </base-section>
    <base-divider />
    <base-section title="Education">
      <education-history />
    </base-section>

  </main>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 2rem 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .app__contactDetails {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .app__verticalDivider {
    display: none
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 4rem;
  }
}

@media only screen and (min-width: 768px) {
  #app {
    padding: 0 3rem;

    display: grid;
    grid-template-columns: 40% 1px auto;
    gap: 2.5rem;

    header {
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      gap: 2rem;

      height: 100vh;
      position: sticky;
      top: 0;
    }

    .app__verticalDivider {
      display: flex;

      height: 100vh;
      position: sticky;
      top: 0;
    }

    main {
      padding: 4rem;
    }

  }
}
</style>
