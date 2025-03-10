<script setup>
import { ref, defineProps } from "vue";
import BaseStep from "./BaseStep.vue";
import LeftChevronIcon from "../icons/LeftChevronIcon.vue";
import RightChevronIcon from "../icons/RightChevronIcon.vue";

const props = defineProps({
  nItems: {
    type: Number,
    required: true
  }
})

const leftDisplacement = ref(0)
const currentIndex = ref(0)

function scrollRight() {
  currentIndex.value = (currentIndex.value + 1) % props.nItems
  leftDisplacement.value = - (currentIndex.value * 100)
}

function scrollLeft() {
  if (currentIndex.value == 0) {
    currentIndex.value = props.nItems - 1
  } else {
    currentIndex.value = (currentIndex.value - 1) % props.nItems
  }
  leftDisplacement.value = - (currentIndex.value * 100)
}


</script>
<template>
  <div class="baseCarousel__container">
    <div class="baseCarousel__overlay">
      <div class="baseCarousel__arrowContainer" @click="scrollLeft">
        <div class="baseCarousel__leftArrow baseCarousel__arrow"><left-chevron-icon /></div>
      </div>
      <div class="baseCarousel__screen">
        <div class="baseCarousel__carousel" :style="{ left: leftDisplacement + '%' }">
          <slot></slot>
        </div>
      </div>
      <div class="baseCarousel__arrowContainer" @click="scrollRight">
        <div class="baseCarousel__rightArrow baseCarousel__arrow"><right-chevron-icon /></div>
      </div>
    </div>
    <div class="baseCarousel__progressBar">
      <div v-for="(item, index) in nItems" :key="item">
        <div><base-step :is-selected="index == currentIndex" /></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.baseCarousel__container {
  position: relative;
  height: 100%;
  padding: 4px;
}

.baseCarousel__overlay {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
}

.baseCarousel__arrowContainer {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 2px black;
  color: var(--button-text-colour);
  background-color: var(--button-background-colour);

  z-index: 99;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--button-hover-background-colour);
    color: var(--button-hover-text-colour);
  }
}

.baseCarousel__screen {
  height: 100%;
  margin: 0 24px;
  overflow: hidden;
}

.baseCarousel__carousel {
  position: relative;
  width: calc(100% * 3);
  height: 100%;

  display: flex;
  gap: 8px;

  transition: left 2s;
}
.baseCarousel__progressBar {
  width: 100%;

  display: flex;
  justify-content: center;
}
</style>