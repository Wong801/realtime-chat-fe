import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/room/:id",
      name: "room",
      component: () => import("../views/RoomView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "room" && !to.params.user) {
    return next({ name: "home" });
  }
  return next();
});

router.afterEach((to) => {
  if (to.name === "room") {
    nextTick(() => {
      document.title = `Chat App - ${to.params.id}`;
    });
  }
});

export default router;
