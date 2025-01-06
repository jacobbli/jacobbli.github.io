<template>
  <div class="baseNavMenu__container" :class="colorClass">
    <internal-link v-for="option in options" :key="option.label" :target="option.target" :label="option.label"
      :is-primary-color="isPrimaryColor" :is-selected="currentPath.includes(option.label.toLowerCase())" />
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import InternalLink from "./InternalLink.vue";
import router from "@/router/router";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },

  isPrimaryColor: {
    type: Boolean,
    default: true
  }
});

const currentPath = computed(() => router.currentRoute.value.path.split('/'))

const colorClass = computed(() => props.isPrimaryColor ? 'baseNavMenu__primary__color' : 'baseNavMenu__secondary__color')

</script>

<style lang="scss" scoped>
.baseNavMenu__secondary__color {
  background-color: var(--primary-color)
}
</style>