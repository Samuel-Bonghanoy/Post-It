import type UserInterface from "../../types/interfaces/users";

export type UsersState = {
  users: UserInterface[] | null;
  currentUser: UserInterface | null;
  viewedUser: UserInterface | null;
};
