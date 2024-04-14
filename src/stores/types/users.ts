import PostLikeInterface from "../../types/interfaces/post-likes";
import type UserInterface from "../../types/interfaces/users";

export type UsersState = {
  users: UserInterface[] | null;
  currentUser: UserInterface | null;
  viewedUser: UserInterface | null;
  likedPosts: PostLikeInterface[] | null;
};
