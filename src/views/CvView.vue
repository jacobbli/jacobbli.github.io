<template>
  <div class="cvView__container">
    <div class="cvView__workExperience">
      <div class="cvView__header">Work history</div>
      <work-history :work-history="cv.work_history" />
    </div>
    <div class="cvView__education">
      <div class="cvView__header">Education</div>

      <education-list :education-list="cv.education" />
    </div>
  </div>
</template>

<script setup>
import WorkHistory from "@/components/WorkHistory.vue";
import EducationList from "@/components/EducationList.vue";
import cv from "../data/cv.json";
</script>

<style lang="scss" scoped>
.cvView__container {
  display: flex;
  flex-direction: column;
  gap: 40px;

  .cvView__header {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 8px;
  }
}
</style>
