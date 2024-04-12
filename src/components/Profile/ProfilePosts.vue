<script setup lang="ts">
import { ref } from "vue";
import { usePostsStore } from "../../stores/modules/posts";
import Post from "../Posts/Post.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const postsStore = usePostsStore();

const currentUserPosts = ref(
  postsStore.posts?.filter((p) => p.users.id === Number(route.params.id))
);
</script>

<template>
  <div class="col-start-2">
    <div v-for="post in currentUserPosts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
