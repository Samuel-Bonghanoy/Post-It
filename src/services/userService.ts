import { supabase } from "../supabase/supabaseClient";

const UserService = {
  getAllUsers: async () => {
    const users = await supabase.from("users").select("*");

    return users;
  },
  getUserByUserName: async (username: string) => {
    return await supabase.from("users").select("*").eq("username", username);
  },
  getUserById: async (id: number) => {
    return await supabase.from("users").select("*").eq("id", id);
  },
};

export default UserService;
