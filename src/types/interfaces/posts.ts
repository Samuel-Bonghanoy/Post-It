import type UserInterface from "./users";

interface PostsInterface {
  id: number;
  body: string;
  title: string;
  user: UserInterface;
  createdAt: Date;
}

export default PostsInterface;
