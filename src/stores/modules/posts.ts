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
      try {
        this.posts = (await PostService.getAllPosts()).data;
      } catch (err) {
        console.log(err);
      }
    },

    async createPost(body: string, title: string) {
      await PostService.createPost(body, title);
    },
  },
});
