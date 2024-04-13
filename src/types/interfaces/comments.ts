import type UserInterface from "./users";

interface CommentInterface {
  id: number;
  body: string;
  created_at: Date;
  users: UserInterface[];
}

export default CommentInterface;
