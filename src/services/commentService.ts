import { supabase } from "../supabase/supabaseClient";

const CommentService = {
  getPostAndComments: async (post_id: number) => {
    const comments = await supabase
      .from("comments")
      .select(
        `  
      body,
      created_at,
      posts (id, title, body,created_at)
      users ( id, username, profile_pic_url )
    `
      )
      .eq("post_id", post_id)
      .order("id", { ascending: false });

    return comments;
  },
  createComment: async (body: string, user_id: number, post_id: number) => {
    await supabase.from("comments").insert([{ body, user_id, post_id }]);

    return await supabase
      .from("comments")
      .select(
        `  
    body,
    created_at,
    users ( id, username, profile_pic_url )
  `
      )
      .eq("post_id", post_id)
      .order("id", { ascending: false });
  },
};

export default CommentService;
