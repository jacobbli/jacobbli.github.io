import { createRouter, createWebHashHistory } from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
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
    component: ResumeView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactDetailsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
