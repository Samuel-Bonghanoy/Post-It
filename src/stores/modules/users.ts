import { defineStore } from "pinia";
import UserService from "../../services/userService";
import { UsersState } from "../types/users";
import router from "../../router";

export const useUsersStore = defineStore("users", {
  state: (): UsersState => {
    return {
      users: [],
      currentUser: null,
    };
  },

  actions: {
    async login(username: string, password: string) {
      try {
        let user = (await UserService.getUserByUserName(username)).data;

        if (!user) return false;

        if (password !== user[0].password) return false;

        this.currentUser = user[0];

        console.log(user);

        router.push("/home");
      } catch (err) {
        console.log(err);

        return false;
      }
    },
  },
});
