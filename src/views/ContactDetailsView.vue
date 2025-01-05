<template>
  <div class="contactDetailsView__container">
    <div class="contactDetailsView__content">
      <div v-for="item in contactInfo" :key="item.content">
        <base-link :label="item.content" @click="navigateTo(item.href)" :icon="item.type" :is-primary-color="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import BaseLink from "@/components/BaseLink.vue";

import { getContactInfo } from "@/api/api";

const contactInfo = ref([])

onMounted(async () => {
  contactInfo.value = await getContactInfo()
})

function navigateTo(url) {
  const target = url.includes("mailto") ? "_self" : "_blank"
  window.open(url, target)
}
</script>

<style lang="scss" scoped>
.contactDetailsView__container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px;

  .contactDetailsView__content {
    height: fit-content;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-radius: 25px;
    text-align: center;

  }
}
</style>
