import { supabase } from "../supabase/supabaseClient";

const PostService = {
  getAllPosts: async () => {
    const posts = await supabase.from("posts").select("*");

    return posts;
  },
  createPost: async (body: string, title: string) => {
    await supabase.from("posts").insert([{ body, title, user_id: "1" }]);

    return await supabase.from("posts").select("*");
  },
};

export default PostService;
