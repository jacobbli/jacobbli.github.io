<template>
  <div class="routerItem__container">
    <router-link :to="target" :class="isSelectedClass"
      ><slot></slot
    ></router-link>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

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

const isSelectedClass = computed(() =>
  props.isSelected ? "routerItem__isSelected" : ""
);
</script>

<style lang="scss" scoped>
.routerItem__container a {
  display: flex;
  gap: 4px;
  text-decoration: none;
}

.routerItem__isSelected {
  font-weight: bold;
}

</style>
