<template>
  <div class="theHeader__container">
    <div class="theHeader__title">Hi! I'm
      <div class="theHeader__name">Jacob</div>
    </div>
    <nav-bar :is-mobile="isMobile"/>

    <div v-if="!isMobile" class="theHeader__contactInfo">
      <div v-for="item in contactInfo" :key="item.content">
        <base-link :label="item.content" @click="navigateTo(item.href)" :icon="item.type" :is-primary-color="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import NavBar from "./NavBar.vue";
import BaseLink from "@/components/BaseLink.vue";

import { getContactInfo } from "@/api/api";

defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

const contactInfo = ref([])

onMounted(async () => {
  contactInfo.value = await getContactInfo()
})
</script>
<style lang="scss" scoped>
.theHeader__container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .theHeader__title {
    font-size: 20px;
    color: var(--primary-font-color);
    font-family: var(--header-font);
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  .theHeader__name {
    background-color: var(--secondary-color);
    color: var(--highlight-color);
    font-weight: bold;
    font-size: 36px;

    border-radius: 10px;
    padding: 4px 8px;

    filter: drop-shadow(0px 0px 2px #8bc7a9);
  }
}

@media only screen and (min-width: 768px) {
  .theHeader__container {
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: initial;
    align-items: flex-start;

    .theHeader__title {
      display:block;
      text-align: center;
    }

    .theHeader__contactInfo {
      display: flex;
      flex-direction: column;
      gap: 4px
    }
  }
}
</style>
