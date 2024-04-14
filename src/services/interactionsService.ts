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
  getUserLikes: async (user_id: number) => {
    const likes = await supabase
      .from("post_likes")
      .select(
        `  
      id,
      users ( id, username, profile_pic_url )
    `
      )
      .eq("user_id", user_id);

    return likes;
  },
  likePost: async (user_id: number, post_id: number) => {
    try {
      await supabase.from("postlikes").insert([{ post_id, user_id }]);
    } catch (err) {
      console.log(err);
    }

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
