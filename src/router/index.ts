import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import PostList from "../components/Posts/PostList.vue";
import SignIn from "../components/SignIn/SignIn.vue";
import Home from "../components/Home/Home.vue";
import Profile from "../components/Profile/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: SignIn, name: "signin" },
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "profile/:id", component: Profile, name: "profile" },
      { path: "", component: PostList, name: "posts" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
