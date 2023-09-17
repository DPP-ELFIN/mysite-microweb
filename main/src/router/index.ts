import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/vue3",
      component: () => import("@/components/vue3.vue"),
    },
    {
      path: "/react",
      component: () => import("@/components/react.vue"),
    },
  ],
});

export default router;
