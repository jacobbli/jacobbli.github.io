import { createRouter, createWebHashHistory } from "vue-router";
import SkillsView from "../views/SkillsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import CvView from "../views/CvView.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";

const routes = [
  {
    path: "/",
    redirect: "/skills",
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/cv",
    name: "Cv",
    component: CvView,
  },
  {
    path: "/contact",
    name: "ContactDetails",
    component: ContactDetailsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
