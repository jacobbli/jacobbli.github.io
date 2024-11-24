import { createRouter, createWebHistory } from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import SkillsSection from "@/components/resume/SkillsSection.vue";
import WorkHistory from "@/components/resume/WorkHistory.vue";
import EducationHistory from "@/components/resume/EducationHistory.vue";

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: "/home",
    name: "Home",
    component: HomeView
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumeView,
    children: [
      {
        path: "skills",
        name: "Skills",
        component: SkillsSection,
      },  {
        path: "employment",
        name: "Employment",
        component: WorkHistory,
      },  {
        path: "education",
        name: "Education",
        component: EducationHistory,
      },
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
