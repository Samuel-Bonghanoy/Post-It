<script setup lang="ts">
import Post from "./Post.vue";
import { usePostsStore } from "../../stores/modules/posts";

const posts = usePostsStore();

const testposts = posts.initializePosts();
console.log(testposts);
</script>

<template>
  <section class="flex flex-col gap-4">
    <Post />
    <Post />
    <Post />
    <Post />
  </section>
</template>
