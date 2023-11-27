<template>
  <div class="contactDetailsView__container">
    <base-list-item
      v-for="item in contactInfo"
      :key="item.content"
      :content="item.content"
      :url="item.prefix + item.content"
      :title="item.prefix + item.content"
    >
      <template #icon><component :is="item.component" /></template>
      <template #label>{{ item.label }}:</template>
    </base-list-item>
  </div>
</template>

<script setup>
import { onMounted, shallowRef } from "vue";
import contactInformation from "../data/contact_information.json";
import BaseListItem from "../components/BaseListItem.vue";
import EmailIcon from "../components/icons/EmailIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";

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
.contactDetailsView__container {
  display: flex;
  flex-direction: column;

  gap: 20px;
}
</style>
