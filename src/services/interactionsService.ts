import { supabase } from "../supabase/supabaseClient";

const InteractionService = {
  getPostLikes: async (post_id: number) => {
    const likes = await supabase
      .from("postlikes")
      .select(
        `  
      id,
      users ( id, username, profile_pic_url )
    `
      )
      .eq("post_id", post_id);

    return likes;
  },
  getUserLikes: async (user_id: number) => {
    const likes = await supabase
      .from("postlikes")
      .select("*")
      .eq("user_id", user_id);

    return likes;
  },
  likePost: async (user_id: number, post_id: number) => {
    try {
      await supabase.from("postlikes").insert([{ post_id, user_id }]);
    } catch (err) {
      console.log(err);
    }

    return await supabase.from("postlikes").select("*").eq("user_id", user_id);
  },
  dislikePost: async (user_id: number, post_id: number) => {
    try {
      await supabase
        .from("postlikes")
        .delete()
        .eq("post_id", post_id)
        .eq("user_id", user_id);
    } catch (err) {
      console.log(err);
    }

    return await supabase.from("postlikes").select("*").eq("user_id", user_id);
  },
};

export default InteractionService;
