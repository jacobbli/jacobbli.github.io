<template>
  <div class="contactInfo__container">
    <base-list-item
      v-for="item in contactInfo"
      :key="item.content"
      :content="item.label"
      :url="item.prefix + item.content"
      :title="item.prefix + item.content"
    >
      <template #icon><component :is="item.component" /></template>
    </base-list-item>
  </div>
</template>

<script setup>
import { onMounted, shallowRef } from "vue";
import contactInformation from "../data/contact_information.json";
import BaseListItem from "./BaseListItem.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";

const contactInfo = shallowRef(null);

onMounted(() => {
  const iconMap = {
    github: GithubIcon,
    email: EmailIcon,
    linkedin: LinkedinIcon,
  };

  contactInfo.value = contactInformation.data.map((currentInfo) => {
    return {
      ...currentInfo,
      component: iconMap[currentInfo.label.toLowerCase()],
    };
  });
});
</script>

<style lang="scss" scoped>
.contactInfo__container {
  display: flex;
  flex-direction: column;

  gap: 8px;
}
</style>
