<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  hasImage: {
    type: Boolean,
    default: false
  }
});

const baseCardClass = computed(() => props.hasImage ? 'grid' : '')

</script>

<template>
  <div class="baseCard__container" :class="baseCardClass">
    <div class="baseCard__image">
      <slot name="image"></slot>
    </div>
    <div class="baseCard__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 4rem;
  align-items: center;

}

.baseCard__container {
  
  .baseCard__image {
    width: 90%;
    aspect-ratio: 1 / 1;
  }
  .baseCard__image:empty {
    display: none
  }
}

@media only screen and (min-width: 768px) {}
</style>
