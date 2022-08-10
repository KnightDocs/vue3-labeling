import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
