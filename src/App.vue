<script setup>
import { ref, onMounted } from "vue";
import TheHeader from '@/components/TheHeader.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import ContactDetails from '@/components/ContactDetails.vue';
import EducationHistory from '@/components/EducationHistory.vue';

const isMobile = ref(screen.width < 768);

onMounted(() => {
  window.onresize = () => (isMobile.value = screen.width < 768);
});

</script>

<template>
  <header>
      <the-header />
      <div>
        <h2>Let's connect!</h2>
        <contact-details />
      </div>
  </header>

  <main>
    <work-history />
    <education-history />
  </main>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 3rem 0 3rem;

  display: grid;
  grid-template-columns: 30% auto;
  gap: 50px;

  header {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    height: calc(100vh - 4rem);
    position: sticky;
    top: 4rem;
  }


  main {
    display: flex;
    flex-direction: column;
    gap: 200px;
    padding-bottom: 4rem;
  }
}
</style>
