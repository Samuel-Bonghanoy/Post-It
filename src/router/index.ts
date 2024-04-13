import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import AllPosts from "../components/Posts/AllPosts.vue";
import SignIn from "../components/SignIn/SignIn.vue";
import Home from "../components/Home/Home.vue";
import Profile from "../components/Profile/Profile.vue";
import SuspensePWC from "../components/Posts/SuspensePWC.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: SignIn, name: "signin" },
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "", component: AllPosts, name: "posts" },
      { path: "profile/:id", component: Profile, name: "profile" },
      { path: "posts/:id", component: SuspensePWC, name: "post" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
