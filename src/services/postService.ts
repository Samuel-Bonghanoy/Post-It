import { supabase } from "../supabase/supabaseClient";

const PostService = {
  getAllPosts: async () => {
    const posts = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });

    return posts;
  },
  createPost: async (body: string, title: string) => {
    await supabase.from("posts").insert([{ body, title, user_id: 2 }]);

    return await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });
  },
};

export default PostService;
