<template>
  <div class="baseGallery__container">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.baseGallery__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

</style>
