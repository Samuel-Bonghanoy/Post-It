<script setup lang="ts">
import Post from "./Post.vue";
import { usePostsStore } from "../../stores/modules/posts";

const postsStore = usePostsStore();

await postsStore.initializePosts();
</script>

<template>
  <section class="flex flex-col gap-4">
    <div v-for="post in postsStore.posts" :key="post.id">
      <Post v-if="post" :post="post" />
    </div>
  </section>
</template>
