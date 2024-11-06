<template>
  <div class="baseGallery__container">
    <slot></slot>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";

// defineProps({
//   galleryItems: {
//     type: Object,
//     required: true,
//   },
// });
</script>

<style lang="scss" scoped>
.baseGallery__container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;  
}
</style>
