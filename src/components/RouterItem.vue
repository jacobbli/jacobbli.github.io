<template>
  <div class="routerItem__container">
    <router-link :to="target" :class="[isSelectedClass, colorThemeClass]"
      ><slot></slot
    ></router-link>
  </div>
</template>

<script setup>
import { defineProps, computed, inject } from "vue";

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});

const isDarkMode = inject("isDarkMode");

const isSelectedClass = computed(() =>
  props.isSelected ? "routerItem__isSelected" : ""
);

const colorThemeClass = computed(() =>
  isDarkMode.value ? "routerItem__darkMode" : "routerItem__lightMode"
);
</script>

<style lang="scss" scoped>
.routerItem__container a {
  display: flex;
  gap: 8px;
}

.routerItem__isSelected {
  font-weight: bold;
  pointer-events: none;
}

.routerItem__lightMode {
  color: #258f2e;
}

.routerItem__darkMode {
  color: #e6e6e6;
}
</style>
