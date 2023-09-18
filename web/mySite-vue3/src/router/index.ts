/** @format */

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: import("@/Home.vue"),
      children: [
        {
          path: "/home/home1",
          component: import("@/Home1.vue"),
        },
      ],
    },
  ],
});

export default router;
