<script setup>
import BaseCard from '@/components/base/BaseCard.vue';
import TheIntro from '@/components/TheIntro.vue';
import TheLogo from '@/components/TheLogo.vue';
// import SkillsSection from '@/components/resume/SkillsSection.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import ProjectCarousel from '@/components/ProjectCarousel.vue';
import ContactDetails from '@/components/ContactDetails.vue';
import EducationHistory from '@/components/EducationHistory.vue';
import EducationIcon from '@/components/icons/EducationIcon.vue';
import WorkIcon from '@/components/icons/WorkIcon.vue';
import ProjectIcon from '@/components/icons/ProjectIcon.vue';
import ContactIcon from '@/components/icons/ContactIcon.vue';
</script>

<template>
  <div class="baseGrid__container">
    <base-card class="baseGrid__intro">
      <template #title><the-logo /></template>
      <template #content><the-intro /></template>
    </base-card>
    <base-card class="baseGrid__projects">
      <template #icon><project-icon /></template>
      <template #title>Projects</template>
      <template #content><project-carousel /></template>
    </base-card>
    <base-card class="baseGrid__contactDetails">
      <template #icon><contact-icon /></template>
      <template #title>Let's connect!</template>
      <template #content><contact-details /></template>
    </base-card>
    <base-card class="baseGrid__workHistory">
      <template #icon><work-icon /></template>
      <template #title>Work Experience</template>
      <template #content>
        <work-history />
      </template>
    </base-card>
    <base-card class="baseGrid__education">
      <template #icon><education-icon /></template>
      <template #title>Education</template>
      <template #content><education-history /></template>
    </base-card>
  </div>
</template>
<style lang="scss" scoped>
.baseGrid__container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.baseGrid__contactDetails {
  order: 5;
}

@media only screen and (min-width: 768px) {
  .baseGrid__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .baseGrid__intro {
    grid-row: 1 / 3;

  }

  .baseGrid__contactDetails {
    grid-row: 3 / 4;
  }

  .baseGrid__projects {
    grid-column: 2 / 5;
    grid-row: 1 / 4;
  }

  .baseGrid__workHistory {
    grid-column: 1 / 5;

  }

  .baseGrid__education {
    grid-column: 1 / 5;
  }
}
</style>