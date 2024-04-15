import { defineStore } from "pinia";
import UserService from "../../services/userService";
import { UsersState } from "../types/users";
import router from "../../router";
import InteractionService from "../../services/interactionsService";

export const useUsersStore = defineStore("users", {
  state: (): UsersState => {
    return {
      users: [],
      currentUser: null,
      currentUserFollowing: null,
      likedPosts: null,
      viewedUser: null,
      viewedUserFollowing: null,
      viewedUserFollows: null,
    };
  },

  actions: {
    async login(username: string, password: string) {
      try {
        let user = (await UserService.getUserByUserName(username)).data;

        if (!user) return console.error("Invalid user");

        if (password !== user[0].password) console.error("Wrong password");

        this.currentUser = user[0];

        localStorage.setItem("user", JSON.stringify(this.currentUser));

        this.likedPosts = (
          await InteractionService.getUserLikes(this.currentUser?.id as number)
        ).data;

        this.currentUserFollowing = (
          await InteractionService.getUserFollowing(
            this.currentUser?.id as number
          )
        ).data;

        router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },
    async checkSession() {
      if (localStorage.getItem("user") !== null) {
        this.currentUser = JSON.parse(localStorage.getItem("user") as string);

        this.likedPosts = (
          await InteractionService.getUserLikes(this.currentUser?.id as number)
        ).data;

        this.currentUserFollowing = (
          await InteractionService.getUserFollowing(
            this.currentUser?.id as number
          )
        ).data;

        router.push("/home");
      }
    },
    logout() {
      this.currentUser = null;

      localStorage.removeItem("user");

      router.push("/");
    },
    async getUserById(id: number) {
      let user = (await UserService.getUserById(id)).data;

      if (!user) return console.error("Invalid user");

      this.viewedUser = user[0];

      this.viewedUserFollowing = (
        await InteractionService.getUserFollowing(id)
      ).data;
    },
    async likePost(user_id: number, post_id: number) {
      this.likedPosts = (
        await InteractionService.likePost(user_id, post_id)
      ).data;
    },

    async dislikePost(user_id: number, post_id: number) {
      this.likedPosts = (
        await InteractionService.dislikePost(user_id, post_id)
      ).data;
    },

    async followUser(following_user_id: number, followed_user_id: number) {
      this.viewedUserFollows = (
        await InteractionService.followUser(following_user_id, followed_user_id)
      ).data;

      this.currentUserFollowing = (
        await InteractionService.getUserFollowing(following_user_id)
      ).data;
    },

    async unfollowUser(following_user_id: number, followed_user_id: number) {
      this.viewedUserFollows = (
        await InteractionService.unfollowUser(
          following_user_id,
          followed_user_id
        )
      ).data;

      this.currentUserFollowing = (
        await InteractionService.getUserFollowing(following_user_id)
      ).data;
    },
  },
});
