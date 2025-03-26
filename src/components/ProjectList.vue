<script setup>
import BaseSection from "./base/BaseSection.vue";
import BaseCard from "./base/BaseCard.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import WebAssetIcon from "@/components/icons/WebAssetIcon.vue";


const projects = [{
  "label": "Car Share Trip Calculator",
  "github": "https://github.com/jacobbli/trip-cost-calculator-app",
  "app": "https://www.jacobli.ca/trip-cost-calculator-app",
  "image": "./assets/trip-cost-calculator.png",
  "description": 'A web app for calculating the cost of a trip using a certain car share service. Made for work using Vue.',
  "skills": [
    {
      "category": "Languages",
      "skills": ["javascript", "html", "css"]
    },
    {
      "category": "Frameworks",
      "skills": ["vue"]
    }
  ]
},
{
  "label": "Accident Report Form",
  "github": "https://github.com/jacobbli/accident-report-form",
  "app": "",
  "image": "./assets/accident-form.png",
  "description": 'A form we used at one of my previous jobs to record information regarding car accidents. I used some simple VBA scripts to "automate" it and make it easier to perform some common modifications, such as adding fields for additional vehicles. It\'s not pretty, but it works!',
  "skills": [
    {
      "category": "Languages",
      "skills": ["vba"]
    },
    {
      "category": "Software",
      "skills": ["excel"]
    }
  ]
},
{
  "label": "Freshly Produce",
  "github": "https://github.com/jacobbli/freshly-produce",
  "app": "",
  "image": "./assets/freshly-produce.gif",
  "description": "My team's entry for the 2021 Township of Langley Codathon. Freshly Produce allows consumers to subscribe to produce from local farms, providing local farmers with a consistent source of income and allowing consumers to support local businesses. We managed to snatch 3rd place!",
  "skills": [
    {
      "category": "Languages",
      "skills": ["javascript", "html", "css"]
    },
    {
      "category": "Frameworks",
      "skills": ["vue", "express"]
    },
    {
      "category": "database",
      "skills": ["postgresql"]
    }
  ]
}]

</script>
<template>
  <base-section title="Projects">
    <div class="projectList__content">
      <base-card v-for="project in projects" :key="project.label" :has-image="true">
        <template #image>
          <img :src="project.image">
        </template>
        <template #content>
          <div class="projectItem__content">
            <h3>{{ project.label }}</h3>
            <p>{{ project.description }}</p>
            <div class="projectItem__links">
              <base-link v-if="project.github != ''" label="Github repo" icon="Github" :target="project.github">
                <template #icon><github-icon /></template>
              </base-link>
              <base-link v-if="project.app != ''" label="App" icon="App" :target="project.app">
                <template #icon><web-asset-icon /></template>
              </base-link>
            </div>
          </div>
        </template>
      </base-card>
    </div>
  </base-section>
</template>

<style lang="scss" scoped>
.projectList__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.projectItem__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projectItem__links {
  display: flex;
  flex-direction: row;
  gap: 8px;
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  // aspect-ratio: 4 / 3;
  // border: 1px solid rgb(221, 221, 221);

}

@media only screen and (min-width: 768px) {}
</style>
