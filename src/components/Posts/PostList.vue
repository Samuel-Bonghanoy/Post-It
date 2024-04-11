<script setup lang="ts">
import Post from "./Post.vue";
import { usePostsStore } from "../../stores/modules/posts";
import Header from "../UI/Header.vue";

const postsStore = usePostsStore();

postsStore.initializePosts();
</script>

<template>
  <Header />
  <section class="flex flex-col gap-4">
    <div v-for="post in postsStore.posts" :key="post.id">
      <Post :post="post" />
    </div>
  </section>
</template>
