<template>
  <div class="contactDetailsToggle__container" :class="toggleClass">
    <div class="contactDetailsToggle__content">
      <contact-icon v-if="!isVisible" />
      <close-icon v-else />
    </div>
  </div>

</template>
<script setup>
import { defineProps, computed } from 'vue';
import ContactIcon from "../icons/ContactIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const toggleClass = computed(() => props.isVisible ? "contactDetailsToggle__content__visible" : "contactDetailsToggle__content__hidden")

</script>

<style lang="scss">
.contactDetailsToggle__content {
  width: 50px;
  height: 50px;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-color);
  fill: var(--secondary-color);

  cursor: pointer;
}

.contactDetailsToggle__content__visible {
  filter: none
}

.contactDetailsToggle__content__hidden {
  filter: drop-shadow(0px 0px 4px rgb(0, 0, 0));
}
</style>