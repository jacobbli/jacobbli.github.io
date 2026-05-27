<script setup>
import BaseLink from "@/components/base/BaseLink.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
// import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";

const contactInfo = [{
  content: "dev@jakehub.ca",
  href: "mailto:dev@jakehub.ca",
  type: "Email",
  icon: EmailIcon
},
{
  content: "jacobbli",
  href: "https://github.com/jacobbli",
  type: "Github",
  icon: GithubIcon

},
// {
//   content: "jacobbli",
//   href: "https://linkedin.com/in/jacobbli/",
//   type: "LinkedIn",
//   icon: LinkedinIcon
// }
]
</script>
<template>
  <div class="contactDetailsView__content">
    <div v-for="item in contactInfo" :key="item.content">
      <base-link :target="item.href" :icon="item.type" :label="item.content">
        <template #icon>
          <component :is="item.icon" />
        </template>
      </base-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contactDetailsView__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
