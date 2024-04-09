import { defineStore } from "pinia";
import PostService from "../services/postService";

export const usePostsStore = defineStore("posts", {
  state: () => {
    return {
      posts: [],
    };
  },

  actions: {},
});
