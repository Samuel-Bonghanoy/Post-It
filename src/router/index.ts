import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import PostList from "../components/Posts/PostList.vue";
import SignIn from "../components/SignIn/SignIn.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: PostList, name: "home" },
  { path: "/signin", component: SignIn, name: "signin" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
