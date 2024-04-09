import type UserInterface from "./users";

interface PostsInterface {
  id: number;
  content: string;
  user: UserInterface;
}

export default PostsInterface;
