import { supabase } from "../supabase/supabaseClient";

const UserService = {
  getAllUsers: async () => {
    const posts = await supabase.from("posts").select("*");

    return posts;
  },
  getUserByUserName: async (username: string) => {
    let { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("name", username);

    return user;
  },
};

export default UserService;
