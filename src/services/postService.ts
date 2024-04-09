import { supabase } from "../supabase/supabaseClient";

const PostService = {
  getAllPosts: async () => {
    return await await supabase.from("posts").select("*");
  },
};

export default PostService;
