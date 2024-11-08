<template>
  <div class="contactDetailsView__container">
    <div v-for="item in contactInfo" :key="item.content" class="contactDetailsView__content">
      <component :is="item.icon" />
      <a :href="item.href" target="_blank">
        <base-link>
          {{ item.content }}
        </base-link>
      </a>
    </div>
  </div>
</template>

<script setup>
import EmailIcon from "../components/icons/EmailIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import BaseLink from "@/components/BaseLink.vue";

const contactInfo = [
  {
    content: "jacob@jacobli.me",
    href: "mailto:jacob@jacobli.me",
    type: "Email",
    icon: EmailIcon
  },
  {
    content: "github.com/jacobbli",
    href: "https://github.com/jacobbli",
    type: "Github",
    icon: GithubIcon
  },
  {
    content: "linkedin.com/in/jacobbli",
    href: "https://linkedin.com/in/jacobbli/",
    type: "LinkedIn",
    icon: LinkedinIcon
  }
]
</script>

<style lang="scss" scoped>
.contactDetailsView__container {
  display: flex;
  flex-direction: column;

  gap: 20px;

  .contactDetailsView__content {
    display: flex;
    gap: 8px;

    a {
      text-decoration: none;
    }
  }
}
</style>
