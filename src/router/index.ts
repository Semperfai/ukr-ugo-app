import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import DirectionsPage from "@/pages/DirectionsPage.vue";
import MapPage from "@/pages/MapPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/directions",
    name: "directions",
    component: DirectionsPage,
  },
  {
    path: "/map",
    name: "map",
    component: MapPage,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/AboutApp.vue"),
  },
  {
    path: "/pwa",
    name: "pwa",
    component: () => import("../pages/PWAGuide.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
