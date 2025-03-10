<template>
  <div class="baseCard__container">
    <div class="baseCard__header">
      <slot name="icon"></slot>
      <h2>
        <slot name="title"></slot>
      </h2>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: ""
  },
});
</script>

<style lang="scss" scoped>
.baseCard__container {
  width: 100%;
  height: 100%;
  padding: 20px 24px 44px 24px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 10px;
  background-color: var(--background-colour);
  filter: drop-shadow(0px 0px 2px var(--accent-colour));
  overflow: auto;

}

.baseCard__header {
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  color: var(--heading-colour);
  font-weight: bold;
}
</style>
