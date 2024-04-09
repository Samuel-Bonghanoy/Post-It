import { supabase } from "../supabase/supabaseClient";

const PostService = {
  getAllPosts: async () => {
    const posts = await supabase.from("posts").select("*");

    return posts;
  },
  createPost: async () => {
    return await supabase
      .from("posts")
      .insert([{ body: "someValue", title: "otherValue", user_id: "1" }])
      .select();
  },
};

export default PostService;
