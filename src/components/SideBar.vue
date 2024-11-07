<template>
  <div class="sideMenu__content">
    <base-hyperlink v-for="(option, index) in options" :key="option" @click="onSelect(index)"
      :is-selected="selectedIndex == index">
      {{ option }}
    </base-hyperlink >
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BaseHyperlink from './BaseHyperlink.vue';

defineProps({
  options: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    required: true
  },
  onSelect: {
    type: Function,
    required: false
  }
});

</script>
<style lang="scss" scoped>
.sideMenu__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
