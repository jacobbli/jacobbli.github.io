<template>
  <div class="resumeView__container">
    <side-bar :options="options.map(option => option.label)" :onSelect="selectOption" :selected-index="selectedIndex" />
    <div class=resumeView__content>
      <component :is="options[selectedIndex]['component']" />
    </div>
  </div>
</template>

<script setup>
import WorkHistory from "@/components/resume/WorkHistory.vue";
import EducationList from "@/components/resume/EducationHistory.vue";
import SkillsSection from "@/components/resume/SkillsSection.vue";
import SideBar from "@/components/SideBar.vue";
import { ref } from "vue";

const options = [
  {
    label: "Skills",
    component: SkillsSection
  },
  {
    label: "Employment",
    component: WorkHistory
  },
  {
    label: "Education",
    component: EducationList
  }
]

const selectedIndex = ref(0)

function selectOption(index) {
  selectedIndex.value = index
}

</script>

<style lang="scss" scoped>
.resumeView__container {
  display: grid;
  grid-template-columns: 200px 1fr;
  // flex-direction: row;
  // gap: 80px;
}
</style>
