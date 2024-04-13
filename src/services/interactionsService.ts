import { supabase } from "../supabase/supabaseClient";

const InteractionService = {
  getPostLikes: async (post_id: number) => {
    const likes = await supabase
      .from("post_likes")
      .select(
        `  
      id,
      users ( id, username, profile_pic_url )
    `
      )
      .eq("post_id", post_id)
      .order("id", { ascending: false });

    return likes;
  },
  likePost: async (user_id: number, post_id: number) => {
    await supabase.from("post_likes").insert([{ user_id, post_id }]);

    return await supabase
      .from("post_likes")
      .select(
        `  
    id,
    users ( id, username, profile_pic_url )
  `
      )
      .eq("post_id", post_id)
      .order("id", { ascending: false });
  },
};

export default InteractionService;
