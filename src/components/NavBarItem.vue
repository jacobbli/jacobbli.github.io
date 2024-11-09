<template>
  <div class="navBarItem__container">
    <base-link :is-selected="isSelected" @click="routeTo(target)" :class="isSelectedClass" :label="label">
      <template #icon>
        <component :is="iconMap[target]" />
      </template>
    </base-link>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import ResumeIcon from "./icons/CvIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import LightbulbIcon from "./icons/LightbulbIcon.vue";
import BaseLink from "./BaseLink.vue";
import router from "@/router/router";

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
  props.isSelected ? "navBarItem__isSelected" : ""
);

const iconMap = {
  "/": HomeIcon,
  "resume": ResumeIcon,
  "projects": LightbulbIcon,
  "contact": ContactIcon
}

function routeTo(target) {
  router.push(target)
}

</script>

<style lang="scss" scoped>

</style>
