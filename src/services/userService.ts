import { supabase } from "../supabase/supabaseClient";

const UserService = {
  getAllUsers: async () => {
    const posts = await supabase.from("posts").select("*");

    return posts;
  },
  getUserByUserName: async (username: string) => {
    return await supabase.from("users").select("*").eq("username", username);
  },
};

export default UserService;
