import { supabase } from "../supabase/supabaseClient";

const PostService = {
  getAllPosts: async () => {
    const posts = await supabase
      .from("posts")
      .select(
        `
      id, 
      title, 
      body,
      created_at,
      users ( id, username, profile_pic_url )
    `
      )
      .order("id", { ascending: false });

    return posts;
  },
  getPostById: async (post_id: number) => {
    const post = await supabase
      .from("posts")
      .select(
        `
      id, 
      title, 
      body,
      created_at,
      users ( id, username, profile_pic_url )
    `
      )
      .eq("id", post_id)
      .order("id", { ascending: false });

    return post;
  },
  createPost: async (body: string, title: string, user_id: number) => {
    await supabase.from("posts").insert([{ body, title, user_id }]);

    return await supabase
      .from("posts")
      .select(
        `
    id, 
    title, 
    body,
    created_at,
    users ( id, username, profile_pic_url )
  `
      )
      .order("id", { ascending: false });
  },
};

export default PostService;
