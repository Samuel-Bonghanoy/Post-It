import CommentInterface from "../../types/interfaces/comments";
import type PostsInterface from "../../types/interfaces/posts";

export type PostsState = {
  posts: PostsInterface[] | null;
  viewedPost: PostsInterface | null;
  comments: CommentInterface[] | null;
};
