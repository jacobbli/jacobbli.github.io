<script setup>
import ProjectItem from "./ProjectItem.vue";

const projects = [{
  "label": "Car Share Trip Calculator",
  "github": "https://github.com/jacobbli/trip-cost-calculator-app",
  "app": "https://www.jacobli.ca/trip-cost-calculator-app",
  "image": "./assets/trip-cost-calculator.png",
  "description": 'A web app for calculating the cost of a trip using a certain car share service.',
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
  <div class="projectList__container">
    <project-item v-for="project in projects" :key="project.label" :project="project" />
  </div>
</template>

<style lang="scss" scoped>
.projectList__container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
