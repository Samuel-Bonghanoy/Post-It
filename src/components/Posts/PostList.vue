<script setup lang="ts">
import Post from "./Post.vue";
import { usePostsStore } from "../../stores/modules/posts";
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

const postsStore = usePostsStore();

const posts = postsStore.posts?.filter(
  (p) =>
    usersStore.currentUserFollowing
      ?.map((u) => u.followed_user_id)
      .includes(p.users.id) || p.users.id === usersStore.currentUser?.id
);

await postsStore.initializePosts();
</script>

<template>
  <section class="flex flex-col gap-4">
    <div v-for="post in postsStore.posts" :key="post.id">
      <Post v-if="post" :post="post" />
    </div>
  </section>
</template>
