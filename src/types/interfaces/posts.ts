import type UserInterface from "./users";

interface PostsInterface {
  id: number;
  body: string;
  title: string;
  user: UserInterface;
  created_at: Date;
  users: UserInterface[];
}

export default PostsInterface;
