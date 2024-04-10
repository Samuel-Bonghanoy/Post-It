import { defineStore } from "pinia";
import UserService from "../../services/userService";
import { UsersState } from "../types/users";

export const usePostsStore = defineStore("posts", {
  state: (): UsersState => {
    return {
      users: [],
      currentUser: null,
    };
  },

  actions: {
    async login(username: string) {
      try {
        let user = await UserService.getUserByUserName(username);

        if (!user) console.error("Not a valid account");

        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
