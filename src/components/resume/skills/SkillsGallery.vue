<template>
  <base-gallery>
    <skill-card v-for="skill in skills" :key="skill.label" :skill="skill" />
  </base-gallery>
</template>

<script setup>
import { defineProps } from "vue";
import SkillCard from "./SkillCard.vue";
import BaseGallery from "@/components/BaseGallery.vue";

defineProps({
  skills: {
    type: Object,
    required: true,
  },
});

const skills = [
  {
    "label": "Languages",
    "technologies": [
      { "label": "Python", "color": "#1781b5" },
      { "label": "JavaScript", "color": "#e7eb1e" },
      { "label": "HTML", "color": "#ffa500" },
      { "label": "CSS", "color": "#1781b5" },
      { "label": "SQL", "color": "#949494" }
    ]
  },
  {
    "label": "Databases",
    "technologies": [{ "label": "PostgreSQL", "color": "#1781b5" }]
  },
  {
    "label": "Operating Systems",
    "technologies": [
      { "label": "Windows", "color": "#1781b5" },
      { "label": "Linux", "color": "#949494" }
    ]
  },
  {
    "label": "Project Management Tools",
    "technologies": [
      { "label": "Jira", "color": "#1781b5" },
      { "label": "Confluence", "color": "#1781b5" },
      { "label": "SharePoint", "color": "#2dc219" }
    ]
  },
  {
    "label": "Automation",
    "technologies": [
      { "label": "Power Automate", "color": "#1781b5" }
    ]
  },
  {
    "label": "Other Tools",
    "technologies": [
      { "label": "Lansweeper", "color": "#ffa500" },
      { "label": "Git", "color": "#ffa500" },
      { "label": "Microsoft Office", "color": "#ffa500" },
      { "label": "Active Directory", "color": "#949494" }
    ]
  }
]
</script>