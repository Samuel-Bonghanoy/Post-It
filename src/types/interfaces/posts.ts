import type UserInterface from "./users";

interface PostsInterface {
  id: number;
  body: string;
  title: string;
  created_at: Date;
  users: UserInterface[];
}

export default PostsInterface;
