<template>
  <div class="navItem__container">
    <router-link :to="target" :class="isSelectedClass">
      <component :is="iconMap[target]" />

      <base-link :is-selected="isSelected">
        {{ label }}
      </base-link>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ResumeIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import LightbulbIcon from "./icons/LightbulbIcon.vue";
import BaseLink from "./BaseLink.vue";

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});

const isSelectedClass = computed(() =>
  props.isSelected ? "navItem__isSelected" : ""
);

const iconMap = {
  "/": HomeIcon,
  "resume": ResumeIcon,
  "projects": LightbulbIcon,
  "contact": ContactIcon
}


</script>

<style lang="scss" scoped>
.navItem__container a {
  display: flex;
  gap: 4px;
  text-decoration: none;
}

.navItem__isSelected {
  font-weight: bold;
}
</style>
