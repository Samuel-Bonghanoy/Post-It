import { createMemoryHistory, createRouter } from "vue-router";
import PostList from "../components/Posts/PostList.vue";

const routes = [{ path: "/", component: PostList }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
