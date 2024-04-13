import PostsInterface from "./posts";
import type UserInterface from "./users";

interface CommentInterface {
  id: number;
  body: string;
  created_at: Date;
  users: UserInterface[];
  posts: PostsInterface[];
}

export default CommentInterface;
