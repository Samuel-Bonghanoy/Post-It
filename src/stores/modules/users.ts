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

        if (!user) return console.error("Invalid user");

        if (password !== user[0].password) console.error("Wrong password");

        this.currentUser = user[0];

        localStorage.setItem("user", JSON.stringify(this.currentUser));

        router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },
    checkSession() {
      if (localStorage.getItem("user") !== null) {
        this.currentUser = JSON.parse(localStorage.getItem("user") as string);

        router.push("/home");
      }
    },
    logout() {
      this.currentUser = null;

      localStorage.removeItem("user");

      router.push("/");
    },
  },
});
