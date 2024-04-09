import { defineStore } from "pinia";
import PostService from "../../services/postService";
import { PostsState } from "../types/posts";

export const usePostsStore = defineStore("posts", {
  state: (): PostsState => {
    return {
      posts: [],
    };
  },

  actions: {
    async initializePosts() {
      let testposts;
      try {
        testposts = await PostService.getAllPosts();
      } catch (err) {
        console.log(err);
      }
      return testposts;
    },
  },
});
