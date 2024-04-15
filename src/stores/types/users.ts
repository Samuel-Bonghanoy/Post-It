import FollowInterface from "../../types/interfaces/follows";
import PostLikeInterface from "../../types/interfaces/post-likes";
import type UserInterface from "../../types/interfaces/users";

export type UsersState = {
  users: UserInterface[] | null;
  currentUser: UserInterface | null;
  currentUserFollowing: FollowInterface[] | null;
  likedPosts: PostLikeInterface[] | null;
  viewedUser: UserInterface | null;
  viewedUserFollows: FollowInterface[] | null;
  viewedUserFollowing: FollowInterface[] | null;
};
