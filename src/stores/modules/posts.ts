import { defineStore } from "pinia";
import PostService from "../../services/postService";
import CommentService from "../../services/commentService";
import { PostsState } from "../types/posts";

export const usePostsStore = defineStore("posts", {
  state: (): PostsState => {
    return {
      posts: [],
      viewedPost: null,
      comments: [],
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

    async createPost(body: string, title: string, user_id: number) {
      this.posts = (await PostService.createPost(body, title, user_id)).data;
    },

    async getPostById(post_id: number) {
      this.viewedPost = (await PostService.getPostById(post_id)).data[0];

      this.comments = (await CommentService.getPostComments(post_id)).data;
    },
  },
});
